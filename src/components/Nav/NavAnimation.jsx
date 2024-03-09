export const menuSlide = {
  initial: {
    width: "0%",
    height: "100%",
    position: "fixed",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
  },

  enter: {
    transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] },
    width: "100%",
    position: "fixed",
  },

  exit: {
    width: "0%",
    position: "fixed",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const delayGlobal = 0.2;

export const slide = {
  initial: (i) => ({
    x: i % 2 === 0 ? window.innerWidth : -window.innerWidth,
    opacity: 0,
  }),

  enter: (i) => ({
    x: i % 2 === 0 ? -50 : 50,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.08 * i + delayGlobal,
    },
  }),

  exit: {
    x: 0,
    opacity: 0,
    transition: {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const smallScreenSlide = {
  initial: (i) => ({
    x: i % 2 === 0 ? window.innerWidth : -window.innerWidth,
    opacity: 0,
  }),

  enter: (i) => ({
    x: i % 2 === 0 ? -20 : 20,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.08 * i + delayGlobal,
    },
  }),

  exit: {
    x: 0,
    opacity: 0,
    transition: {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slideText = {
  initial: {
    x: 0,
    opacity: 0, // Mettre l'opacité à 1 seulement pour l'élément avec l'index 1
  },

  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 1,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slideNav = {
  initial: {
    x: 0,
    opacity: 0, // Mettre l'opacité à 1 seulement pour l'élément avec l'index 1
  },

  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
