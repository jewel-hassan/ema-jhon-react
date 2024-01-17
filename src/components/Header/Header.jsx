import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt="" srcset="" />
           <a href="/shop">Shop</a>
           <a href="/order">Order</a>
           <a href="/inverntory">Inverntory</a>
           <a href="/login">Login</a>
        </div>
    );
};

export default Header;