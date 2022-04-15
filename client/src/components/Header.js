import React from "react";

function Header() {
  return (
    <header>
      <h1 className="header" id="partyFoul">
        Party Foul
      </h1>

      <nav>
        <div className="container">
          <div className="navbar">
            <a href="#home">Home</a>

            <a href="#liveParty">Live Parties</a>

            <a href="#createParty">New Party</a>

            <a href="#about">About</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
