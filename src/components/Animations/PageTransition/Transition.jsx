import { motion } from "framer-motion";
import { childrenAnimation } from "./Animations";

export default function Transition({ children, isClicked }) {
  return !isClicked ? (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={childrenAnimation}
    >
      {children}
    </motion.div>
  ) : (
    <>{children}</>
  );
}
