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
            <a href="/">Home</a>

            <a href="#party">Live Parties</a>

            <a href="#create">New Party</a>

            <a href="#about">About</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
