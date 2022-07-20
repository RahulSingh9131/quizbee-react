import React from 'react'
import brandLogo from "../assests/bee.png";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user]=useAuthState(auth);
    const navigate=useNavigate();

    const logout=async()=>{
       await signOut(auth)
       navigate("/");
    }
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
                    <li>
                        {!user ?(
                            <Link to="/loginPage" className="btn">Login</Link>
                        ):(
                            <button className='logout-btn btn' onClick={logout}>Logout</button>
                        )}
                    </li>
                </ul>
            </div> 
        </div>
    </header>
  )
}

export default Header