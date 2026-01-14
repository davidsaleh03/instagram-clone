import './TopProfile.css'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const TopProfile = () => {
  return (
    <div className="TopProfile">
      <FontAwesomeIcon icon={faAngleLeft} />
      <h1></h1>
    </div>
  )
}

export default TopProfile