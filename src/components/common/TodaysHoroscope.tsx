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

type TodaysHoroscope = {
  name: string;
  src: string;
  url: string;
};

const todaysHoroscope: TodaysHoroscope[] = [
  {
    name: "Aries",
    src: "/assets/kundli/aries.png",
    url: "/",
  },
  {
    name: "Taurus",
    src: "/assets/kundli/taurus.png",
    url: "/muhurat",
  },
  {
    name: "Gemini",
    src: "/assets/kundli/gemini.png",
    url: "/",
  },
  {
    name: "Cancer",
    src: "/assets/kundli/cancer.png",
    url: "/",
  },
  {
    name: "Leo",
    src: "/assets/kundli/leo.png",
    url: "/",
  },
  {
    name: "Virgo",
    src: "/assets/kundli/virgo.png",
    url: "/",
  },
  {
    name: "Libra",
    src: "/assets/kundli/libra.png",
    url: "/",
  },
  {
    name: "Scorpio",
    src: "/assets/kundli/scorpio.png",
    url: "/",
  },
  {
    name: "Sagittarius",
    src: "/assets/kundli/sagittarius.png",
    url: "/",
  },
  {
    name: "Capricorn",
    src: "/assets/kundli/capricorn.png",
    url: "/",
  },
  {
    name: "Aquarius",
    src: "/assets/kundli/aquarius.png",
    url: "/",
  },
  {
    name: "Pieces",
    src: "/assets/kundli/pieces.png",
    url: "/",
  },
];
type Props = {};

function TodaysHoroscope({}: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="mt-[88px] bg-white">
      <Section>
        <div className="">
          <div className="space-y-6">
            <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
              {`Today's`} Horoscope
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
                  spaceBetween: 62,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 62,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 62,
                },
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
            >
              {todaysHoroscope.map((item, index) => (
                <SwiperSlide key={item.src + index}>
                  <Link key={index} href={item?.url}>
                    <div className=" rounded-3xl border-[10px] border-white">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={168}
                        height={216}
                        loading={"lazy"}
                        className="mx-auto   object-contain"
                      />
                    </div>
                    <div className="">
                      <p className="   py-[14px]  text-center font-[georgia]  md:text-2xl lg:text-[40px]">
                        {item.name}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className=" flex items-center justify-center   ">
              <div className="">
                <button className="prev cursor-pointer ">
                  <AiFillCaretLeft
                    className={`text-[40px] text-black    lg:mt-[60px]  `}
                  />
                </button>
              </div>

              <div className=" ">
                <button className="next cursor-pointer">
                  <AiFillCaretRight
                    className={`text-[40px]  text-black  lg:mt-[60px]  `}
                  />
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default TodaysHoroscope;
