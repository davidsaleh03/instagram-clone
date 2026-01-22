import React from "react";
import "./Home.css";
import { logout } from "../../firebase";
import Sidebar from "../../components/Sidebar";
import Reccomended from "../../components/Reccomended";
import profile from "../../assets/profile.png";
import Footer from "../../components/Footer";
import homeuser from "../../assets/home-user.js";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommentsModal from "../../components/CommentsModal.jsx";
import LoadingHome from "../../components/LoadingHome.jsx";

const Home = () => {
  const [profileData, setProfileData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

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

  function openComments(post) {
    setSelectedPost(post);
    setIsModalOpen(true);
  }

  function closeComments() {
    setSelectedPost(null);
    setIsModalOpen(false);
  }

  if (loading) { return <LoadingHome />; }

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
              {homeuser.posts.map((post, index) => {
                return (
                  <div className="stories__bottom" key={index}>
                    <div className="top--section">
                      <Link to={`/profile/${post.username}`}>
                        <figure className="profile__story">
                          <img
                            src={post.image2}
                            alt=""
                            className="profile__story--img"
                          />
                        </figure>
                      </Link>
                      <Link to={`/profile/${post.username}`}>
                        <h1 className="stories__username">{post.username}</h1>
                      </Link>
                      <h1 className="username__descr">Popular</h1>
                    </div>
                    <div className="bottom__section">
                      <h1>Follow</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="reccomended__post">
            <Reccomended
              onOpenComments={openComments}
              onCloseComments={closeComments}
            />
          </div>
        </div>
        <Footer classTop="profileFooter" sideWidth="sideWidth" />
      </div>
      <div className="home-right">
        <div className="home__account">
          <div className="pic__name--container">
            <Link to="/profile">
              <figure className="profile__figure--sugg">
                <img src={profile} alt="" className="profile__img--sugg" />
              </figure>
            </Link>
            <Link to="/profile">
              <div className="users-name-one">
                <h1>{profileData?.name || "Username"}</h1>
                <h1>{profileData?.username || "Name"}</h1>
              </div>
            </Link>
          </div>
          <div className="home__logout cursor-option" onClick={logout}>
            Logout
          </div>
        </div>
        <div className="home__suggested">
          <h1>Suggested For You</h1>
          <h1>See All</h1>
        </div>
        <div className="suggested__accounts">
          {homeuser.posts.map((user, index) => {
            return (
              <div className="sugg--left" key={index}>
                <div className="pic__name--container">
                  <Link to={`/profile/${user.username}`}>
                    <figure className="profile__figure--sugg">
                      <img
                        src={user.image2}
                        alt=""
                        className="profile__img--sugg"
                      />
                    </figure>
                  </Link>
                  <div className="users-name-one">
                    <Link to={`/profile/${user.username}`}>
                      <h1>{user.username}</h1>
                    </Link>
                    <h1>Popular</h1>
                  </div>
                </div>
                <div className="sugg--right">
                  <h1 className="follow__btn">Follow</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="side__footer">
          <Footer />
        </div>
      </div>
      {isModalOpen && (
        <CommentsModal post={selectedPost} onClose={closeComments} />
      )}
    </div>
  );
};

export default Home;
