import React, { Component } from 'react'
import {connect} from "react-redux";
import {deleteMyCard, deleteMyDeck} from "../store/actions"
import {Decklist, CardDisplay, DeckDisplay} from "../components"
import { Redirect } from 'react-router-dom';
import Styled from '../style/styled';

class account extends Component {
    
    
    render() {
        
        return (
            <div>
                {!this.props.auth && <Redirect to="/"/>}
                
                
                <Styled.AccountHeader>Cards</Styled.AccountHeader>
                <CardDisplay cardList={this.props.myCards} view={"No Saved Cards"} deleteCard={this.props.deleteMyCard}></CardDisplay>
                <Styled.AccountHeader>Decks</Styled.AccountHeader>
                <DeckDisplay decks={this.props.myDecks} view={"myDecks"} deleteDeck={this.props.deleteMyDeck}></DeckDisplay>
                {this.props.myDecks.length===0 && <h3>No Saved Decks</h3>}
                
            </div>
        )
    }
}
const mapStateToProps= (state)=>{
    const {cardList} = state;
    const {currentDeck} = state;
    const {myCards} = state;
    const {myDecks} = state;
    const {auth} = state;
    return {cardList, currentDeck, myCards, myDecks, auth}
}

const mapDispatchToProps = (dispatch)=>{
    return{
        deleteMyCard: (item)=>{dispatch(deleteMyCard(item))},
        deleteMyDeck: (item)=>{dispatch(deleteMyDeck(item))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(account)
