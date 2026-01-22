import React, { useEffect, useState } from "react";
import "./Reels.css";
import video from "../../assets/study.smart.mp4";
import homeuser from "../../assets/home-user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faFaceGrinBeam
} from "@fortawesome/free-regular-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import ReelsComments from "../../components/ReelsComments";
import profileImg from "../../assets/profile.png";
import { Link } from "react-router-dom";
import LoadingReel from "../../components/LoadingReel";

const Reels = () => {
  const [selectedReel, setSelectedReel] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }, []);

  function openComments(reel) {
    setSelectedReel(reel);
  }

  function closeComments() {
    setSelectedReel(null);
  }

  if (loading) { return <LoadingReel />; }
  
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
                  <Link to={`/profile/${reel.username}`}>
                  <figure className="reel__figure--prof">
                    <img
                      src={reel.image}
                      alt=""
                      className="reel__figure--pic"
                    />
                  </figure>
                  </Link>
                  <Link to={`/profile/${reel.username}`}>
                  <h1 className="top-h1-margin">{reel.username}</h1>
                  </Link>
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
                <FontAwesomeIcon className="reel__icon cursor-no" icon={faHeart} />
                <h1>14</h1>
                <FontAwesomeIcon className="reel__icon cursor-option" onClick={() => openComments(reel)} icon={faComment} />
                <h1>5</h1>
                <FontAwesomeIcon className="reel__icon cursor-no" icon={faPaperPlane} />
                <FontAwesomeIcon className="reel__icon cursor-no" icon={faBookmark} />
                </div>
                <>
                <FontAwesomeIcon className="reel__icon cursor-no" icon={faEllipsis} />
                <Link to={`/profile/${reel.username}`}>
                <figure className="side__profile">
                    <img src={reel.image} alt="" className="side__profile--img" />
                </figure>
                </Link>
                </>
              </div>
              {
                selectedReel === reel && (
              <div className="reel__comments">
                <ReelsComments reel={selectedReel} close={closeComments} className='reels-comments'/>
              </div>
                )
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reels;
