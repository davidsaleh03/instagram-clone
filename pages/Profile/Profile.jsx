import React from "react";
import "./Profile.css";
import profile from "../../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  faGear,
  faTableCells,
  faImagePortrait,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import YourPosts from "../../components/YourPosts";
import YourSaved from "../../components/YourSaved";
import YourTagged from "../../components/YourTagged";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeIcon, setActiveIcon] = useState("posts");
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    });

    return () => unsub();
  }, []);
  return (
    <div className="profile__page">
      <div className="top__small--bar">
        
          <FontAwesomeIcon className="faAngleLeft faAngleLeft-margin" onClick={()=>{navigate(-1)}} icon={faAngleLeft} />
        <h1 className="top__title">{profileData?.name || "Username"}</h1>
      </div>
      <div className="profile__page--one your__page--one">
        <div className="profile__top profile__top--2">
          <figure className="profile__top--figure">
            <img src={profile} alt="" className="profile__top--img" />
          </figure>
          <div className="profile__top--right">
            <div className="right__top">
              <h1>{profileData?.name || "Username"}</h1>
              <h1 className="right__top--btn right__top--btn-2 cursor-no">
                Edit profile
              </h1>
              <h1 className="right__top--btn right__top--btn-2 cursor-no">
                View archive
              </h1>
              <FontAwesomeIcon className="cursor-no faGear-1" icon={faGear} />
            </div>
            <div className="profile__middle">
              <h1>
                <span className="bold">0</span>posts
              </h1>
              <h1 className='cursor-no'>
                <span className="bold cursor-no">0</span>followers
              </h1>
              <h1 className='cursor-no'>
                <span className="bold cursor-no">0</span>following
              </h1>
            </div>
            <div className="profile__bottom">
              <h1>{profileData?.username || "Name here"}</h1>
              <FontAwesomeIcon className="cursor-no faGear-2" icon={faGear} />
            </div>
          </div>
        </div>
        <div className="your__middle--small">
              <div className='your__middle-h1'>
                <h1 className="your-bold">0</h1>
                <h1>posts</h1>
              </div>
              <div className='your__middle-h1 cursor-no'>
                <h1 className="your-bold">0</h1>
                <h1>followers</h1>
              </div>
              <div className='your__middle-h1 cursor-no'>
                <h1 className="your-bold">0</h1>
                <h1>following</h1>
              </div>  
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
            <FontAwesomeIcon
              className="profile__page--icon"
              icon={faBookmark}
            />
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
        {activeIcon === "posts" && <YourPosts />}
        {activeIcon === "saved" && <YourSaved />}
        {activeIcon === "tagged" && <YourTagged />}
      </div>
      <div className="footer__section">
        <Footer classTop="profileFooter" />
      </div>
    </div>
  );
};

export default Profile;
