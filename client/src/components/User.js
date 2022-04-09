import React from "react";
//import username from "";
import profile from "../images/profile.png";

function User() {
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
