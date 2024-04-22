import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

export const TitleTransition = ({ textClassName }) => {
  useEffect(() => {
    const element = document.querySelector(`.${textClassName}`);
    const split = new SplitType(element);

    gsap.from(split.chars, {
      y: 200,
      skewX: 50,
      rotation: 20,
      duration: 1.2,
      stagger: 0.07,
      ease: "power3.inOut",
    });
  }, [textClassName]);
};

export const TextTransition = ({ textClassName }) => {
  useEffect(() => {
    const element = document.querySelector(`.${textClassName}`);
    const split = new SplitType(element);

    gsap.from(split.lines, {
      opacity: "0",
      y: 200,
      duration: 1,
      stagger: 0.1,
      ease: "power3.inOut",
    });
  }, [textClassName]);
};
