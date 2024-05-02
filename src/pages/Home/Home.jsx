import { motion } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SplitType from "split-type";
import Transition from "../../components/Animations/PageTransition/Transition.jsx";
import "./Home.scss";

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

/**
 *
 * !TODO : revoir le code pour les animations des oeuvres
 * !TODO : revoir le code pour les animations des textes en le flip container en scrolltrigger
 */

const Home = ({ isLoading }) => {
  const { t } = useTranslation();
  const [isClicked, setIsClicked] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const SplitLines = (textClassName, delay) => {
    const element = document.querySelector(`.${textClassName}`);
    const split = new SplitType(element);

    gsap.from(split.lines, {
      y: 200,
      skewX: 20,
      rotation: 15,
      duration: 2,
      stagger: 0.1,
      ease: "power3.inOut",
      delay: delay,
    });
  };

  useEffect(() => {
    SplitLines("text-1 p", 0);
    SplitLines("based p", 0);
    SplitLines("made-by p", 0);
  }, [isLoading]);

  useEffect(() => {
    if (isFirstRender && !isLoading) {
      setIsFirstRender(false);
    }
  }, [isLoading, isFirstRender]);

  const oeuvres = [
    "Bibulle 1",
    "Bibulle 2",
    "Bibulle 3",
    "Bibulle 5",
    "Bibulle !",
    "Maxi-Bibulle",
    "Futurama 1",
    "Futurama 2",
    "Futurama 3",
    "Mécanique des rêves ",
  ];

  useLayoutEffect(() => {
    let images = gsap.utils.toArray(".oeuvres");
    let slots = gsap.utils.toArray(".oeuvres-grid");

    ScrollTrigger.create({
      trigger: ".images",
      start: "top top",
      markers: true,
      onEnter: () => {
        let state = Flip.getState(images);

        images.forEach((image, i) => slots[i].appendChild(image));
        gsap.set(images, { xPercent: 0, rotation: 0 });

        Flip.from(state, {
          duration: 0.5,

          onComplete: () => {
            images.forEach((image, i) => slots[i].appendChild(image));
          },
        });
      },
    });
  }, []);

  useEffect(() => {
    var c = document.querySelector(".flip-container");
    const infosOeuvres = document.querySelectorAll(".oeuvres-grid");

    gsap.to(c, 0.4, { perspective: 200 });

    for (var i = 0; i < infosOeuvres.length; i++) {
      var b = infosOeuvres[i];

      gsap.set(b, {
        position: "absolute",
        left: "50%",
        top: "50%",
        xPercent: -50,
        margin: -150,
        // width: "100%",
        height: 300,
        clearProps: "transform",
        backfaceVisibility: "hidden",
      });

      b.tl = gsap
        .timeline({ paused: true, defaults: { immediateRender: true } })
        .fromTo(
          b,
          {
            scale: 0.2,
            rotationX: (i / infosOeuvres.length) * -360,
            transformOrigin: String("-7% 50% -800%"),
          },
          {
            rotationX: "+=360",
            ease: "none",
          }
        )
        .timeScale(0.2);

      b.addEventListener("mouseover", (e) => {
        gsap.to(e.currentTarget, {
          opacity: 0.5,
          // scale: 0.36,
          duration: 0.4,
          ease: "expo",
        });
      });
      b.addEventListener("mouseout", (e) => {
        gsap.to(e.currentTarget, {
          opacity: 1,
          // scale: 0.3,
          duration: 0.2,
          ease: "back.out(3)",
          overwrite: "auto",
        });
      });
      b.addEventListener("click", (e) => {
        window.open(
          e.currentTarget.style.backgroundImage.slice(5, -2),
          "_blank"
        );
      });
    }

    ScrollTrigger.create({
      trigger: ".scrollDist",
      start: "top 30%",
      end: "bottom bottom",
      markers: true,
      onRefresh: (self) => {
        infosOeuvres.forEach((b, i) => {
          gsap.set(b.tl, { progress: self.progress });
        });
      },
      onUpdate: (self) => {
        console.log(self.progress);
        infosOeuvres.forEach((b, i) => {
          gsap.to(b.tl, { progress: self.progress });
        });
      },
    });

    /**
     * Animation Scrolltrigger PIN FlipContainer
     */
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".flip-container",
        start: "top 20%",
        end: "bottom+=700%",
        markers: true,
        scrub: true,
        pin: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Transition>
      <motion.section className="home-container">
        <div className="wrapper">
          <div className="home-content">
            <div className="content-right">
              <p>{t("home.text1")}</p>
              <p>{t("home.text2")}</p>
            </div>
            <div className="content-left">
              <p>Margritt</p>
              <div className="based">
                <span> {t("home.based")}</span>
              </div>
            </div>
            <div className="infos-oeuvres">
              {oeuvres.map((oeuvres, index) => {
                return (
                  <div key={index} className="oeuvres">
                    <p>{oeuvres}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flip-container">
            <div className="oeuvres-grid"></div>
            <div className="oeuvres-grid"></div>
            <div className="oeuvres-grid"></div>
            <div className="oeuvres-grid"></div>
            <div className="oeuvres-grid"></div>
            <div className="oeuvres-grid"></div>
            <div className="oeuvres-grid"></div>
            <div className="oeuvres-grid"></div>
            <div className="oeuvres-grid"></div>
            <div className="oeuvres-grid"></div>
          </div>

          <div className="scrollDist"></div>
        </div>
      </motion.section>
    </Transition>
  );
};

export default Home;
