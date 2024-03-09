import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Divider from "../Common/Divider";
import InfoItem from "../Common/InfoItem";
import SvgName from "../SvgName/SvgName";
import "./Form.scss";

const Form = () => {
  const { scrollYProgress } = useScroll({
    target: "contact-component-container",
    offset: ["start", "end", "end start"],
  });

  const formContainerRef = useRef(null);

  const y = useTransform(scrollYProgress, [0, 0.5], [-500, 0]);

  const dividerInView = useInView(formContainerRef, {
    threshold: 0.5,
  });

  useEffect(() => {}, [dividerInView]);
  return (
    <motion.section
      style={{ y }}
      className="form-container"
      ref={formContainerRef}
    >
      <div className="hero-content">
        <div className="title">
          <p>Let's discuss</p>
        </div>
        <div className="mail">
          <p>margrittmartinet@gmail.com</p>
        </div>
      </div>
      {dividerInView && <Divider className="divider" />}
      <div className="infos">
        <InfoItem label="Local Time" value="10:35" className="local-time" />
        <InfoItem label="Number" value="07 83 40 51 05" className="number" />
        <InfoItem
          label="Instagram"
          value="07 83 40 51 05"
          className="instagram"
        />
        <InfoItem label="Made by" value="Martinet Rémy" className="made-by" />
      </div>
      <div className="name">
        <SvgName textColor={"white"} />
      </div>
    </motion.section>
  );
};

export default Form;
