import { motion } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const ImagesContainer = ({
  //eslint-disable-next-line
  onIsClickedChange,
  //eslint-disable-next-line
  item,
  //eslint-disable-next-line
  isGrid,
  //eslint-disable-next-line
  isGridClick,
  //eslint-disable-next-line
  isButtonFilterIsClicked,
  //eslint-disable-next-line
  isCategoryIsClicked,
}) => {
  const MOBILE_SCREEN_WIDTH = 768;
  const exit = {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  };
  let navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const imgContainerRef = useRef(null);
  const originauxCategory = item.filter((cat) => cat.category === "originaux");

  /* Navagation lors du click sur images
  * La fonction handleNavigate permet de naviguer vers la page de l'image cliquée
  
  */
  const handleNavigate = (id, category) => {
    setIsClicked(id);
    if (category === "originaux") {
      setTimeout(() => {
        navigate(`/originaux/${id}`);
      }, 2000);
    }
    if (category === "tirages") {
      setTimeout(() => {
        navigate(`/tirages/${id}`);
      }, 2000);
    }
  };

  /* Pour transmettre la valeur de isClicked à la page parente pour animaer opacity des pages
  *  useEffect pour transmettre la valeur de isClicked à la page parente

  */
  useEffect(() => {
    onIsClickedChange(isClicked);
  }, [isClicked, onIsClickedChange]);

  /* Animation pour le flip des images
   *  La fonction flipAnimation permet de faire un flip des images au click
   *  Si la largeur de l'écran est supérieur à 768px, on utilise la fonction flipAnimation
   *  Sinon, on utilise la fonction lowFlipAnimation
   *
   * TODO : A revoir pour les orignuax animaiton de début différente.
   */

  const flipAnimation = useCallback(() => {
    const flipContainer = document.querySelector(".flip-container");
    const images = gsap.utils.toArray(".images-container img");

    images.forEach((img, id) => {
      const clickedItem = item.find((item) => item.id === id);
      img.addEventListener("click", () => {
        if (
          !originauxCategory.includes(clickedItem) &&
          window.innerWidth > MOBILE_SCREEN_WIDTH
        ) {
          let state = Flip.getState(img);
          flipContainer.appendChild(img);

          Flip.from(state, {
            absolute: true,
            duration: 2,
            ease: "power3.inOut",
          });

          images.forEach((otherImg) => {
            if (otherImg !== img) {
              gsap.to(otherImg, {
                opacity: 0,
                duration: 0,
                ease: "power3.inOut",
              });
            }
          });
        }
      });
    });
  }, [item, originauxCategory]);

  const lowFlipAnimation = useCallback(() => {
    const flipContainer = document.querySelector(".flip-container-width");
    const images = gsap.utils.toArray(".images-container img");

    images.forEach((img, id) => {
      const clickedItem = item.find((item) => item.id === id);
      img.addEventListener("click", () => {
        if (
          window.innerWidth < MOBILE_SCREEN_WIDTH ||
          originauxCategory.includes(clickedItem)
        ) {
          let state = Flip.getState(img);
          flipContainer.appendChild(img);

          Flip.from(state, {
            absolute: true,
            duration: 2,
            ease: "power3.inOut",
          });

          images.forEach((otherImg) => {
            if (otherImg !== img) {
              gsap.to(otherImg, {
                opacity: 0,
                duration: 0,
                ease: "power3.inOut",
              });
            }
          });
        }
      });
    });
  }, [originauxCategory, item]);

  useEffect(() => {
    flipAnimation();
    lowFlipAnimation();
  }, [flipAnimation, MOBILE_SCREEN_WIDTH, lowFlipAnimation, originauxCategory]);

  /* Animation pour le click sur les images
   *  useEffect pour faire disparaitre les informations des images pendant le FlipAnimation
   */

  useEffect(() => {
    if ([0, 1, 2, 3, 4, 5, 6, 7].includes(isClicked)) {
      gsap.to(".image-content", {
        visibility: "hidden",
        duration: 0,
        ease: "power3.inOut",
      });
    }
  }, [isClicked]);

  /* Animation pour le click sur les images
   *  Lors du click sur ButtonGrid on fait apparitre les images avec une animations
   */

  useEffect(() => {
    const gridButton = document.querySelector(
      ".grid-images-content .img-gallery-container"
    );

    const items = gsap.utils.toArray("img");
    const state = Flip.getState(items);
    gridButton.classList.toggle("insert");

    Flip.from(state, {
      duration: 1,
      stagger: 0.04,
      ease: "power3.inOut",
    });
  }, [isGridClick]);
  /* Animation pour le click sur les images
  *  Lors du click sur ButtonFilter on fait apparitre les images avec une animations
  
  */

  useEffect(() => {
    if (isButtonFilterIsClicked) {
      gsap.from("img", {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        // scale: 1.5,
        duration: 2,
        ease: "power3.inOut",
      });
      gsap.to("img", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        // scale: 1,
        duration: 2,
        ease: "power3.inOut",
      });
    }
  }, [isButtonFilterIsClicked]);

  /* Animation pour le click sur les images
  *  Lors du click sur Categories on fait apparitre les images avec une animations
  
  */
  useEffect(() => {
    if (isCategoryIsClicked === "tirages") {
      gsap.from("img", {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        // y: 300,
        // scale: 1.5,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });
      gsap.to("img", {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        // scale: 1,
        // y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });
    } else {
      gsap.from("img", {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration: 2,
        ease: "power3.inOut",
      });
      gsap.to("img", {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        scale: 1,
        duration: 2,
        ease: "power3.inOut",
      });
    }
  }, [isCategoryIsClicked]);

  // const containerClass = isGrid ? "grid" : "grid-images-content";

  return (
    <motion.div
      className="grid-images-content"
      exit={[0, 1, 2, 3, 4, 5, 6, 7].includes(isClicked) ? "" : exit}
    >
      <div className="flip-container"></div>
      <div className="flip-container-width"></div>
      <div ref={imgContainerRef} className="img-gallery-container">
        {item.map((imgData, id) => {
          return (
            <motion.div
              className={`grid-img${id} img`}
              key={id}
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.5,
                },
              }}
              exit={
                isClicked === false
                  ? { opacity: 0, transition: { duration: 0.5 } }
                  : {}
              }
            >
              <div
                onClick={() => {
                  handleNavigate(imgData.id, imgData.category);
                }}
                className="images-container"
              >
                <img
                  className={`img-${id}`}
                  alt={imgData.alt}
                  src={imgData.img}
                />
              </div>

              <div className="image-content">
                <div className="content-left">
                  <div className="image-title">
                    <p>{imgData.title}</p>
                  </div>
                </div>
                <div className="content-right">
                  <div className="image-date">
                    <p>{imgData.date}</p>
                  </div>
                  <div className="image-format">
                    <p>({imgData.format})</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

ImagesContainer.displayName = "ImagesContainer";

export default ImagesContainer;
