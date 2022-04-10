import React, { useContext } from "react";
//import username from "";
import profile from "../images/profile.png";
// import { Link } from "react-router-dom";
// import Store from "../utils/GlobalState";
import { Context } from "../utils/GlobalState";
// import { from } from "@apollo/client";

function User() {
  const [state, setState] = useContext(Context);
  const handleClick = () => {
    setState("new");
  };

  return (
    <section>
      <div className="container" id="user">
        <img src={profile} alt="profile pic" className="profilePic" />
        <h3 className="username">username</h3>

        <h2 className="updates">Upcoming/Live Parties</h2>
        <div>
          <ul className="action-list">
            <li className="item">
              <a href="#invites">My Invites</a>
            </li>
            <li className="item">
              <button onClick={handleClick}>New Party</button>
            </li>
            <li className="item">
              <a href="#myParties">My Parties</a>
            </li>
            <li className="item">
              <a href="#recentParties">Recent Parties</a>
            </li>
            <li className="item">
              <a href="#friends">My Friends</a>
            </li>
            <li className="item">
              <a href="#logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default User;
