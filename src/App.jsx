"use client";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./styles/locomotive.css";

import { useEffect, useLayoutEffect, useState } from "react";
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

  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, [location]);

  useEffect(() => {
    document.title = "Margritt.com";
  }, []);

  useEffect(() => {
    if (localStorage.getItem("visited")) {
      setIsVisited(true);
    }
  }, [isVisited]);

  // Supprimez 'visited' du localStorage lorsque la page est sur le point d'être déchargée
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("visited");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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

  /**Désactivation du click droit
   *
   */

  // useEffect(() => {
  //   document.addEventListener("contextmenu", (event) => {
  //     event.preventDefault();
  //   });
  // }, []);

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
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
