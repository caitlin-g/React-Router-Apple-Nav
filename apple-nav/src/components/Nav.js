import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => {
    return <div>
        <div>
            <div>
                <Link to="/"> Apple Logo </Link>
            </div>
            <div>
                <Link to="/mac"> Mac </Link>
            </div>
            <div>
                <Link to="/ipad"> IPad </Link>
            </div>
            {/* <div>
                <Link to="/iphone"> IPhone </Link>
            </div>
            <div>
                <Link to="/watch"> Watch </Link>
            </div>
            <div>
                <Link to="/tv"> TV </Link>
            </div>
            <div>
                <Link to="/music"> Music </Link>
            </div>
            <div>
                <Link to="/support"> Support </Link>
            </div>
            <div>
                <Link to="/search"> Search </Link>
            </div>
            <div>
                <Link to="/cart"> Cart </Link> */}
            {/* </div> */}
        </div>
    </div>;
};
export default Nav;