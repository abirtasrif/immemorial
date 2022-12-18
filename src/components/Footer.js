import React, { useRef } from "react";
import { useGsapFooterHeaderHandler } from "../hooks/gsap";

const Footer = () => {
  const footerHeaderRef = useRef(null);
  const footerRef = useRef(null);

  useGsapFooterHeaderHandler(footerHeaderRef, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeaderRef}>bonjour</h1>
      <p>© {new Date().getFullYear()} Immemorial. Crafted by yours truly</p>
    </section>
  );
};

export default Footer;
