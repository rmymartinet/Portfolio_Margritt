"use client";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./styles/locomotive.css";

import { useEffect, useLayoutEffect, useState } from "react";
import { LoadingContext } from "./LoadingContext.js";
import NavBar from "./components/Nav/NavBar.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Gallery from "./pages/Galleries/Galleries.jsx";
import OriginauxDetails from "./pages/Galleries/OriginauxDetails.jsx";
import TirageDetails from "./pages/Galleries/TirageDetails.jsx";
import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";

function App() {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 5000);
  }, [isLoading]);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        <LoadingContext.Provider value={isLoading}>
          {!isLoading && <NavBar />}
          <Routes location={location} key={location.pathname}>
            <Route path="/" index element={<Home />} />
            <Route path="/galleries" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tirages/:index" element={<TirageDetails />} />
            <Route path="/originaux/:index" element={<OriginauxDetails />} />
          </Routes>
        </LoadingContext.Provider>
      </AnimatePresence>
    </>
  );
}

export default App;
