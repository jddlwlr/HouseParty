import React from "react";

function Header() {
  return (
    <header>
      <div className="container-fluid">
        <h1 className="partybox" id="partyFoul">
          Party Foul
        </h1>
      </div>

      <nav>
        <div className="container">
          <div className="navbar">
            <a href="#home">Home </a>
            <a href="#liveParty">Live Party</a>
            <a href="#createParty">New Party</a>
            <a href="#about">About</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
