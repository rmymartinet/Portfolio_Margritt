import { useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import about1 from "../../assets/images/about/about1.jpg";
import about2 from "../../assets/images/about/about2.jpg";

const AboutContent = forwardRef((_, ref) => {
  const { t } = useTranslation();
  const rightImg = useRef(null);
  const leftImg = useRef(null);
  const isImgInView = useInView(leftImg, {
    triggerOnce: true,
    threshold: 0.7,
  });

  const imageReveal = (element) => {
    const tl = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "Power3.inOut",
      },
    });

    tl.from(
      element,
      {
        yPercent: -50,
        scale: 1.15,
      },
      0
    ).to(
      element,
      {
        yPercent: 0,
        scale: 1,
      },
      0
    );
  };

  const imagesScaleAnimation = (element) => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.to(element, {
        scale: 1.15,
        scrollTrigger: {
          trigger: ".right-img",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return context;
  };

  useEffect(() => {
    if (isImgInView) {
      imageReveal(".left-wrapper img");
    }
  }, [isImgInView]);

  useEffect(() => {
    imagesScaleAnimation(".right-img img");
  }, []);

  //ANIMATION LEFT CONTENT
  useEffect(() => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".left-content",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      if (window.innerWidth > 1200) {
        tl.fromTo(
          ".left-content",
          {
            y: 200,
          },
          {
            duration: 2,
            y: -100,
            ease: "power2.out",
          }
        );
      } else {
        tl.fromTo(
          ".left-content",
          {
            y: 300,
          },
          {
            duration: 2,
            y: -100,
            ease: "power2.out",
          }
        );
      }
    });
  }, []);

  return (
    <div className="about-content" ref={ref}>
      <p className="about-title">
        <span>Margritt Martinet</span> {t("about.subtitle")}
      </p>
      <div ref={rightImg} className="right-img">
        <img src={about1} alt="" />
      </div>
      <div className="left-content">
        <div className="left-text">
          <div className="text-1">{t("about.text1")}</div>
          <div className="text-2">{t("about.text2")}</div>
          <div className="text-3">{t("about.text3")}</div>
        </div>
        <div ref={leftImg} className="left-img">
          <div className="left-wrapper">
            <img src={about2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
});

AboutContent.displayName = "AboutContent";

export default AboutContent;
