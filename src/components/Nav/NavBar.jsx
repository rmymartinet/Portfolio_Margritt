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
        {isActive && <Nav isActive={isActive} />}
      </div>
    </div>
  );
};

export default NavBar;
