import { motion } from "framer-motion";
import { childrenAnimation } from "./Animations";

export default function Transition({ children }) {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={childrenAnimation}
      >
        {children}
      </motion.div>
    </>
  );
}
