import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faFaceGrinBeam } from "@fortawesome/free-regular-svg-icons";
import profileImg from "../assets/profile.png";
import './CommentsModal.css'
import { Link } from "react-router-dom";

const ReelModal = ({reels, onClose}) => {
  return (
     <div className="modal__overlay">

    <div className="comments__area--2">
      <div className="comments__area--left">
        <figure className="comment__area--figure1">
            <video src={reels.reel} className="comment__area--video1"></video>
        </figure>
      </div>
      <div className="comments__area-right">
        <div className="comments__area--top">
            <Link to={`/profile/${reels.username}`}>
          <figure className="comments__top--profile">
            <img
              src={reels.image}
              alt=""
              className="comments__top--profileimg"
              onClick={onClose}
            />
          </figure>
            </Link>
          <div className="comments__username--follow">
            <Link to={`/profile/${reels.username}`}>
          <h1>{reels.username}</h1>
            </Link>
          <h1>•</h1>
          <h1 className='cursor-no'>Follow</h1>
          <FontAwesomeIcon className="closeIcon cursor-option" onClick={onClose}icon={faX} />
          </div>
        </div>
        <div className="comments__area--middle1">
        {reels.comments.map((comment, index) => {
          return (
            <div className='comments__actual-2' key={index}>
            <div className="comments__actual-1" >
              <figure className="figure__profile--comments1">
                <img
                  src={profileImg}
                  alt=""
                  className="profile__commentsimg--1"
                />
              </figure>
              <div className="comments1-middle">
                <h1 className="comments1__username">{comment.username}</h1>
                <h1 className="comments1__caption">{comment.text}</h1>
                <div className="reply-1__section">
                  <h1>30 likes</h1>
                  <h1>Reply</h1>
                </div>
                <h1 className="view__more-1">View All Replies</h1>
              </div>
            </div>
            <FontAwesomeIcon className='comments__actual--icon' icon="fa-regular fa-heart" />
            </div>
          );
        })}
        </div>
        <div className="comment__bottom--one new-one">
                    <figure className="add__profile">
                        <img src={profileImg} alt="" className="add__img" />
                    </figure>
                    <h1 className='more-two'>Add a comment...</h1>
                    <FontAwesomeIcon icon={faFaceGrinBeam} />
                </div>
      </div>
    </div>
    </div>
  )
}

export default ReelModal