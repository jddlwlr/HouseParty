import React from "react";

function Header() {
  return (
    <header>
      <div className="header">
        <h1 className="partybox" id="partyFoul">
          Party Foul
        </h1>
      </div>

      <nav>
        <div className="container">
          <div className="navbar">
            <a href="#home">Home </a>
            <a href="#about">About</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
