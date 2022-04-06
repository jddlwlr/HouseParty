import React from "react";
import username from "";

function User() {
  return (
    <section>
      <div className="container">
        <h3 className="#username">{username}</h3>

        <h2 className="#updates">Upcoming/Live Parties</h2>
        <div>
          <a href="#invites">My Invites</a>

          <a href="#myParties">My Parties</a>

          <a href="#recentParties">Recent Parties</a>

          <a href="#createParty">Create New Party!</a>

          <a href="#friends">My Friends</a>
        </div>
      </div>
    </section>
  );
}

export default User;
