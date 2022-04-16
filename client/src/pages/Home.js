import React from "react";

import loadingGif from "../images/partytime.gif";
import Auth from "../utils/auth";

const Home = () => {
  console.log(Auth.loggedIn());
  return (
    <>
      {/* Container */}
      {Auth.loggedIn === false ? (
        window.location.assign("/Login")
      ) : (
        <>
          <div className="page-content" id="homepage">
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
        </>
      )}
    </>
  );
};

export default Home;
