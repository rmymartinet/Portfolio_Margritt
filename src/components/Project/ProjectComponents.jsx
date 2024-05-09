import gsap from "gsap";
import React, { forwardRef, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { activityData, expositionData, priceReviewsData } from "../../data.js";

export const Exposition = forwardRef((_, ref) => {
  const expositionDataRef = useRef(activityData.map(() => React.createRef()));
  const { t } = useTranslation();

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
            <h2>{t("project.projectExpositionTitle")}</h2>
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
  const { t } = useTranslation();

  useEffect(() => {
    gsap.fromTo(
      activityDataRef.current.map((ref) => ref.current),
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
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
            <h2>{t("project.projectActivityTitle")}</h2>
          </div>
          {activityData.map((expo, index) => {
            return (
              <div
                ref={activityDataRef.current[index]}
                className={`project${index} 
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

export const PriceReviews = forwardRef((_, ref) => {
  const priceReviewsDataRef = useRef(
    priceReviewsData.map(() => React.createRef())
  );
  const { t } = useTranslation();

  useEffect(() => {
    gsap.fromTo(
      priceReviewsDataRef.current.map((ref) => ref.current),
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          end: "bottom 60%",
        },
      }
    );
  }, [priceReviewsDataRef, ref]);

  return (
    <div ref={ref} className="activity-container">
      <div className="infos-container">
        <div className="infos-grid">
          <div className="infos-title">
            <h2>{t("project.projectPriceReviewsTitle")}</h2>
          </div>
          {priceReviewsData.map((expo, index) => {
            return (
              <div
                ref={priceReviewsDataRef.current[index]}
                className={`project${index} ${
                  index === priceReviewsData.length - 1 ? "last-project" : ""
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

PriceReviews.displayName = "PriceReviews";

export const ProjectLatest = forwardRef(
  ({ index, title, setModal, href }, ref) => {
    const { t } = useTranslation();

    return (
      <a
        href={href}
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
        <p>{t("project.textProcessInstagram")}</p>
      </a>
    );
  }
);

ProjectLatest.displayName = "ProjectLatest";
