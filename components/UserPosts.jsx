import React from "react";
import { user1, user2, user3, user4, user5, user6 } from "../assets/user-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImagePortrait,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import "./UserPosts.css";

const usersMap = { user1, user2, user3, user4, user5, user6 };

const UserPosts = ({ onActive, uid }) => {
  const user = usersMap[uid];
  if (onActive === "posts") {
    return (
      <div className="user-posts">
        {user.posts.map((post, index) => {
          return (
            <div className="user-post" key={index}>
              <img src={post.image} alt="" className="user-post-img" />
              <div className="user__post--icons">
                <div className="user__post--div">
                  <FontAwesomeIcon
                    className="user__post--icon"
                    icon={faHeart}
                  />
                  <h1>{post.likes}</h1>
                </div>
                <div className="user__post--div">
                  <FontAwesomeIcon
                    className="user__post--icon"
                    icon={faComment}
                  />
                  <h1>5</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (onActive === "saved") {
    return (
      <div className="user__reels--section">
        {user.reels.map((reels, index) => {
          return (
            <div className="user__reel--section" key={index}>
              <div className="user__reel--figure">
                <video
                  muted
                  playsInline
                  preload="metadata"
                  src={reels.reel}
                ></video>
              </div>
              <div className="user__reelsect--icons">
                <div className="user__post--div">
                  <FontAwesomeIcon
                    className="user__post--icon"
                    icon={faHeart}
                  />
                  <h1>10</h1>
                </div>
                <div className="user__post--div">
                  <FontAwesomeIcon
                    className="user__post--icon"
                    icon={faComment}
                  />
                  <h1>5</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (onActive === "tagged") {
    return (
      <div className="YourPosts">
        <figure className="camera__figure">
          <FontAwesomeIcon className="camera__icon" icon={faImagePortrait} />
        </figure>
        <h1>Tagged Photos</h1>
        <p>No tagged posts yet</p>
      </div>
    );
  }
};

export default UserPosts;
