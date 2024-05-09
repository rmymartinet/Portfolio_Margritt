import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Card from "../Card";

import { Observer } from "gsap/Observer";
import img1 from "../../assets/images/about/instagram/img1.jpeg";
import img2 from "../../assets/images/about/instagram/img2.jpeg";
import img3 from "../../assets/images/about/instagram/img3.jpeg";
import img4 from "../../assets/images/about/instagram/img4.jpeg";
import img5 from "../../assets/images/about/instagram/img5.jpeg";
gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger);

const Instagram = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".instagram",
        start: "top 40%",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    tl.fromTo(
      ".circle",
      {
        scale: 0,
        duration: 1,
        ease: "power2.out",
      },
      {
        scale: 20,
      }
    );

    return () => tl.kill();
  }, []);

  const cardsRef = useRef(null);
  const card1Ref = useRef(null);
  const sliderRef = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    const cards = cardsRef.current;
    const card1 = card1Ref.current;
    const slider = sliderRef.current;

    gsap.registerPlugin(ScrollTrigger);
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
      gsap.set(card1, { x: `${xPercent}%` });
      requestAnimationFrame(animate);
      xPercent += 0.02 * direction;
    };

    animate();
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          rotate: 0,
          rotateX: -150,
          y: 1000,
        },
        {
          y: 0,
          rotateX: 0,
          rotate: i % 2 === 0 ? 2 : -2,
          skewY: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".instagram",
            start: "top 40%",
            end: "bottom 85%",
            scrub: 1,
          },
        }
      );
    });
  });

  return (
    <div className="instagram">
      <div className="circle"></div>
      <div className="instagram-top-banner">
        <div className="instagram-title">Suis moi</div>
        <a
          className="instagram-link"
          href="https://www.instagram.com/maargriitt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @maargriitt
        </a>
      </div>
      <div className="instagram-content">
        <div className="slider" ref={sliderRef}>
          <div className="cards" ref={cardsRef}>
            <Card
              img={img1}
              comName="lefochrestaurant"
              comText="Dingue ! 🔥"
              comName2="martin_paintings"
              comText2="❤️ 👏"
            />
            <Card
              img={img2}
              comName="kellymiti"
              comText="Bravo 🔥 tu le mérites, tes dessins sont ouf 😮‍💨"
              comName2="bic.create"
              comText2="👏👏👏"
            />
            <Card
              img={img3}
              comName="chukadinho"
              comText="I love your works absolutely 💝 🔥🔥🔥"
              comName2="pachita-paez"
              comText2="AMO TU TRABAJO!!!! KISSES FROM ARGENTINA"
            />
            <Card
              img={img4}
              comName="galeriemaumu"
              comText="👏👏👏"
              comName2="agathepitie"
              comText2="Superbe❤️"
            />
            <Card
              img={img5}
              comName="_millum_"
              comText="That’s just amazing, I’m so at awe by how beautiful it is 😍"
              comName2="barlaupart"
              comText2="Wow!! Fantastic!"
            />
            {/* <Card
              img={img6}
              comName="lefochrestaurant"
              comText="Dingue ! 🔥"
              comName2="martin_paintings"
              comText2="❤️ 👏"
            />
            <Card
              img={img7}
              comName="lefochrestaurant"
              comText="Dingue ! 🔥"
              comName2="martin_paintings"
              comText2="❤️ 👏"
            />
            <Card
              img={img8}
              comName="lefochrestaurant"
              comText="Dingue ! 🔥"
              comName2="martin_paintings"
              comText2="❤️ 👏"
            /> */}
          </div>
          <div className="cards1" ref={card1Ref}>
            <Card
              img={img1}
              comName="lefochrestaurant"
              comText="Dingue ! 🔥"
              comName2="martin_paintings"
              comText2="❤️ 👏"
            />
            <Card
              img={img2}
              comName="kellymiti"
              comText="Bravo 🔥 tu le mérites, tes dessins sont ouf 😮‍💨"
              comName2="bic.create"
              comText2="👏👏👏"
            />
            <Card
              img={img3}
              comName="chukadinho"
              comText="I love your works absolutely 💝 🔥🔥🔥"
              comName2="pachita-paez"
              comText2="AMO TU TRABAJO!!!! KISSES FROM ARGENTINA"
            />
            <Card
              img={img4}
              comName="galeriemaumu"
              comText="👏👏👏"
              comName2="agathepitie"
              comText2="Superbe❤️"
            />
            <Card
              img={img5}
              comName="_millum_"
              comText="That’s just amazing, I’m so at awe by how beautiful it is 😍"
              comName2="barlaupart"
              comText2="Wow!! Fantastic!"
            />
            {/* <Card img={img6} />
            <Card img={img7} />
            <Card img={img8} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
