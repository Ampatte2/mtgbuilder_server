import React, { Component } from 'react'
import {connect} from "react-redux";
import {saveDeck} from "../store/actions";
import { Link } from 'react-router-dom';
import Styled from "../style/styled"



class Decklists extends Component {
    

    render() {
        let dis = this.props.decklists

        return (
            <Styled.DeckDisplay>
                {dis.length>0 && dis.map((item, index)=>{                    
                    return <Styled.Deck>
                    <Styled.DeckHeader key={index}>{item.name}</Styled.DeckHeader>
                    <Link to={"/viewDeck/" + index + "/decklists"}><Styled.DeckImage src={item.decklist[0].imageUrl}></Styled.DeckImage></Link>
                    
                    </Styled.Deck>
                })}
            </Styled.DeckDisplay>
        )
    }
}

const mapStateToProps= (state)=>{
    const {auth} = state;
    const {decklists} = state;
    return {auth, decklists}
}

export default connect(mapStateToProps, {saveDeck})(Decklists);
