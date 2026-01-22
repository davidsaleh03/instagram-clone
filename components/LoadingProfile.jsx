import React from "react";
import "./LoadingProfile.css";
import Footer from "../components/Footer";

const LoadingProfile = () => {
  return (
    <div className="profile__page">

      <div className="top__small--bar">
        <div className="skeleton profile-title shimmer" />
      </div>


      <div className="profile__page--one your__page--one">
        <div className="profile__top profile__top--2">
          <figure className="profile__top--figure">
            <div className="skeleton profile-avatar shimmer" />
          </figure>

          <div className="profile__top--right">
            <div className="right__top">
              <div className="skeleton profile-name shimmer" />
              <div className="skeleton profile-btn shimmer" />
              <div className="skeleton profile-btn shimmer" />
            </div>

            <div className="profile__middle">
              {[1, 2, 3].map((_, i) => (
                <div className="skeleton profile-stat shimmer" key={i} />
              ))}
            </div>

            <div className="profile__bottom">
              <div className="skeleton profile-username shimmer" />
            </div>
          </div>
        </div>


        <div className="your__middle--small">
          {[1, 2, 3].map((_, i) => (
            <div className="your__middle-h1" key={i}>
              <div className="skeleton profile-stat-mobile shimmer" />
            </div>
          ))}
        </div>
      </div>


      <div className="profile__page--content">
        <div className="profile__page--icons">
          {[1, 2, 3].map((_, i) => (
            <div className="skeleton profile-tab shimmer" key={i} />
          ))}
        </div>
      </div>


      <div className="profile__page--sections loading-grid">
        {[...Array(9)].map((_, i) => (
          <div className="skeleton profile-post shimmer" key={i} />
        ))}
      </div>

      <div className="footer__section">
        <Footer classTop="profileFooter" />
      </div>
    </div>
  );
};

export default LoadingProfile;
