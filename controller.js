const mysql = require("mysql2");
const axios = require("axios");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const fs = require("fs")
const SqlString = require("sqlstring");
const url = require("url")
const SocksConnection = require("socksjs");

const remote_options = {
    host: "198.11.211.200",
    port:3306

}
const proxy = url.parse("http://a99318x12gq5pz:jdfbp7fhvha6qpvzlhfmwtyswew@us-east-static-02.quotaguard.com:1080")
const auth = proxy.auth;
const username = auth.split(":")[0];
const pass = auth.split(":")[1];

const sock_options = {
    host: proxy.hostname,
    port:1080,
    user:username,
    pass:pass
};

const sockConn = new SocksConnection(remote_options,sock_options);

const privateKey = fs.readFileSync("./private.key", "utf8");
const publicKey = fs.readFileSync("./public.key", "utf8");

const signOptions = {
    expiresIn: "30d",
    algorithm: "RS256"
}

const connection = mysql.createConnection({
    user:"andrew_mtg",
    password:"Roflpwn123",
    database:"andrew_mtgbuilder",
    stream: sockConn,
    multipleStatements:true
})

connection.connect(err=>{
    if(err) console.log(err);
})


login = async(req,res)=>{
    
    let body = req.body;
    let user = body.Email;
    let password = body.Password;
    let hashedPassword;
    //await db query for username then compare password with saved hashed password
    await new Promise((resolve, reject)=>connection.query("SELECT id, username, password FROM users WHERE username=("+SqlString.escape(user)+")", function(err, response){
        
        if(response.length<1){
            
            res.send({err:"No User Found"})
            reject( new Error("No User Found"))
            
        }
        resolve(response)

    })).then(async function(response){

            let validation;    

            await bcrypt.compare(password, response[0].password).then(function(result){
                validation = result;
            })
            if(validation){
                let token = jwt.sign({id:response[0].id}, privateKey, {algorithm:"RS256"}, {expiresIn:Date.now()+2592000000})
                res.json({ token:token, expiresIn: Date.now()+2592000000})
            }else{
                res.send({err:"Incorrect Password"})
                throw new Error("invalid password")
            }
            
            
        }).catch(err=>{
        console.log(err);
    })
    
    
    
}

register = async(req, res)=>{
    let body = req.body;
    let user = body.Email;
    let password = body.Password;
    let hashedPassword;

    //encrypt the password

    const encrypt = await new Promise ((resolve, reject)=>{
        bcrypt.genSalt(saltRounds, function(err, salt){
            bcrypt.hash(password, salt, function(error, hash){
                hashedPassword = hash;
                if(err) reject(err)
                resolve(password);
            })
        })
    })
    
    connection.query("INSERT INTO users VALUES (null, "+SqlString.escape(user)+", "+SqlString.escape(hashedPassword)+")", function(err, response){
       
        if(err){
            res.status(200).send({error:err.sqlMessage})
       }else{
            let token = jwt.sign({id:response.insertId}, privateKey, {algorithm:"RS256"}, {expiresIn:Date.now()+2592000000})
            res.json({ token:token, expiresIn: Date.now()+2592000000})
            
       }
    })
}

getUser = async(req,res)=>{

    const token = jwt.verify(req.body.data, publicKey);

    if(token.iat<Date.now()){
        
        await new Promise( (resolve, reject)=>{
            connection.query("SELECT decklist FROM decklists WHERE id="+SqlString.escape(token.id)+"; SELECT card FROM savedCards WHERE id="+SqlString.escape(token.id)+"; SELECT * FROM decklists;", function (err, response){
                
                return res.send(response)
            })
        })
    }else{
        return res.send({auth:false})
    }

    
    
}

getCard = async(req,res) =>{
    const body = req.body
    const colors = body.colors.join(",");
    
    axios({
    
        method:"get",
        url:"https://api.magicthegathering.io/v1/cards/",
        params:{name: body.name,
                cmc: body.cmc,
                set: body.set,
                colors: colors,
                text: body.text,
                type: body.type
        }
    }).then((response)=> {res.json(response.data)}).catch((error)=>console.log(error))
}

getData = async(req,res) =>{
    console.log("getdata")
    await new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM decklists;", function(err, response){
            //parse JSON to make a new decklist object to send to client
            
            if(response){
                resolve(response)
            }
            
        })
    }).then(result=>{
        res.send(result)
    })
}

getDeck = async(req,res)=>{
    let returned;
    const deck = req.body.deck.name
    await new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM decklists WHERE deckname="+SqlString.escape(deck)+";", function(err, response){
            //parse JSON to make a new decklist object to send to client
            returned = JSON.parse(response[0].decklist);
            //add id to the object
            returned.id = response[0].id
            //return the decklist
            resolve(returned)
            
        })
    }).then(result=>{
        res.send({result})
    })
}

saveCard = async(req, res)=>{
    //needs error handling for verify
    const id = jwt.verify(req.body.token, publicKey).id;
    const card = JSON.stringify(req.body.card)
    const name = req.body.card.name

    //create composite key
    const compositeKey = id + name;
    
    await new Promise((resolve, reject)=>{
        connection.query("INSERT INTO savedCards VALUES ("+SqlString.escape(id)+","+SqlString.escape(card)+", "+SqlString.escape(name)+", "+SqlString.escape(compositeKey)+")", function(err, response){
            let message = true;

            if(err){
                message=false;
            }

            res.send({error: message});
        })
    })
    

}

deleteCard = async(req,res)=>{
    const id = jwt.verify(req.body.token, publicKey).id;
    const name = req.body.card.name;
    
    connection.query("DELETE FROM savedCards WHERE cardname="+SqlString.escape(name)+" AND id="+SqlString.escape(id)+" ;", function(err, response){
        
        res.send("Deleted")
    })
}

saveDeck = async(req,res)=>{
    //needs error handling for verify
    const id = jwt.verify(req.body.token, publicKey).id;
    const deck = JSON.stringify(req.body.newDeck);
    const deckName = req.body.newDeck.name;
    
    await new Promise((resolve, reject)=>{
        connection.query("REPLACE INTO decklists VALUES ("+SqlString.escape(deck)+", "+SqlString.escape(id)+", "+SqlString.escape(deckName)+")", function(err, response){
            
            if(err){
                res.send({error:true})
            }else{
                res.send({error:false})
            }
        })
    })
    
    
    
}



module.exports = {
    login,
    register,
    getUser,
    getCard,
    getDeck,
    saveDeck,
    saveCard,
    getData,
    deleteCard
    
}