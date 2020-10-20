import React from 'react';


const NavBar = (props) => {
    return (
        <header>
        <h1>Delicious Delights</h1>
        <p>Call Us: 9987770013</p>
        <button>SIGN IN</button>

        <ul>
        <li className="navLink">
          <a href="/">HOME</a>
        </li>
        <li className="navLink">
          <a href="/api/orders" >MENU</a>
        </li>
        <li className="navLink">
        <a href="/" >ABOUT US</a>
        </li>
        <li className="navLink">
        <a href="/" >CONCEPT</a>
        </li>
        <li className="navLink">
        <a href="/" >CATERING</a>
        </li>
        <li className="navLink">
        <a href="/" >CONTACT US</a>
        </li>
        <li className="navLink">
        <a href="/" >ORDER NOW</a>
        </li>
        </ul>

        <img src="/images/1.png" alt="Banner"/>
        </header>  
    )
}

export default NavBar;