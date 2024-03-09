const VIDEO_OPTIONS = {
  loop: true,
  autoPlay: true,
  muted: true,
  playsInline: true,
};

const INSTAGRAM_URL = "https://www.instagram.com/maargriitt/";

const GalleryItem = ({ videoSrc, imgSrc, className }) => {
  return (
    <div className={className}>
      <a href={INSTAGRAM_URL} className="gallery-img gallery-video">
        {videoSrc ? (
          <video {...VIDEO_OPTIONS} src={videoSrc}></video>
        ) : (
          <img src={imgSrc} alt="gallery" />
        )}
      </a>
    </div>
  );
};

GalleryItem.displayName = "GalleryItem";
export default GalleryItem;
