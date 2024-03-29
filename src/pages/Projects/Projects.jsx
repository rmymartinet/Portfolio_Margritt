import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  PageTransition,
  TitleTransition,
} from "../../components/Animations/PageTransition.jsx";
import Circle from "../../components/Common/Circle.jsx";
import Divider from "../../components/Common/Divider.jsx";
import Form from "../../components/Form/Form.jsx";

import gsap from "gsap";
import LatestProject from "../../components/Project/LatestProject.jsx";
import {
  Activity,
  Exposition,
} from "../../components/Project/ProjectComponents.jsx";
import "../Projects/Project.scss";

const Projects = () => {
  const containerRef = useRef(null);
  const ActivityRef = useRef(null);
  const expositionRef = useRef(null);

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
      ActivityRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ActivityRef.current,
          start: "top bottom",
          end: "bottom 60%",
        },
      }
    );
  }, [expositionRef, ActivityRef]);

  return (
    <>
      <motion.section
        className="project-container"
        ref={containerRef}
        variants={PageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="hero">
          <TitleTransition textClassName="hero-title h1" />
          <div className="hero-title">
            <h1>projects</h1>
          </div>
          <Divider className="divider" />
        </div>

        <LatestProject />
        <Exposition ref={expositionRef} />
        <Activity ref={ActivityRef} />
      </motion.section>
      <footer>
        <Circle target={"project-container"} />
        <Form />
      </footer>
    </>
  );
};

export default Projects;
