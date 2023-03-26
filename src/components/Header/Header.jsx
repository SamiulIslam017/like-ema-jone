import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <div className="logo">
                    <img src={logo}  />
                </div>
                <div className="menu-items">
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/login">Log In</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;