import React, { useState } from "react";
import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { PlayIcon } from "@heroicons/react/24/solid";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Horoscope from "../home/Horoscope";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

type Props = {};

type Astrologers = {
  name: string;
  type: string;
  src: string;
};

const astrologers: Astrologers[] = [
  {
    name: "Devarshi Ojha",
    type: "Taroyt",
    src: "",
  },
  {
    name: "Nitika",
    type: "Taroyt",
    src: "",
  },
  {
    name: "Bharat Singh",
    type: "Taroyt",
    src: "",
  },
  {
    name: "Nidhi",
    type: "Taroyt",
    src: "",
  },
  {
    name: "Anil",
    type: "Taroyt",
    src: "",
  },
];

function Astrologer({}: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover py-20">
      <Section>
        <div className="space-y-6">
          <div className="mb-[35px]">
            <h2 className="mb-[15px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[48px]">
              Our Astrologers
            </h2>
            <h3 className="text-center text-sm font-semibold sm:text-lg lg:text-2xl">
              5000+ Best Astrologers from India for Online Consultation
            </h3>
          </div>
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            onActiveIndexChange={(e) => setActive(e.activeIndex)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {astrologers?.map((item, index) => (
              <SwiperSlide key={item.src + index}>
                <div className=" mt-6 flex  flex-col items-center justify-center  space-y-4 rounded-2xl bg-white py-4 px-6 shadow-xl">
                  <div className="h-[120px]   rounded-full ">
                    <div className="rounded-full border-[6px] border-[#DC6563]">
                      <Image
                        src="/assets/home/review.png"
                        alt={item.name}
                        width={108}
                        height={108}
                        loading={"lazy"}
                      />
                    </div>
                  </div>
                  <div className="text-center font-[georgia] ">
                    <p className="text-[22px] font-semibold">{item?.name}</p>
                    <p className="text-base font-semibold">{item.type}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className=" flex items-center justify-center  ">
            <div className=" ">
              <button className="prev cursor-pointer">
                <AiFillCaretLeft className={`text-[40px]    text-black  `} />
              </button>
            </div>

            <div className="  ">
              <button className="next cursor-pointer">
                <AiFillCaretRight className={`text-[40px]    text-black  `} />
              </button>{" "}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Astrologer;
