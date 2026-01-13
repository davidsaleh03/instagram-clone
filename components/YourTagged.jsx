import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImagePortrait} from "@fortawesome/free-solid-svg-icons";
import './Your.css'

const YourTagged = () => {
  return (
    <div className="YourPosts">
          <figure className="camera__figure">
            <FontAwesomeIcon className="camera__icon" icon={faImagePortrait} />
          </figure>
          <h1>Photos of you</h1>
          <p>When people tag you in photos, they'll appear here.</p>
        </div>
  )
}

export default YourTagged