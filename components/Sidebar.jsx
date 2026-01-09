import { faBars, faCircleHalfStroke, faCirclePlay, faCompass, faHeart, faHouse, faMagnifyingGlass, faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoImg from "../assets/instagram-logo.png";
import profile from "../assets/profile.png"
import './Sidebar.css'
import logoSmall from "../assets/instaicon.png"
import React from 'react'
import { logout } from '../firebase';

function Sidebar() {
  return (
    <div className="sidebar">
        <figure className="img__logo">
            <img src={logoImg} alt="" className="insta__logo" />
        </figure>
        <figure className="img__logo--small">
            <img src={logoSmall} alt="" className="insta__logo--small" />
        </figure>
        <ul className="side__links">
            <li className="side__link">
                <FontAwesomeIcon icon={faHouse} className="side__icon" />
                <h1>Home</h1>
            </li>
            <li className="side__link">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="side__icon" />
                <h1>Search</h1>
            </li>
            <li className="side__link">
                <FontAwesomeIcon icon={faCompass} className="side__icon" />
                <h1>Explore</h1>
            </li>
            <li className="side__link">
                <FontAwesomeIcon icon={faCirclePlay} className="side__icon" />
                <h1>Reels</h1>
            </li>
            <li className="side__link">
                <FontAwesomeIcon icon={faPaperPlane} className="side__icon" />
                <h1>Messages</h1>
            </li>
            <li className="side__link">
                <FontAwesomeIcon icon={faHeart} className="side__icon" />
                <h1>Notifications</h1>
            </li>
            <li className="side__link">
                <FontAwesomeIcon icon={faPlus} className="side__icon" />
                <h1>Create</h1>
            </li>
            <li className="side__link link-1">
                <figure className="profile__pic">
                    <img src={profile} alt="" className="profile__img" />
                </figure>
                <h1>Profile</h1>
            </li>
        </ul>
        <ul className="side__bottom">
            <li className="bottom__link">
               <FontAwesomeIcon icon={faBars} className="side__icon" />
                <h1>More</h1> 
            </li>
            <li className="bottom__link">
                <FontAwesomeIcon icon={faCircleHalfStroke} onClick={logout}className="side__icon" />
                <h1>Display</h1> 
            </li>
        </ul>
    </div>
  )
}

export default Sidebar