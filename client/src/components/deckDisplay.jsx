import React from 'react'
import { Link } from 'react-router-dom';
import Styled from "../style/styled"
import {ConfirmDelete} from "./index"


export default function DeckDisplay(props) {

        let dis = props.decks;
        return (
            <>
            <Styled.DeckDisplay>
            {dis.length>0 && dis.map((item, index)=>{
                                    
                    return <Styled.Deck>
                    <Link to={"/viewDeck/" + index + "/" + props.view} style={{textDecoration:"none"}} ><Styled.DeckHeader key={index} >{item.name}</Styled.DeckHeader></Link>
                    <Link to={"/viewDeck/" + index + "/" + props.view} ><Styled.DeckImage src={item.decklist[0].imageUrl}></Styled.DeckImage></Link>
                    <ConfirmDelete delete={props.deleteDeck} theItem={item} >Delete Deck</ConfirmDelete>
                    </Styled.Deck>
                })}
            
            </Styled.DeckDisplay>
            {props.decks.length===0 && <Styled.CardEmpty>No Saved Decks</Styled.CardEmpty>}
            </>

        )
    
}
