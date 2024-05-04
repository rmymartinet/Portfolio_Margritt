import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import Logo from "../../components/Common/Logo.jsx";
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
      <Logo />
      <motion.section className="project-container" ref={containerRef}>
        {/* <Hero title="projects" /> */}
        {/* <LatestProject /> */}
        <Exposition ref={expositionRef} />
        <Activity ref={ActivityRef} />
      </motion.section>
      {/* <footer>
        <Circle target={"project-container"} />
        <Form />
      </footer> */}
    </>
  );
};

export default Projects;
