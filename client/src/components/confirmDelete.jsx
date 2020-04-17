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
    }

    handleClick(){
        if(this.state.confirm){
            this.props.delete(this.props.theItem)
            this.setState({color:"white", colorBackground:"#2B4141", confirm:false})
        }
        this.setState({color:"black", colorBackground:"red", confirm:true})
        
    }
    render() {
        return (
           

            <Styled.ConfirmDelete color={this.state.color} colorBackground={this.state.colorBackground} onClick={()=>this.handleClick()}>
                Delete
            </Styled.ConfirmDelete>
            
        )
    }
}



