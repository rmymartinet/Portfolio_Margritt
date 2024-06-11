import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Transition } from "../../components/Animations/PageTransition/Transition.jsx";
import { TextTransition } from "../../components/Animations/TextAnimation.jsx";
import Circle from "../../components/Common/Circle.jsx";
import Hero from "../../components/Common/Hero/Hero.jsx";
import Form from "../../components/Form/Form.jsx";
import FilterButton from "../../components/Galleries/FilterButton.jsx";
import GridButton from "../../components/Galleries/GridButton.jsx";
import ImagesContainer from "../../components/Galleries/ImagesContainer.jsx";
import { galleriesData } from "../../data/data";
import "../Galleries/Galleries.scss";

const Gallery = () => {
  const refContainer = useRef(null);
  const [originaux, tirages] = galleriesData;
  const [item, setItem] = useState([...originaux, ...tirages]);
  const [isGridClick, setIsGridClick] = useState(false);
  const [isButtonFilterIsClicked, setIsButtonFilterIsClicked] = useState("all");
  const [isCategoryIsClicked, setIsCategoryIsClicked] = useState("originaux");
  const TEXT_ORIGINALS_1 = "galleries.textOriginals1";

  const TEXT_PRINTS_1 = "galleries.textPrints1";

  const { t } = useTranslation();

  const Description = ({ className, title, text1, text2, text3 }) => {
    return (
      <div className={className}>
        <h2>{title}</h2>
        <p>{t(text1)}</p>
        <p className="text-2">{t(text2)}</p>
        <p>{t(text3)}</p>
      </div>
    );
  };

  /**
   *
   * !TODO : Changer l'orthographe de galerie en fr et eng
   */

  return (
    <Transition>
      <motion.section ref={refContainer} className="tirage-container">
        <Hero title="Galerie" className="hero-subtitle" />
        <div className="description-grid">
          <TextTransition textClassName="text-originaux" />
          <Description
            className="text-originaux"
            title="Originaux"
            text1={TEXT_ORIGINALS_1}
          />
          <TextTransition textClassName="text-tirages" />
          <Description
            className="text-tirages"
            title="Tirages"
            text1={TEXT_PRINTS_1}
          />
        </div>
        <div className="button-container">
          <div className="grid-button-container">
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
    </Transition>
  );
};

export default Gallery;
