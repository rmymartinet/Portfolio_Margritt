import { Power1, Power2 } from "gsap";

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

export const slideOutAnimation = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 0,
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: Power1.easeOut,
    },
  },
};

export const slideInAnimation = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 0,
    transition: {
      duration: 1,
      ease: Power2.easeOut,
    },
  },
  exit: {
    scaleY: 0,
  },
};

export const animateSlideImg = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: -1000,
    transition: {
      delay: 0, // Augmenter le délai avant le début de l'animation
      duration: 2,
      ease: Power1.easeOut,
    },
  },
};
