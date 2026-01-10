import React from "react";
import "./Home.css";
import { logout } from "../../firebase";
import Sidebar from "../../components/Sidebar";
import Reccomended from "../../components/Reccomended";
import profile from "../../assets/profile.png";
import Footer from "../../components/Footer";
import homeuser from '../../assets/home-user.js'

const Home = () => {
  return (
    <div className="home">
      <div className="home-middle">
        <div className="home__reccomended">
          <div className="home__stories">
              <div className="stories__top">
                <h1>Suggestions For You</h1>
                <h1>See All</h1>
              </div>
            <div className="home__story--one">
              {
                homeuser.posts.map((post, index) => {
                  return <div className="stories__bottom" key={index}>
                <div className="top--section">
                  <figure className="profile__story">
                    <img src={post.image} alt="" className="profile__story--img" />
                  </figure>
                  <h1 className="stories__username">{post.username}</h1>
                  <h1 className="username__descr">Popular</h1>
                </div>
                <div className="bottom__section">
                  <h1>Follow</h1>
                </div>
              </div>
                })
              }
            </div>
          </div>
          <div className="reccomended__post">
            <Reccomended />
          </div>
        </div>
        <Footer />
      </div>
      <div className="home-right">
        <div className="home__account">
          <div className="pic__name--container">
            <figure className="profile__figure--sugg">
              <img src={profile} alt="" className="profile__img--sugg" />
            </figure>
            <div className="users-name-one">
              <h1>davidSal02</h1>
              <h1>David Blank</h1>
            </div>
          </div>
          <div className="home__logout">Logout</div>
        </div>
        <div className="home__suggested">
          <h1>Suggested For You</h1>
          <h1>See All</h1>
        </div>
        <div className="suggested__accounts">
            {
              homeuser.posts.map((user, index) => {
                return  <div className="sugg--left" key={index}>
            <div className="pic__name--container">
              <figure className="profile__figure--sugg">
                <img src={user.image} alt="" className="profile__img--sugg" />
              </figure>
              <div className="users-name-one">
                <h1>{user.username}</h1>
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
        <div className="side__footer">
          <Footer className="no-margin-top" />
        </div>
      </div>
    </div>
  );
};

export default Home;
