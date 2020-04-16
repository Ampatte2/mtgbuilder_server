import React, { Component } from 'react'
import {ModalLogin} from "./index"
import {connect} from "react-redux";
import {login, logout, register, isAuth, getData, isError} from "../store/actions";
import Loader from "react-loader";
import Styled from "../style/styled";



class UserLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            passError:false
            
        }
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.errorReset = this.errorReset.bind(this);
        
    }

    register(submit){
            this.setState({passError:false})
            if(submit["Password"]===submit["Repeat Password"] && submit["Email"] && submit["Password"] && submit["Password"].length>6 ){
                this.props.register(submit);
            }else if (submit["Password"].length<7){
                this.setState({passError:"Password Must Be Longer Than 6 Characters"})
            }else{
                //error message for password without api call
                this.setState({passError:"Passwords Do Not Match"});
        }
    }
    
    login(submit){
        this.props.login(submit);
        
    }

    logout(){
        
        localStorage.removeItem("token")
        this.props.logout();
        this.props.isAuth(false);
        this.props.getData();
        
    }

    errorReset(){
        this.props.isError(false)
        this.setState({passError:false})
    }

    render() {
        return (
            <Styled.UserLoginDiv>
                
                {!this.props.auth && 
                <Styled.UserLogin>
                    <ModalLogin 
                    title="Login" 
                    info={[{name:"Email", type:"email"},
                    {name:"Password", type:"password"}]}
                    fun={this.login}
                    error={this.props.error}
                    reset={this.errorReset}
                    isLoaded={this.props.isLoaded}>
                    </ModalLogin>

                    <ModalLogin
                    title="Register"
                    info={[{name:"Email", type:"email"},
                    {name:"Password", type:"password"},
                    {name:"Repeat Password", type:"password"}]}
                    fun={this.register}
                    passError={this.state.passError}
                    error={this.props.error}
                    reset={this.errorReset}
                    isLoaded={this.props.isLoaded}>
                    </ModalLogin>
                </Styled.UserLogin>}

                {this.props.auth &&
                <Styled.UserLogin>
                    <Styled.UserButtons onClick={()=>this.logout()}>Logout</Styled.UserButtons>
                </Styled.UserLogin>}
                

            </Styled.UserLoginDiv>
        )
    }
}
const mapStateToProps = (state) =>{
    const {isLoaded} = state;
    const {error} = state;
    const {auth} = state;
    return {error, isLoaded, auth}
}
const mapDispatchToProps = (dispatch)=>{
    return{
        login: (user)=>{dispatch(login(user))},
        register: (user)=>{dispatch(register(user))},
        isAuth: (value)=>{dispatch(isAuth(value))},
        logout: ()=>{dispatch(logout())},
        getData: ()=>{dispatch(getData())},
        isError: (value)=>{dispatch(isError(value))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);