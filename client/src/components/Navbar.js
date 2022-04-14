import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../images/party_foul.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="">
      <div>
        <img src={Logo} alt="" />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="create" smooth={true} duration={500}>
            New Party
          </Link>
        </li>
        <li>
          <Link to="party" smooth={true} duration={500}>
            Live Party
          </Link>
        </li>
      </ul>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="create" smooth={true} duration={500}>
            New Party
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="party" smooth={true} duration={500}>
            Live Party
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
