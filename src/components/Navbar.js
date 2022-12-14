import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <nav className="navbar wrapper">
    <ul className="links">
      <li><Link to="/featured">featured</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/gallery">gallery</Link></li>
    </ul>
    <div className="logo"><Link to="/">immemorial</Link></div>
    <div className="favourite-link"><Link to="/">favourite</Link></div>
  </nav>
  )
};

export default Navbar;