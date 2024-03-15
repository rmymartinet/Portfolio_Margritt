import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.scss";
import { menuSlide, slide, slideNav, slideText } from "./NavAnimation";

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
  const navItems = ["Home", "Gallerie", "Projects", "About", "Contact"];
  const navigate = useNavigate();

  const links = [
    { name: "Tiktok", url: "https://www.tiktok.com/@margrittus?lang=fr" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/maargriitt/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/margritt-martinet-95b885222/",
    },
  ];

  const handleNavigate = async (path) => {
    try {
      await navigate(`${path}`);
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
                  variants={slide}
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
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={slideText}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Nav;
