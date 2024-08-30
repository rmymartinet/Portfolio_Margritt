import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { expositionData } from "../../data/data";
import { useGSAPAnimation } from "./useGSAPAnimation";

export const Exposition = () => {
  const expositionRef = useRef(null);

  const expositionDataRef = useRef(expositionData.map(() => React.createRef()));
  const { t } = useTranslation();

  useGSAPAnimation(expositionDataRef, expositionRef);

  return (
    <div ref={expositionRef} className="exposition-container">
      <div className="infos-container">
        <div className="infos-grid">
          <div className="infos-title">
            <h2>{t("project.projectExpositionTitle")}</h2>
          </div>
          {expositionData.map((expo, index) => (
            <div
              ref={expositionDataRef.current[index]}
              className={`project${index}`}
              key={index}
            >
              <span>{expo.date}</span>
              <p>{expo.title}</p>
              <p>{expo.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Exposition.displayName = "Exposition";
