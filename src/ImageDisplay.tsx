import { useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function ImageDisplay() {
  interface HTMLElementWithTilt extends HTMLElement {
    vanillaTilt: any;
  }
  const [tiltElRef, setTiltElRef] = useState<HTMLElementWithTilt | null>(null);

  function handleSlideChange(swiper: any) {
    const activeSlideElement =
      swiper.slides[swiper.activeIndex]?.querySelector("img");
    if (!activeSlideElement) return;
    VanillaTilt.init(activeSlideElement, {
      glare: true,
      maxGlare: 0.5,
      scale: 1.1,
      speed: 800,
      max: 8,
    });
    if (!tiltElRef) {
      setTiltElRef(activeSlideElement);
      return;
    }
    tiltElRef?.vanillaTilt?.destroy();
    tiltElRef.style.cssText = "";
    setTiltElRef(activeSlideElement);
  }

  const imageCount = 6;
  const imageNames = Array.from(
    { length: imageCount },
    (_, i) => `./src/assets/images/${i + 1}.jpeg`,
  );
  return (
    <Swiper
      className={"swiper-container"}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      onSlideChange={handleSlideChange}
    >
      {imageNames.map((imageName, index) => (
        <SwiperSlide key={index}>
          <img className="swiper-img" src={imageName} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
