import React from "react";

function Header() {
  return (
    <header>
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
      <h1 className="">House Party</h1>
    </header>
  );
}

export default Header;
