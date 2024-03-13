import gsap from "gsap";
import { useEffect } from "react";

import img1 from "../../assets/images/LoadingImages/p1.jpeg";
import img10 from "../../assets/images/LoadingImages/p10.jpeg";
import img2 from "../../assets/images/LoadingImages/p2.jpeg";
import img3 from "../../assets/images/LoadingImages/p3.jpeg";
import img4 from "../../assets/images/LoadingImages/p4.jpeg";
import img5 from "../../assets/images/LoadingImages/p5.jpeg";
import img6 from "../../assets/images/LoadingImages/p6.jpeg";
import img7 from "../../assets/images/LoadingImages/p7.jpeg";
import img8 from "../../assets/images/LoadingImages/p8.jpeg";
import img9 from "../../assets/images/LoadingImages/p9.jpeg";

const HomeFloatingGallery = () => {
  useEffect(() => {
    const gallery = document.querySelector(".gallery");
    const items = [
      {
        img: img1,
        parllaxSpeed: 0.065,
      },
      {
        img: img2,
        parllaxSpeed: 0.05,
      },
      {
        img: img3,
        parllaxSpeed: 0.08,
      },
      {
        img: img4,
        parllaxSpeed: 0.1,
      },
      {
        img: img5,
        parllaxSpeed: 0.07,
      },
      {
        img: img6,
        parllaxSpeed: 0.08,
      },
      {
        img: img7,
        parllaxSpeed: 0.1,
      },
      {
        img: img8,
        parllaxSpeed: 0.07,
      },
      {
        img: img9,
        parllaxSpeed: 0.07,
      },
      {
        img: img10,
        parllaxSpeed: 0.07,
      },
    ];
    gallery.innerHTML = "";

    items.forEach((itemData) => {
      const item = document.createElement("div");
      item.classList.add("item");

      const img = document.createElement("img");
      img.src = itemData.img;
      item.appendChild(img);
      gallery.appendChild(item);
    });

    document.addEventListener("mousemove", (e) => {
      gallery.querySelectorAll(".item").forEach((item, index) => {
        const animationFactor = items[index].parllaxSpeed;

        const deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
        const deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;

        gsap.to(item, { x: deltaX, y: deltaY, duration: 0.75 });
      });
    });
  }, []);

  return <div className="gallery"></div>;
};

export default HomeFloatingGallery;
