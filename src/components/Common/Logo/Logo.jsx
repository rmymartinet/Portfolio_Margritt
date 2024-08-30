import "./Logo.scss";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("handleNavigate");
    navigate("/");
  };

  const logoVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={logoVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="logo"
      onClick={() => handleNavigate()}
    >
      <p>Margritt</p>
    </motion.div>
  );
};

export default Logo;
