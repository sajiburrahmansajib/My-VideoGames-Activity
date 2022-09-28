import React from 'react';
import logo from './logo.jpg'
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav-container'>
            <div className='logo-info'>
                <img src={logo} alt="" />
                <h2>My VideGame Activity</h2>
            </div>

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