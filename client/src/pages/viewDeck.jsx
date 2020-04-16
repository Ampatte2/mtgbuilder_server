import React, { Component } from 'react'
import {CardDisplay} from "../components";
import {connect} from "react-redux";
import {ModalDeck} from "../components/index";
import {saveDeck} from "../store/actions/index";
import { Redirect } from 'react-router-dom';
import Styled from "../style/styled";


class viewDeck extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(name, deck){
        this.props.saveDeck(name, deck)
    }

    render() {

        const id = this.props.match.params.id
        const view = this.props.match.params.view
        console.log(this.props[view][id])
        return (
            <>
                {this.props[view][id] ? 
                <>
                
                <Styled.AccountHeader>{this.props[view][id].name}</Styled.AccountHeader>
                {this.props.auth &&
                <ModalDeck deck={this.props[view][id]} isAuth={this.props.auth} clone={this.handleClick}></ModalDeck>
                }
                <CardDisplay cardList={this.props[view][id].decklist}></CardDisplay>
                </>
                : <Redirect to="/"/>}
                
            </>
        )
    }
}

const mapStateToProps = state =>{
    const {myDecks} = state;
    const {decklists} = state;
    const {auth} = state;
    return {myDecks, decklists, auth}
}

export default connect(mapStateToProps, {saveDeck})(viewDeck)
