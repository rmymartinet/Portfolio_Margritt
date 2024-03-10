import { motion } from "framer-motion";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  PageTransition,
  TitleTransition,
} from "../../components/Animations/PageTransition.jsx";
import Circle from "../../components/Common/Circle.jsx";
import Divider from "../../components/Common/Divider.jsx";
import Form from "../../components/Form/Form.jsx";
import FilterButton from "../../components/Galleries/FilterButton.jsx";
import GridButton from "../../components/Galleries/GridButton.jsx";
import ImagesContainer from "../../components/Galleries/ImagesContainer.jsx";
import { galleriesData } from "../../data.js";
import "../Galleries/Galleries.scss";

const Gallery = () => {
  const refContainer = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [originaux, tirages] = galleriesData;
  const [item, setItem] = useState([...originaux, ...tirages]);
  const [isGridClick, setIsGridClick] = useState(false);
  const [isButtonFilterIsClicked, setIsButtonFilterIsClicked] = useState("All");
  const [isCategoryIsClicked, setIsCategoryIsClicked] = useState("originaux");

  const exitOpacityAnimation = useCallback((selector, duration) => {
    gsap.to(selector, {
      opacity: 0,
      duration: duration,
    });
  }, []);

  useEffect(() => {
    if ([0, 1, 2, 3, 4, 5, 6, 7].includes(isClicked)) {
      exitOpacityAnimation(".hero", 1);
      exitOpacityAnimation("footer", 0);
      exitOpacityAnimation(".description-grid", 1);
      exitOpacityAnimation(".hero-grid", 1);
      exitOpacityAnimation(".button-container", 1);
    }
  }, [isClicked, exitOpacityAnimation]);

  const handleIsClickedOnChange = (newIsClicked) => {
    setIsClicked(newIsClicked);
  };

  const exitTirageDetails = {
    exit: {
      visibility: "hidden",
      opacity: 0,
    },
  };

  const { t } = useTranslation();

  return (
    <>
      <motion.section
        ref={refContainer}
        className="tirage-container"
        variants={PageTransition}
        initial="initial"
        animate="animate"
        exit={
          [0, 1, 2, 3, 4, 5, 6, 7].includes(isClicked)
            ? exitTirageDetails
            : "exit"
        }
      >
        <TitleTransition textClassName="hero-title h1" />
        <div className="hero">
          <div className="hero-title">
            <h1>galleries</h1>
          </div>
          <div className="hero-subtitle">
            <span>Limited editions ©</span>
          </div>
          <Divider className="divider" />
        </div>
        <div className="description-grid">
          <div className="text-originaux">
            <h2>Originaux</h2>
            <p>{t("galleries.textOriginals")}</p>
          </div>
          <div className="text-tirages">
            <h2>Tirages</h2>
            <p>{t("galleries.textPrints")}</p>
          </div>
        </div>

        <div className="button-container">
          <div className="button-selected-work">
            <GridButton
              isGridClick={isGridClick}
              setIsGridClick={setIsGridClick}
            />
          </div>
          <div className="filter-container">
            <div className="filter-title">
              <span>Filter</span>
            </div>
            <div className="filter-button">
              <FilterButton
                setIsClicked={setIsClicked}
                setItem={setItem}
                setIsButtonFilterIsClicked={setIsButtonFilterIsClicked}
                isButtonFilterIsClicked={isButtonFilterIsClicked}
              />
            </div>
          </div>
        </div>
        <div className="images-container">
          <ImagesContainer
            isGridClick={isGridClick}
            item={item}
            onIsClickedChange={handleIsClickedOnChange}
            refContainer={refContainer}
            isButtonFilterIsClicked={isButtonFilterIsClicked}
            isCategoryIsClicked={isCategoryIsClicked}
          />
        </div>
      </motion.section>
      <footer className="hello">
        <Circle target={"tirage-container"} />
        <Form />
      </footer>
    </>
  );
};

export default Gallery;
