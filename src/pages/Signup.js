import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import useDocumentTitle from '../hooks/useDocumentTitle';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "../css/main.css";
import { auth, firestore } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';


const Signup = () => {
    const [type,setType]=useState("password");
    const [confirmtype,setConfirmType]=useState("password");
    const [error,setError]=useState("");
    const [signupForm,setSignupForm]=useState({
        email:"",
        password:"",
        confirmPassword:"",
    })
    const [
        createUserWithEmailAndPassword,
        userCred,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate=useNavigate();

    useDocumentTitle("Signup");

    const onChange=(e)=>{
        setSignupForm((prev)=>({
            ...prev,
            [e.target.name]:e.target.value,
        }))
    }

    const showPass=()=>{
        if(type==="password"){
            setType("text");
        }else{
            setType("password");
        }
    }
    const showConfirmPass=()=>{
        if(confirmtype==="password"){
            setConfirmType("text");
        }else{
            setConfirmType("password");
        }
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        if(error) setError("");
        if(signupForm.password!==signupForm.confirmPassword){
            setError("password does not matched!!");
            return;
        }
        createUserWithEmailAndPassword(signupForm.email,signupForm.password);
    }

    const createUserDocument=async (user)=>{
        const userDocRef=doc(firestore,"users",user?.uid);
        await setDoc(userDocRef,JSON.parse(JSON.stringify(user)));
    };

    useEffect(()=>{
        if(userCred){
            createUserDocument(userCred.user);
            navigate("/settings");
        }
    },[userCred,navigate])

  return (
    <div className='signup'>
        <section className="signup-section">
        <div className="signup-container container ">
            <form onSubmit={onSubmit}>
                <h1>SignUp</h1>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="abc@gmail.com" value={signupForm.email} onChange={onChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <div className="fas fa-eye-slash password-icon" onClick={showPass}></div>
                    <input type={type} id="password" name="password" placeholder="enter password" value={signupForm.password} onChange={onChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <div className="fas fa-eye-slash password-icon" onClick={showConfirmPass}></div>
                    <input type={confirmtype} id="confirm-password" name="confirmPassword" placeholder="confirm password" value={signupForm.confirmPassword} onChange={onChange}/>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" id="remember"/>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button className="login-btn btn-primary" >create new account</button>
                <small className="flex center-text"><Link to="/loginPage" className="sign-up-link">Already have an account?</Link></small>
            </form>
            {error!=="" && <small className='error'>{error}</small>}
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Signup