import gsap, { Power2 } from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { tirageData } from "../../data";
import "./Images.scss";

const ImagesTirages = () => {
  const { index } = useParams();
  const selectedImage = tirageData[index];

  const imageKeys = Object.keys(selectedImage).filter((key) =>
    key.startsWith("img")
  );

  const allImages = Object.keys(selectedImage)
    .filter((key) => key.startsWith("img"))
    .map((key) => selectedImage[key]);

  const images = imageKeys.map((key) => selectedImage[key]);

  const [isClicked, setIsClicked] = useState(false);
  const [isClickedBack, setIsClickedBack] = useState(false);
  const navigate = useNavigate();
  const slideNumber = countImages(selectedImage);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef(null);

  function countImages(data) {
    return Object.keys(data).filter((key) => key.startsWith("img")).length;
  }

  const handleClickBack = () => {
    setIsClickedBack(true);
    navigate(-1);
  };

  const handleSlideNext = () => {
    setIsClicked(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleSlidePrev = () => {
    setIsClicked(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    isClicked &&
      gsap.fromTo(
        `.img${currentIndex}`,
        {
          scale: 1.2,
        },
        {
          scale: 1,
          duration: 1,
          ease: Power2.easeOut,
        }
      );
  }, [currentIndex, isClicked]);

  useEffect(() => {
    if (currentIndex > slideNumber - 1) {
      setCurrentIndex(0);
    }

    if (currentIndex < 0) {
      setCurrentIndex(slideNumber - 1);
    }
  }, [currentIndex, slideNumber]);

  /**
   *
   *!TODO: Changer le variant provisoire par un variant plus adapté au slider
   */

  const provisoryVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const provisoryExitVariant = {
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={provisoryExitVariant}
      exit="exit"
      className="image-container"
    >
      <div onClick={() => handleClickBack()} className="back-btn">
        Back
      </div>
      <div className="image-content">
        <img
          className={`img${currentIndex}`}
          key={index}
          src={images[currentIndex]}
          alt={selectedImage.title}
        />
      </div>

      <motion.div
        variants={provisoryVariant}
        initial="initial"
        animate="animate"
        className="wrapper-slider"
      >
        <div ref={sliderRef} className="slider-container">
          {allImages.map((item, index) => {
            return (
              <div
                className={`slider-content ${
                  currentIndex === index ? "selected" : "not-selected"
                }`}
                key={index}
              >
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
        <div className="slide-btn">
          <div onClick={() => handleSlidePrev()} className="left-btn">
            <FaLongArrowAltLeft />
          </div>
          <div onClick={() => handleSlideNext()} className="right-btn">
            <FaLongArrowAltRight />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={provisoryVariant}
        initial="initial"
        animate="animate"
        className="image-infos"
      >
        <div className="content-left">
          <div className="slide-number">
            <p>{`0${currentIndex + 1} / 0${slideNumber}`}</p>
          </div>
        </div>

        <div className="content-right">
          <div className="slide-title">{selectedImage.title}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImagesTirages;
