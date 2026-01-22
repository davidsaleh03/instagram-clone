import React, { useEffect } from 'react'
import './UserProfiles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faGear,
  faTableCells,
  faImagePortrait,
  faCirclePlay,
  faEllipsis,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Footer from '../../components/Footer';
import homeuser from '../../assets/home-user.js'
import { Link, useNavigate, useParams } from 'react-router-dom';
import UserPosts from '../../components/UserPosts.jsx';
import CommentsModal from '../../components/CommentsModal.jsx';
import ReelModal from '../../components/ReelModal.jsx';
import LoadingProfile from '../../components/LoadingProfile.jsx';

const UsersProfiles = () => {
    const [activeIcon, setActiveIcon] = useState("posts");
    const {username} = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false);
          }, 800);
          return () => clearTimeout(timer);
        }, []);

    const userPost = homeuser.posts.filter(
    (post) => post.username === username
  );
  const user = userPost[0];

   const [profileData, setProfileData] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedPost, setSelectedPost] = useState(null);   
      const [isReelOpen, setIsReelOpen] = useState(false);
      const [selectedReel, setSelectedReel] = useState(null);   
  
     function openComments(post) {
    setSelectedPost(post);
    setIsModalOpen(true);
  }
  
  function closeComments() {
    setSelectedPost(null);
    setIsModalOpen(false);
  }

  function openReel(reel) {
    setIsReelOpen(true);
    setSelectedReel(reel)
  }

  function closeReel() {
    setIsReelOpen(false);
    setSelectedReel(null);
  }
  
  useEffect(() => {
    if (isModalOpen || isReelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, isReelOpen]);

  if (loading) { return <LoadingProfile />; }

  return (
    <div className="profile__page">
      <div className="top__small--bar">
        <FontAwesomeIcon className="faAngleLeft faAngleLeft-margin" onClick={()=>{navigate(-1)}} icon={faAngleLeft} />
        <h1 className="top__title">{user.username}</h1>
      </div>
      <div className="profile__page--one">
        <div className="profile__top">
          <figure className="profile__top--figure">
            <img src={user.image2} alt="" className="profile__top--img" />
          </figure>
          <div className="profile__top--right profile__top--margin">
            <div className="right__top">
              <h1>{user.username}</h1>
              <h1 className="right__top--btn right__one cursor-no">Follow</h1>
              <h1 className="right__top--btn cursor-no">Message</h1>
              <FontAwesomeIcon className='ellipsis__small cursor-no' icon={faEllipsis} />
            </div>
            <div className="profile__middle">
              <h1>
                <span className="bold">7</span>posts
              </h1>
              <h1 className='cursor-no'>
                <span className="bold cursor-no">{user.followers}</span>followers
              </h1>
              <h1 className='cursor-no'>
                <span className="bold cursor-no">{user.following}</span>following
              </h1>
            </div>
            <div className="profile__bottom">
              <h1>{user.name}</h1>
              <h2>{user.caption}</h2>
            </div>
          </div>
        </div>
      </div>
            <div className="profile__middle--small">
              <div className='profile__middle-h1'>
                <h1 className="h1-bold">7</h1>
                <h1>posts</h1>
              </div>
              <div className='profile__middle-h1 cursor-no'>
                <h1 className="h1-bold">{user.followers}</h1>
                <h1>followers</h1>
              </div>
              <div className='profile__middle-h1 cursor-no'>
                <h1 className="h1-bold">{user.following}</h1>
                <h1>following</h1>
              </div>  
            </div>
      <div className="profile__page--content">
        <div className="profile__page--icons">
          <div
            className={`icon__wrapper ${
              activeIcon === "posts" ? "active" : ""
            }`}
            onClick={() => setActiveIcon("posts")}
          >
            <FontAwesomeIcon
              className="profile__page--icon"
              icon={faTableCells}
            />
          </div>
          <div
            className={`icon__wrapper ${
              activeIcon === "saved" ? "active" : ""
            }`}
            onClick={() => setActiveIcon("saved")}
          >
            <FontAwesomeIcon className="profile__page--icon" icon={faCirclePlay}/>
          </div>
          <div
            className={`icon__wrapper ${
              activeIcon === "tagged" ? "active" : ""
            }`}
            onClick={() => setActiveIcon("tagged")}
          >
            <FontAwesomeIcon
              className="profile__page--icon"
              icon={faImagePortrait}
            />
          </div>
        </div>
      </div>
      <div className="profile__page--sections">
      {activeIcon === "posts" && <UserPosts onOpenComments={openComments} uid={user.id} onActive='posts'/>}
      {activeIcon === "saved" && <UserPosts onOpenReel={openReel} uid={user.id} onActive='saved'/>}
      {activeIcon === "tagged" && <UserPosts uid={user.id} onActive='tagged'/>}
      </div>
      <div className="footer__section">
      <Footer classTop='profileFooter'/>
      </div>
      {
                isModalOpen && <CommentsModal post={selectedPost} onClose={closeComments} />
              }
      {
                isReelOpen && <ReelModal reels={selectedReel} onClose={closeReel} />
              }
    </div>
  );
}

export default UsersProfiles