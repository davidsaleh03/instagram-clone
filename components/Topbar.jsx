import "./Topbar.css";
import {
  faBars,
  faCircleHalfStroke,
  faCirclePlay,
  faCompass,
  faHeart,
  faHouse,
  faMagnifyingGlass,
  faPaperPlane,
  faPlus,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImg from "../assets/instagram-logo.png";
import profile from "../assets/profile.png";
import "./Sidebar.css";
import logoSmall from "../assets/instaicon.png";
import React from "react";
import { logout } from "../firebase";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="sidebar-top">
      <figure className="sidebar-top__figure">
        <img src={logoImg} alt="" className="sidebar-top__img" />
        <FontAwesomeIcon className='sidebar-top__icons' onClick={logout} icon={faArrowRightFromBracket} />
        <FontAwesomeIcon className='sidebar-top__icons' icon={faCircleHalfStroke} />
      </figure>
      <div className="sidebar-top__search">
        <FontAwesomeIcon className='sidebar-top__icon' icon={faMagnifyingGlass} />
        <h1>Search</h1>
      </div>
    </div>
  );
};

export default Topbar;
