import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
            <Link to="/party">Live Party</Link>
            <Link to="/create">New Party</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
