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
    src: "/assets/home/deva.png",
  },
  {
    name: "Nitika",
    type: "Taroyt",
    src: "/assets/home/astra.png",
  },
  {
    name: "Bharat Singh",
    type: "Taroyt",
    src: "/assets/home/astro1.jpeg",
  },
  {
    name: "Nidhi",
    type: "Taroyt",
    src: "/assets/home/astro4.jpeg",
  },
  {
    name: "Anil",
    type: "Taroyt",
    src: "/assets/home/astro1.jpeg",
  },
];

function Astrologer({}: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-gradient-to-b from-[#ef824c] to-[#d84f50] bg-cover py-[30px]">
      <Section>
        <div className="max-w-6.5xl mx-auto">
          <div className="">
            <p className=" text-center font-[georgia] text-[15px] text-base font-semibold text-white sm:text-2xl md:text-[30px] lg:text-[30px]">
              Our Astrologers
            </p>
            {/* <h3 className="text-center text-sm font-semibold sm:text-lg lg:text-2xl">
              5000+ Best Astrologers from India for Online Consultation
            </h3> */}
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
                  <div className="h-[170px]   rounded-full ">
                    <div className="flex items-center justify-center">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={108}
                        height={108}
                        loading={"lazy"}
                        className="rounded-full border-[6px] border-[#DC6563]"
                      />
                    </div>
                    <div className="w-[100%] text-center font-[georgia] ">
                      <p className="text-[22px] font-semibold">{item?.name}</p>
                      <p className="text-base font-semibold">{item.type}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="astroslideourastrologer    relative mx-auto flex items-center justify-between">
            <button className="prev cursor-pointer">
              <AiFillCaretLeft className="text-3xl text-white" />
            </button>
            <button className="next cursor-pointer">
              <AiFillCaretRight className="text-3xl text-white" />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Astrologer;
