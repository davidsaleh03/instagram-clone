import React from "react";
import "./Home.css";
import { logout } from "../../firebase";
import Sidebar from "../../components/Sidebar";
import Reccomended from "../../components/Reccomended";


const Home = () => {
  return (
    <div className="home">
      <div className="home-middle">
        <div className="home__stories">
          
        </div>
        <div className="home__reccomended">
          <div className="reccomended__post">
            <Reccomended />
          </div>
        </div>
      </div>
      <div className="home-right">
        {/* <div className="home__account">Your Profile</div>
        <div className="home__suggested">Suggested Profiles</div>
        <div className="side__footer">footer section</div> */}
      </div>
    </div>
  );
};

export default Home;
