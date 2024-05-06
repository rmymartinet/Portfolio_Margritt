import { gsap } from "gsap";
import { useEffect, useLayoutEffect } from "react";
import { useCount } from "../Common/Counter";

import "./Landing.scss";

const Landing = () => {
  const countValue = useCount();

  useEffect(() => {
    gsap.fromTo(
      ".landing-square",
      {
        width: 0,
      },
      {
        duration: 3.5,
        width: "100vw",
        ease: "power4.inOut",
      }
    );
  }, []);
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
      <div className="landing-square">
        <div className="landing-square__inner"></div>
      </div>
      <div className="landing-content">
        <p>2024</p>
        <p>loading {countValue}%</p>
      </div>
    </div>
  );
};

export default Landing;
