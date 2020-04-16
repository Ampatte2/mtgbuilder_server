
import {GET_CARD, DISPLAY_CARD, IS_LOADED, LOAD_DECK, ADD_CARD, MY_CARD, AUTH, MODIFY_DECK, ADD_DECK, DB_CARD, DB_DECK, LOGOUT, ERROR} from "../actions"

const initialState = {isLoaded:true,
                        error:false,
                        auth:false, 
                        cardList:[], 
                        currentDeck:{name:"Please Select A Deck", decklist:[], id:undefined}, 
                        myDecks:[], 
                        myCards:[], 
                        decklists:[]}

const mtgbuilder = (state=initialState, action)=>{
    switch(action.type){
        case GET_CARD:
            return state;
        case DISPLAY_CARD:
            return Object.assign({}, state, {cardList: action.cardList})
        case IS_LOADED:
            return Object.assign({}, state, {isLoaded: action.value})
        case LOAD_DECK:
            return Object.assign({}, state, {currentDeck: action.deck})
        case ADD_CARD:
            return Object.assign({}, state, {currentDeck: {name: state.currentDeck.name, decklist: [...state.currentDeck.decklist, action.card], id:state.currentDeck.id}})
        case ADD_DECK:
            return Object.assign({}, state, {myDecks:[...action.deck]})
        case MODIFY_DECK:
            return Object.assign({}, state, {
                currentDeck: {name:state.currentDeck.name, decklist:state.currentDeck.decklist.filter((card, index)=>{
                    if(index===action.index){
                        card.quantity+= action.modifier;
                        if(card.quantity>0){
                            return card
                        }
                    }else{
                        return card
                    }
                }), id:state.currentDeck.id}
            })
        case DB_DECK:
            return Object.assign({}, state, {decklists: [...action.decks]})
        case MY_CARD:
            return Object.assign({}, state, {myCards: [...state.myCards, action.card]})
        case DB_CARD:
            return Object.assign({}, state, {myCards: [...action.cards]})
        case AUTH:
            return Object.assign({}, state, {auth: action.value})
        case LOGOUT:
            return Object.assign({}, state, initialState)
        case ERROR:
            return Object.assign({}, state, {error: action.value})
        default:
            return state
    }

}
export default mtgbuilder;