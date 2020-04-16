import styled from "styled-components"
import {device} from "./device"
import Banner from "../images/Banner.jpg"
import MagicCardBack from "../images/MagicCardBack.jpg"

const AppDiv = styled.div`
    width:100%;
    display:flex;
    height:100%;
`
const DecklistDiv = styled.div`
    width:14%;
    position:sticky;
    height:70%;
    top:0vh;
    @media ${device.laptop}{
        width:29vw;
        
        right:0;
        top:17vh;
    }
    @media ${device.mobileL}{
        margin-left:5vw;
        height:50vh;
        width:44vw;
        margin-top:12vh;
        top:12vh;
    }
    
    
`
const MainDiv = styled.div`
    width:84%;
    @media ${device.laptop}{
        width:69vw;
    }
    @media ${device.mobileL}{
        width:54vw;
    }
    
`

//home

const SearchForm = styled.form`
    z-index:1;
    position:sticky;
    top:6vh;
    text-align:center;
    background-color:#F8F8F8;
    width:50vw;
    padding:0.5vh 2vw 0.5vh 2vw;
    left: 15.5vw;
    border: solid 1px #E7E7E7;
    border-radius: 10px;
    box-shadow:1px 1px 4px #2b4141;

    @media ${device.laptop}{
        width:65vw;
        left:2vw;
        padding:0.5vh 0 0.5vh 0;
    }
    @media ${device.mobileL}{
       
        width:100vw;
        padding:0;
    }
    
`

const SearchFormInput = styled.input`
    border:none;
    padding:5px;
    margin:5px;
    font-size:2vh;
    border: solid 1px #E7E7E7;
    border-radius: 2px;
    &:focus{
        background-color:#34E4EA;
    }
    @media ${device.laptop}{
        font-size:1vh;
        width:12vw;
    }
    @media ${device.mobileL}{
        font-size:1vh;
        width:17vw;
    }
    
    
`

const StyledCheckbox = styled.div`
    display:inline-block;
    width:16px;
    height:16px;
    background:${props => props.checked ? props.color : "#2B4141"};
    border-radius:3px;
    border:solid black 0.5px;
    transition: all 150ms;
    vertical-align:center;
    cursor:pointer;
    @media ${device.mobileL}{
        width:13px;
        height:13px;
    }
    
    
`

const CheckboxContainer = styled.div`
    display:flex;
    flex-direction:row;
   
`
const CheckBoxLabel = styled.div`
    margin-right:10px;
    font-size:2vh;
    @media ${device.laptop}{
        font-size:1.5vh;
    }
    
`
const SearchFormInputCheckboxDiv = styled.div`
    display:flex;
    flex-direction:row;
    height:2vh;
    padding:1vh 1vw 1vh 1vw;
    width:30vw;
    margin:0.5vh auto 0.5vh auto;
    justify-content:space-between;
    border: solid 2px #E7E7E7;
    border-radius: 2px;

    font-size:2vh;
    @media ${device.laptop}{
        width:50vw;
    }
    @media ${device.mobileL}{
        font-size:1vh;
        width:70vw;
    }
`
const Icon = styled.svg`
    @media ${device.laptop}{
        visibility:hidden;
    }
    fill:none;
    stroke:darkgrey;
    stroke-width:2px;
    visibility: ${props=> props.checked ? "visible" : "hidden"}
    
`

const SearchFormLabel = styled.label`
    padding:5px;
    font-size:2vh;
    color:black;
    @media ${device.laptop}{
        font-size:1.5vh;
    }
`

const SearchFormButton = styled.button`
    border:none;
    background-color:#2B4141;
    padding:7px;
    font-size: 2vh;
    color:white;
    border-radius:2px;
    cursor:pointer;
    &:hover{
        background-color:#34E4EA;
        color:black;
    }
    @media ${device.laptop}{
        font-size:1.25vh;
        padding:5px;
    }
`


//sidebar decklist items

const Decklist = styled.div`
    position: sticky;
    top:0vh;
    right:0;
    height:70vh;
    width:15vw;
    padding-top:2vh;
    border: solid 1px #E7E7E7;
    border-radius: 2px;
    box-shadow:1px 1px 4px #2b4141;
    @media ${device.laptop}{
        font-size:1.5vh;
        width:29vw;
        position:relative;
        right:0;
    }
    @media ${device.mobileL}{
        
        font-size:1vh;
        height:50vh;
        width:39vw;
    }
    
    
`

