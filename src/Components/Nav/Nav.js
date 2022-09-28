import React from 'react';
import logo from './logo.jpg'
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav-container'>
            <img src={logo} alt="" />
            <div className='nav-menu'>
                <a href="/home">Home</a>
                <a href="/shopping">Games</a>
                <a href="/services">Blog</a>
                <a href="/about">About Us</a>


            </div>
        </div>
    );
};

export default Nav;