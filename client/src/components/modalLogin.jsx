import React, { Component } from 'react'
import Styled from "../style/styled";

export default class ModalLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            show:false,
        }
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside);
        
    }
    
    componentWillUnmount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside(event){
        if(this.wrapperRef && !this.wrapperRef.contains(event.target)){
            this.props.reset();
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

    handleSubmit(e){
        e.preventDefault();
        this.props.fun(this.state)       
    }

    handleChange(e, section){
        let newState = {};
        newState[section]=e.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <>
                <div ref={this.setWrapperRef}>
                <Styled.UserButtons onClick={this.showModal}>
                {this.props.title}
                </Styled.UserButtons>
                {this.state.show && 
                    
                    <Styled.AccountForm onSubmit={(e)=>this.handleSubmit(e)}>
                        {this.props.info.map((item, index)=>{
                           return <Styled.AccountInput type={item.type} id={item.name} placeholder={item.name} onChange={(e)=>this.handleChange(e,item.name)}></Styled.AccountInput>
                        })}
                        {this.props.error && <Styled.AccountError>{this.props.error}</Styled.AccountError>}
                        {this.props.passError && <Styled.AccountError>{this.props.passError}</Styled.AccountError>}
                        {this.props.isLoaded &&<Styled.AccountButton type="submit">{this.props.title}</Styled.AccountButton>}
                    </Styled.AccountForm>
                    
                    }
                </div>
            </>
        )
    }
}
