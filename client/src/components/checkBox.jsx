import React, { Component } from 'react'
import Styled from "../style/styled"

export default class CheckBox extends Component {
    constructor(props){
        super(props)
        this.state={checked:false}
        
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange = () =>{
        
        this.setState({checked:!this.state.checked})
        this.props.select(this.props.color)
    }

    render() {
        
        return (
            <Styled.CheckboxContainer>
                <Styled.CheckBoxLabel>{this.props.color}</Styled.CheckBoxLabel>
                <Styled.StyledCheckbox checked={this.state.checked} color={this.props.color} onClick={this.handleChange}>
                    <Styled.Icon checked={this.state.checked} viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </Styled.Icon>
                </Styled.StyledCheckbox>
                
            </Styled.CheckboxContainer>
        )
    }
}
