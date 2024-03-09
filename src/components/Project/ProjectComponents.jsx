import gsap from "gsap";
import React, { forwardRef, useEffect, useRef } from "react";
import { activityData, expositionData } from "../../data.js";

export const Exposition = forwardRef((_, ref) => {
  const expositionDataRef = useRef(activityData.map(() => React.createRef()));

  useEffect(() => {
    gsap.fromTo(
      expositionDataRef.current.map((ref) => ref.current),
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          end: "bottom 60%",
        },
      }
    );
  }, [expositionDataRef, ref]);
  return (
    <div ref={ref} className="exposition-container">
      <div className="infos-container">
        <div className="infos-grid">
          <div className="infos-title">
            <h2>Expositions</h2>
          </div>
          {expositionData.map((expo, index) => {
            return (
              <div
                ref={expositionDataRef.current[index]}
                className={`project${index}`}
                key={index}
              >
                <span>{expo.date}</span>
                <p>{expo.title}</p>
                <p>{expo.location}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

Exposition.displayName = "Exposition";

export const Activity = forwardRef((_, ref) => {
  const activityDataRef = useRef(activityData.map(() => React.createRef()));

  useEffect(() => {
    gsap.fromTo(
      activityDataRef.current.map((ref) => ref.current),
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          end: "bottom 60%",
        },
      }
    );
  }, [activityDataRef, ref]);

  return (
    <div ref={ref} className="activity-container">
      <div className="infos-container">
        <div className="infos-grid">
          <div className="infos-title">
            <h2>Artistic Activity</h2>
          </div>
          {activityData.map((expo, index) => {
            return (
              <div
                ref={activityDataRef.current[index]}
                className={`project${index} ${
                  index === activityData.length - 1 ? "last-project" : ""
                }`}
                key={index}
              >
                <span>{expo.date}</span>
                <p>{expo.title}</p>
                <p>{expo.location}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

Activity.displayName = "Activity";

export const ProjectLatest = forwardRef(({ index, title, setModal }, ref) => {
  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project"
    >
      <h2>{title}</h2>
      <p>Full process on my Instagram</p>
    </div>
  );
});

ProjectLatest.displayName = "ProjectLatest";
