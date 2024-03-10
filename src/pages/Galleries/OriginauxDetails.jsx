import { motion } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import SplitType from "split-type";
import Circle from "../../components/Common/Circle.jsx";
import InfoItem from "../../components/Common/InfoItem.jsx";
import Form from "../../components/Form/Form.jsx";
import { originauxData } from "../../data.js";
import "./OriginauxDetails.scss";

gsap.registerPlugin(ScrollTrigger);

const OriginauxDetails = () => {
  const { index } = useParams();
  const firstImgRef = useRef(null);
  const detailsImageRef = useRef(null);
  const titleRef = useRef(null);
  const selectedImage = originauxData[index];
  const { t } = useTranslation();

  const containerVariants = {
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const SplitLines = (textClassName) => {
    const element = document.querySelector(`${textClassName}`);
    const split = new SplitType(element);

    gsap.from(split.lines, {
      y: 200,
      skewX: 20,
      rotation: 15,
      duration: 2,
      stagger: 0.1,
      ease: "power3.inOut",
      delay: 1.5,
    });
  };

  useLayoutEffect(() => {
    SplitLines("h1");
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".buying p",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power3.inOut",
        delay: 1.5,
      }
    );
  }, []);

  const flipAnimation = useCallback(() => {
    gsap.registerPlugin(Flip);
    const flipContainer = document.querySelector(".details-image");
    const image = document.querySelector("img");

    setTimeout(() => {
      let state = Flip.getState(image);
      flipContainer.appendChild(image);
      Flip.from(state, {
        absolute: true,
        duration: 2,
        ease: "power3.inOut",
      });
    }, 0);
  }, []);

  useLayoutEffect(() => {
    flipAnimation();
  }, [flipAnimation]);

  return (
    <>
      <motion.div className="originaux-details-container">
        <div className="flip-container">
          <img
            loading="lazy"
            ref={firstImgRef}
            src={selectedImage.img}
            alt={""}
          />
        </div>

        <motion.div
          className="infos-container"
          variants={containerVariants}
          exit="exit"
        >
          <div className="title" ref={titleRef}>
            <h1>{selectedImage.title}</h1>
          </div>
          <motion.div
            className="description"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <div className="serie-content">
              <p className="serie">{t(selectedImage.serie)}</p>
            </div>
            <div className="date-content">
              <p className="date">{t(selectedImage.date)}</p>
            </div>
            <div className="piece">
              <p className="piece">
                {selectedImage.piece} {t("originauxDetails.piece")}
              </p>
            </div>
            <div className="size">
              <InfoItem value={selectedImage.format} className="format" />
            </div>
            {/* <div className="details-content-right">
              <div className="tirage-infos">
                <InfoItem
                  // label={t("originauxDetails.paper")}
                  value={selectedImage.papier}
                  className="papier"
                />
              </div>
            </div> */}
          </motion.div>
          <div className="product-info">
            <div className="buying">
              <p className="text-left">◾️ {t("originauxDetails.subtitle")}</p>

              <p className="text-right">
                ◾️ {t("originauxDetails.textOeuvre")}
              </p>
            </div>
            <motion.div
              className="details-image"
              variants={imageVariants}
              initial="initial"
              exit="exit"
              ref={detailsImageRef}
            >
              <motion.div className="img1"></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <footer className="hello">
        <Circle target={"originaux-details-container"} />
        <Form />
      </footer>
    </>
  );
};

export default OriginauxDetails;
