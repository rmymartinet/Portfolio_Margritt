import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useEffect } from "react";
import img1 from "../../assets/images/LoadingImages/p1.jpeg";
import img10 from "../../assets/images/LoadingImages/p10.jpeg";
import img2 from "../../assets/images/LoadingImages/p2.jpeg";
import img3 from "../../assets/images/LoadingImages/p3.jpeg";
import img4 from "../../assets/images/LoadingImages/p4.jpeg";
import img5 from "../../assets/images/LoadingImages/p5.jpeg";
import img6 from "../../assets/images/LoadingImages/p6.jpeg";
import img7 from "../../assets/images/LoadingImages/p7.jpeg";
import img8 from "../../assets/images/LoadingImages/p8.jpeg";
import img9 from "../../assets/images/LoadingImages/p9.jpeg";
import "./Landing.scss";

const Landing = () => {
  const items = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
    },
    {
      img: img8,
    },
    {
      img: img9,
    },
    {
      img: img10,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(Flip);
    const gridContainer = document.querySelector(".landing-flip");
    const images = gsap.utils.toArray(".landing-galleries img");
    const tl = gsap.timeline();

    tl.fromTo(
      ".landing-subtitle",
      {
        scale: 3,
      },
      {
        scale: 1,
        ease: "power3.inOut",
        duration: 2,
      },
      0.5
    );

    gsap.set(".img", {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(0)",
    });
    gsap
      .to(".img", {
        scale: 1,
        width: "200px",
        height: "275px",
        stagger: 0.15,
        duration: 0.75,
        ease: "power2.out",
        delay: 2,
      })
      .then(() => {
        gsap.set(".img", {
          top: "",
          left: "",
          transform: "",
          width: "",
          height: "",
          onComplete: () => {
            setTimeout(() => {
              let state = Flip.getState(images);

              images.forEach((img) => {
                gridContainer.appendChild(img);
              });

              Flip.from(state, {
                absolute: true,
                duration: 2,
                ease: "power3.inOut",
              });
            }, 0);
          },
        });
      });

    tl.fromTo(
      ".line",
      {
        width: 0,
      },
      {
        width: "100%",
        transformOrigin: "left",
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.to(".line", {
            opacity: 0,
            duration: 1,
            ease: "power3.inOut",
          });
        },
      },
      6
    );

    tl.to(
      "p",

      {
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
      },
      7
    );
  }, []);

  return (
    <div className="landing-container">
      <div className="landing-subtitle">
        <div className="landing-content">
          <div className="line"></div>
          <p>The sky is the limit</p>
        </div>
      </div>
      <div className="landing-flip"></div>
      <div className="landing-galleries">
        {items.map((item, index) => {
          return <img className="img" key={index} src={item.img} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Landing;
