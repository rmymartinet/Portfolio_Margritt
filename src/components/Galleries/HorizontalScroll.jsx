import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useWindow from "../Common/UseWindows.jsx";

const MOBILE_WIDTH = 498;

export default function HorizontalScroll({ scrollContainer }) {
  const { dimension } = useWindow();

  useGSAP(
    () => {
      if (dimension.width > MOBILE_WIDTH) {
        let ctx = gsap.context(() => {
          function getScrollAmount() {
            let containerWidth = scrollContainer.current.scrollWidth;
            return -(containerWidth - window.innerWidth);
          }

          const tween = gsap.to(scrollContainer.current, {
            x: getScrollAmount,
            duration: 3,
            ease: "none",
          });

          ScrollTrigger.create({
            trigger: scrollContainer.current,
            y: 0,
            start: "top top",
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
          });
        });

        return () => ctx.revert();
      }
    },
    { dependencies: [dimension.width] }
  );
}
