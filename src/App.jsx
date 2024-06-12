"use client";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./styles/locomotive.css";

import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCount } from "./components/Common/Counter.jsx";
import Landing from "./components/Loading/Landing.jsx";
import NavBar from "./components/Nav/NavBar/NavBar.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Gallery from "./pages/Galleries/Galleries.jsx";
import OriginauxDetails from "./pages/Galleries/OriginauxDetails/OriginauxDetails.jsx";
import TirageDetails from "./pages/Galleries/TiragesDetails/TiragesDetails.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  const { t } = useTranslation();
  const [showLanding, setShowLanding] = useState(
    !localStorage.getItem("visited")
  );

  const [isVisited, setIsVisited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isRender = useCount();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("#root"),
        smooth: true,
      });
    })();
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(scrollToTop, 1000);
    return () => clearTimeout(timer);
  }, [location, scrollToTop]);

  useEffect(() => {
    document.title = "Margritt.com";
  }, []);

  useEffect(() => {
    if (localStorage.getItem("visited")) {
      setIsVisited(true);
    }
  }, [isVisited]);

  const handleBeforeUnload = useCallback(() => {
    localStorage.removeItem("visited");
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [handleBeforeUnload]);

  const handleRender = useCallback(() => {
    if (isRender === 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        if (!localStorage.getItem("visited")) {
          setShowLanding(true);
        }
        localStorage.setItem("visited", true);
        setShowLanding(false);
        document.body.style.cursor = "default";
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [isRender]);

  useEffect(handleRender, [handleRender]);

  useEffect(() => {
    if (isRender === 100) {
      setTimeout(() => {
        setIsLoading(false);
        if (!localStorage.getItem("visited")) {
          setShowLanding(true);
        }
        localStorage.setItem("visited", true);
        setShowLanding(false);
        document.body.style.cursor = "default";
      }, 1600);
    }
  }, [isRender]);

  return (
    <>
      {showLanding && <Landing />}
      {!isLoading && (
        <AnimatePresence initial={false} mode="wait">
          <NavBar />
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              index
              element={<Home isVisited={isVisited} data-scroll />}
            />
            <Route
              path={`/${t("nav.galleries")}`}
              element={<Gallery data-scroll />}
            />
            <Route
              path={`/${t("nav.about")}`}
              element={<About data-scroll />}
            />
            <Route
              path={`/${t("nav.contact")}`}
              element={<Contact data-scroll />}
            />
            <Route
              path="/tirages/:index"
              element={<TirageDetails data-scroll />}
            />
            <Route
              path="/originaux/:index"
              element={<OriginauxDetails data-scroll />}
            />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
