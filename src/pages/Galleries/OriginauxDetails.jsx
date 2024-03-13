import { motion } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import SplitType from "split-type";
import Circle from "../../components/Common/Circle.jsx";
import InfoItem from "../../components/Common/InfoItem.jsx";
import Form from "../../components/Form/Form.jsx";
import { originauxData, tirageData } from "../../data.js";
import "./OriginauxDetails.scss";

gsap.registerPlugin(ScrollTrigger);

const OriginauxDetails = () => {
  const { index } = useParams();
  const { index: currentIndex } = useParams();
  const firstImgRef = useRef(null);
  const detailsImageRef = useRef(null);
  const titleRef = useRef(null);
  const selectedImage = originauxData[index];
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (!isClicked) {
      gsap.to(".navigate", {
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
      });
    }
  };

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

  const handleNavigateOriginaux = (index) => {
    navigate(`/originaux/${index}`);
    window.scrollTo(0, 0);
  };

  const handleNavigateTirages = (index) => {
    navigate(`/tirages/${index}`);
    window.scrollTo(0, 0);
  };

  const gridFlipAnimation = useCallback(() => {
    gsap.registerPlugin(Flip);
    const container = document.querySelector(".details-image");
    const imgOnContainer = document.querySelector(".details-image img");
    const gridContainer = document.querySelector(".grid-images");
    const gridImages = document.querySelectorAll(".grid-images img");

    gridImages.forEach((image) => {
      image.addEventListener("click", () => {
        let detailsImageState = Flip.getState(imgOnContainer);
        gridContainer.appendChild(imgOnContainer);
        Flip.from(detailsImageState, {
          absolute: true,
          duration: 2,
          ease: "power3.inOut",
        });

        let state = Flip.getState(image);
        container.appendChild(image);
        Flip.from(state, {
          absolute: true,
          duration: 2,
          ease: "power3.inOut",
        });
      });
    });
  }, []);

  useEffect(() => {
    gridFlipAnimation();
  }, [gridFlipAnimation]);

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
            ></motion.div>

            {/* <div className="grid-images">
              <img loading="lazy" src={selectedImage.img1} alt={""} />
              <img loading="lazy" src={selectedImage.img2} alt={""} />
              <img loading="lazy" src={selectedImage.img3} alt={""} />
            </div> */}
          </div>
        </motion.div>
        <div className="navigate">
          <div className="navigate-works-originaux">
            <h2>Navigate to originaux</h2>
            {originauxData
              .filter((_, index) => index !== parseInt(currentIndex))
              .map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      handleNavigateOriginaux(item.id);
                      handleClick();
                    }}
                    key={index}
                    className="navigate-works-item"
                  >
                    <span>{item.title}</span>
                    <img loading="lazy" src={item.img} alt={item.title} />
                  </div>
                );
              })}
          </div>
          <div className="navigate-works-tirages">
            <h2>Navigate to tirages</h2>
            {tirageData
              .filter((_, index) => index !== parseInt(currentIndex))
              .map((item, index) => {
                return (
                  <div
                    onClick={() => handleNavigateTirages(item.id)}
                    key={index}
                    className="navigate-works-item"
                  >
                    <span>{item.title}</span>
                    <img loading="lazy" src={item.img} alt={item.title} />
                  </div>
                );
              })}
          </div>
        </div>
      </motion.div>

      <footer className="hello">
        <Circle target={"originaux-details-container"} />
        <Form />
      </footer>
    </>
  );
};

export default OriginauxDetails;
