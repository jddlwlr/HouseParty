import React from "react";

import cupBall from "../images/cup_ball.gif";
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
          <div className="right-content " id="">
            <img src={cupBall} alt="beer pong" className="ball" />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
