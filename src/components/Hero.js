import React, { useRef } from "react";
import {
  useGsapPhotoDropping,
  useGsapPhotoParallex,
  useGsapShutterUnveil,
} from "../hooks/gsap";

const Hero = () => {
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const heroRef = useRef(null);

  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, undefined, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);
  useGsapPhotoDropping(photosArr);
  useGsapPhotoParallex(photosArr, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        canvas <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          className="photo one"
          ref={photo1Ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/10046283/pexels-photo-10046283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo two"
          ref={photo2Ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/6577903/pexels-photo-6577903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo three"
          ref={photo3Ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4019766/pexels-photo-4019766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo four"
          ref={photo4Ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/7584538/pexels-photo-7584538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo  five"
          ref={photo5Ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4836368/pexels-photo-4836368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
