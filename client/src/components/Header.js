import React from "react";

function Header() {
  return (
    <header>
      <h1 className="header" id="partyFoul">
        Party Foul
      </h1>

      <br></br>
      <br></br>
      <nav>
        <div className="container">
          <div>
            <a href="#profile">Profile</a>

            <a href="#live_parties">Live Parties</a>

            <a href="#new_party">New Party</a>

            <a href="#about">About</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
