import React, { Component } from 'react'
import Styled from "../style/styled"

export default class ModalDeck extends Component {
    constructor(props){
        super(props)
        this.state={
            show:false,
            cloneName:""
        }
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.showModal = this.showModal.bind(this);
        
    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside);
        
    }
    
    componentWillUnmount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside(event){
        
        if(this.wrapperRef && !this.wrapperRef.contains(event.target)){
            this.setState({show:false})
        }
    }

    showModal(){
        if(this.state.show){
            this.setState({show:false})
        }else{
            this.setState({show:true})
        }
    }

    setWrapperRef(node){
        this.wrapperRef = node;
    }

    handleClick(){
        this.props.clone(this.state.cloneName, this.props.deck)
    }

    handleChange(e){
        this.setState({cloneName:e.target.value})
    }


    render() {
        
        return (
            
            <div>
                    <Styled.ModalDeckButton onClick={this.showModal}>Clone Deck</Styled.ModalDeckButton>
                    {this.state.show && 
                        <Styled.CloneModal ref={this.setWrapperRef}> 
                            <Styled.CloneModalHeader>Clone "{this.props.deck.name}"</Styled.CloneModalHeader>
                            <Styled.AccountInput type="text" value={this.state.cloneName} placeholder="Cloned Deck Name" onChange={(e)=>this.handleChange(e)}></Styled.AccountInput>
                            <Styled.AccountButton onClick={()=>this.handleClick()}>Save</Styled.AccountButton>
                        </Styled.CloneModal>
                    }
                
            </div>
        )
    }
}
