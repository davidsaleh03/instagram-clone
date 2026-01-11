import React from "react";
import "./ReelsComments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import profileImg from "../assets/profile.png";

const ReelsComments = ({ comments }) => {
  return (
    <div className="comments__area">
      {comments.map((comment) => {
        return (
          <div className="comments__actual" key={comment.index}>
            <figure className="comment__profile">
              <img src={profileImg} alt="" className="comment__img" />
            </figure>
            <div className="comment">
              <div className="comment__top">
                <h1>{comment.username}</h1>
                <h1 className="comment__content">{comment.text}</h1>
                <h1>
                  30 likes<span>reply</span>
                </h1>
              </div>
              <div className="comment__bottom">
                <h1>View all comments</h1>
              </div>
            </div>
            <FontAwesomeIcon className="comment__icon" icon={faHeart} />
          </div>
        );
      })}
    </div>
  );
};

export default ReelsComments;
