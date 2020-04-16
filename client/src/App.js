import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {home, account, decklists, viewDeck} from "./pages"
import {Navbar, Decklist, AppDiv} from "./components"
import Styled from "./style/styled"
import "./style/index.css";

 


function App() {

  
  return (
    <>
    <Router>
      <Styled.BannerDiv></Styled.BannerDiv>
      <Navbar></Navbar>
      <Styled.AppDiv>
      
      <Styled.MainDiv>
      <Switch>
        <Route path="/" exact component = {home}/>
        <Route path="/account" exact component = {account}/>
        <Route path="/decklists" exact component = {decklists}/>
        <Route path="/viewDeck/:id/:view" exact component = {viewDeck}/>
      </Switch>
      </Styled.MainDiv>
      <Decklist></Decklist>
      
      </Styled.AppDiv>
    </Router>
    </>
  );
}

export default App;