const DecklistItem = styled.div`
    justify-content:space-between;
    width:15vw;
    display:flex;
    margin-bottom:10px;
    @media ${device.laptop}{
        
        width:29vw;
    }
    @media ${device.mobileL}{
        
        width:40vw;
    }

`
const DeckSelect = styled.div`
    position:sticky;
    top:0vh;
    right:0;
    z-index:99;
    height:5vh;
    width:15vw;
    margin-top:10vh;
    @media ${device.laptop}{
        top:0vh;
        width:29vw;
        position:relative;
        right:0;
    }
    @media ${device.mobileL}{
        position:relative;
        right:0;
        width:40vw;
    }
    
`
const DeckSelectDrop = styled.div`
    position:sticky;
    top:15vh;
    right:0;
    background-color:white;
    width:15vw;
    margin-bottom:1vh;
    overflow:scroll;
    height:${props=>props.height};
    transition: height 2s ease-in-out;
    z-index:99;
    text-shadow: 0.25px 0.25px;
    border: solid 2px #E7E7E7;
    &&::-webkit-scrollbar{
        width:10px;
    }
    &&::-webkit-scrollbar-thumb{
        background: blue; 
        border-radius: 20px;
        height:1px;
    }
    &&::-webkit-scrollbar-thumb{
        background:#2B4141;
        border:solid black 1px;
    }
    &&::-webkit-scrollbar-corner{
        background:transparent;
    }
    @media ${device.laptop}{
        position:relative;
        right:0;
        top:0;
        width:29vw;
    }
    @media ${device.mobileL}{
        
        width:39vw;
    }
    
`
const DeckSelectItem = styled.div`
    font-size:2vh;
    margin-left:1vw;
    margin-top:0.5vh;
    height:${props=>props.height/2};
    display:${props=>props.height==="15vh" ? true : "none"};
    cursor:pointer;
    &:hover{
        color:#34E4EA
    }

    @media ${device.laptop}{
        
        font-size:1.5vh;
    }
    
`

const DropButton = styled.button`
    border:none;
    background-color:#2B4141;
    font-size:2vh;
    height:3.5vh;
    width:4vw;
    color:white;
    border-radius:4px;
    cursor:pointer;
    &:hover{
        background-color:#34E4EA;
        color:black;
    }
    @media ${device.laptop}{
        font-size:1.5vh;
        width:8vw;
    }
    @media ${device.mobileL}{
        
        
        width:12vw;
    }
`

const DropInput = styled.input`
    border: solid 2px #E7E7E7;
    width:10vw;
    height:3vh;
    font-size:2vh;
    &:focus{
        background-color:white;
    }

    &::placeholder{
        font-size:2.0vh;
        text-align:center;
        @media ${device.laptop}{
            font-size:1.5vh;
            width:15vw;
        }
        @media ${device.laptop}{
            font-size:1.25vh;
            
        }
    }
    @media ${device.laptop}{
        font-size:1.5vh;
        
        width:20vw;
    }
    @media ${device.mobileL}{
        
        
        width:25vw;
    }
`

const SelectError = styled.div`
    position:sticky;
    color:orangered    
    width:15vw;
    z-index:2;
    
`
const CloneModal = styled.div`
    z-index:99;
    position:fixed;
    width:20vw;
    top:30vh;
    height:20vh;
    left:40vw;
    background-color:lightgrey;
    display:flex;
    border: solid grey 1px;
    padding:10px;
    border-radius: 5px;
    flex-direction:column;
    justify-content:space-between;
    @media ${device.laptop}{
        left:30vw;
        width:40vw;
    }
`

const CloneModalHeader = styled.div`
    font-size:3vh;
    text-align:center;
    text-shadow: 0.25px 0.25px;
`

const ModalDeckButton = styled.button`
    
    
    z-index:99;
    border:none;
    background-color:#2B4141;
    font-size:2vh;
    margin-left:34vw;
    margin-top:1vh;
    width:15vw;
    height:5vh;
    color:white;
    border-radius:4px;
    cursor:pointer;
    &:hover{
        background-color:#34E4EA;
        color:black;
    }
    @media ${device.laptop}{
        margin-left:27vw;
    }
    @media ${device.mobileL}{
        margin-left:3vw;
    }
    

`
//Banner

const BannerDiv = styled.div`
    height:30vh;
    background: url(${Banner});
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    overflow:hidden;
    @media ${device.laptop}{
        height:20vh;
    }
    @media ${device.mobileL}{
        height:15vh;
    }
`


