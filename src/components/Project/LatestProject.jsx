import React, { useState } from "react";
import p1 from "../../assets/images/project/p1.jpeg";
import p2 from "../../assets/images/project/p2.jpeg";
import p3 from "../../assets/images/project/p3.jpeg";
import { TextTransition } from "../Animations/TextAnimation";

import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import { ProjectLatest } from "./ProjectComponents";

const LatestProject = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { t } = useTranslation();

  const projects = [
    {
      title: "Maxi Futurama",
      URL: "https://www.instagram.com/maargriitt/",
      src: p1,
    },
    {
      title: "Giga Bibulle",
      URL: "https://www.instagram.com/maargriitt/",
      src: p2,
    },
    {
      title: "Bibulle 7",
      URL: "https://www.instagram.com/maargriitt/",
      src: p3,
    },
  ];

  return (
    <div className="latest-project">
      <div className="hero-title">
        <TextTransition textClassName="hero-title h2" />
        <TextTransition textClassName="hero-title p" />
        <h2>{t("project.textTitle")}</h2>
        <p>{t("project.textDescription")}</p>
      </div>
      <TextTransition textClassName="current-project" />
      <div className="current-project">
        {projects.map((project, index) => {
          return (
            <ProjectLatest
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              href={project.URL}
            />
          );
        })}
        <Modal modal={modal} projects={projects} />
      </div>
    </div>
  );
};

export default LatestProject;
