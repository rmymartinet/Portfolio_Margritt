import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SplitType from "split-type";

import Transition from "../../components/Animations/PageTransition/Transition.jsx";
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
    SplitLines("text-1 p", 0);
    SplitLines("based p", 0);
    SplitLines("made-by p", 0);
  }, [isLoading]);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender && !isLoading) {
      setIsFirstRender(false);
    }
  }, [isLoading, isFirstRender]);

  const oeuvres = [
    "Bibulle 1",
    "Bibulle 2",
    "Bibulle 3",
    "Bibulle 5",
    "Bibulle !",
    "Maxi-Bibulle",
    "Futurama 1",
    "Futurama 2",
    "Futurama 3",
    "Mécanique des rêves ",
  ];

  return (
    <motion.section className="home-container">
      <Transition>
        <div className="wrapper">
          <div className="home-content">
            <div className="content-right">
              <p>{t("home.text1")}</p>
              <p>{t("home.text2")}</p>
            </div>
            <div className="content-left">
              <p>Margritt</p>
              <div className="based">
                <span> {t("home.based")}</span>
              </div>
            </div>
            <div className="infos-oeuvres">
              {oeuvres.map((oeuvres, index) => {
                return (
                  <div key={index} className="oeuvres">
                    <p>
                      {index + 1}. {oeuvres}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* <div className="image-container">
              <img src={background} alt="" />
            </div> */}
            {/* <TitleTransition textClassName="content-left title" /> */}

            {/* <div className="image-container">
              <img src={mamar} alt="" />
            </div> */}
          </div>
        </div>
      </Transition>
    </motion.section>
  );
};

export default Home;
