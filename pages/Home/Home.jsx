import React from "react";
import "./Home.css";
import { logout } from "../../firebase";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-middle">
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
