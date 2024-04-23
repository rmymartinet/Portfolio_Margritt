import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import Transition from "../../components/Animations/PageTransition/Transition.jsx";
import { TitleTransition } from "../../components/Animations/TextAnimation.jsx";
import Circle from "../../components/Common/Circle.jsx";
import Divider from "../../components/Common/Divider.jsx";
import InfoItem from "../../components/Common/InfoItem.jsx";
import Logo from "../../components/Common/Logo.jsx";
import Form from "../../components/Form/Form.jsx";
import { tirageData } from "../../data.js";
import "./OriginauxDetails.scss";
gsap.registerPlugin(ScrollTrigger);

const TirageDetails = () => {
  const { index } = useParams();
  const { index: currentIndex } = useParams();
  const selectedImage = tirageData[index];
  const slideNumber = countImages(selectedImage);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const btnRef = useRef(null);
  const saleRef = useRef(null);
  const totalSlideRef = useRef(null);
  const wrapperRef = useRef(null);

  const [isClicked, setIsClicked] = useState(false);

  function countImages(data) {
    return Object.keys(data).filter((key) => key.startsWith("img")).length;
  }

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

  const handleNavigateTirages = (id) => {
    let index = tirageData.findIndex((item) => item.id === id);
    index = index < tirageData.length ? index : 0;

    navigate(`/tirages/${tirageData[index].id}`);
  };

  let nextIndex = parseInt(currentIndex) + 1;
  if (nextIndex >= tirageData.length) {
    nextIndex = 0; // Si on est à la fin du tableau, on revient au début
  }
  const nextItem = tirageData[nextIndex];

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
  };

  useEffect(() => {
    if (isClicked) {
      const flipContainer = document.querySelector(".flip-container");
      const image = document.querySelector(".details-image img");
      let state = Flip.getState(".details-image img");

      flipContainer.append(image);

      Flip.from(state, {
        absolute: true,
        duration: 2,
        ease: "power3.inOut",

        onComplete: () => {
          navigate(`/tirages-images/${index}`);
        },
      });

      gsap.to(
        [
          titleRef.current,
          btnRef.current,
          wrapperRef.current,
          saleRef.current,
          totalSlideRef.current,
        ],
        {
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
        }
      );
    }
  }, [isClicked]);

  /**
   * !TODO: Modifier la traduction available ou notAvailable
   * !TODO: Ajouter Animation Flip lors du clique sur le bouton pour afficher plus d'images
   */

  const saleProduct = selectedImage.available || selectedImage.notAvailable;

  return (
    <Transition isClicked={isClicked}>
      <Logo />
      <div className="originaux-details-container">
        <div ref={imageRef} className="flip-container"></div>
        <div className="infos-container">
          <TitleTransition isClciked={isClicked} textClassName="title h1" />
          <div ref={titleRef} className="title">
            <h1>{selectedImage.title}</h1>
          </div>
          <div className="product-info">
            <div className="details-image">
              <img loading="lazy" src={selectedImage.img} alt={""} />
            </div>
            {countImages(selectedImage) > 1 && (
              <div ref={btnRef} onClick={() => handleClick()} className="btn">
                <p>+</p>
              </div>
            )}
            <div ref={saleRef} className="sale">
              <p>{saleProduct}</p>
            </div>
            <div ref={totalSlideRef} className="total-slide">
              <p>{`01 / 0${slideNumber}`}</p>
            </div>
          </div>

          <Divider className="originaux-divider" />

          <div ref={wrapperRef} className="wrapper">
            <div className="description">
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
                {selectedImage.marqueur && (
                  <InfoItem
                    label={t("originauxDetails.marker")}
                    value={selectedImage.marqueur}
                    className="paper"
                  />
                )}
                {selectedImage.stylo && (
                  <InfoItem
                    label={t("originauxDetails.pen")}
                    value={selectedImage.stylo}
                    className="paper"
                  />
                )}
                {selectedImage.feutre && (
                  <InfoItem
                    label={t("originauxDetails.felt-tip pen")}
                    value={selectedImage.feutre}
                    className="paper"
                  />
                )}
                {selectedImage.peinture && (
                  <InfoItem
                    label={t("originauxDetails.paint")}
                    value={selectedImage.peinture}
                    className="paper"
                  />
                )}
              </div>
            </div>
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
        </div>
      </div>
      <footer className="hello">
        <Circle target={"originaux-details-container"} />
        <Form />
      </footer>
    </Transition>
  );
};

export default TirageDetails;
