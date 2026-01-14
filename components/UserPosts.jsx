import React from 'react'
import { user1, user2, user3, user4, user5, user6 } from '../assets/user-data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImagePortrait, faHeart, faComment} from "@fortawesome/free-solid-svg-icons";
import './UserPosts.css'


const usersMap = { user1, user2, user3, user4, user5, user6 };

const UserPosts = ({onActive, uid}) => {
    if (onActive === 'posts') {
        const user = usersMap[uid];
        return (
            <div className="user-posts">
                {
                    user.posts.map((post, index)=>{
                        return <div className="user-post" key={index}>
                    <img src={post.image} alt="" className="user-post-img" />
                <div className="user__post--icons">
                    <div>
                    <FontAwesomeIcon className='user__post--icon' icon={faHeart} />
                    <h1>30</h1>
                    </div>
                    <div>
                    <FontAwesomeIcon className='user__post--icon' icon={faComment} />
                    <h1>5</h1>
                    </div>
                </div>
                </div>
                    })
                }
            </div>
        )
    }
//   else if (onActive === 'saved') {
//     return (

//     )
//   }
  else if (onActive === 'tagged') {
    return (
        <div className="YourPosts">
          <figure className="camera__figure">
            <FontAwesomeIcon className="camera__icon" icon={faImagePortrait} />
          </figure>
          <h1>Tagged Photos</h1>
          <p>No tagged posts yet</p>
        </div>
    )
  }
}

export default UserPosts