//Navbar
const Navbar = styled.div`
    position:sticky;
    z-index:9;
    top:0; 
    height:5vh;
    background-color:#F8F8F8;
    list-style-type: none;
    margin:auto;
    
    display:flex;
    box-shadow:1px 1px 4px #2b4141;
    align-items:center;
    margin-bottom:5vh;
    border-bottom:solid 2px #E7E7E7;
    border-top:solid 2px #E7E7E7;
    overflow:hidden;
    justify-content:space-between;
    
    


`
const UserButtons = styled.button`
    text-decoration: none;
    border:none;
    background-color:transparent;
    color:#777;
    outline: none;
    font-size:2vh;
    cursor:pointer;
    &:hover{
        color:#333;
        cursor:pointer;
    }
    &:focus{
        color:#34E4EA;
    }

`
const UserLogin = styled.div`
    display:flex;
    align-items:center;
    height:5vh;
`
const UserLoginDiv = styled.div`
    
    height:5vh;
    margin-right:2vw;
    
    
`

//login and register
const AccountForm = styled.form`
    z-index:99;
    position:fixed;
    width:20vw;
    top:30vh;
    height:30vh;
    left:40vw;
    background-color:lightgrey;
    display:flex;
    border: solid grey 1px;
    padding:10px;
    border-radius: 5px;
    flex-direction:column;
    justify-content:space-between;
    @media ${device.laptop}{
        left:20vw;
        width:60vw;
    }
`
const AccountInput = styled.input`
    border:none;
    padding:10px;
    margin-top:2vh;
    text-align:center;
    font-size:2vh;
    &:focus{
        background-color:white;
    }
    &::placeholder{
        font-size:2vh;
        text-align:center;
    }
`
const AccountButton = styled.button`
    border:none;
    background-color:#2B4141;
    width:40%;
    margin-left:auto;
    margin-right:auto;
    border-radius:4px;
    font-size:2vh;
    color:white;
    cursor:pointer;
    &:hover{
        background-color:#34E4EA;
        color:black;
    }
    
`

const AccountError = styled.div`
    text-align:center;
    color:#ff4500;
`

const AccountHeaderMain = styled.div`
    text-align:center;
    font-size:7vh;
    padding-bottom:5vh;
`
const AccountHeader = styled.div`
    text-align:center;
    font-size:4vh;
    margin-top:5vh;
`
//cardDisplay

const CardDisplay = styled.div`
    display:flex;
    width:90vw;
    flex-wrap:wrap;
    margin-left:2vw;
    margin-top:2vh;
    @media ${device.laptop}{
        width: 80vw;
    }
    @media ${device.mobileL}{
        
        width:54vw;
    }
`
const Card = styled.div`
    width:18vw;
    margin:1vh 0vw 1vh 1vw;
    font-size:1.5vh;
    height:55vh;
    text-align:center;
    
    padding:5px;
    @media ${device.laptop}{
        height:30vh;
        width:30vw;
        margin:1vh 0vw 1vh 0vw;
    }
    @media ${device.mobileL}{
        height:35vh;
        width:50vw;
    }
    &:before{
        content:"";
        display:block;
        position:absolute;
        z-index:-1;
        width:18vw;
        height:55vh;
        @media ${device.laptop}{
            height:30vh;
            width:30vw;
        }
        @media ${device.mobileL}{
            height:35vh;
            width:50vw;
        }
        background-image:url(${MagicCardBack});
        background-position: center;
        background-size:cover;
        opacity:0.3;
        border:solid black 2px;
        border-radius:6px;
        
    }
    
    
`
const CardImage = styled.img`
    width:9vw;
    height:25vh;
    border-radius:10px;
    margin-left:5px;
    @media ${device.laptop}{
        width:15vw;
        height:15vh;
    }
    @media ${device.mobileL}{
        width:25vw;
        height:18vh;
    }
    
`
const CardButton = styled.button`
    border:none;
    background-color:#2B4141;
    padding:5px;
    color:white;
    border-radius:4px;
    cursor:pointer;
    font-size:1.5vh;
    &:hover{
        background-color:#34E4EA;
        color:black;
    }
    @media ${device.laptop}{
        font-size:1vh;
    }
`

