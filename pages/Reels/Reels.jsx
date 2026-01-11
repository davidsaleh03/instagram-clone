import React from "react";
import "./Reels.css";
import video from "../../assets/study.smart.mp4";
import homeuser from "../../assets/home-user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import ReelsComments from "../../components/ReelsComments";

const Reels = () => {
  return (
    <div className="reels">
      <div className="reels__content">
        {homeuser.reels.map((reel, index) => {
          return (
            <div className="reel" key={index}>
              <figure className="reel__figure">
                <video
                  src={reel.reel}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="reel__video"
                />
              </figure>
              <div className="reel__description">
                <div className="description__top">
                  <figure className="reel__figure--prof">
                    <img
                      src={reel.image}
                      alt=""
                      className="reel__figure--pic"
                    />
                  </figure>
                  <h1 className="top-h1-margin">{reel.username}</h1>
                  <h1>•</h1>
                  <h1>Follow</h1>
                </div>
                <div className="description__middle">
                  <h1>{reel.caption}</h1>
                </div>
                <div className="description__bottom">
                  <FontAwesomeIcon
                    className="description__icon"
                    icon={faMusic}
                  />
                  <h1 className="h1-margin-1">{reel.username} •</h1>
                  <h1>Original Audio</h1>
                </div>
              </div>
              <div className="reel__side">
                <div className="top__side--reel">
                <FontAwesomeIcon className="reel__icon" icon={faHeart} />
                <h1>14</h1>
                <FontAwesomeIcon className="reel__icon" icon={faComment} />
                <h1>5</h1>
                <FontAwesomeIcon className="reel__icon" icon={faPaperPlane} />
                <FontAwesomeIcon className="reel__icon" icon={faBookmark} />
                </div>
                <>
                <FontAwesomeIcon className="reel__icon" icon={faEllipsis} />
                <figure className="side__profile">
                    <img src={reel.image} alt="" className="side__profile--img" />
                </figure>
                </>
              </div>
              <div className="reel__comments">
                <div className="comment__top">
                <FontAwesomeIcon className="comment__icon" icon={faXmark} />
                <h1>Comments</h1>
                </div>
                <div className="reels__comarea">
                <ReelsComments comments={reel.comments} className='reels-comments'/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reels;
