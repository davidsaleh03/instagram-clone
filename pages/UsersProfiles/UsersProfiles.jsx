import React from 'react'
import './UserProfiles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faGear,
  faTableCells,
  faImagePortrait,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Footer from '../../components/Footer';
import homeuser from '../../assets/home-user.js'
import { useParams } from 'react-router-dom';

const UsersProfiles = () => {
    const [activeIcon, setActiveIcon] = useState("posts");
    const {username} = useParams()

    const userPosts = homeuser.posts.filter(
    (post) => post.username === username
  );
  const user = userPosts[0];
  return (
    <div className="profile__page">
      <div className="profile__page--one">
        <div className="profile__top">
          <figure className="profile__top--figure">
            <img src={user.image} alt="" className="profile__top--img" />
          </figure>
          <div className="profile__top--right">
            <div className="right__top">
              <h1>{user.username}</h1>
              <h1 className="right__top--btn">Edit profile</h1>
              <h1 className="right__top--btn">View archive</h1>
              <FontAwesomeIcon icon={faGear} />
            </div>
            <div className="profile__middle">
              <h1>
                <span className="bold">5</span>posts
              </h1>
              <h1>
                <span className="bold">{user.followers}</span>followers
              </h1>
              <h1>
                <span className="bold">{user.following}</span>following
              </h1>
            </div>
            <div className="profile__bottom">
              <h1>{user.name}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__page--content">
        <div className="profile__page--icons">
          <div
            className={`icon__wrapper ${
              activeIcon === "posts" ? "active" : ""
            }`}
            onClick={() => setActiveIcon("posts")}
          >
            <FontAwesomeIcon
              className="profile__page--icon"
              icon={faTableCells}
            />
          </div>
          <div
            className={`icon__wrapper ${
              activeIcon === "saved" ? "active" : ""
            }`}
            onClick={() => setActiveIcon("saved")}
          >
            <FontAwesomeIcon className="profile__page--icon" icon={faCirclePlay}/>
          </div>
          <div
            className={`icon__wrapper ${
              activeIcon === "tagged" ? "active" : ""
            }`}
            onClick={() => setActiveIcon("tagged")}
          >
            <FontAwesomeIcon
              className="profile__page--icon"
              icon={faImagePortrait}
            />
          </div>
        </div>
      </div>
      <div className="profile__page--sections">
      
      </div>
      <div className="footer__section">
      <Footer />
      </div>
    </div>
  );
}

export default UsersProfiles