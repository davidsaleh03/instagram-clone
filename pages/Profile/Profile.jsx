import React from "react";
import "./Profile.css";
import profile from "../../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faTableCells,
  faImagePortrait,
} from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay, faBookmark } from "@fortawesome/free-regular-svg-icons";

const Profile = () => {
  return (
    <div className="profile__page">
      <div className="profile__page--one">
        <div className="profile__top">
          <figure className="profile__top--figure">
            <img src={profile} alt="" className="profile__top--img" />
          </figure>
          <div className="profile__top--right">
            <div className="right__top">
              <h1>Username</h1>
              <h1 className="right__top--btn">Edit profile</h1>
              <h1 className="right__top--btn">View archive</h1>
              <FontAwesomeIcon icon={faGear} />
            </div>
            <div className="profile__middle">
              <h1>
                <span className="bold">0</span>posts
              </h1>
              <h1>
                <span className="bold">0</span>followers
              </h1>
              <h1>
                <span className="bold">0</span>following
              </h1>
            </div>
            <div className="profile__bottom">
              <h1>Name here</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__page--content">
        <div className="profile__page--icons">
          <FontAwesomeIcon
            className="profile__page--icon"
            icon={faTableCells}
          />
          <FontAwesomeIcon className="profile__page--icon" icon={faBookmark} />
          <FontAwesomeIcon
            className="profile__page--icon"
            icon={faImagePortrait}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
