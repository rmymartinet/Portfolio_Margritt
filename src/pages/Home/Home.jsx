import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/images/home/img1.jpeg";
import img2 from "../../assets/images/home/img2.jpeg";
import { Transition } from "../../components/Animations/PageTransition/Transition.jsx";
import { TitleTransition } from "../../components/Animations/TextAnimation.jsx";
import Circle from "../../components/Common/Circle.jsx";
import { useCount } from "../../components/Common/Counter.jsx";
import useWindow from "../../components/Common/UseWindows.jsx";
import Form from "../../components/Form/Form.jsx";
import GeneratePosition from "../../components/Home/GeneratePosition.jsx";
import useHoverEvents from "../../components/Home/useHoverEvents.jsx";
import useInitialAnimations from "../../components/Home/useInitialAnimation.jsx";
import useScrollTriggerAnimation from "../../components/Home/useScrollTriggerAnimations.jsx";
import { originauxData } from "../../data/data";
import { dataVideo } from "../../data/dataVideo.js";
import Projects from "../Projects/Projects.jsx";
import "./Home.scss";

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

/**
 * !TODO : revoir le code pour les animations des images en hover
 */

const Home = () => {
  const { dimension } = useWindow();
  const scrollImg = [img1, img2];
  const oeuvresData = originauxData;
  const [isLoading, setIsLoading] = useState(true);
  const countValue = useCount();

  let navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/originaux/${id}`);
  };

  /*----------
    Generate random position for videos and images
  -----------*/
  GeneratePosition({ isLoading });

  /*----------
   Remove Loading page
  -----------*/
  useEffect(() => {
    if (countValue === 100) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1600);
    }
  }, [countValue]);

  /*----------
   Scroll Works
  -----------*/
  const flipContainerRef = useRef(null);
  const infosOeuvresRefs = useRef([]);

  useEffect(() => {
    infosOeuvresRefs.current = infosOeuvresRefs.current.slice(
      0,
      oeuvresData.length
    );
  }, [oeuvresData.length]);

  useInitialAnimations({ flipContainerRef, infosOeuvresRefs }, 200);
  useHoverEvents({ infosOeuvresRefs });
  useScrollTriggerAnimation({ infosOeuvresRefs });

  /*----------
   Remove Loading page
  -----------*/

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

  /*----------
   Display images on hover
  -----------*/

  useGSAP(
    () => {
      if (dimension.width > 468) {
        const items = document.querySelectorAll(".oeuvres-grid");

        items.forEach((item) => {
          const image = item.querySelector("img");

          const handleMouseEnter = () => {
            gsap.to(image, {
              opacity: 1,
              ease: "power3.inOut",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(image, {
              opacity: 0,
            });
          };

          const handleMouseMove = (e) => {
            gsap.to(image, { x: e.offsetX - 400, y: e.offsetY });
          };

          item.addEventListener("mouseenter", handleMouseEnter);
          item.addEventListener("mouseleave", handleMouseLeave);
          item.addEventListener("mousemove", handleMouseMove);

          // Cleanup event listeners on component unmount
          return () => {
            item.removeEventListener("mouseenter", handleMouseEnter);
            item.removeEventListener("mouseleave", handleMouseLeave);
            item.removeEventListener("mousemove", handleMouseMove);
          };
        });
      }
    },
    { scope: flipContainerRef, dependencies: [dimension.width, oeuvresData] }
  );

  return (
    <Transition>
      <motion.section className="home-container">
        <div className="home-content">
          <TitleTransition textClassName="title-content p" yposition="400" />
          <div className="title-content">
            <p>Margritt</p>
          </div>
          <div className="scroll-images-container">
            {dataVideo.map((video, i) => {
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
          <div ref={flipContainerRef} className="flip-container">
            {oeuvresData.map((oeuvres, index) => {
              return (
                <div
                  ref={(el) => (infosOeuvresRefs.current[index] = el)}
                  key={index}
                  className="oeuvres-grid"
                >
                  <div
                    className="oeuvres"
                    onClick={() => handleNavigate(index)}
                  >
                    <p>{oeuvres.title}</p>
                  </div>
                  <img src={oeuvres.imgWebp} alt="" />
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
