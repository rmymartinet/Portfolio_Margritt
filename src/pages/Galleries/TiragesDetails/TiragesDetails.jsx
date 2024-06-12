import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { Transition } from "../../../components/Animations/PageTransition/Transition.jsx";
import Divider from "../../../components/Common/Divider.jsx";
import InfoItem from "../../../components/Common/InfoItem.jsx";
import HorizontalScroll from "../../../components/Galleries/HorizontalScroll.jsx";
import ZoomAnimation from "../../../components/Galleries/ZoomAnimation.jsx";
import { tirageData } from "../../../data/data.js";
import "../OriginauxDetails.scss";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const TirageDetails = () => {
  const { index } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const scrollZoom = useRef(null);
  const scrollContainer = useRef(null);
  const titleRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  const currentIndex = parseInt(index, 10);
  const selectedImage = tirageData[currentIndex];
  const nextIndex = (currentIndex + 1) % tirageData.length;
  const nextItem = tirageData[nextIndex];
  const saleProduct = selectedImage.available || selectedImage.notAvailable;

  /*---------------
  Navigate to next item
  ---------------- */

  const handleNavigateTirages = (id) => {
    let index = tirageData.findIndex((item) => item.id === id);
    index = index % tirageData.length;
    navigate(`/tirages/${tirageData[index].id}`);
  };

  /*---------------
  Control the last image Futurama 2 CSS
  ----------------*/

  const titleFuturama2 = selectedImage.title === "Futurama 2";
  const validateNextImg = titleFuturama2
    ? "navigate-works-item-futurama2"
    : "navigate-works-item";

  /*---------------
  Control horizontal scroll
  ----------------*/

  HorizontalScroll({ scrollContainer });

  useGSAP(() => {
    gsap.to(titleRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top center",
        end: "bottom 50%",
        scrub: true,
      },
    });
  });

  return (
    <Transition isClicked={isClicked}>
      <div ref={scrollZoom} className="scroll-zoom">
        <div className="product-info">
          <ZoomAnimation
            selectedImage={selectedImage}
            scrollZoom={scrollZoom.current}
          />
          <div ref={titleRef} className="title">
            <p>{selectedImage.title}</p>
          </div>
        </div>
      </div>
      <div ref={scrollContainer} className="scroll-container">
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
              </div>
              <Divider className="description-divider" />
              <div className="buying-text">
                <FaCircle size={30} />
                <p>{t("tiragesDetails.subtitle")}</p>
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
                <img
                  loading="lazy"
                  src={nextItem.imgWebp}
                  alt={nextItem.title}
                />
              </div>
            )}
            <div className="navigate-content">
              <div className="navigate-title">
                <p>{nextItem.title}</p>
              </div>
              <div
                className="navigate-icon"
                onClick={() => {
                  handleNavigateTirages(nextItem.id);
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
