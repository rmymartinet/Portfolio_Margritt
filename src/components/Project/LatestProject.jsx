import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import p1 from "../../assets/images/LoadingImages/p1.jpeg";
import p2 from "../../assets/images/LoadingImages/p2.jpeg";
import Modal from "./Modal";
import { ProjectLatest } from "./ProjectComponents";

const LatestProject = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const projects = [
    {
      title: "Futurama 2",
      src: p2,
      color: "#8C8C8C",
    },
    {
      title: "Bibulle 6",
      src: p1,
      color: "#000000",
    },
    {
      title: "Bibulle 7",
      src: p2,
      color: "#EFE8D3",
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
        <h2>In process</h2>
        <p>
          Follow all the steps on my social media to dive into the process
          behind my creative journey. You'll find maxi project and my newest
          series
        </p>
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
            />
          );
        })}
        <Modal modal={modal} projects={projects} />
      </div>
    </div>
  );
};

export default LatestProject;
