import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import './Your.css'

const YourSaved = () => {
  return (
    <div className="YourPosts">
      <figure className="camera__figure">
        <FontAwesomeIcon className="camera__icon" icon={faBookmark} />
      </figure>
      <h1>Save</h1>
      <p>Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.</p>
    </div>
  );
};

export default YourSaved;
