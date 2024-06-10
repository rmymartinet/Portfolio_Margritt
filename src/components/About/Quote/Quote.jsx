import { useTranslation } from "react-i18next";
import ShadowText from "./ShadowText";

const ArtistProfiles = () => {
  const { t } = useTranslation();
  return (
    <div className="quote-container">
      <div className="quote-title">
        <p>{t("about.quoteTitle")}</p>
      </div>
      <div className="quote-text">
        <ShadowText
          paragraph={t("about.quoteText")}
          className="quote-paragraph"
        />
      </div>
    </div>
  );
};

export default ArtistProfiles;
