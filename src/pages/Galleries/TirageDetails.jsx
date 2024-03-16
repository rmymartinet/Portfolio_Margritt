import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import Transition from "../../components/Animations/PageTransition/Transition.jsx";
import { TitleTransition } from "../../components/Animations/TextAnimation.jsx";
import Circle from "../../components/Common/Circle.jsx";
import InfoItem from "../../components/Common/InfoItem.jsx";
import Form from "../../components/Form/Form.jsx";
import { tirageData } from "../../data.js";
import "./OriginauxDetails.scss";
gsap.registerPlugin(ScrollTrigger);

const TirageDetails = () => {
  const { index } = useParams();
  const selectedImage = tirageData[index];
  const saleProduct = selectedImage.available;
  const slideNumber = countImages(selectedImage);
  const [isClicked, setIsClicked] = useState(false);

  function countImages(data) {
    return Object.keys(data).filter((key) => key.startsWith("img")).length;
  }

  const { t } = useTranslation();
  const { index: currentIndex } = useParams();

  const navigate = useNavigate();

  let nextIndex = parseInt(currentIndex) + 1;
  if (nextIndex >= tirageData.length) {
    nextIndex = 0;
  }
  const nextItem = tirageData[nextIndex];

  const handleNavigateTirages = (index) => {
    navigate(`/tirages/${index}`);
  };

  useEffect(() => {
    const item = document.querySelector(".navigate-works-item p");

    const image = document.querySelector(".navigate-works-item img");
    item.addEventListener("mouseenter", (e) => {
      gsap.to(image, {
        opacity: 1,
        ease: "power3.inOut",
      });
    });

    item.addEventListener("mouseleave", (e) => {
      gsap.to(image, {
        opacity: 0,
      });
    });

    item.addEventListener("mousemove", (e) => {
      gsap.to(image, { x: e.offsetX - 250, y: e.offsetY - 0 });
    });
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    navigate(`/tirages-images/${index}`);
  };

  return (
    <Transition>
      <motion.div className="originaux-details-container">
        <motion.div className="infos-container">
          <TitleTransition textClassName="title h1" />
          <div className="title">
            <h1>{selectedImage.title}</h1>
          </div>
          <div className="product-info">
            <motion.div className="details-image">
              <img loading="lazy" src={selectedImage.img} alt={""} />
            </motion.div>
            {countImages(selectedImage) > 1 && (
              <div onClick={() => handleClick()} className="btn">
                <p>+</p>
              </div>
            )}
            <div className="sale">
              <p>{saleProduct}</p>
            </div>
            <div className="total-slide">
              <p>{`01 / 0${slideNumber}`}</p>
            </div>
          </div>

          <div className="divider" />
          <div className="wrapper">
            <motion.div className="description">
              <div className="title-description">
                <p>Description</p>
              </div>
              <div className="buying-text">
                <p>{t("originauxDetails.textOeuvre")}</p>
              </div>
              <div className="details-infos">
                <InfoItem
                  label="Serie"
                  value={selectedImage.serie}
                  className="serie"
                />
                <InfoItem
                  label="Année"
                  value={selectedImage.date}
                  className="date"
                />
                <InfoItem
                  label={t("originauxDetails.piece")}
                  value={selectedImage.piece}
                  className="piece"
                />
                <InfoItem
                  label="Format"
                  value={selectedImage.format}
                  className="format"
                />
                <InfoItem
                  label={t("originauxDetails.paper")}
                  value={selectedImage.papier}
                  className="paper"
                />
              </div>
            </motion.div>
            <div className="livraison">
              <div className="background"></div>
              <div className="livraison-title">
                <p>{t("tiragesDetails.delivery")}</p>
              </div>
              <InfoItem
                label="France"
                value={t("tiragesDetails.france")}
                className="france"
              />
              <InfoItem
                label="Europe"
                value={t("tiragesDetails.europe")}
                className="europe"
              />
              <InfoItem
                label="International"
                value={t("tiragesDetails.international")}
                className="international"
              />
            </div>
            <div className="divider" />
            <div className="navigate">
              <div className="navigate-title">
                <p>Next project:</p>
              </div>
              <div className="navigate-works-originaux">
                {nextItem && (
                  <div
                    onClick={() => {
                      handleNavigateTirages(nextItem.id);
                    }}
                    className="navigate-works-item"
                  >
                    <p>{nextItem.title}</p>
                    <img
                      loading="lazy"
                      src={nextItem.img}
                      alt={nextItem.title}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <footer className="hello">
        <Circle target={"originaux-details-container"} />
        <Form />
      </footer>
    </Transition>
  );
};

export default TirageDetails;
