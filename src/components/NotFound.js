import React, { useRef } from "react";
import { useGsapNfImageHandler, useGsapNfTextHandler } from "../hooks/gsap";

const NotFound = ({ needFullHeight }) => {
  const nfImageRef1 = useRef(null);
  const nfImageRef2 = useRef(null);
  const nfTextRef1 = useRef(null);
  const nfTextRef2 = useRef(null);
  const nfLoadingRef = useRef(null);
  const nfImageArr = [nfImageRef1, nfImageRef2];

  useGsapNfImageHandler(nfImageArr, nfLoadingRef);
  useGsapNfTextHandler(nfTextRef1, nfLoadingRef);
  useGsapNfTextHandler(nfTextRef2, nfLoadingRef);

  return (
    <section
      className={`not-found wrapper ${needFullHeight && "min-h-100vh"}`}
      ref={nfLoadingRef}
    >
      <div className="nf-grid">
        <div>
          <span ref={nfTextRef1}>Sorry, We Couldn't</span>
        </div>
        <div className="nf-img-container">
          <img
            ref={nfImageRef1}
            className="nf-image1"
            src="https://images.pexels.com/photos/13262992/pexels-photo-13262992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="nf-photo-right"
          />
        </div>
      </div>
      <div className="nf-grid">
        <div className="nf-img-container">
          <img
            ref={nfImageRef2}
            className="nf-image2"
            src="https://images.pexels.com/photos/5808388/pexels-photo-5808388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="nf-photo-left"
          />
        </div>
        <div>
          <span ref={nfTextRef2}>Find That Page</span>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
