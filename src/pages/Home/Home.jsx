import { motion } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/images/home/img1.jpeg";
import img2 from "../../assets/images/home/img2.jpeg";
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video3 from "../../assets/videos/video3.mp4";
import video4 from "../../assets/videos/video4.mp4";
import video5 from "../../assets/videos/video5.mp4";
import video6 from "../../assets/videos/video6.mp4";
import video7 from "../../assets/videos/video7.mp4";
import video8 from "../../assets/videos/video8.mp4";
import video9 from "../../assets/videos/video9.mp4";
import { Transition } from "../../components/Animations/PageTransition/Transition.jsx";
import { TitleTransition } from "../../components/Animations/TextAnimation.jsx";
import Circle from "../../components/Common/Circle.jsx";
import { useCount } from "../../components/Common/Counter.jsx";
import Form from "../../components/Form/Form.jsx";
import Projects from "../Projects/Projects.jsx";
import "./Home.scss";

import { useNavigate } from "react-router-dom";
import { originauxData } from "../../data/data";

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

/**
 *
 * !TODO : revoir le code pour les animations des oeuvres
 * !TODO : revoir le code pour les animations des textes en le flip container en scrolltrigger
 */

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const countValue = useCount();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 350);

  const scrollVideo = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
  ];
  const scrollImg = [img1, img2];
  const { t } = useTranslation();

  const oeuvresData = originauxData;

  const generateRandomPosition = (numPosition, minWidth, maxWidth) => {
    const position = [];
    const generatedPositions = new Set();
    const windowWidthMobile = window.innerWidth < 498;

    while (generatedPositions.size < numPosition) {
      const x = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
      const y = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
      const scale = windowWidthMobile
        ? Math.random() * (0.5 - 0.3) + 0.5
        : Math.random() * (1.2 - 0.5) + 0.5;

      if (!generatedPositions.has(x)) {
        position.push({ x, y, scale });
        generatedPositions.add(x, y, scale);
      }
    }

    return position;
  };

  const position = generateRandomPosition(20, -800, 800);

  const mobilePosition =
    window.innerWidth < 498 && generateRandomPosition(20, -200, 200);

  let navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/originaux/${id}`);
  };

  useEffect(() => {
    if (countValue === 100) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1600);
    }
  }, [countValue]);

  useLayoutEffect(() => {
    if (windowWidth) {
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
              rotationX: (i / infosOeuvres.length) * -200,
              transformOrigin: String("-7% 50% -600%"),
            },
            {
              rotationX: "+=250",
              ease: "none",
            }
          )
          .timeScale(0.2);

        b.addEventListener("mouseover", (e) => {
          gsap.to(e.currentTarget, {
            // opacity: 0.5,
            duration: 0.4,
            ease: "expo",
          });
        });
        b.addEventListener("mouseout", (e) => {
          gsap.to(e.currentTarget, {
            opacity: 1,
            duration: 0.2,
            ease: "back.out(3)",
            overwrite: "auto",
          });
        });
      }

      ScrollTrigger.create({
        trigger: ".scrollDist",
        start: "top 80%",
        end: "bottom bottom",
        onRefresh: (self) => {
          infosOeuvres.forEach((b, i) => {
            gsap.set(b.tl, { progress: self.progress });
          });
        },
        onUpdate: (self) => {
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
          start: "top 30%",
          end: "+=300%",
          id: "flip-container",
          scrub: true,
          pin: true,
        });
      });

      return () => ctx.revert();
    } else {
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
              rotationX: (i / infosOeuvres.length) * -200,
              transformOrigin: String("-7% 50% -250%"),
            },
            {
              rotationX: "+=250",
              ease: "none",
            }
          )
          .timeScale(0.2);

        b.addEventListener("mouseover", (e) => {
          gsap.to(e.currentTarget, {
            opacity: 0.5,
            duration: 0.4,
            ease: "expo",
          });
        });
        b.addEventListener("mouseout", (e) => {
          gsap.to(e.currentTarget, {
            opacity: 1,
            duration: 0.2,
            ease: "back.out(3)",
            overwrite: "auto",
          });
        });
      }

      ScrollTrigger.create({
        trigger: ".scrollDist",
        start: "top 80%",
        end: "bottom bottom",
        onRefresh: (self) => {
          infosOeuvres.forEach((b, i) => {
            gsap.set(b.tl, { progress: self.progress });
          });
        },
        onUpdate: (self) => {
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
          start: "top 30%",
          end: "+=90%",
          id: "flip-container",
          scrub: true,
          pin: true,
        });
      });

      return () => ctx.revert();
    }
  }, [windowWidth]);

  useLayoutEffect(() => {
    const scrollInfinites = document.querySelectorAll(".scroll-infinite");

    scrollInfinites.forEach((item, i) => {
      if (!mobilePosition) {
        gsap.set(item, {
          opacity: 0,
          x: position[i].x,
          scale: position[i].scale,
        });
      } else {
        gsap.set(item, {
          opacity: 0,
          x: mobilePosition[i].x,
          scale: mobilePosition[i].scale,
        });
      }
      if (!isLoading) {
        gsap.to(item, {
          opacity: 1,
          duration: 3,
          delay: 0.3 * i,

          onComplete: () => {
            gsap.to(item, {
              onRepeat: () => {
                const newPosition = generateRandomPosition(20, -800, 800)[i].x;
                gsap.set(item, { x: newPosition });
              },
              y: i % 2 === 0 ? 800 : -800,
              duration: 7,
              ease: "power2.inOut",
              repeat: -1,
              repeatDelay: 7,
            });
          },
        });
      }
    });
  }, [isLoading, position, mobilePosition]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".home-content",
        { scale: 1 },
        {
          scale: 0.6,
          scrollTrigger: {
            trigger: ".home-content",
            start: "top top",
            end: "+100%",
            scrub: true,
            pin: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isLoading]);

  useEffect(() => {
    const item = document.querySelectorAll(".oeuvres-grid");

    item.forEach((item) => {
      const image = item.querySelector("img");
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
        gsap.to(image, { x: e.offsetX - 400, y: e.offsetY - 0 });
      });
    });
  }, []);

  return (
    <Transition>
      <motion.section className="home-container">
        <div className="home-content">
          <TitleTransition textClassName="title-content p" yposition="400" />
          <div className="title-content">
            <p>Margritt</p>
          </div>
          <div className="scroll-images-container">
            {scrollVideo.map((video, i) => {
              return (
                <div key={i} className="scroll-infinite">
                  <video
                    type="video/mp4"
                    muted
                    playsInline
                    src={video}
                    autoPlay
                    loop
                  ></video>
                </div>
              );
            })}
            {scrollImg.map((img, i) => {
              return (
                <div key={i} className="scroll-infinite">
                  <img src={img}></img>
                </div>
              );
            })}
          </div>
        </div>
        <div className="wrapper">
          <div className="flip-container">
            {oeuvresData.map((oeuvres, index) => {
              return (
                <div key={index} className="oeuvres-grid">
                  <div
                    className="oeuvres"
                    onClick={() => handleNavigate(index)}
                  >
                    <p>{oeuvres.title}</p>
                  </div>
                  <img src={oeuvres.img} alt="" />
                </div>
              );
            })}
          </div>
          <div className="scrollDist"></div>
        </div>
        <section className="projects">
          <Projects />
        </section>
      </motion.section>
      <footer>
        <Circle target={"project-container"} />
        <Form />
      </footer>
    </Transition>
  );
};

export default Home;
