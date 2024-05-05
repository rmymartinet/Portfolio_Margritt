"use client";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./styles/locomotive.css";

import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCount } from "./components/Common/Counter.jsx";
import Landing from "./components/Loading/Landing.jsx";
import NavBar from "./components/Nav/NavBar.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Gallery from "./pages/Galleries/Galleries.jsx";
import OriginauxDetails from "./pages/Galleries/OriginauxDetails.jsx";
import TirageDetails from "./pages/Galleries/TirageDetails.jsx";
import Home from "./pages/Home/Home.jsx";
import ImagesOriginaux from "./pages/Images/ImagesOriginaux.jsx";
import ImagesTirages from "./pages/Images/ImagesTirages.jsx";

function App() {
  const { t } = useTranslation();
  const [showLanding, setShowLanding] = useState(
    !localStorage.getItem("visited")
  );

  const [isVisited, setIsVisited] = useState(false);

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

  useEffect(() => {
    document.title = "Margritt.com";
  }, []);

  const isRender = useCount();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isRender === 100) {
      setTimeout(() => {
        setIsLoading(false);
        setShowLanding(false);
        localStorage.setItem("visited", true);
      }, 1700);
    }
  }, [isRender]);

  useEffect(() => {
    setIsLoading(true);
    setShowLanding(true);
    const handleLoad = () => {
      setIsLoading(false);
      setShowLanding(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("visited")) {
      setIsVisited(true);
    }
  }, [isVisited]);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("visited");
    });
  }, []);

  return (
    <>
      {showLanding && <Landing />}
      {!isLoading && (
        <AnimatePresence initial={false} mode="wait">
          <NavBar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" index element={<Home isVisited={isVisited} />} />
            <Route path={`/${t("nav.galleries")}`} element={<Gallery />} />
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
      )}
    </>
  );
}

export default App;
