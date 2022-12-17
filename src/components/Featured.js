import React, { useRef } from "react";
import {
  useGsapFeaturedLeftShutterUnveil,
  useGsapFeaturedRightShutterUnveil,
} from "../hooks/gsap";

const Featured = () => {
  const featuredRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapFeaturedLeftShutterUnveil(featureLeftShutterRef, featuredRef);
  useGsapFeaturedRightShutterUnveil(featureRightShutterRef, featuredRef);

  return (
    <section className="feautred wrapper" ref={featuredRef}>
      <h2 className="section-title">Featured</h2>
      <div className="features">
        <div className="feature-left">
          <span className="feature-text">90's telephone</span>
          <img
            src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="telephone"
          />
          <span
            className="feature-shutter-l"
            ref={featureLeftShutterRef}
          ></span>
        </div>
        <div className="feature-right">
          <span className="feature-text">90's casette player</span>
          <img
            src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="casette-player"
          />
          <span
            className="feature-shutter-r"
            ref={featureRightShutterRef}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
