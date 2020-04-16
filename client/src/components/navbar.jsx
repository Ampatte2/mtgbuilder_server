import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {user, getData} from "../store/actions";
import {UserLogin} from "../components/index"
import Styled from "../style/styled"


class Navbar extends Component {

    componentDidMount(){
        let token = localStorage.getItem("token");
        if(!this.props.auth && token){
            this.props.user(token)
        }else{
            
            this.props.getData();
        }

    }
    

    render() {
        
        return (
            <Styled.Navbar>
                <div style={{marginLeft:"1vw"}}>
                <Link to="/"><Styled.UserButtons>Card Search</Styled.UserButtons></Link>
                
                <Link to="/decklists"><Styled.UserButtons>Decklists</Styled.UserButtons></Link>
                
                {this.props.auth && <Link to="/account"><Styled.UserButtons>Account</Styled.UserButtons></Link>}
                </div>
                <UserLogin></UserLogin>
            </Styled.Navbar>
        )
    }
}
const mapStateToProps= state =>{
    const {auth} = state
    return {auth}
}

const mapDispatchToProps = (dispatch)=>{
    return{
        user: (token)=>{dispatch(user(token))},
        getData: ()=>{dispatch(getData())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

