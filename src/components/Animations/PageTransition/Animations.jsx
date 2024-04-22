import { Power1 } from "gsap";

export const childrenAnimation = {
  initial: {
    opacity: 1,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: Power1.easeOut,
    },
  },
  exit: {
    y: -2500,
    opacity: 0,
    transition: {
      ease: Power1.easeIn,
      duration: 1,
    },
  },
};
