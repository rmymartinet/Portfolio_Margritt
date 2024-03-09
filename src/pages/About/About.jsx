import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import AboutContent from "../../components/About/AboutContent";
import Gallery from "../../components/About/Gallery";
import Quote from "../../components/About/Quote";
import {
  PageTransition,
  TitleTransition,
} from "../../components/Animations/PageTransition.jsx";
import Circle from "../../components/Common/Circle.jsx";
import Divider from "../../components/Common/Divider.jsx";
import Form from "../../components/Form/Form";
import "../About/About.scss";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const instaGalleryRef = useRef(null);

  return (
    <>
      <motion.section
        className="about-container"
        ref={containerRef}
        variants={PageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="hero">
          <TitleTransition textClassName="hero-title h1" />
          <div className="hero-title">
            <h1>about</h1>
          </div>
          <Divider className="hero-divider" />
        </div>
        <AboutContent ref={containerRef} />
        <Quote />
        <Gallery ref={instaGalleryRef} />
      </motion.section>
      <footer>
        <Circle target={"about-container"} />
        <Form />
      </footer>
    </>
  );
};

export default About;
