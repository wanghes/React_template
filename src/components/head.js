import React from 'react';
import { Link, NavLink } from "react-router-dom";

import "../scss/head.scss";

class Head extends React.Component {
    render() {
        return (
            <div className="header">
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/user" activeClassName="active">User</NavLink>
                <NavLink to="/book" activeClassName="active">Book</NavLink>
            </div>
        )
    }
}

export default Head;
