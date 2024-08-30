import { useTranslation } from "react-i18next";

const Description = ({ className, title, text1, text2, text3 }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{t(text1)}</p>
      <p className="text-2">{t(text2)}</p>
      <p>{t(text3)}</p>
    </div>
  );
};

export default Description;
