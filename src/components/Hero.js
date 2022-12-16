import React, { useRef } from "react";
import { useGsapShutterUnveil } from "../hooks/gsap";

const Hero = () => {
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const heroRef = useRef(null);

  useGsapShutterUnveil(shutter1, undefined, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        canvas <span ref={shutter2}></span>
      </h1>
    </section>
  );
};

export default Hero;
