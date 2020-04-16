import React, { Component } from 'react'
import cardBack from "../images/cardBack.png"
import Styled from "../style/styled"

export default class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false,
            img: this.props.item["imageUrl"]
        };
        this.showModal = this.showModal.bind(this);
        this.dragId = this.dragId.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this);

    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside);
        if(this.state.img===undefined){
            this.setState({img:cardBack})
        }
        
    }
    
    componentWillUnmount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    
    componentDidUpdate(prevProps){
        if(this.props.item["imageUrl"] !==prevProps.item["imageUrl"]){
            this.setState({img:this.props.item["imageUrl"]})
        }
    }

    showModal(){
        if(this.state.show){
            this.setState({show:false})
        }else{
            this.setState({show:true})
        }
    }

    dragId(e){
        const cardItem = JSON.stringify(this.props.item)
        e.dataTransfer.setData("text", cardItem)
    }

    handleClickOutside(event){
        if(this.wrapperRef && !this.wrapperRef.contains(event.target)){
            this.setState({show:false})
        }
    }

    setWrapperRef(node){
        this.wrapperRef = node;
    }

    render() {
        return (
            <div>
                {this.state.show && <Styled.CardPopUp src={this.state.img} ref={this.setWrapperRef}></Styled.CardPopUp>}
                <Styled.CardImage src={this.state.img} onError={()=> console.log("there is an error") } alt={this.props.item["name"]} id={this.props.item["name"]} onClick={this.showModal} draggable="true" onDragStart={e=>this.dragId(e)}></Styled.CardImage>
                
            </div>
        )
    }
}
