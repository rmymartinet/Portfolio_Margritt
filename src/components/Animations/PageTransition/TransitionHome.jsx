import { motion } from "framer-motion";
import { Power2 } from "gsap";
import { slideIn, slideOut } from "./Animations";
import "./pageTransition.scss";

export default function TransitionHome({
  children,
  backgroundColor,
  isFirstRender,
}) {
  const anim = (variants, custom = null) => {
    return {
      initial: isFirstRender ? "" : "initial",
      animate: isFirstRender ? "" : "enter",
      exit: isFirstRender ? "" : "exit",
      custom,
      variants,
    };
  };

  const anim1 = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: Power2.easeInOut,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="page" style={{ backgroundColor }}>
      <motion.div className="transition-container">
        <motion.div className="slide-out" {...anim(slideOut)} />
        <motion.div className="slide-in" {...anim(slideIn)} />
      </motion.div>
      <motion.div
        variants={anim1}
        initial={isFirstRender ? "" : "initial"}
        animate={isFirstRender ? "" : "enter"}
        exit={isFirstRender ? "" : "exit"}
      >
        {children}
      </motion.div>
    </div>
  );
}
