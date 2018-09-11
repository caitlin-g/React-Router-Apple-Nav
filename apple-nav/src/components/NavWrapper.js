import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./Nav"

const NavContainer = {
    display: flex
}

const NavWrapper = () => {
    return (
    <NavContainer> 
        <Nav/>
    </NavContainer>);
};

export default NavWrapper;
