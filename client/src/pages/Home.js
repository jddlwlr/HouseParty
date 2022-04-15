import React from "react";
import User from "../components/User";
import loadingGif from "../images/partytime.gif";

const Home = () => {
  return (
    <div name="home" className="task-manager">
      {/* Container */}
      <div className="left-bar">
        <div className="upper-part">
          <div className="actions"></div>
        </div>
        <div className="left-content">
          <User />
        </div>
      </div>
      <div class="page-content">
        <div className="homepage">
          <div className="welcome">
            <h1 className="greeting">Welcome to</h1>
            <h2 className="title" id="partyWelcome">
              Party Foul!
            </h2>
            <p className="">Where the party finds to you!!</p>
            <div>
              <button className="partyBtn">
                Let's Party!!
                <span className=""></span>
              </button>
            </div>
          </div>

          <img src={loadingGif} alt="party hard" className="partyTime" />
        </div>
        <div className="right-bar"></div>
      </div>
    </div>
  );
};

export default Home;
