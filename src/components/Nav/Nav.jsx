import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.scss";
import {
  menuSlide,
  slide,
  slideNav,
  slideText,
  smallScreenSlide,
} from "./NavAnimation";

const TextBlock = ({ text }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(text.split(""));
  }, [text]);

  return (
    <div className="block">
      {letters.map((letter, index) => (
        <span key={index} className="letter">
          {letter.trim() === "" ? "\xa0" : letter}
        </span>
      ))}
    </div>
  );
};

const Nav = () => {
  const navItems = ["Home", "Galleries", "Projects", "About", "Contact"];
  const navigate = useNavigate();
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleRezise = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleRezise);

    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, []);

  const links = ["Tiktok", "Instagram", "LinkedIn"];

  const handleNavigate = async (path) => {
    try {
      await navigate(path);
    } catch (error) {
      console.error(`Failed to navigate to ${path}:`, error);
    }
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="nav-container">
        <div className="nav">
          <motion.div
            className="nav-header"
            variants={slideNav}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <p>Navigation</p>
          </motion.div>

          <div className="links-container">
            {navItems.map((item, index) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

              return (
                <motion.div
                  key={index}
                  variants={smallScreen ? smallScreenSlide : slide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  custom={index}
                  onClick={() => {
                    handleNavigate(path);
                  }}
                  className="text"
                >
                  <Link to={path}>
                    <TextBlock text={item} />
                    <TextBlock text={item} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.div className="footer">
          {links.map((link, index) => (
            <motion.a
              key={index}
              variants={slideText}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Nav;
