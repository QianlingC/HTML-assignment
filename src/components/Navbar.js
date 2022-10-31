import React from "react";
import clogo from "../assets/images/logo-2.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={clogo} alt="logo" />
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            {/* <Link to="/" className="nav-links"> */}
            Home
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/" className="nav-links"> */}
            About
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/" className="nav-links"> */}
            Contact
            {/* </Link> */}
          </li>
        </ul>
        <div className="searchbar">
          <input type="text" placeholder="Search" id="search" />
        </div>
      </nav>
    </>
  );
}
export default Navbar;
