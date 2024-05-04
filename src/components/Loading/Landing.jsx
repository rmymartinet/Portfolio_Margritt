import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useCount } from "../Common/Counter";

import "./Landing.scss";

const Landing = () => {
  const countValue = useCount();

  useLayoutEffect(() => {
    if (countValue === 100) {
      let ctx = gsap.context(() => {
        gsap.to(".landing-square", {
          duration: 2,
          width: "100vw",
          height: "100vh",
          ease: "power3.inOut",
        });
      });

      return () => {
        ctx.kill();
      };
    }
  }, [countValue]);

  return (
    <div className="landing-container">
      <div className="landing-square"></div>
      <div className="landing-content">
        <p>art</p>
        <p>loading {countValue}%</p>
      </div>
    </div>
  );
};

export default Landing;
