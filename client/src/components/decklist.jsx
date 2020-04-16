import React, { Component } from 'react'
import Styled from "../style/styled"
import {connect} from "react-redux";
import {addCard, modifyDeck} from "../store/actions"
import {DropDown} from "./index"

class Decklist extends Component {
    constructor(props){
        super(props)
        this.handleDrop= this.handleDrop.bind(this);
        this.handleDragEnter= this.handleDragEnter.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleDrop = e =>{

        const cardItem = JSON.parse(e.dataTransfer.getData("text"))

        //remove unneccessary data from 
        const filteredItem = {
            imageUrl: cardItem.imageUrl,
            name: cardItem.name,
            cmc: cardItem.cmc,
            types: cardItem.types,
            type:cardItem.type,
            text:cardItem.text,
            loyalty:cardItem.loyalty,
            toughness:cardItem.toughness,
            power:cardItem.power,
            quantity:1
        }

        this.props.addCard(filteredItem)
        e.preventDefault()
        e.stopPropagation()
    }

    handleDragEnter = e =>{
        e.preventDefault()
        e.stopPropagation()
    }
    handleDragLeave = e =>{
        console.log("drag leave");
        e.preventDefault()
        e.stopPropagation()
    }

    handleClick = (item, index, modifier ) =>{
        if(item.quantity<4 && modifier>0){
            this.props.modifyDeck(modifier, index)  
        }else if(modifier<0){
            this.props.modifyDeck(modifier, index)
        }
    }
    
    render() {
        
        return (
            <Styled.DecklistDiv>
            <DropDown></DropDown>
            
            <Styled.Decklist 
            onDragLeave={e=>this.handleDragLeave(e)}
            onDropCapture={e=> this.handleDrop(e)} 
            onDragOver={e=>this.handleDragEnter(e)}>
            
            <div>
                
            {this.props.currentDeck.decklist.length===0 ? <Styled.DecklistItemHeader>Drag and Drop Cards</Styled.DecklistItemHeader>: this.props.currentDeck.decklist.map((item, index)=>{
                
                return <Styled.DecklistItem>
                            <Styled.DecklistItemHeader key={index}>{item.name}</Styled.DecklistItemHeader>
                            <div style={{marginRight:"1vw"}}>
                            {item.quantity}
                            <Styled.UserButtons onClick={()=>this.handleClick(item, index, 1)}>+</Styled.UserButtons>
                            <Styled.UserButtons onClick={()=>this.handleClick(item, index, -1)}>-</Styled.UserButtons>
                            </div>
                        </Styled.DecklistItem>
            })}
            </div>        
            </Styled.Decklist>
            </Styled.DecklistDiv>
        )
    }
}

const mapStateToProps = (state) =>{
    const {currentDeck} = state;
    return {currentDeck}
}

const mapDispatchToProps = (dispatch)=>{
    return{
        modifyDeck: (modifier, index)=>{dispatch(modifyDeck(modifier, index))},
        addCard: (card)=>{dispatch(addCard(card))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decklist)
