import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { CONTACT_INFO } from "../../../data/dataContactInfos";
import { menuSlide, slide, slideNav, slideText } from "../NavAnimation";
import "./MobileNav.scss";

const MobileNav = () => {
  const { t } = useTranslation();
  const navItems = useMemo(
    () => [t("nav.galleries"), t("nav.about"), t("nav.contact")],
    [t]
  );
  const navigate = useNavigate();

  const links = [
    { name: "Tiktok", url: `${CONTACT_INFO.tiktok}` },
    {
      name: "Instagram",
      url: `${CONTACT_INFO.instagram}`,
    },
    {
      name: "LinkedIn",
      url: `${CONTACT_INFO.linkedin}`,
    },
  ];

  const handleNavigate = (path) => {
    try {
      setTimeout(() => {
        navigate(path);
      }, 1000);
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
      className="menu-mobile"
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
              const path =
                item === t("nav.home") ? "/" : `/${item.toLowerCase()}`;
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
                    <span>{item}</span>
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

export default MobileNav;
