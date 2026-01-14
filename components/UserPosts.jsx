import React from 'react'
import { user1, user2, user3, user4, user5, user6 } from '../assets/user-data';
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
//   else if (onActive === 'tagged') {
//     return (

//     )
//   }
}

export default UserPosts