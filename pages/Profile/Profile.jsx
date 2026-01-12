import React from 'react'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faTableCells } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  return (
    <div className="profile__page">
    <div className='profile__page--one'>
      <div className="profile__top">
        <figure className="profile__top--figure">
          <img src="" alt="" className="profile__top--img" />
        </figure>
        <div className="profile__top--right">
          <div className="right__top">
            <h1>Username</h1>
            <h1 className="right__top--btn">Edit profile</h1>
            <h1 className="right__top--btn">View archive</h1>
            <FontAwesomeIcon icon={faGear} />
          </div>
        </div>
      </div>
      <div className="profile__middle">
        <h1><span className='bold'>0</span>posts</h1>
        <h1><span className='bold'>0</span>followers</h1>
        <h1><span className='bold'>0</span>following</h1>
      </div>
      <div className="profile__bottom">
      <h1>Name here</h1>
      <h1>caption here</h1>
      </div>
    </div>

    </div>
  )
}

export default Profile