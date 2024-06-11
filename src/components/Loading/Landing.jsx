import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { useCount } from "../Common/Counter";
import "./Landing.scss";

const Landing = () => {
  const countValue = useCount();
  const landindSquareRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      landindSquareRef.current,
      {
        width: 0,
      },
      {
        duration: 3.5,
        width: "100vw",
        ease: "power4.inOut",
      }
    );
  });
  useGSAP(
    () => {
      if (countValue === 100) {
        gsap.to(landindSquareRef.current, {
          duration: 2,
          width: "100vw",
          height: "100vh",
          ease: "power3.inOut",
        });
      }
    },
    { dependencies: [countValue] }
  );

  return (
    <div className="landing-container">
      <div ref={landindSquareRef} className="landing-square">
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
