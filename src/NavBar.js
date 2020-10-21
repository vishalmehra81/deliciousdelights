import React, {Fragment} from 'react';


const NavBar = (props) => {
    return (
      <Fragment>
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
        </Fragment>
    )
}

export default NavBar;