import { motion } from "framer-motion";
import { slideIn, slideOut } from "./Animations";
import "./pageTransition.scss";

export default function Transition({ children, backgroundColor }) {
  const anim = (variants, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const animChildren = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  return (
    <div className="page" style={{ backgroundColor }}>
      <motion.div className="transition-container">
        <motion.div className="slide-out" {...anim(slideOut)} />
        <motion.div className="slide-in" {...anim(slideIn)} />
      </motion.div>
      <motion.div {...animChildren(animChildren)}>{children}</motion.div>
    </div>
  );
}
