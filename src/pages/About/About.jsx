import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import AboutContent from "../../components/About/AboutContent";
import Gallery from "../../components/About/Gallery";
import Quote from "../../components/About/Quote";
import { Transition } from "../../components/Animations/PageTransition/Transition.jsx";
import Circle from "../../components/Common/Circle.jsx";
import Hero from "../../components/Common/Hero.jsx";
import Logo from "../../components/Common/Logo.jsx";
import Form from "../../components/Form/Form";
import "../About/About.scss";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const instaGalleryRef = useRef(null);

  const { t } = useTranslation();

  return (
    <Transition>
      <Logo />
      <motion.section className="about-container" ref={containerRef}>
        <Hero title={t("nav.about")} />
        <AboutContent ref={containerRef} />
        <Quote />
        <Gallery ref={instaGalleryRef} />
      </motion.section>
      <footer>
        <Circle target={"about-container"} />
        <Form />
      </footer>
    </Transition>
  );
};

export default About;
