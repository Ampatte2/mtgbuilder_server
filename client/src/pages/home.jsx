

import {getCard, saveMyCard} from "../store/actions";
import {connect} from "react-redux";
import React, { Component } from 'react'
import Loader from "react-loader";
import {Decklist, CardDisplay, CheckBox} from "../components";
import Styled from "../style/styled";



class home extends Component {
    constructor(props){
        super(props);
        this.state = {name:"", cmc:"", set:"", colors:[], type:"", text:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
    }

    handleChange(event){
        let newState = {};
        newState[event.target.name]=event.target.value;
        this.setState(newState);
        
    }
    handleChangeSelect(color){
        
        
        console.log(this.state.colors)
        if(this.state.colors.includes(color)){
            let index = this.state.colors.indexOf(color)
            let newState = this.state.colors;
            newState.splice(index,1);
            this.setState({colors: newState})
        }else{
            this.setState({colors:[...this.state.colors, color]})
            
        }
        
        
    }

    handleSubmit= (e) =>{
        e.preventDefault();
        
        this.props.getCard(this.state)
    }

    addMyCard = (card, e) =>{
        //hides button of AddCard To Library if clicked.
        e.target.style.visibility = "hidden"

        const filteredItem = {
            imageUrl: card.imageUrl,
            name: card.name,
            cmc: card.cmc,
            types: card.types,
            type:card.type,
            text:card.text,
            loyalty:card.loyalty,
            toughness:card.toughness,
            power:card.power,
            quantity:1
        }
        this.props.saveMyCard(filteredItem)
    }
    
    
    render() {
        
        return (
        <div>
            <Styled.SearchForm name="search-form"  onSubmit={e=>this.handleSubmit(e)}>
                <Styled.SearchFormLabel htmlFor="name">Name</Styled.SearchFormLabel>
                <Styled.SearchFormInput name="name" type="text" onChange={e=>this.handleChange(e)}></Styled.SearchFormInput>
                <Styled.SearchFormLabel htmlFor="cmc" >CMC</Styled.SearchFormLabel>
                <Styled.SearchFormInput name="cmc" type="text" onChange={e=>this.handleChange(e)}></Styled.SearchFormInput>
                <Styled.SearchFormLabel htmlFor="set">Set</Styled.SearchFormLabel>
                <Styled.SearchFormInput name="set" type="text" onChange={e=>this.handleChange(e)}></Styled.SearchFormInput>
                
                <Styled.SearchFormInputCheckboxDiv>
                <CheckBox color={"red"} select={this.handleChangeSelect}></CheckBox>                
                <CheckBox color={"blue"} select={this.handleChangeSelect}></CheckBox>
                <CheckBox color={"green"} select={this.handleChangeSelect}></CheckBox>
                <CheckBox color={"black"} select={this.handleChangeSelect}></CheckBox>
                <CheckBox color={"white"} select={this.handleChangeSelect}></CheckBox>
                </Styled.SearchFormInputCheckboxDiv>
                
                <Styled.SearchFormLabel htmlFor="type">Type</Styled.SearchFormLabel>
                <Styled.SearchFormInput name="type" type="text" onChange={e=>this.handleChange(e)}></Styled.SearchFormInput>
                <Styled.SearchFormLabel htmlFor="text">Text</Styled.SearchFormLabel>
                <Styled.SearchFormInput name="text" type="text" onChange={e=>this.handleChange(e)}></Styled.SearchFormInput>
                <Styled.SearchFormButton value="submit" type="submit">Get the card</Styled.SearchFormButton>
            </Styled.SearchForm>

            <Loader loaded={this.props.isLoaded}/>
            {/* Look at props cardlist being passed down, if empty show alternate text 
                if not empty print only cards that have an image and are the original printing of the card
            */}
            <CardDisplay cardList={this.props.cardList} addMyCard={this.addMyCard} view={"Search For a Card"} isAuth={this.props.auth}></CardDisplay>

            
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    const {isLoaded} = state;
    const {cardList} = state;
    const {auth} = state;
    return {isLoaded, cardList, auth}

}
const mapDispatchToProps = (dispatch)=>{
    return{
        getCard: (item)=>{dispatch(getCard(item))},
        saveMyCard: (item)=>{dispatch(saveMyCard(item))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)


