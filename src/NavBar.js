import React from 'react';


const NavBar = (props) => {
    return (
      <div>
            <header>
            <img src="/images/logo.png" alt="logo"/>
            
            <ul>
            <li className="navLink">
              <a href="/">HOME</a>
            </li>
            <li className="navLink">
              <a href="/menu" >MENU</a>
            </li>
            <li className="navLink">
            <a href="/welcome/aboutUs" >ABOUT US</a>
            </li>
            <li className="navLink">
            <a href="/welcome/concept" >CONCEPT</a>
            </li>
            <li className="navLink">
            <a href="/welcome/catering" >CATERING</a>
            </li>
            <li className="navLink">
            <a href="/welcome/contactUs" >CONTACT US</a>
            </li>
            <li className="navLink">
            <a href="/orderNow" >ORDER NOW</a>
            </li>
            </ul>

            <p>Call Us: xxxxxx0013</p>
            <button className="signIn">SIGN IN</button>

            </header>

            <body>
            <img src="/images/2.png" alt="Banner"/>
            </body>
            <footer>
              <a href="/">Press Release</a> 
              <br/>
              <a href="/">Terms & Conditions</a>
              <br/>
              <p> © 2020, All rights reserved - ABC Private Limited.</p>
            </footer>
        </div>
    )
}

export default NavBar;