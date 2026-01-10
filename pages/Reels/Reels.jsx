import React from "react";
import "./Reels.css";
import video from "../../assets/study.smart.mp4";

const Reels = () => {
  return (
      <div className="reels">
        <div className="reels__content">
            <div className="reel">
                <figure className="reel__figure">
                    <video src={video}></video>
                </figure>
            </div>
            <div className="reel">
                <figure className="reel__figure">
                    <video src={video}></video>
                </figure>
            </div>
            <div className="reel">
                <figure className="reel__figure">
                    <video src={video}></video>
                </figure>
            </div>
            <div className="reel">
                <figure className="reel__figure">
                    <video src={video}></video>
                </figure>
            </div>
        </div>
      </div>
  );
};

export default Reels;
