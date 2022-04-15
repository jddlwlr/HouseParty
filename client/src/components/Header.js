import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="partybox" id="partyFoul">
          Party Foul
        </h1>
      </div>

      <nav>
        <div className="container">
          <div className="navbar">
            <a href="/">Home</a>

            <a href="/party">Live Parties</a>

            <a href="/create">New Party</a>

            <a href="/about">About</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
