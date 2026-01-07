import React from "react";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Login = () => {
  return (
    <div className="login">
      <div className="login__center">
        <div className="login__style">
          <img src="" alt="" className="login__img" />
        </div>
        <div className="right__container">
          <div className="logo__wrapper">
            <img src="" alt="" className="logo__img" />
          </div>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Log In</button>
          </form>
          <h1 className="more__text">OR</h1>
          <div className="other__options">
            <FontAwesomeIcon icon={faFacebook} />
            <h2 className="facebook__text">
                Log in with Facebook
            </h2>
          </div>
          <h2 className="forgot">Forgot Password?</h2>
          <h2 className="create__option">Don't have an account? <span className="signup__btn">Sign Up</span></h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
