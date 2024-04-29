import { motion } from "framer-motion";
import {
  childrenAnimation,
  slideInAnimation,
  slideOutAnimation,
} from "./Animations";
import "./Transition.scss";

export default function Transition({ children, isClicked }) {
  return !isClicked ? (
    <>
      <motion.div
        variants={slideInAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="slide-in"
      ></motion.div>
      <motion.div
        variants={slideOutAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="slide-out"
      ></motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={childrenAnimation}
      >
        {children}
      </motion.div>
    </>
  ) : (
    <>{children}</>
  );
}
