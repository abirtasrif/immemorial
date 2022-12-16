import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapShutterUnveil = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: delay,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapDownStagger = (arrLinks, delay = 0) => {
  useEffect(() => {
    const el = arrLinks.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100vh",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.1,
        ease: Expo.easeInOut,
      }
    );
  }, []);
};
