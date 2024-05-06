import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Transition } from "../../components/Animations/PageTransition/Transition.jsx";
import {
  TextTransition,
  TitleTransition,
} from "../../components/Animations/TextAnimation.jsx";
import Divider from "../../components/Common/Divider.jsx";
import InfoItem from "../../components/Common/InfoItem.jsx";
import SvgName from "../../components/SvgName/SvgName.jsx";
import "../Contact/Contact.scss";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { t } = useTranslation();

  const [time, setTime] = useState(
    new Date().toLocaleTimeString("fr-FR", {
      timeZone: "Europe/Paris",
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Transition>
      <motion.section className="contact-container">
        <TitleTransition textClassName="title p" />

        <div className="title">
          <p>{t("contact.title")}</p>
        </div>

        <TextTransition textClassName="contact-subtitle" />
        <div className="contact-subtitle">
          <div className="text">{t("contact.text1")}</div>
          <div
            className={isHovered ? "mail" : "mail"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="mailto:margrittmartinet@gmail.com">
              margrittmartinet@gmail.com
            </a>
          </div>
        </div>

        <Divider className="contact-divider" />
        <div className="infos-content">
          <InfoItem label="Local Time" value={time} className="local-time" />
          <InfoItem
            label="Number"
            value="+33.7.83.40.51.05"
            className="number"
          />
          <InfoItem
            label="Instagram"
            value={
              <a
                href="https://www.instagram.com/maargriitt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @maargriitt
              </a>
            }
            className="instagram"
          />
          <InfoItem label="Made by" value="Martinet Rémy" className="made-by" />
        </div>
        <div className="name">
          <SvgName textColor="black" />
        </div>
      </motion.section>
    </Transition>
  );
};

export default Contact;
