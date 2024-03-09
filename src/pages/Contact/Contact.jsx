import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../../components/Animations/PageTransition.jsx";
import Divider from "../../components/Common/Divider.jsx";
import InfoItem from "../../components/Common/InfoItem.jsx";
import SvgName from "../../components/SvgName/SvgName.jsx";
import "../Contact/Contact.scss";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { t } = useTranslation();

  return (
    <motion.section
      className="contact-container"
      variants={PageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="title">
        <p>{t("contact.title")}</p>
      </div>
      <div className="subtitle">
        <div className="text">{t("contact.text1")}</div>
        <div
          className={isHovered ? "mail" : "mail"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p>margrittmartinet@gmail.com</p>
        </div>
      </div>

      <Divider className="divider" />
      <div className="infos-content">
        <InfoItem label="Local Time" value="10:35" className="local-time" />
        <InfoItem label="Number" value="07.83.40.51.05" className="number" />
        <InfoItem
          label="Instagram"
          value="07 83 40 51 05"
          className="instagram"
        />
        <InfoItem label="Made by" value="Martinet Rémy" className="made-by" />
      </div>
      <div className="name">
        <SvgName textColor="black" />
      </div>
    </motion.section>
  );
};

export default Contact;
