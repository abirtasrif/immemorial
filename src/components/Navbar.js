import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const favRef = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [favRef];
  const logArr = [logoRef];

  useGsapDownStagger(liArr, 0.5);
  useGsapDownStagger(favArr, 0.8);
  useGsapDownStagger(logArr, 1);

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
      <div className="favourite-link" ref={favRef}>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
