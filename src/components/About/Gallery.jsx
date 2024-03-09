import { gsap } from "gsap";
import { forwardRef, useEffect, useState } from "react";
import { IoHeart } from "react-icons/io5";
import instagramProfile from "../../assets/video/instagram_profile.mp4";

import GalleryItem from "./GalleryItem";

const Gallery = forwardRef((_, ref) => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((prev) => !prev);
  }

  useEffect(() => {
    const likeLogo = document.querySelector(".like-logo");

    if (isClicked === true) {
      console.log("clicked");
      gsap.to(likeLogo, {
        color: "#ef1b9a",
        transition: {
          ease: "power2.out",
          duration: 1,
        },
      });

      gsap.to(".more-content h1", {
        color: "#ef1b9a",
        scale: 1.2,
        y: 0,
        x: 100,
        transition: {
          ease: "power2.out",
          duration: 1,
        },
        onComplete: () => {
          gsap.to("body", {
            opacity: 0,
            transition: {
              ease: "power2.out",
              duration: 1,
            },
            onComplete: () => {
              window.location.href = "https://www.instagram.com/maargriitt/";
            },
          });
        },
      });
    } else {
      gsap.to(likeLogo, {
        color: "black",
        transition: {
          ease: "power2.out",
          duration: 1,
        },
      });

      gsap.to(".more-content h1", {
        color: "black",
        scale: 1,
        x: 0,
        transition: {
          ease: "power2.out",
          duration: 1,
        },
      });
    }
  }, [isClicked]);

  return (
    <div ref={ref} className="gallery">
      <div className="gallery-title">
        <h1>Share</h1>
        <div className="more-content">
          <h1>More</h1>
          <button onClick={handleClick} className="heart">
            <IoHeart className="like-logo" />
          </button>
        </div>
        <h1>Content</h1>
      </div>
      <div className="gallery-items">
        <GalleryItem className="profile" videoSrc={instagramProfile} />
      </div>
    </div>
  );
});

Gallery.displayName = "Gallery";
export default Gallery;