const CardDescription = styled.div`
    overflow:scroll;
    text-align:left;
    height:20vh;
    width:17vw;
    margin-top:1vh;
    margin-left:5px;
    font-size:2vh;
    text-shadow: 0.25px 0.25px;
    &&::-webkit-scrollbar{
        width:20px;
    }
    &&::-webkit-scrollbar-thumb{
        background: blue; 
        border-radius: 20px;
        height:5px;
    }
    &&::-webkit-scrollbar-thumb{
        background:white;
        border:solid black 1px;
    }
    &&::-webkit-scrollbar-corner{
        background:transparent;
    }
    @media ${device.laptop}{
        font-size:1.10vh;
        width:29vw;
        height:7vh;
    }
    @media ${device.mobileL}{
        width:49vw;
        height:9vh;
    }

    
`
const CardPopUp = styled.img`
    z-index:10;
    position:fixed;
    width:20vw;
    top:20vh;
    left:40vw;
    border-radius:10px;
    @media ${device.laptop}{
        font-size:1.10vh;
        width:40vw;
        left:30vw;
        
    }
`
const CardInfo = styled.div`
    display:flex;
    flex-direction:row;
    
`
const CardInfoText= styled.div`
    display:flex;
    flex-direction:column;
    margin-left:1vw;
    text-align:left;
    font-size:1.5vh;
    text-shadow: 0.25px 0.25px;
    width:10vw;
    @media ${device.laptop}{
        font-size:0.5vh;
        
    }
    
    
    
`
const CardHeader = styled.div`
    font-size:2.5vh;
    margin-top:1vh;
    margin-bottom:1vh;
    margin-left:2vw;
    text-shadow: 0.25px 0.25px;
    
    height:3.0vh;
    overflow:hidden;
    @media ${device.laptop}{
        font-size:1.5vh;
        margin-bottom:0;
    }
`
const CardHeader2 = styled.div`
    font-size:2vh;
    text-shadow: 0.25px 0.25px;
    margin-top:3vh;
    @media ${device.laptop}{
        margin-top:1vh;
        font-size:1.5vh;
    }
    @media ${device.mobileL}{
        font-size:1.25vh;
        
    }
    
`
const CardEmpty = styled.div`
    font-size:5vh;
    margin:auto;
    margin-top:10vh;
    margin-left:30vw;
    @media ${device.laptop}{
        margin-top:3vh;
        font-size:3vh;
        margin-left:15vw;
    }
    @media ${device.mobileL}{
        margin-top:3vh;
        font-size:2vh;
        margin-left:10vw;
    }
`
//deck

const Deck = styled.div`
    width:12vw;
    margin:0vh 2vw 0vh 2vw;
    font-size:1.5vh;
    height:55vh;
    text-align:center;
    background-color:transparent;
    border:none;
    @media ${device.laptop}{
        height:30vh;
        width:30vw;
    }
    @media ${device.mobileL}{
        height:30vh;
        width:50vw;
    }
    
    
`

const DeckImage = styled.img`
    width:15vw;
    border-radius:10px;
    margin-bottom:1vh;
    margin-top:2vh;
    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
    &:hover{
        -webkit-transform: scale(1.1);
	    transform: scale(1.1);
    }
    @media ${device.laptop}{
        width:20vw;
    }
    @media ${device.mobileL}{
        margin-top:1vh;
        width:30vw;
    }
    
`
const DeckHeader = styled.div`
    width:15vw;
    background-color:#F8F8F8;
    font-size:2vh;
    border: solid 2px #bfbfbf;
    border-radius: 5px;
    padding-top:5px;
    padding-bottom:5px;
    margin:auto;
    color:black;
    text-shadow: 0.1px 0.1px;
    @media ${device.laptop}{
        font-size:1.0vh;
        width:20vw;
    }
    @media ${device.mobileL}{
        font-size:1.5vh;
        width:30vw;
    }
`

const DecklistItemHeader = styled.div`
    font-size:2vh;
    margin-left:1vw;
    overflow:hidden;
    height:2.5vh;
    width:10vw;
    @media ${device.laptop}{
        font-size:1.5vh;
        width:20vw;
        height:2vh;
    }
    @media ${device.laptop}{
        width:25vw;
        font-size:1.25vh;
        height:1.5vh;
    }

`

const DeckDisplay = styled.div`
    display:flex;
    width:84vw;
    flex-wrap:wrap;
    
    margin-top:2vh;
    @media ${device.laptop}{
        width:69vw;
    }
    @media ${device.mobileL}{
        width:54vw;
    }
`

//







const Styled = {
    Decklist,
    DecklistItem,
    DeckSelect,
    DeckSelectDrop,
    DeckDisplay,
    DecklistItemHeader,
    DeckSelectItem,
    SelectError,
    CloneModal,
    CloneModalHeader,
    ModalDeckButton,
    BannerDiv,
    Navbar,
    UserButtons,
    UserLogin,
    UserLoginDiv,
    AppDiv,
    DecklistDiv,
    MainDiv,
    SearchForm,
    SearchFormInput,
    SearchFormButton,
    SearchFormLabel,
    StyledCheckbox,
    CheckboxContainer,
    CheckBoxLabel,
    Icon,
    SearchFormInputCheckboxDiv,
    CardDisplay,
    Card,
    CardImage,
    CardButton,
    CardDescription,
    CardPopUp,
    CardInfo,
    CardInfoText,
    CardHeader,
    CardHeader2,
    CardEmpty,
    Deck,
    DeckImage,
    DeckHeader,
    AccountForm,
    AccountInput,
    AccountButton,
    AccountError,
    AccountHeaderMain,
    AccountHeader,
    DropInput,
    DropButton
}

export default Styled