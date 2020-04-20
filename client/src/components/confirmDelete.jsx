import React, { Component } from 'react';
import Styled from "../style/styled";


export default class ConfirmDelete extends Component {
    constructor(props){
        super(props)
        this.state={
            color:"white",
            colorBackground:"#2B4141",
            confirm:false
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside);
        
    }
    
    componentWillUnmount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside(event){
        
        if(this.wrapperRef && !this.wrapperRef.contains(event.target)){
            
            this.setState({color:"white", colorBackground:"#2B4141",confirm:false})
        }
    }

    setWrapperRef(node){
        
        this.wrapperRef = node;
    }

    handleClick(){
        
        this.setState({color:"black", colorBackground:"#FFCC00", confirm:true})
        console.log(this.state, this.props.theItem)
        
    }
    handleDelete(){
        this.setState({color:"white", colorBackground:"#2B4141", confirm:false})
        this.props.delete(this.props.theItem);
        
    }
    render() {
        
        return (
            
            <div ref={this.setWrapperRef}>
            <Styled.ConfirmDelete color={this.state.color} colorBackground={this.state.colorBackground} onClick={()=>this.handleClick()}>
                Delete
            </Styled.ConfirmDelete>
            {this.state.confirm && <Styled.ConfirmDelete color={this.state.color} colorBackground={this.state.colorBackground} onClick={()=>this.handleDelete()}>
                Confirm Delete
            </Styled.ConfirmDelete>
            }
            </div>
        )
    }
}



