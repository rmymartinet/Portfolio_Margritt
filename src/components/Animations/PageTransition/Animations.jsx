import { Power2 } from "gsap";

export const slideIn = {
  initial: {
    top: 0,
    height: "100vh",
  },
  enter: {
    height: "0",
    transition: {
      duration: 1,
      ease: Power2.easeInOut,
    },
  },
};

export const slideOut = {
  exit: {
    bottom: 0,
    height: "100vh",
    transition: {
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const childrenAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
      ease: Power2.easeInOut,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};
