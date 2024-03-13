import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import p1 from "../../assets/images/project/p1.jpeg";
import p2 from "../../assets/images/project/p2.jpeg";
import p3 from "../../assets/images/project/p3.jpeg";

import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import { ProjectLatest } from "./ProjectComponents";

const LatestProject = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { t } = useTranslation();

  const projects = [
    {
      title: "Futurama",
      URL: "https://www.instagram.com/maargriitt/",
      src: p1,
    },
    {
      title: "Bibulle 6",
      URL: "https://www.instagram.com/maargriitt/",
      src: p2,
    },
    {
      title: "Bibulle 7",
      URL: "https://www.instagram.com/maargriitt/",
      src: p3,
    },
  ];

  const LastestDataRef = useRef(projects.map(() => React.createRef()));

  useEffect(() => {
    gsap.fromTo(
      LastestDataRef.current.map((ref) => ref.current),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.5,
      }
    );
  }, [LastestDataRef]);

  return (
    <div className="latest-project">
      <div className="hero-title">
        <h2>{t("project.textTitle")}</h2>
        <p>{t("project.textDescription")}</p>
      </div>
      <div>
        {projects.map((project, index) => {
          return (
            <ProjectLatest
              ref={LastestDataRef.current[index]}
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
