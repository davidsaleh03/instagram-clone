import React from 'react'
import './NotificationSideBar.css'
import homeuser from '../assets/home-user.js'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faX } from "@fortawesome/free-solid-svg-icons";

const NotificationSideBar = ({closeModal}) => {
  return (
    <div className='NotificationSideBar'>
        <div className="notify__side--top">
        <h1>Notifications</h1>
        <FontAwesomeIcon className='cursor-option' onClick={closeModal} icon={faX} />
        </div>
        <div className="middle__notify--modal">
            <figure className="middle__notify">
                <FontAwesomeIcon className='notify-icon'icon={faHeart} />
            </figure>
            <h1>Activity On Your Posts</h1>
            <h1>When someone likes or comments on one of your posts, you'll see it here.</h1>
        </div>
        <div className="notify__suggested--accounts">
            <h1 className="notify__h1">Suggested Accounts</h1>
            {
              homeuser.posts.map((user, index) => {
                return  <div className="sugg--left sugg--left2" key={index}>
            <div className="pic__name--container">
              <Link to={`/profile/${user.username}`}>
              <figure className="profile__figure--sugg">
                <img src={user.image2} alt="" className="profile__img--sugg" />
              </figure>
              </Link>
              <div className="users-name-one">
                <Link to={`/profile/${user.username}`}>
                <h1>{user.username}</h1>
                </Link>
                <h1>Popular</h1>
              </div>
            </div>
            <div className="sugg--right">
              <h1 className="follow__btn">Follow</h1>
            </div>
          </div>
              })
            }
        </div>
    </div>
  )
}

export default NotificationSideBar