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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImg from "../assets/instagram-logo.png";
import profile from "../assets/profile.png";
import "./Sidebar.css";
import logoSmall from "../assets/instaicon.png";
import React, { useState } from "react";
import { logout } from "../firebase";
import { Link } from "react-router-dom";
import NotificationSideBar from "./NotificationSideBar";

function Sidebar() {
  const [modalOpen, isModalOpen] = useState(false);

function openLikes() {
  isModalOpen(prev => !prev);
}

  return (
    <>
      <div id='sidebar-width' className="sidebar">
        <figure className="img__logo">
          <img src={logoImg} alt="" className="insta__logo" />
        </figure>
        <figure className="img__logo--small">
          <img src={logoSmall} alt="" className="insta__logo--small" />
        </figure>
        <ul className="side__links">
          <Link to="/">
            <li className="side__link">
              <FontAwesomeIcon icon={faHouse} className="side__icon" />
              <h1>Home</h1>
            </li>
          </Link>
          <li className="side__link no-cursor">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="side__icon" />
            <h1>Search</h1>
          </li>
          <Link to="/explore">
            <li className="side__link">
              <FontAwesomeIcon icon={faCompass} className="side__icon" />
              <h1>Explore</h1>
            </li>
          </Link>
          <Link to="/reels">
            <li className="side__link">
              <FontAwesomeIcon icon={faCirclePlay} className="side__icon" />
              <h1>Reels</h1>
            </li>
          </Link>
          <Link to="/messages">
            <li className="side__link">
              <FontAwesomeIcon icon={faPaperPlane} className="side__icon" />
              <h1>Messages</h1>
            </li>
          </Link>
          <li className="side__link">
            <FontAwesomeIcon icon={faHeart} onClick={openLikes} className="side__icon" />
            <h1>Notifications</h1>
          </li>
          <li className="side__link no-cursor">
            <FontAwesomeIcon icon={faPlus} className="side__icon" />
            <h1>Create</h1>
          </li>
          <Link to="/profile">
            <li className="side__link link-1">
              <figure className="profile__pic">
                <img src={profile} alt="" className="profile__img" />
              </figure>
              <h1>Profile</h1>
            </li>
          </Link>
        </ul>
        <ul className="side__bottom">
          <Link to="/profile/daily_nutrition">
            <li className="bottom__link">
              <FontAwesomeIcon icon={faBars} className="side__icon" />
              <h1>More</h1>
            </li>
          </Link>
          <li className="bottom__link">
            <FontAwesomeIcon
              icon={faCircleHalfStroke}
              onClick={logout}
              className="side__icon"
            />
            <h1>Display</h1>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <ul className="side__links--bottom">
          <Link to="/" className='side__link--bottom'>
            <li className="side__link">
              <FontAwesomeIcon icon={faHouse} className="side__icon" />
            </li>
          </Link>
          <Link to="/explore" className='side__link--bottom'>
            <li className="side__link">
              <FontAwesomeIcon icon={faCompass} className="side__icon" />
            </li>
          </Link>
          <Link to="/reels" className='side__link--bottom'>
            <li className="side__link">
              <FontAwesomeIcon icon={faCirclePlay} className="side__icon" />
            </li>
          </Link>
          <Link to="/messages" className='side__link--bottom'>
            <li className="side__link">
              <FontAwesomeIcon icon={faPaperPlane} className="side__icon" />
            </li>
          </Link>
          <Link className='side__link--bottom'>
            <li className="side__link no-cursor">
              <FontAwesomeIcon icon={faPlus} className="side__icon" />
            </li>
          </Link>
          <Link to="/profile" className='side__link--bottom'>
            <li className="side__link link-1">
              <figure className="profile__pic">
                <img src={profile} alt="" className="profile__img" />
              </figure>
            </li>
          </Link>
        </ul>
      </div>
      {
        modalOpen && <NotificationSideBar closeModal={openLikes}/>
      }
    </>
  );
}

export default Sidebar;
