import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useCallback, useRef, useState } from "react";
gsap.registerPlugin(Flip);

const GridButton = ({ setIsGridClick, isGridClick }) => {
  const [isHover, setIsHover] = useState(false);
  const gridButtonRef = useRef(null);
  const textRef = useRef(null);

  const handleEnterHover = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleLeaveHover = useCallback(() => {
    setIsHover(false);
  }, []);

  const handleClick = useCallback(() => {
    setIsGridClick((prev) => !prev);
  }, []);

  const animateGridButton = () => {
    if (isGridClick) {
      handleClick();
      const gridButton = gridButtonRef.current;
      const items = gsap.utils.toArray(".grid-button > div").map((element) => {
        return element;
      });

      const state = Flip.getState(items);

      gridButton.classList.toggle("insert");

      Flip.from(state, {
        duration: 1,
        stagger: 0.02,
        ease: "power3.inOut",
      });

      gsap.fromTo(
        ".image-content",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 1,
          duration: 1,
          ease: "power3.inOut",
        }
      );
    }
  };

  useGSAP(animateGridButton, {
    dependencies: [isGridClick, setIsGridClick, handleClick],
  });

  const animateTextView = () => {
    if (isHover) {
      gsap.fromTo(
        textRef.current,
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "power3.inOut",
          },
        }
      );
    } else {
      gsap.to(textRef.current, {
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "power3.inOut",
        },
      });
    }
  };
  useGSAP(animateTextView, { dependencies: [isHover] });

  return (
    <>
      <div className="text-view">
        <p ref={textRef}>change view</p>
      </div>
      <div
        ref={gridButtonRef}
        className="grid-button"
        onMouseEnter={handleEnterHover}
        onMouseLeave={handleLeaveHover}
        onClick={handleClick}
      >
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
        <div className="fourth"></div>
      </div>
    </>
  );
};

export default GridButton;
