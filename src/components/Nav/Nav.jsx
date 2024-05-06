import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../Common/Logo";
import "./Nav.scss";

const Nav = () => {
  const { t } = useTranslation();

  const [isClicked, setIsClicked] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = useMemo(
    () => [t("nav.galleries"), t("nav.about"), t("nav.contact")],
    [t]
  );

  const handleNavigate = async (path) => {
    try {
      await navigate(`${path}`);
    } catch (error) {
      console.error(`Failed to navigate to ${path}:`, error);
    }
  };

  const handleClick = (index) => {
    setIsClicked(index);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const currentIndex = navItems.findIndex(
      (item) => `/${item.toLowerCase().replace(/ /g, "-")}` === currentPath
    );

    setIsClicked(currentIndex !== -1 ? currentIndex : null);
  }, [location.pathname, navItems]);

  return (
    <motion.div initial="initial" animate="enter" exit="exit" className="menu">
      <div className="nav-container">
        <div className="nav">
          <div className="nav-logo">
            <Logo />
          </div>
          <div className="based">
            <span> {t("home.based")}</span>
          </div>
          <div className="links-container">
            {navItems.map((item, index) => {
              const path = `/${item.toLowerCase().replace(/ /g, "-")}`;
              return (
                <>
                  <motion.div
                    key={index}
                    onClick={() => {
                      handleNavigate(path);
                      handleClick(index);
                    }}
                    className={`nav-item${
                      isClicked === index ? " background" : ""
                    }`}
                  >
                    <p className="nav-text">{item}</p>
                  </motion.div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
