import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { instagram } from "../../../data/dataImages";
import Card from "./Card.jsx";
gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger);

/**
 * !TODO SliderRef duplication between Instagram.jsx and CardContainer.jsx
 */

const CardContainer = () => {
  const cardsRef = useRef(null);
  const cardCloneRef = useRef(null);
  const sliderRef = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    const cards = cardsRef.current;
    const cardClone = cardCloneRef.current;
    const slider = sliderRef.current;

    gsap.to(slider, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-300px",
    });

    const animate = () => {
      if (xPercent < -85) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -85;
      }
      gsap.set(cards, { x: `${xPercent}%` });
      gsap.set(cardClone, { x: `${xPercent}%` });
      requestAnimationFrame(animate);
      xPercent += 0.02 * direction;
    };

    animate();
  });

  return (
    <>
      <div className="cards" ref={cardsRef}>
        <Card
          img={instagram.webp.instagram1}
          comName="lefochrestaurant"
          comText="Dingue ! 🔥"
          comName2="martin_paintings"
          comText2="❤️ 👏"
        />
        <Card
          img={instagram.webp.instagram2}
          comName="kellymiti"
          comText="Bravo 🔥 tu le mérites, tes dessins sont ouf 😮‍💨"
          comName2="bic.create"
          comText2="👏👏👏"
        />
        <Card
          img={instagram.webp.instagram3}
          comName="chukadinho"
          comText="I love your works absolutely 💝 🔥🔥🔥"
          comName2="pachita-paez"
          comText2="AMO TU TRABAJO!!!! KISSES FROM ARGENTINA"
        />
        <Card
          img={instagram.webp.instagram4}
          comName="galeriemaumu"
          comText="👏👏👏"
          comName2="agathepitie"
          comText2="Superbe❤️"
        />
        <Card
          img={instagram.webp.instagram5}
          comName="_millum_"
          comText="That’s just amazing, I’m so at awe by how beautiful it is 😍"
          comName2="barlaupart"
          comText2="Wow!! Fantastic!"
        />
      </div>
      <div className="cards1" ref={cardCloneRef}>
        <Card
          img={instagram.webp.instagram1}
          comName="lefochrestaurant"
          comText="Dingue ! 🔥"
          comName2="martin_paintings"
          comText2="❤️ 👏"
        />
        <Card
          img={instagram.webp.instagram2}
          comName="kellymiti"
          comText="Bravo 🔥 tu le mérites, tes dessins sont ouf 😮‍💨"
          comName2="bic.create"
          comText2="👏👏👏"
        />
        <Card
          img={instagram.webp.instagram3}
          comName="chukadinho"
          comText="I love your works absolutely 💝 🔥🔥🔥"
          comName2="pachita-paez"
          comText2="AMO TU TRABAJO!!!! KISSES FROM ARGENTINA"
        />
        <Card
          img={instagram.webp.instagram4}
          comName="galeriemaumu"
          comText="👏👏👏"
          comName2="agathepitie"
          comText2="Superbe❤️"
        />
        <Card
          img={instagram.webp.instagram5}
          comName="_millum_"
          comText="That’s just amazing, I’m so at awe by how beautiful it is 😍"
          comName2="barlaupart"
          comText2="Wow!! Fantastic!"
        />
      </div>
    </>
  );
};

export default CardContainer;
