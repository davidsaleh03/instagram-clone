import React from "react";
import "./LoadingReel.css";

const LoadingReel = () => {
  return (
    <div className="reels">
      <div className="reels__content">
        <div className="reel">
          <div className="skeleton-reel shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingReel;
