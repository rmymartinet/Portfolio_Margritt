import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Transition } from "../../components/Animations/PageTransition/Transition.jsx";
import { TextTransition } from "../../components/Animations/TextAnimation.jsx";
import Circle from "../../components/Common/Circle.jsx";
import Hero from "../../components/Common/Hero/Hero.jsx";
import Form from "../../components/Form/Form.jsx";
import FilterControl from "../../components/Galleries/FilterControl.jsx";
import ImagesContainer from "../../components/Galleries/ImagesContainer.jsx";
import { galleriesData } from "../../data/data";
import "../Galleries/Galleries.scss";
import Description from "../../components/Galleries/Description.jsx";

const TEXT_ORIGINALS = "galleries.textOriginals1";
const TEXT_PRINTS = "galleries.textPrints1";

const Gallery = () => {
  const refContainer = useRef(null);
  const [originaux, tirages] = galleriesData;
  const [item, setItem] = useState([...originaux, ...tirages]);
  const [isGridClick, setIsGridClick] = useState(false);
  const [isButtonFilterIsClicked, setIsButtonFilterIsClicked] = useState("all");

  /**
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
            text1={TEXT_ORIGINALS}
          />
          <TextTransition textClassName="text-tirages" />
          <Description
            className="text-tirages"
            title="Tirages"
            text1={TEXT_PRINTS}
          />
        </div>
        <FilterControl
          setItem={setItem}
          isGridClick={isGridClick}
          setIsGridClick={setIsGridClick}
          isButtonFilterIsClicked={isButtonFilterIsClicked}
          setIsButtonFilterIsClicked={setIsButtonFilterIsClicked}
        />
        <div className="images-container">
          <ImagesContainer
            isGridClick={isGridClick}
            item={item}
            refContainer={refContainer}
            isButtonFilterIsClicked={isButtonFilterIsClicked}
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
