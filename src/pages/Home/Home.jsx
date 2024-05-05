import { motion } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/images/home/img1.jpeg";
import img2 from "../../assets/images/home/img2.jpeg";
import img3 from "../../assets/images/home/img3.jpeg";
import img4 from "../../assets/images/home/img4.jpeg";
import img5 from "../../assets/images/home/img5.jpeg";
import img6 from "../../assets/images/home/img6.jpeg";
import bicVideo from "../../assets/videos/bicVideo.mp4";
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video3 from "../../assets/videos/video3.mp4";
import video4 from "../../assets/videos/video4.mp4";
import video5 from "../../assets/videos/video5.mp4";
import video6 from "../../assets/videos/video6.mp4";
import video7 from "../../assets/videos/video7.mp4";
import video8 from "../../assets/videos/video8.mp4";
import video9 from "../../assets/videos/video9.mp4";
import { TransitionHome } from "../../components/Animations/PageTransition/Transition.jsx";
import {
  TextTransition,
  TitleTransition,
} from "../../components/Animations/TextAnimation.jsx";
import Circle from "../../components/Common/Circle.jsx";
import { useCount } from "../../components/Common/Counter.jsx";
import Form from "../../components/Form/Form.jsx";
import Projects from "../Projects/Projects.jsx";
import "./Home.scss";

import { useNavigate } from "react-router-dom";

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

/**
 *
 * !TODO : revoir le code pour les animations des oeuvres
 * !TODO : revoir le code pour les animations des textes en le flip container en scrolltrigger
 */

const Home = ({ isVisited }) => {
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
  ];
  const scrollImg = [img1, img2, img3, img4, img5, img6];
  const { t } = useTranslation();

  const generateRandomPositiion = (numPosition, minWidth, maxWidth) => {
    const position = [];
    const generatedPositions = new Set();

    while (generatedPositions.size < numPosition) {
      const x = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
      const scale = Math.random() * (1.2 - 0.5) + 0.5;

      if (!generatedPositions.has(x)) {
        position.push({ x, scale });
        generatedPositions.add(x);
      }
    }

    return position;
  };

  const position = generateRandomPositiion(19, -800, 800);
  let navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/originaux/${id}`);
  };

  useEffect(() => {
    if (countValue === 100) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1700);
    }
  }, [countValue]);

  const oeuvres = [
    { title: "Bibulle 1", img: img1 },
    { title: "Bibulle 2", img: img2 },
    { title: "Bibulle 3", img: img3 },
    { title: "Bibulle 5", img: img4 },
    { title: "Bibulle !", img: img5 },
    { title: "Maxi-Bibulle", img: img6 },
    { title: "Futurama 1", img: img1 },
    { title: "Futurama 2", img: img2 },
    { title: "Futurama 3", img: img3 },
    { title: "Mécanique des rêves ", img: img4 },
  ];

  useEffect(() => {
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
              transformOrigin: String("-6% 50% -800%"),
            },
            {
              rotationX: "+=200",
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
              transformOrigin: String("-6% 50% -500%"),
            },
            {
              rotationX: "+=200",
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
  }, [isLoading]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const scrollInfinites = document.querySelectorAll(".scroll-infinite");

      scrollInfinites.forEach((item, i) => {
        gsap.fromTo(
          item,
          {
            y: 1000,
            x: position[i].x,
            scale: position[i].scale,
          },
          {
            y: -1000,
            duration: 10,
            ease: "none",
            repeat: -1,
            repeatRefresh: true,
            delay: i * 1,
          }
        );
      });
    });

    return () => ctx.revert();
  }, [isLoading]);

  useEffect(() => {
    console.log(isVisited);
  }, [isVisited]);

  return (
    <TransitionHome isVisited={isVisited}>
      <motion.section className="home-container">
        <div className="wrapper">
          <div className="home-content">
            <TitleTransition textClassName="title-content p" />
            <div className="title-content">
              <p>Margritt</p>
            </div>

            <TextTransition textClassName="subtitle" />
            <div className="subtitle">
              <p>{t("home.text1")}</p>
              <p>{t("home.text2")}</p>
            </div>
            <TextTransition textClassName="based" />

            <div className="based">
              <span> {t("home.based")}</span>
            </div>
            <div className="scroll-images-container">
              {scrollVideo.map((video, i) => {
                return (
                  <div key={i} className="scroll-infinite">
                    <video src={video} autoPlay loop muted></video>
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
          <div className="flip-container">
            {oeuvres.map((oeuvres, index) => {
              return (
                <div key={index} className="oeuvres-grid">
                  <div
                    className="oeuvres"
                    onClick={() => handleNavigate(index)}
                  >
                    <p>{oeuvres.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="scrollDist"></div>
        </div>
        <section className="projects">
          <div className="latest-infos">
            <div className="projects-infos">
              <p className="title">BIC Collaboration</p>
              <p>
                " Nous avons eu le plaisir de collaborer avec sept artistes
                talentueux du monde entier, qui ont chacun saisi nos stylos BIC
                pour créer des choses magiques. C'est vraiment un honneur de
                fournir des outils accessibles qui nourrissent la créativité, et
                nous nous sentons privilégiés d'avoir pu nous connecter avec ces
                personnes incroyables. Ils ont généreusement partagé leur
                parcours artistique - et maintenant, c'est à vous de le
                découvrir ! Nous sommes impatients que vous plongiez dans leurs
                univers uniques, et nous espérons qu'ils vous inspireront à
                créer ! "
              </p>
            </div>
            <div className="video-content">
              <video src={bicVideo} controls></video>
            </div>
          </div>
          <Projects />
        </section>
      </motion.section>
      <footer>
        <Circle target={"project-container"} />
        <Form />
      </footer>
    </TransitionHome>
  );
};

export default Home;
