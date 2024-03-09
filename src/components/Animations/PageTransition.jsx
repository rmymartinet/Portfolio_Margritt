import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

export const PageTransition = {
  initial: { y: 100, opacity: 0 },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const HomePageTransition = {
  initial: { opacity: 0 },

  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const TitleTransition = ({ textClassName }) => {
  useEffect(() => {
    const element = document.querySelector(`.${textClassName}`);
    const split = new SplitType(element);

    gsap.from(split.chars, {
      y: 200,
      skewX: 50,
      rotation: 20,
      duration: 2,
      stagger: 0.1,
      ease: "power3.inOut",
      delay: 0,
    });
  }, [textClassName]);
};

export const ExitOpacityDiv = {
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0,
    },
  },
};
