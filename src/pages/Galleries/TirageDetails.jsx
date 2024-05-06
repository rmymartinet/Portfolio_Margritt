import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { Transition } from "../../components/Animations/PageTransition/Transition.jsx";
import Divider from "../../components/Common/Divider.jsx";
import InfoItem from "../../components/Common/InfoItem.jsx";
import { tirageData } from "../../data";
import "./OriginauxDetails.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const TirageDetails = () => {
  const { index } = useParams();
  const selectedImage = tirageData[index];

  const allImages = Object.keys(selectedImage).filter((key) => {
    return key.includes("img");
  });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleNavigateOriginaux = (id) => {
    let index = tirageData.findIndex((item) => item.id === id);
    index = index % tirageData.length;
    navigate(`/tirages/${tirageData[index].id}`);
  };

  const titleIndex = selectedImage.title === "Futurama 3";
  const titleFuturama2 = selectedImage.title === "Futurama 2";
  const validateIndex = titleIndex ? "futurama3-container" : "image-container";
  const validateNextImg = titleFuturama2
    ? "navigate-works-item-futurama2"
    : "navigate-works-item";

  let nextIndex = parseInt(index) + 1;
  if (nextIndex >= tirageData.length) {
    nextIndex = 0;
  }
  const nextItem = tirageData[nextIndex];

  const saleProduct = selectedImage.available || selectedImage.notAvailable;

  const { scrollYProgress } = useScroll({
    target: ".scroll-zoom",
    offset: ["start start", "end end"],
  });

  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: selectedImage.img,
      scale: scale2,
    },
    {
      src: selectedImage.img1,
      scale: scale3,
    },
    {
      src: selectedImage.img2,
      scale: scale4,
    },
    {
      src: selectedImage.img3,
      scale: scale5,
    },
    {
      src: selectedImage.img4,
      scale: scale6,
    },
  ];

  const windowWidth = window.innerWidth < 498;

  /**
   *
   *  Scroll horizontal
   */

  useLayoutEffect(() => {
    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;

    if (!windowWidth) {
      let ctx = gsap.context(() => {
        const scrollContainer = document.querySelector(".scroll-container");

        function getScrollAmount() {
          let containerWidth = scrollContainer.scrollWidth;
          return -(containerWidth - window.innerWidth);
        }

        const tween = gsap.to(scrollContainer, {
          x: getScrollAmount,
          duration: 3,
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: ".scroll-container",
          y: -navHeight,
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          animation: tween,
          scrub: 1,
          invalidateOnRefresh: true,
        });
      });

      return () => ctx.revert();
    }
  }, [windowWidth]);

  /**
   *
   * Opaque title on scroll
   */

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".title", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".title",
          start: "top center",
          end: "bottom 50%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);
  /**
   * !TODO: Modifier la traduction available ou notAvailable
   * !TODO: Ajouter Animation Flip lors du clique sur le bouton pour afficher plus d'images
   */

  // const saleProduct = selectedImage.available || selectedImage.notAvailable;

  return (
    <Transition isClicked={isClicked}>
      <div className="scroll-zoom">
        <div className="product-info">
          {allImages.length > 2
            ? pictures.map(({ src, scale }, index) => {
                return (
                  <motion.div
                    key={index}
                    style={{ scale }}
                    className="details-image"
                  >
                    <div className={validateIndex}>
                      <img src={src} alt="image" placeholder="blur" />
                    </div>
                  </motion.div>
                );
              })
            : pictures.slice(0, 1).map(({ src, scale }, index) => {
                return (
                  <motion.div
                    key={index}
                    style={{ scale }}
                    className="details-image"
                  >
                    <div className={validateIndex}>
                      <img src={src} alt="image" placeholder="blur" />
                    </div>
                  </motion.div>
                );
              })}
          <div className="title">
            <p>{selectedImage.title}</p>
          </div>
        </div>
      </div>
      <div className="scroll-container">
        <div className="panel info-panel">
          <div className="infos-container">
            <Divider className="originaux-divider" />
            <div className="description">
              <div className="title-description">
                <p>Description</p>
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
                {/* {selectedImage.marqueur && (
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
                )} */}
              </div>
              <Divider className="description-divider" />
              <div className="buying-text">
                <FaCircle size={30} />
                <p>{t("originauxDetails.textOeuvre")}</p>
              </div>
              <div className="sale">
                <p>{saleProduct}</p>
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
            </div>
          </div>
        </div>
        <div className="last-panel">
          <div className="navigate">
            {nextItem && (
              <div className={validateNextImg}>
                <img loading="lazy" src={nextItem.img} alt={nextItem.title} />
              </div>
            )}
            <div className="navigate-content">
              <div className="navigate-title">
                <p>{nextItem.title}</p>
              </div>
              <div
                className="navigate-icon"
                onClick={() => {
                  handleNavigateOriginaux(nextItem.id);
                }}
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default TirageDetails;
