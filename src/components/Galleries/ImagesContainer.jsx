import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const ImagesContainer = ({
  //eslint-disable-next-line
  item,
  //eslint-disable-next-line
  isGridClick,
  //eslint-disable-next-line
  isButtonFilterIsClicked,
}) => {
  let navigate = useNavigate();
  const imgContainerRef = useRef(null);

  const handleNavigate = (id, category, subCategory) => {
    if (category === "originaux") navigate(`/originaux/${id}`);
    if (subCategory === "tirages") navigate(`/tirages/${id}`);
  };

  const animateGridButton = () => {
    if (isGridClick) {
      const gridButton = imgContainerRef.current;
      const items = gsap.utils.toArray("img");
      const state = Flip.getState(items);
      gridButton.classList.toggle("insert");

      Flip.from(state, {
        duration: 1,
        stagger: 0.04,
        ease: "power3.inOut",
      });
    }
  };
  const animateButtonFilter = () => {
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
  };

  useGSAP(animateGridButton, { dependencies: [isGridClick] });
  useGSAP(animateButtonFilter, { dependencies: [isButtonFilterIsClicked] });

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
