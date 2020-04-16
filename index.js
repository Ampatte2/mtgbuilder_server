require("dotenv").load
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const cardRouter = require("./routes")
const bodyParser = require("body-parser");

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"))
}

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "mtgbuilder", "build", "index.html"))
})

app.use(cors());
app.use(bodyParser.json())

app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`)
})

app.use("/api", cardRouter);
