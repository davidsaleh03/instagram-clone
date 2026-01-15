import React from "react";
import "./Explore.css";
import {
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
} from "../../assets/user-data";
import Footer from "../../components/Footer";

const Explore = () => {
  return (
    <div className="Explore">
      <div className="explore__section">
        <figure className="explore__reel">
          <video
            src={user1.reels[0].reel}
            muted
            autoPlay
            loop
            className="explore__reel--video"
          ></video>
        </figure>
        <div className="explore__section--posts">
          <figure className="explore__photo">
            <img
              src={user3.posts[0].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
          <figure className="explore__photo">
            <img
              src={user4.posts[0].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
          <figure className="explore__photo">
            <img
              src={user5.posts[0].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
          <figure className="explore__photo">
            <img
              src={user3.posts[1].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
        </div>
      </div>
      <div className="explore__section">
        <div className="explore__section--posts">
          <figure className="explore__photo">
            <img
              src={user1.posts[2].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
          <figure className="explore__photo">
            <img
              src={user2.posts[2].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
          <figure className="explore__photo">
            <img
              src={user6.posts[2].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
          <figure className="explore__photo">
            <img
              src={user2.posts[3].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
        </div>
        <figure className="explore__reel">
          <video
            src={user6.reels[0].reel}
            muted
            autoPlay
            loop
            className="explore__reel--video"
          ></video>
        </figure>
      </div>
      <div className="explore__section">
        <figure className="explore__reel">
          <video
            src={user3.reels[0].reel}
            muted
            autoPlay
            loop
            className="explore__reel--video"
          ></video>
        </figure>
        <div className="explore__section--posts">
          <figure className="explore__photo">
            <img
              src={user1.posts[3].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
          <figure className="explore__photo">
            <img
              src={user5.posts[5].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
          <figure className="explore__photo">
            <img
              src={user4.posts[5].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
          <figure className="explore__photo">
            <img
              src={user5.posts[4].image}
              alt=""
              className="explore__photo--img"
            />
          </figure>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
