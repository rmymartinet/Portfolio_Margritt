import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/images/home/img1.jpeg";
import img2 from "../../assets/images/home/img2.jpeg";
import { Transition } from "../../components/Animations/PageTransition/Transition.jsx";
import { TitleTransition } from "../../components/Animations/TextAnimation.jsx";
import Circle from "../../components/Common/Circle.jsx";
import useWindow from "../../components/Common/UseWindows.jsx";
import Form from "../../components/Form/Form.jsx";
import GeneratePosition from "../../components/Home/GeneratePosition.jsx";
import initialAnimations from "../../components/Home/InitialAnimation.jsx";
import useHoverEvents from "../../components/Home/useHoverEvents.jsx";
import useScrollTriggerAnimation from "../../components/Home/useScrollTriggerAnimations.jsx";
import { originauxData } from "../../data/data";
import { dataVideo } from "../../data/dataVideo.js";
import GeneratePosition from "../../components/Home/GeneratePosition.jsx";
import ScrollContainer from "../../components/Home/ScrollContainer.jsx";
import { originauxData } from "../../data/data.js";
import { dataVideo } from "../../data/dataVideo.js";
import Projects from "../Projects/Projects.jsx";
import "./Home.scss";

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

const ANIMATION_MINIMUM_WIDTH = 1024;

const Home = () => {
  const { dimension } = useWindow();
  const scrollImg = [img1, img2];
  const oeuvresData = originauxData;
  let navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/originaux/${id}`);
  };

  useEffect(() => {
    infosOeuvresRefs.current = infosOeuvresRefs.current.slice(
      0,
      oeuvresData.length
    );
  }, [oeuvresData.length]);

  GeneratePosition({});

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (dimension.width > ANIMATION_MINIMUM_WIDTH) {
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
      }
    });

    return () => ctx.revert();
  }, [dimension.width]);

  return (
    <Transition>
      <section className="home-container">
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
        {dimension.width > ANIMATION_MINIMUM_WIDTH && <ScrollContainer />}
        {dimension.width <= ANIMATION_MINIMUM_WIDTH && (
          <div className="wrapper">
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
                  ></div>
                  <img src={oeuvres.imgWebp} alt="" />
                </div>
              );
            })}
          </div>
        )}
        <section className="projects">
          <Projects />
        </section>
      </section>
      <footer>
        <Circle target={"project-container"} />
        <Form />
      </footer>
    </Transition>
  );
};

export default Home;
