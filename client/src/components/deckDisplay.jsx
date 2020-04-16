import React from 'react'
import { Link } from 'react-router-dom';
import Styled from "../style/styled"


export default function DeckDisplay(props) {


    
        let dis = props.decks;
        return (
            
            <Styled.DeckDisplay>
            {dis.length>0 && dis.map((item, index)=>{                    
                    return <Styled.Deck>
                    <Styled.DeckHeader key={index}>{item.name}</Styled.DeckHeader>
                    <Link to={"/viewDeck/" + index + "/" + props.view} ><Styled.DeckImage src={item.decklist[0].imageUrl}></Styled.DeckImage></Link>
                    
                    </Styled.Deck>
                })}
            </Styled.DeckDisplay>
        )
    
}
