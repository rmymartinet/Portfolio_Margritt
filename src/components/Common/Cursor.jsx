import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import "./cursor.scss";

const Cursor = ({ cursorSize }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  cursorSize = 0;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="cursor"
      style={{
        translateX: x,
        translateY: y,
        width: cursorSize, // Utilisez l'état pour définir la taille du curseur
        height: cursorSize, // Utilisez l'état pour définir la taille du curseur
      }}
    >
      {!cursorSize < 10 ? <p>Voir</p> : <p>Yo</p>}
    </motion.div>
  );
};

export default Cursor;
