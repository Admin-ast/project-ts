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
import Link from "next/link";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

type Service = {
  name: string;
  src: string;
  url: string;
};

const services: Service[] = [
  {
    name: "Compatibility",
    src: "/assets/home/compatibility.png",
    url: "/compatibility",
  },
  {
    name: "Muhurat",
    src: "/assets/home/muhurat.png",
    url: "/muhurat",
  },
  {
    name: "Palm Reading",
    src: "/assets/home/palmreading.png",
    url: "/",
  },
];
type Props = {};

function Services({}: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-white ">
      <Section>
        <div className="">
          <div className="space-y-6">
            <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
              Our Services
            </h2>
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
                  spaceBetween: 40,
                },
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
            >
              {services.map((item, index) => (
                <SwiperSlide key={item.src + index}>
                  <Link key={index} href={item?.url}>
                    <div className=" rounded-3xl border-[10px] border-white">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={337}
                        height={348}
                        loading={"lazy"}
                        className="mx-auto h-full w-full object-contain"
                      />
                    </div>
                    <div className="">
                      <p className=" rounded-[10px] bg-[#ca2127] py-[14px]  text-center font-[georgia] text-white md:text-2xl lg:text-[32px]">
                        {item.name}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className=" flex items-center justify-center  lg:relative lg:bottom-[250px] ">
              <div className="z-10  lg:absolute   lg:left-[-40px]">
                <button className="prev cursor-pointer">
                  <AiFillCaretLeft className={`text-[40px]    text-black  `} />
                </button>
              </div>

              <div className="z-10 lg:absolute     lg:left-[1250px] ">
                <button className="next cursor-pointer">
                  <AiFillCaretRight className={`text-[40px]    text-black  `} />
                </button>{" "}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="rounded-[10px] bg-[#ff3d23] px-4 py-2 font-[Roboto]   text-[28px] font-bold text-white">
                View More
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Services;
