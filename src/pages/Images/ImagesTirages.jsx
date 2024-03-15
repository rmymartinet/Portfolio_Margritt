import gsap from "gsap";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";
import Transition from "../../components/Animations/PageTransition/Transition";
import { tirageData } from "../../data";
import "./Images.scss";

const ImagesTirages = () => {
  const { index } = useParams();
  const selectedImage = tirageData[index];
  const imageKeys = Object.keys(selectedImage).filter((key) =>
    key.startsWith("img")
  );
  const images = imageKeys.map((key) => selectedImage[key]);

  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const slideNumber = countImages(selectedImage);
  const [currentIndex, setCurrentIndex] = useState(0);

  function countImages(data) {
    return Object.keys(data).filter((key) => key.startsWith("img")).length;
  }

  const handleClickBack = () => {
    setIsClicked(true);
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
    gsap.fromTo(
      `.img${currentIndex}`,
      {
        scale: 1.5,
      },
      {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex > slideNumber - 1) {
      setCurrentIndex(0);
    }

    if (currentIndex < 0) {
      setCurrentIndex(slideNumber - 1);
    }
  }, [currentIndex, slideNumber]);

  return (
    <Transition>
      <div className="image-container">
        <div onClick={() => handleClickBack()} className="back-btn">
          x
        </div>
        <div className="image-content">
          <img
            className={`img${currentIndex}`}
            key={index}
            src={images[currentIndex]}
            alt={selectedImage.title}
          />
        </div>
        <div className="image-infos">
          <div className="content-left">
            <div className="slide-number">
              <p>{`0${currentIndex + 1} / 0${slideNumber}`}</p>
            </div>
            <div className="slide-title">{selectedImage.title}</div>
          </div>
          <div className="slide-btn">
            <div onClick={() => handleSlidePrev()} className="left-btn">
              <FaLongArrowAltLeft />
            </div>
            <div onClick={() => handleSlideNext()} className="right-btn">
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ImagesTirages;
