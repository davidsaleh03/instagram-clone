import React, { useEffect, useState } from "react";
import "./Explore.css";
import {
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
} from "../../assets/user-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";
import CommentsModal from "../../components/CommentsModal";
import ReelModal from "../../components/ReelModal";
import LoadingExplore from "../../components/LoadingExplore";

const Explore = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isReelOpen, setIsReelOpen] = useState(false);
  const [selectedReel, setSelectedReel] = useState(null);   
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }, []);
  
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

  if (loading) { return <LoadingExplore />; }

  return (
    <div className="Explore">
      <div className="explore__section">
        <figure className="explore__reel cursor-option" onClick={() => openReel(user1.reels[0])}>
          <video
            src={user1.reels[0].reel}
            muted
            autoPlay
            loop
            className="explore__reel--video"
          ></video>
          <div className="explore__post--likecom">
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
        </figure>
        <div className="explore__section--posts">
          <figure className="explore__photo cursor-option" onClick={() => openComments(user3.posts[0])}>
            <img
              src={user3.posts[0].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
          <figure className="explore__photo cursor-option" onClick={() => openComments(user4.posts[0])}>
            <img
              src={user4.posts[0].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
          <figure className="explore__photo cursor-option" onClick={() => openComments(user5.posts[0])}>
            <img
              src={user5.posts[0].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
          <figure className="explore__photo cursor-option" onClick={() => openComments(user3.posts[1])}>
            <img
              src={user3.posts[1].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
        </div>
      </div>
      <div className="explore__section">
        <div className="explore__section--posts">
          <figure className="explore__photo cursor-option" onClick={() => openComments(user1.posts[2])}>
            <img
              src={user1.posts[2].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
          <figure className="explore__photo cursor-option" onClick={() => openComments(user2.posts[2])}>
            <img
              src={user2.posts[2].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
          <figure className="explore__photo cursor-option" onClick={() => openComments(user6.posts[2])}>
            <img
              src={user6.posts[2].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
          <figure className="explore__photo cursor-option" onClick={() => openComments(user2.posts[3])}>
            <img
              src={user2.posts[3].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
        </div>
        <figure className="explore__reel cursor-option" onClick={() => openReel(user6.reels[0])}>
          <video
            src={user6.reels[0].reel}
            muted
            autoPlay
            loop
            className="explore__reel--video"
          ></video>
          <div className="explore__post--likecom">
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
        </figure>
      </div>
      <div className="explore__section">
        <figure className="explore__reel cursor-option" onClick={() => openReel(user3.reels[0])}>
          <video
            src={user3.reels[0].reel}
            muted
            autoPlay
            loop
            className="explore__reel--video"
          ></video>
          <div className="explore__post--likecom">
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
        </figure>
        <div className="explore__section--posts">
          <figure className="explore__photo cursor-option" onClick={() => openComments(user1.posts[3])}>
            <img
              src={user1.posts[3].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
          <figure className="explore__photo cursor-option" onClick={() => openComments(user5.posts[5])}>
            <img
              src={user5.posts[5].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
          <figure className="explore__photo cursor-option" onClick={() => openComments(user4.posts[5])}>
            <img
              src={user4.posts[5].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
          <figure className="explore__photo cursor-option" onClick={() => openComments(user5.posts[4])}>
            <img
              src={user5.posts[4].image}
              alt=""
              className="explore__photo--img"
            />
            <div className="explore__post--likecom">
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
          </figure>
        </div>
      </div>
      <Footer classTwo='opacity'/>
      {
                isModalOpen && <CommentsModal post={selectedPost} onClose={closeComments} />
              }
      {
                isReelOpen && <ReelModal reels={selectedReel} onClose={closeReel} />
              }
    </div>
  );
};

export default Explore;
