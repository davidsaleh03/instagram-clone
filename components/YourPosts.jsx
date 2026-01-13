import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faCamera } from "@fortawesome/free-regular-svg-icons";
import './Your.css'

const YourPosts = () => {
  return (
    <div className='YourPosts'>
        <figure className="camera__figure">
            <FontAwesomeIcon className="camera__icon" icon={faCamera} />
        </figure>
        <h1>Share Photos</h1>
        <p>When you share photos, they will appear on your profile.</p>
        <button className='Yourbtn'>Share Your First Photo</button>
    </div>
  )
}

export default YourPosts