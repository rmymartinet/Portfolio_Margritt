import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SplitType from "split-type";
import TransitionHome from "../../components/Animations/PageTransition/TransitionHome.jsx";
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
    SplitLines("text-1 p", 1);
    SplitLines("based p", 1);
    SplitLines("made-by p", 1);
  }, [isLoading]);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender && !isLoading) {
      setIsFirstRender(false);
    }
  }, [isLoading, isFirstRender]);

  return (
    <motion.section className="home-container">
      {isLoading ? (
        <div>
          <Landing />
        </div>
      ) : (
        <TransitionHome isFirstRender={isFirstRender}>
          <HomeFloatingGallery />
          <div className="title">margritt</div>
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
        </TransitionHome>
      )}
    </motion.section>
  );
};

export default Home;
