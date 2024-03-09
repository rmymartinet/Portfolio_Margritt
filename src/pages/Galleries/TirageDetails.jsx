import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import InfoItem from "../../components/Common/InfoItem.jsx";
import { tirageData } from "../../data.js";
import "./Galleriesdetails.scss";
gsap.registerPlugin(ScrollTrigger);

const TirageDetails = () => {
  const { index } = useParams();
  const firstImgRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const detailsImageRef = useRef(null);
  const detailsImageCopyRef = useRef(null);
  const titleRef = useRef(null);
  const selectedImage = tirageData[index];
  const [isAnimated, setIsAnimated] = useState(true);
  const { t } = useTranslation();

  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
        ease: "easeInOut",
      },
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const imageVariants = {
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const imgRefs = [firstImgRef, image1Ref, image2Ref, image3Ref];
  const copyRefs = document.querySelectorAll(".details-image-copy img");

  const scrollAnimation = useCallback(() => {
    imgRefs.forEach((ref, index) => {
      const copyRef = copyRefs[index];

      if (index === 0 || index === 1) {
        gsap.set(copyRef, {
          opacity: 1,
        });
      } else {
        gsap.set(copyRef, {
          opacity: 0.5,
        });
      }

      {
        !isAnimated &&
          gsap.to(copyRef, {
            opacity: 1,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "50% 80%",
              scrub: 1,
            },
          });
      }
    });
  }, [isAnimated, copyRefs, imgRefs]);

  useLayoutEffect(() => {
    scrollAnimation();
  }, [isAnimated, scrollAnimation]);

  const originalSliderAnimation = useCallback((clasName, topValue) => {
    const tl = gsap.timeline();
    const context = gsap.context(() => {
      tl.to(clasName, {
        top: topValue,
        opacity: 1,
        duration: 2,
        ease: "power3.inOut",
      });
    }, detailsImageRef);

    return context;
  }, []);

  useLayoutEffect(() => {
    if (window.innerWidth > 768) {
      gsap.to(".tirage-details-container ", {
        padding: "5em",
        delay: 1,
        duration: 2,
        ease: "power3.inOut",
        onComplete: () => {
          setIsAnimated(false);
        },
      });
      originalSliderAnimation(".img2", "120%");
      originalSliderAnimation(".img3", "240%");
      originalSliderAnimation(".img4", "360%");
    }
  }, [originalSliderAnimation]);

  const copySliderAnimation = useCallback((clasName, time) => {
    const tl = gsap.timeline();

    const context = gsap.context(() => {
      gsap.set(clasName, {
        visibility: "hidden",
        y: "200%",
      });

      tl.to(
        clasName,
        {
          visibility: "visible",
          y: "0%",
          duration: 1,
          ease: "power3.inOut",
        },
        time
      );
    }, detailsImageCopyRef);

    return context;
  }, []);

  useLayoutEffect(() => {
    copySliderAnimation(".img1-copy", 0.3);
    copySliderAnimation(".img2-copy", 0.4);
    copySliderAnimation(".img3-copy", 0.5);
    copySliderAnimation(".img4-copy", 0.6);
  }, [copySliderAnimation]);

  const lowOriginalSliderAnimation = useCallback((clasName) => {
    const tl = gsap.timeline();
    const context = gsap.context(() => {
      tl.fromTo(
        clasName,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 2,
          duration: 2,
          ease: "power3.inOut",
        }
      );
    }, detailsImageRef);

    return context;
  }, []);

  useLayoutEffect(() => {
    if (window.innerWidth < 768) {
      gsap.fromTo(
        ".details-image ",
        {
          y: "-350%",
        },
        {
          y: 0,
          duration: 2,
          ease: "power3.inOut",
        }
      );
      lowOriginalSliderAnimation(".img2");
      lowOriginalSliderAnimation(".img3");
      lowOriginalSliderAnimation(".img4");
    }
  }, [lowOriginalSliderAnimation]);

  if (!selectedImage) {
    return <h1>Error 404</h1>;
  }

  return (
    <motion.div className="tirage-details-container">
      <motion.div
        className="details-content-left"
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="title" ref={titleRef}>
          <p>{selectedImage.title}</p>
        </div>
        <div className="description">
          <p className="piece">
            {selectedImage.piece} {t("tiragesDetails.piece")}
          </p>
          <div className="serie-date-content">
            <p className="serie">{selectedImage.serie}</p>
            <p className="date">{selectedImage.date}</p>
          </div>
        </div>
        <div className="subtitle">
          <p>{t("tiragesDetails.subtitle")}</p>
          <p>{t("tiragesDetails.courtsTirages")}</p>
        </div>
        <div className="details-content-right">
          <div className="tirage-infos">
            <InfoItem
              label="Tirage"
              className="tirage"
              value={t("tiragesDetails.print")}
            />
            <InfoItem
              label={t("tiragesDetails.size")}
              value={selectedImage.format}
              className="format"
            />
            <InfoItem
              label={t("tiragesDetails.paper")}
              value={selectedImage.papier}
              className="papier"
            />
            <div className="divider2"></div>
          </div>
          <div className="livraison">
            <div className="livraison-title">
              <p>{t("tiragesDetails.delivery")}</p>
            </div>
            <InfoItem
              label="France"
              value={t("tiragesDetails.france")}
              className="papier"
            />
            <InfoItem
              label="Europe"
              value={t("tiragesDetails.europe")}
              className="papier"
            />
            <InfoItem
              label="International"
              value={t("tiragesDetails.international")}
              className="papier"
            />
          </div>
        </div>
        <div className="note">
          <p>{t("tiragesDetails.frame")}</p>
          <p>{t("tiragesDetails.contact")}</p>
        </div>
      </motion.div>

      <motion.div
        className="details-image"
        variants={imageVariants}
        exit="exit"
        ref={detailsImageRef}
      >
        <motion.div className="img1">
          <img
            loading="lazy"
            ref={firstImgRef}
            src={selectedImage.img}
            alt={""}
          />
        </motion.div>
        <motion.div className="img2" exit="exit">
          <img
            loading="lazy"
            src={selectedImage.img1}
            alt={""}
            ref={image1Ref}
          />
        </motion.div>
        <motion.div className="img3" exit="exit">
          <img
            loading="lazy"
            src={selectedImage.img2}
            alt={""}
            ref={image2Ref}
          />
        </motion.div>
        <motion.div className="img4" exit="exit">
          <img
            loading="lazy"
            src={selectedImage.img3}
            alt={""}
            ref={image3Ref}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="details-image-copy"
        variants={imageVariants}
        exit="exit"
        ref={detailsImageCopyRef}
      >
        <div className="img1-copy">
          <img loading="lazy" src={selectedImage.img} alt={""} />
        </div>
        <div className="img2-copy">
          <img loading="lazy" src={selectedImage.img1} alt={""} />
        </div>
        <div className="img3-copy">
          <img loading="lazy" src={selectedImage.img2} alt={""} />
        </div>
        <div className="img4-copy">
          <img loading="lazy" src={selectedImage.img3} alt={""} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TirageDetails;
