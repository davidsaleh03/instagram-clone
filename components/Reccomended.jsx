import React from "react";
import homeuser from "../assets/home-user";
import profilePic from "../assets/profile.png";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark
} from "@fortawesome/free-regular-svg-icons";
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Reccomended.css'
import image from '../assets/images-13.jpg'

const Reccomended = () => {
  return (
    <div className="reccomended">
      <div className="post">
        <div className="post__top">
          <figure className="profile__pic--1">
            <img src={profilePic} alt="" className="profile__img--1" />
          </figure>
          <div className="top__description">
            <div className="top__top">
                <div className="top__left">
              <div className="post__username">daily.insta</div>•
              <div className="post__time">2d</div>•
              <div className="follow__btn">Follow</div>
                <div className="top__right">
                    <FontAwesomeIcon className="post__icon" icon={faEllipsis} />
                </div>
                </div>
            <div className="top__bottom">Suggested For You</div>
            </div>
          </div>
        </div>
        <figure className="post__pic">
          <img src={image} alt="" className="post__img" />
        </figure>
        <div className="post__bottom">
          <div className="bottom__top">
            <div className="bottom-left">
              <FontAwesomeIcon className="post__icon" icon={faHeart} />
              <FontAwesomeIcon className="post__icon" icon={faComment} />
              <FontAwesomeIcon className="post__icon" icon={faPaperPlane} />
            </div>
            <div className="bottom-right">
              <FontAwesomeIcon className="post__icon" icon={faBookmark} />
            </div>
          </div>
          <div className="bottom__lower">
            <div className="lower__likes">10,000 Likes</div>
            <div className="username__lower">daily.insta</div>
            <div className="lower__comments">View all 30,200 comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reccomended;
