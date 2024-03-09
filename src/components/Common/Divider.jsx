import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect } from "react";

const Divider = ({ className }) => {
  useEffect(() => {
    gsap.to(`.${className}`, {
      width: "100%",
      duration: 2,
      delay: 0,
      ease: "power3.inOut",
    });
  }, [className]);

  return <motion.div className={className}></motion.div>;
};

Divider.displayName = "Divider";

export default Divider;
