import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SplitType from "split-type";
import { HomePageTransition } from "../../components/Animations/PageTransition.jsx";
import HomeFloatingGallery from "../../components/Home/HomeFloatingGallery.jsx";
import Landing from "../../components/Loading/Landing.jsx";

import "./Home.scss";

const Home = ({ isLoading }) => {
  const { t } = useTranslation();

  const SplitLines = (textClassName, delay) => {
    const element = document.querySelector(`.${textClassName}`);
    const split = new SplitType(element);

    gsap.from(split.lines, {
      y: 200,
      skewX: 20,
      rotation: 15,
      duration: 2,
      stagger: 0.1,
      ease: "power3.inOut",
      delay: delay,
    });
  };

  useEffect(() => {
    SplitLines("title", 0);
    SplitLines("text-1 p", 2);
    SplitLines("based p", 2);
    SplitLines("made-by p", 2);
  }, [isLoading]);

  return (
    <motion.section
      variants={HomePageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="home-container"
    >
      {isLoading ? (
        <div>
          <Landing />
        </div>
      ) : (
        <>
          <HomeFloatingGallery />
          <div className="title">
            <p>there is no limit</p>
          </div>
          <div className="content-right">
            <div className="text-1">
              <p>{t("home.text1")}</p>
            </div>
          </div>
          <div className="made-by">
            <p> {t("home.madeBy")}</p>
          </div>
          <div className="based">
            <p> {t("home.based")}</p>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Home;
