import React from "react";
import {
  faCircleHalfStroke
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import leftImg from "../../assets/login-img.png";
import logoImg from "../../assets/instagram-logo.png";
import SignIn from "../../components/SignIn";
import Footer from "../../components/Footer";

const Login = ({colorChange}) => {

  return (
    <div className='login-page'>
      <div className="login__note">
        <h1>YOU CAN CREATE YOUR OWN ACCOUNT OR USE
          <br />
          EMAIL: test456@test.com
          <br />
          PASSWORD: test123456789
        </h1>
      </div>
      <FontAwesomeIcon className='contrast-icon' icon={faCircleHalfStroke} onClick={colorChange} />
    <div className="login">
      <div className="login__container">
        <div className="login__style">
          <img src={leftImg} alt="" className="login__img" />
        </div>
        <div className="right__container">
          <SignIn />
        </div>
      </div>
    </div>
      <Footer className="footer-1"/>
    </div>
  );
};

export default Login;
