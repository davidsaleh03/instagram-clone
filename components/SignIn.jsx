
import './SignIn.css'

import React, { useState } from 'react'
import leftImg from "../assets/login-img.png";
import logoImg from "../assets/instagram-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { login, signup } from '../firebase';

const SignIn = () => {
  const [log, setLog] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    {
      log ? 
      await signup(name, username, email, password)
      :
      await login(email, password)
    }
  }
  
 function logState() {
  setLog((prevLog) => !prevLog)
 }
  
  return (
    <>
    {
      log ? 
      <>
      <div className="logo__wrapper">
          <img src={logoImg} alt="" className="logo__img" />
        </div>
        <form>
          <input value={name} type="name" placeholder="Name" onChange={(event) => {setName(event.target.value)}} required/>
          <input value={username} type="username" placeholder="Username" onChange={(event) => {setUsername(event.target.value)}} required/>
          <input value={email} type="email" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}} required/>
          <input value={password} type="password" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}} required/>
          <button onClick={user_auth}>Sign Up</button>
        </form>
        <div className="more__text">OR</div>
        <div className="other__options text__2">
          <FontAwesomeIcon icon={faFacebook}  className="facebook-icon" />
          <h2 className="facebook__text">Sign up with Facebook</h2>
        </div>
        <h2 className="create__option">
          Have an account? <span className="signup__btn" onClick={logState}>Sign In</span>
        </h2>
    </>
    :
    <>
      <div className="logo__wrapper">
          <img src={logoImg} alt="" className="logo__img" />
        </div>
        <form>
          <input value={email} type="email" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}} required/>
          <input value={password} type="password" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}} required/>
          <button onClick={user_auth}>Log In</button>
        </form>
        <div className="more__text">OR</div>
        <div className="other__options">
          <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          <h2 className="facebook__text">Log in with Facebook</h2>
        </div>
        <h2 className="forgot">Forgot Password?</h2>
        <h2 className="create__option">
          Don't have an account? <span className="signup__btn" onClick={logState}>Sign Up</span>
        </h2>
    </>
    }
    </>
  )
}

export default SignIn