import { useEffect, useState } from "react";

const ProgressiveImage = ({ lowQualitySrc, highQualitySrc, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [highQualitySrc]);

  return (
    <div>
      <img src={lowQualitySrc} alt={alt} />
    </div>
  );
};

export default ProgressiveImage;
