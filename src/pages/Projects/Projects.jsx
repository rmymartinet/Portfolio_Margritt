import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import {
  Activity,
  Exposition,
  PriceReviews,
} from "../../components/Project/ProjectComponents.jsx";
import "../Projects/Project.scss";

const Projects = () => {
  const containerRef = useRef(null);
  const activityRef = useRef(null);
  const expositionRef = useRef(null);
  const priceReviewRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      expositionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: expositionRef.current,
          start: "top bottom",
          end: "bottom 60%",
        },
      }
    );
    gsap.fromTo(
      activityRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: activityRef.current,
          start: "top bottom",
          end: "bottom 60%",
        },
      }
    );
    gsap.fromTo(
      priceReviewRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: priceReviewRef.current,
          start: "top bottom",
          end: "bottom 60%",
        },
      }
    );
  }, [expositionRef, activityRef, priceReviewRef]);

  return (
    <>
      <motion.section className="project-container" ref={containerRef}>
        <Exposition ref={expositionRef} />
        <Activity ref={activityRef} />
        <PriceReviews ref={priceReviewRef} />
      </motion.section>
    </>
  );
};

export default Projects;
