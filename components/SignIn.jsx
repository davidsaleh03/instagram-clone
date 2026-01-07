
import './SignInUp.css'

import React, { useState } from 'react'
import leftImg from "../assets/login-img.png";
import logoImg from "../assets/instagram-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
  const [log, setLog] = useState(false);
  
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
          <input type="name" placeholder="Name" required/>
          <input type="username" placeholder="Username" required/>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
          <button>Sign Up</button>
        </form>
        <div className="more__text">OR</div>
        <div className="other__options text__2">
          <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
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
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
          <button>Log In</button>
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