import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav";
import "./Navbar.scss";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="header">
      <div
        onClick={() => handleActive()}
        className={`${"button"} ${isActive ? "buttonActive" : ""}`}
      >
        <div
          className={`${"buttonName"} ${isActive ? "buttonNameActive" : ""}`}
        >
          {isActive ? <p>Close</p> : <p>Menu</p>}
        </div>
        <AnimatePresence mode="wait">
          {isActive && <Nav isActive={isActive} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
