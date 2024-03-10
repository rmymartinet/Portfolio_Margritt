import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useEffect, useState } from "react";
gsap.registerPlugin(Flip);

const GridButton = ({ setIsGridClick, isGridClick }) => {
  const [isHover, setIsHover] = useState(false);

  const handleEnterHover = () => {
    setIsHover(true);
  };
  const handleLeaveHover = () => {
    setIsHover(false);
  };

  const handleClick = () => {
    setIsGridClick((prev) => !prev);

    const gridButton = document.querySelector(".grid-button");

    const items = gsap.utils.toArray(
      ".grid-button .first, .grid-button .second, .grid-button .third, .grid-button .fourth"
    );

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
  };

  /* Animation pour hover du GridButton
   * Au survol du GridButton (div.grid-button), le texte "Change the view" (div.text-view p) apparaît avec un effet de transition.
   */
  useEffect(() => {
    if (isHover) {
      gsap.fromTo(
        ".text-view p",
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
      gsap.to(".text-view p", {
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "power3.inOut",
        },
      });
    }
  }, [isHover]);

  /* Flip Animation lors du click sur grid button
   * Lorsque je clique sur le gridButton le contenu de la page s'anime avec un effet de transition.
   */

  return (
    <>
      <div className="text-view">
        <p>change view</p>
      </div>
      <div
        className="grid-button"
        onMouseEnter={() => handleEnterHover()}
        onMouseLeave={() => handleLeaveHover()}
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
