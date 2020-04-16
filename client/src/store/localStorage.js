export const loadState =()=>{
    try{
        const serializedState = localStorage.getItem("state");
        if(serializedState===null){
            return {isLoaded:true,
                error:false,
                auth:false, 
                cardList:[], 
                currentDeck:{name:"Please Select A Deck", decklist:[]}, 
                myDecks:[], 
                myCards:[], 
                decklists:[]}
        }
        //return the saved state
        return JSON.parse(serializedState);
    }catch(err){
        return undefined
    }
}
export const saveState = (state) =>{
    try{
        //set state to string
        const serializedState = JSON.stringify(state);
        //set local storage to stringified state
        localStorage.setItem("state", serializedState);
    }catch(err){
        console.log(err);
    }
}