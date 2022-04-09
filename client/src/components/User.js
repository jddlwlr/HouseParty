import React from "react";
//import username from "";

function User() {
  return (
    <section>
      <div className="container" id="user">
        <h3 className="#username">username</h3>

        <h2 className="#updates">Upcoming/Live Parties</h2>
        <div>
          <ul class="action-list">
            <li class="item">
              <a href="#invites">My Invites</a>
            </li>
            <li class="item">
              <a href="#myParties">My Parties</a>
            </li>
            <li class="item">
              <a href="#recentParties">Recent Parties</a>
            </li>
            <li class="item">
              <a href="#createParty">Create New Party!</a>
            </li>
            <li class="item">
              <a href="#friends">My Friends</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default User;
