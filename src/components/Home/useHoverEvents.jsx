import { useEffect } from "react";
import { gsap } from "gsap";

const useHoverEvents = (refs) => {
  useEffect(() => {
    const infosOeuvres = refs.infosOeuvresRefs.current;

    const handleMouseOver = (e) => {
      gsap.to(e.currentTarget, {
        opacity: 0.5,
        duration: 0.4,
        ease: "expo",
      });
    };

    const handleMouseOut = (e) => {
      gsap.to(e.currentTarget, {
        opacity: 1,
        duration: 0.2,
        ease: "back.out(3)",
        overwrite: "auto",
      });
    };

    infosOeuvres.forEach((b) => {
      b.addEventListener("mouseover", handleMouseOver);
      b.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      infosOeuvres.forEach((b) => {
        b.removeEventListener("mouseover", handleMouseOver);
        b.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [refs]);
};

export default useHoverEvents;
