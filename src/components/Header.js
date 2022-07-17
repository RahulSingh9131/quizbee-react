import React from 'react'
import brandLogo from "../assests/bee.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <img src={brandLogo} alt="Logo"/>
                <h3>QuizBee</h3>
            </div>
            <div className="links">
                <ul>
                    <li><a href="https://github.com/RahulSingh9131" target="blank">Github</a></li>
                    <li><a href="https://twitter.com/singhrahul3112" target="blank">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/rahul-singh-06b83917a/" target="blank">Linkedin</a></li>
                    <li><Link to="/loginPage" className="btn">Login</Link></li>
                </ul>
            </div> 
        </div>
    </header>
  )
}

export default Header