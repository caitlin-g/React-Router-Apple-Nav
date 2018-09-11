import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css'; 
import Home from "./components/Home";
import Mac from "./components/Mac";
import Ipad from "./components/Ipad";
import NavWrapper from "./components/NavWrapper";



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper />
        <Route exact path="/" component={Home} />
        <Route exact path="/mac" component={Mac} />
        <Route exact path="/ipad" component={Ipad} />
      </div>
    );
  }
}

export default App;