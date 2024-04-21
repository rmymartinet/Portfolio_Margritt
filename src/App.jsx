"use client";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./styles/locomotive.css";

import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "./components/Nav/NavBar.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Gallery from "./pages/Galleries/Galleries.jsx";
import OriginauxDetails from "./pages/Galleries/OriginauxDetails.jsx";
import TirageDetails from "./pages/Galleries/TirageDetails.jsx";
import Home from "./pages/Home/Home.jsx";
import ImagesOriginaux from "./pages/Images/ImagesOriginaux.jsx";
import ImagesTirages from "./pages/Images/ImagesTirages.jsx";
import Projects from "./pages/Projects/Projects.jsx";

function App() {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, [location]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 4500);
    }
  });

  useEffect(() => {
    document.title = "Margritt.com";
  }, []);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {!isLoading && <NavBar />}
        <Routes location={location} key={location.pathname}>
          <Route path="/" index element={<Home isLoading={isLoading} />} />
          <Route path={`/${t("nav.galleries")}`} element={<Gallery />} />
          <Route path={`/${t("nav.projects")}`} element={<Projects />} />
          <Route path={`/${t("nav.about")}`} element={<About />} />
          <Route path={`/${t("nav.contact")}`} element={<Contact />} />
          <Route path="/tirages/:index" element={<TirageDetails />} />
          <Route path="/originaux/:index" element={<OriginauxDetails />} />
          <Route
            path="/originaux-images/:index"
            element={<ImagesOriginaux />}
          />
          <Route path="/tirages-images/:index" element={<ImagesTirages />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
