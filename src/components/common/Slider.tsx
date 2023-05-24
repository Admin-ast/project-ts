import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

type Props = {
  slides: any;
};

function Slider({ slides }: Props) {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
      >
        {slides &&
          slides.length > 0 &&
          slides.map((slide, index) => {
            return (
              <div key={index}>
                <SwiperSlide>
                  {" "}
                  <div className="flex justify-center">
                    <img src={slide?.url} alt="" />
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
      </Swiper>
    </>
  );
}

export default Slider;
