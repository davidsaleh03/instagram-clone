import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faHeart } from "@fortawesome/free-solid-svg-icons";
import profileImg from "../assets/profile.png";
import './CommentsModal.css'

const CommentsModal = ({ post, onClose }) => {
  return (
    <div className="comments__area--2">
      <div className="comments__area--left">
        <figure className="comment__area--figure">
          <img src={post.poster} alt="" className="comment__area--img1" />
        </figure>
      </div>
      <div className="comments__area-right">
        <div className="comments__area--top">
          <figure className="comments__top--profile">
            <img
              src={post.image}
              alt=""
              className="comments__top--profileimg"
              onClick={onClose}
            />
          </figure>
          <div className="comments__username--follow">
          <h1>{post.username}</h1>
          <h1>•</h1>
          <h1>Follow</h1>
          </div>
        </div>
        <div className="comments__area--middle1">
        {post.comments.map((comment, index) => {
          return (
            <div className="comments__actual" key={index}>
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
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
