import React from "react";
import "./ReelsComments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import homeuser from "../../assets/home-user";

const ReelsComments = () => {
  return (
    <div className="comments__area">
        {
            homeuser.reels.map()
        }
      <figure className="comment__profile"></figure>
      <div className="comment">
        <div className="comment__top">
          <h1>username</h1>
          <h1 className="comment__content">here</h1>
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
};

export default ReelsComments;
