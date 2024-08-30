import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { priceReviewsData } from "../../data/data";
import useGSAPAnimation from "./useGSAPAnimation";

export const PriceReviews = () => {
  const priceReviewRef = useRef(null);

  const priceReviewsDataRef = useRef(
    priceReviewsData.map(() => React.createRef())
  );
  const { t } = useTranslation();

  useGSAPAnimation(priceReviewsDataRef, priceReviewRef);

  return (
    <div ref={priceReviewRef} className="activity-container">
      <div className="infos-container">
        <div className="infos-grid">
          <div className="infos-title">
            <h2>{t("project.projectPriceReviewsTitle")}</h2>
          </div>
          {priceReviewsData.map((expo, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

PriceReviews.displayName = "PriceReviews";
