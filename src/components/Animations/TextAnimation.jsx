import gsap from "gsap";
import { useLayoutEffect } from "react";
import SplitType from "split-type";

export const TitleTransition = ({
  textClassName,
  isClciked,
  yposition = 200,
}) => {
  useLayoutEffect(() => {
    if (!isClciked) {
      const element = document.querySelector(`.${textClassName}`);
      const split = new SplitType(element);

      gsap.from(split.chars, {
        y: yposition,
        skewX: 50,
        rotation: 20,
        duration: 1.2,
        stagger: 0.07,
        ease: "power3.inOut",
      });
    }
  }, [textClassName, isClciked, yposition]);
};

export const TextTransition = ({ textClassName }) => {
  useLayoutEffect(() => {
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
