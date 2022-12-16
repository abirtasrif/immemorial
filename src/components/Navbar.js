import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const logoRef = useRef(null);
  const favref = useRef(null);

  return (
    <nav className="navbar wrapper">
      <ul className="links">
        <li>
          <Link to="/featured" ref={li1}>
            featured
          </Link>
        </li>
        <li>
          <Link to="/about" ref={li2}>
            about
          </Link>
        </li>
        <li>
          <Link to="/gallery" ref={li3}>
            gallery
          </Link>
        </li>
      </ul>
      <div className="logo" ref={logoRef}>
        <Link to="/">immemorial</Link>
      </div>
      <div className="favourite-link" ref={favref}>
        <Link to="/">favourite</Link>
      </div>
    </nav>
  );
};

export default Navbar;
