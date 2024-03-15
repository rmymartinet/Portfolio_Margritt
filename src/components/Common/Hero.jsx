import { TextTransition, TitleTransition } from "../Animations/TextAnimation";
import Divider from "./Divider";
import "./Hero.scss";

const Hero = ({ className, title, subtitle }) => {
  return (
    <>
      <TitleTransition textClassName="hero-title h1" />
      <TextTransition textClassName="hero-subtitle" />
      <div className="hero">
        <div className="hero-title">
          <h1>{title}</h1>
        </div>
        <div className={className}>
          <span>{subtitle}</span>
        </div>
        <Divider className="divider" />
      </div>
    </>
  );
};

export default Hero;
