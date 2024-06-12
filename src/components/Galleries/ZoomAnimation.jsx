import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { useMemo } from "react";

export const ZoomAnimation = ({ selectedImage, scrollZoom }) => {
  const allImages = useMemo(() => {
    return Object.keys(selectedImage).filter((key) => key.includes("img"));
  }, [selectedImage]);
  const { scrollYProgress } = useScroll({
    target: scrollZoom,
    offset: ["start start", "end end"],
  });
  const titleIndex = selectedImage.title === "Futurama 3";

  const validateIndex = titleIndex ? "futurama3-container" : "image-container";

  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: selectedImage.imgWebp,
      scale: scale2,
    },
    {
      src: selectedImage.img1,
      scale: scale3,
    },
    {
      src: selectedImage.img2,
      scale: scale4,
    },
    {
      src: selectedImage.img3,
      scale: scale5,
    },
    {
      src: selectedImage.img4,
      scale: scale6,
    },
  ];

  useGSAP(
    () => {
      const allImagesContainer = document.querySelectorAll(".details-image");

      const scales = [4, 5, 6, 7, 8];

      allImagesContainer.forEach((image, i) => {
        gsap.to(image, {
          scale: scales[i],
          force3D: false,
          scrollTrigger: {
            trigger: scrollZoom,
            start: "top top",
            end: "bottom 50%",
            scrub: true,
          },
        });
      });
    },
    { dependencies: [scrollZoom] }
  );

  return (
    <>
      {allImages.length > 2
        ? pictures.map(({ src }, index) => {
            return (
              <motion.div key={index} className="details-image">
                <div className={validateIndex}>
                  <img src={src} alt="image" placeholder="blur" />
                </div>
              </motion.div>
            );
          })
        : pictures.slice(0, 1).map(({ src }, index) => {
            return (
              <motion.div key={index} className="details-image">
                <div className={validateIndex}>
                  <img src={src} alt="image" placeholder="blur" />
                </div>
              </motion.div>
            );
          })}
    </>
  );
};

export default ZoomAnimation;
