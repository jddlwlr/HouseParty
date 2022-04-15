import React from "react";
import User from "../components/User";
import loadingGif from "../images/partytime.gif";
import Auth from "../utils/auth";

const Home = () => {
  console.log(Auth.loggedIn());
  return (
    <>
      <div name="home" className="task-manager">
        {/* Container */}
        {Auth.loggedIn === false ? (
          window.location.assign("/Login")
        ) : (
          <>
            <div className="left-bar">
              <div className="upper-part">
                <div className="actions"></div>
              </div>
              <div className="left-content">
                <User />
              </div>
            </div>
            <div className="page-content">
              <div className="homepage">
                <div className="welcome">
                  <h1 className="greeting">Welcome to</h1>
                  <h2 className="title" id="partyWelcome">
                    Party Foul!
                  </h2>
                  <p className="">Where the party finds you!!</p>
                  <div>
                    <a href="/party">
                      <button className="partyBtn">
                        Let's Party!!
                        <span className=""></span>
                      </button>
                    </a>
                  </div>
                </div>

                <img src={loadingGif} alt="party hard" className="partyTime" />
              </div>
              <div className="right-bar"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
