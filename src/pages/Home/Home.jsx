import { motion } from "framer-motion";
import gsap from "gsap";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SplitType from "split-type";
import { LoadingContext } from "../../LoadingContext.js";
import { HomePageTransition } from "../../components/Animations/PageTransition.jsx";
import HomeFloatingGallery from "../../components/Home/HomeFloatingGallery.jsx";
import Landing from "../../components/Loading/Landing.jsx";

import "./Home.scss";

const Home = () => {
  const isLoading = useContext(LoadingContext);
  const { t } = useTranslation();

  const SplitLines = (textClassName) => {
    const element = document.querySelector(`.${textClassName}`);
    const split = new SplitType(element);

    gsap.from(split.lines, {
      y: 200,
      skewX: 20,
      rotation: 15,
      duration: 2,
      stagger: 0.1,
      ease: "power3.inOut",
      delay: 1,
    });
  };

  useEffect(() => {
    SplitLines("text-1 p");
    SplitLines("based p");
    SplitLines("made-by p");
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
