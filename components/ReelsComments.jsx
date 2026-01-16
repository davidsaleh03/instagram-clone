import React from "react";
import "./ReelsComments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faFaceGrinBeam
} from "@fortawesome/free-regular-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import profileImg from "../assets/profile.png";

const ReelsComments = ({ comments, close }) => {
  return (
    <>
    <div className="comments__top">
                <FontAwesomeIcon className="comment__icon cursor-option" onClick={close} icon={faXmark} />
                <h1>Comments</h1>
                </div>
                <div className="reels__comarea">
                <div className="comments__area">
      {comments.map((comment, index) => {
        return (
          <div className="comments__actual" key={index}>
            <figure className="comment__profile">
              <img src={profileImg} alt="" className="comment__img" />
            </figure>
            <div className="comment">
              <div className="comment__top">
                <h1>{comment.username}</h1>
                <h1 className="comment__content">{comment.text}</h1>
                <h1>
                  30 likes<span className="margin-left--span">reply</span>
                </h1>
              </div>
              <div className="comment__bottom">
                <h1>View all replies</h1>
              </div>
            </div>
            <FontAwesomeIcon className="comment__icon" icon={faHeart} />
          </div>
        );
      })}
    </div>
                </div>
                <div className="comment__bottom--one">
                    <figure className="add__profile">
                        <img src={profileImg} alt="" className="add__img" />
                    </figure>
                    <h1>Add a comment...</h1>
                    <FontAwesomeIcon icon={faFaceGrinBeam} />
                </div>
    </>
  );
};

export default ReelsComments;
