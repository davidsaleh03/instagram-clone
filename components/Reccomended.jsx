import React, { useState } from "react";
import homeuser from "../assets/home-user";
import profilePic from "../assets/healthy__img.jpg";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark
} from "@fortawesome/free-regular-svg-icons";
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Reccomended.css'
import image from '../assets/healthy__post.jpg'
import CommentsModal from "./CommentsModal";
import { Link } from "react-router-dom";

const Reccomended = ({onOpenComments}) => {
  
  return (
    <>
    <div className="reccomended">
        {
            homeuser.posts.map((post, index) => {
                return <div className="post" key={index}>
        <div className="post__top">
          <Link to={`/profile/${post.username}`}>
          <figure className="profile__pic--1">
            <img src={post.image2} alt="" className="profile__img--1" />
          </figure>
          </Link>
          <div className="top__description">
            <div className="top__top">
                <div className="top__left--container">
                <div className="top__left">
              <Link to={`/profile/${post.username}`}>
              <div className="post__username">{post.username}</div>
              </Link>    
              <div className="post__time">• 2d •</div>
              <div className="follow__btn cursor-no">Follow</div>
                </div>
                <div className="top__right">
                    <FontAwesomeIcon className="post__icon icon-1 cursor-no" icon={faEllipsis} />
                </div>
                </div>
            <div className="top__bottom">Suggested For You</div>
            </div>
          </div>
        </div>
        <figure className="post__pic">
          <img src={post.poster} alt="" className="post__img" />
        </figure>
        <div className="post__bottom">
          <div className="bottom__top">
            <div className="bottom-left">
              <FontAwesomeIcon className="post__icon icon-left cursor-no" icon={faHeart} />
              <FontAwesomeIcon className="post__icon icon-left cursor-option" onClick={() => onOpenComments(post)} icon={faComment} />
              <FontAwesomeIcon className="post__icon icon-left cursor-no" icon={faPaperPlane} />
            </div>
            <div className="bottom-right">
              <FontAwesomeIcon className="post__icon cursor-no" icon={faBookmark} />
            </div>
          </div>
          <div className="bottom__lower">
            <div className="lower__likes">10,000 likes</div>
            <div className="username__lower">{post.username}<span className="user-content">   {post.caption}</span></div>
            <div className="lower__comments cursor-option" onClick={() => onOpenComments(post)}>View all 10 comments</div>
          </div>
        </div>
      </div>
            })
        }
    </div>
    </>
  );
};

export default Reccomended;
