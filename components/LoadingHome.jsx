import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./LoadingHome.css";

const LoadingHome = () => {
  return (
    <div className="home">
      {" "}
      <div className="home-middle">
        {" "}
        <div className="home__reccomended">
          {" "}
          <div className="home__stories">
            {" "}
            <div className="stories__top">
              {" "}
              <h1>Suggestions For You</h1> <h1>See All</h1>{" "}
            </div>{" "}
            <div className="home__story--one">
              {" "}
              {[1, 2, 3, 4].map((_, i) => (
                <div className="stories__bottom" key={i}>
                  {" "}
                  <div className="top--section">
                    {" "}
                    <div className="skeleton story-avatar shimmer" />{" "}
                    <div className="skeleton story-username shimmer" />{" "}
                    <div className="skeleton story-sub shimmer" />{" "}
                  </div>{" "}
                  <div className="bottom__section">
                    {" "}
                    <div className="skeleton follow-btn shimmer" />{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div className="reccomended__post here">
            {" "}
            {[1, 2].map((_, i) => (
              <div className="skeleton-post" key={i}>
                {" "}
                <div className="skeleton-post-header">
                  {" "}
                  <div className="skeleton avatar shimmer" />{" "}
                  <div className="skeleton username shimmer" />{" "}
                </div>{" "}
                <div className="skeleton post-image shimmer" />{" "}
                <div className="skeleton post-line shimmer" />{" "}
                <div className="skeleton post-line short shimmer" />{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        <Footer classTop="profileFooter" sideWidth="sideWidth" />{" "}
      </div>{" "}
      <div className="home-right">
        {" "}
        <div className="home__account">
          {" "}
          <div className="pic__name--container">
            {" "}
            <div className="skeleton sidebar-avatar shimmer" />{" "}
            <div>
              {" "}
              <div className="skeleton sidebar-name shimmer" />{" "}
              <div className="skeleton sidebar-sub shimmer" />{" "}
            </div>{" "}
          </div>{" "}
          <div className="skeleton follow-btn shimmer" />{" "}
        </div>{" "}
        <div className="home__suggested">
          {" "}
          <h1>Suggested For You</h1> <h1>See All</h1>{" "}
        </div>{" "}
        <div className="suggested__accounts">
          {" "}
          {[1, 2, 3].map((_, i) => (
            <div className="sugg--left" key={i}>
              {" "}
              <div className="pic__name--container">
                {" "}
                <div className="skeleton sidebar-avatar shimmer" />{" "}
                <div className="skeleton sidebar-name shimmer" />{" "}
              </div>{" "}
              <div className="skeleton follow-btn shimmer" />{" "}
            </div>
          ))}{" "}
        </div>{" "}
        <div className="side__footer">
          {" "}
          <Footer />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default LoadingHome;
