import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import Section from "../Section";

type Props = {
  slides: any;
};

function Slider({ slides }: Props) {
  return (
    <Section>
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
          slides.map((slide: any, index: any) => {
            return (
              
                <SwiperSlide key={slide?.id}>
                  {" "}
                  <div className="flex justify-center md:w-[]">
                    <img src={slide?.url} alt="" />
                  </div>
                </SwiperSlide>
              
            );
          })}
      </Swiper>
    </Section>
  );
}

export default Slider;
