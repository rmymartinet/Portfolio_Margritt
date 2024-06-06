import { motion } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

/**
 *
 * !TODO: Nettoyer le FLIP
 */

const ImagesContainer = ({
  //eslint-disable-next-line
  item,
  //eslint-disable-next-line
  isGridClick,
  //eslint-disable-next-line
  isButtonFilterIsClicked,
  //eslint-disable-next-line
  isCategoryIsClicked,
}) => {
  let navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const imgContainerRef = useRef(null);

  /* Navagation lors du click sur images
  * La fonction handleNavigate permet de naviguer vers la page de l'image cliquée
  
  */
  const handleNavigate = (id, category, subCategory) => {
    setIsClicked(id);

    if (category === "originaux") {
      navigate(`/originaux/${id}`);
    }
    if (subCategory === "tirages") {
      navigate(`/tirages/${id}`);
    }
  };

  /* Animation lors du click sur le GridButton
   *  Réorganisation des images
   */

  useEffect(() => {
    if (isGridClick) {
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
    }
  }, [isGridClick]);

  /* Animation pour le click sur les images
  *  Lors du click sur ButtonFilter on fait apparitre les images avec une animations
  
  */

  useEffect(() => {
    if (isButtonFilterIsClicked) {
      gsap.from("img", {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        duration: 1,
        ease: "power3.inOut",
      });
      gsap.to("img", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
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
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });
      gsap.to("img", {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
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
        forced3D: false,
        duration: 2,
        ease: "power3.inOut",
      });
    }
  }, [isCategoryIsClicked]);

  useEffect(() => {
    const images = document.querySelectorAll(".img");
    images.forEach((image) => {
      image.addEventListener("mouseenter", () => {
        image.classList.add("hover");
      });
      image.addEventListener("mouseleave", () => {
        image.classList.remove("hover");
      });
    });
  }, []);

  // ...

  const [cursorSize, setCursorSize] = useState(0);
  const handleMouseEnter = () => {
    setCursorSize(60);
  };

  const handleMouseLeave = () => {
    setCursorSize(0);
  };

  return (
    <motion.div className="grid-images-content" exit="exit">
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
              exit="exit"
            >
              <div
                onClick={() => {
                  handleNavigate(
                    imgData.id,
                    imgData.category,
                    imgData.subCategory
                  );
                }}
                className="images-container"
              >
                <picture>
                  <source type="image/webp" srcSet={imgData.imgWebp} />
                  <img
                    loading="lazy"
                    onMouseEnter={() => {
                      handleMouseEnter();
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave();
                    }}
                    className={`img-${id}`}
                    alt={imgData.alt}
                    src={imgData.imgJpg}
                  />
                </picture>
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
