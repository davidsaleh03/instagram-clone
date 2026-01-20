import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faFaceGrinBeam } from "@fortawesome/free-regular-svg-icons";
import profileImg from "../assets/profile.png";
import './CommentsModal.css'
import { Link } from "react-router-dom";

const CommentsModal = ({ post, onClose }) => {
  return (
    <div className="modal__overlay">

    <div className="comments__area--2">
      <div className="comments__area--left">
        <figure className="comment__area--figure">
          <img src={post.poster} alt="" className="comment__area--img1" />
        </figure>
      </div>
      <div className="comments__area-right">
        <div className="comments__area--top">
            <Link to={`/profile/${post.username}`}>
          <figure className="comments__top--profile">
            <img
              src={post.image2}
              alt=""
              className="comments__top--profileimg"
              onClick={onClose}
            />
          </figure>
            </Link>
          <div className="comments__username--follow">
            <Link to={`/profile/${post.username}`}>
          <h1>{post.username}</h1>
            </Link>
          <h1>•</h1>
          <h1 className='cursor-no'>Follow</h1>
          <FontAwesomeIcon className="closeIcon cursor-option" onClick={onClose}icon={faX} />
          </div>
        </div>
        <div className="comments__area--middle1">
        {post.comments.map((comment, index) => {
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
                  <h1 className='cursor-no'>Reply</h1>
                </div>
                <h1 className="view__more-1 cursor-no">View All Replies</h1>
              </div>
            </div>
            <FontAwesomeIcon className='comments__actual--icon cursor-no' icon="fa-regular fa-heart" />
            </div>
          );
        })}
        </div>
        <div className="comment__bottom--one new-one">
                    <figure className="add__profile">
                        <img src={profileImg} alt="" className="add__img" />
                    </figure>
                    <h1 className='more-two'>Add a comment...</h1>
                    <FontAwesomeIcon className='faceIcon' icon={faFaceGrinBeam} />
                </div>
      </div>
    </div>
    </div>
  );
};

export default CommentsModal;
