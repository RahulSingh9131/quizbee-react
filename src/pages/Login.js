import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import useDocumentTitle from '../hooks/useDocumentTitle';
import "../css/main.css";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';


const Login = () => {
    const [inputForm,setInputForm]=useState({
        email:"",
        password:"",
    })

    const [
        signInWithEmailAndPassword,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();

    const onChange=(e)=>{
        setInputForm((prev)=>({
            ...prev,
            [e.target.name]:e.target.value,
        }))
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(inputForm.email,inputForm.password);
        navigate("/settings");
    }

    useDocumentTitle("Login")
  return (
    <div className='login'>
        <section className="login-section">
            <div className="login-container container ">
                <form onSubmit={onSubmit}>
                    <h1>LogIn</h1>
                    <div className="form-control">
                        <label htmlFor="password">Email</label>
                        <input type="email" name="email" placeholder="abc@gmail.com" required value={inputForm.email} onChange={onChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="enter password" required value={inputForm.password} onChange={onChange} />
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button className="login-btn btn-primary" >LogIn</button>
                    <small className="flex">Don't have an account? <Link to="/signup" className="sign-up-link">Sign up</Link></small>
                </form>
                {error && <small className="error">{error.message}</small>}
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Login