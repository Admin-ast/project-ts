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
    url: "/horoscope/daily",
  },
  {
    name: "Taurus",
    src: "/assets/kundli/taurus.png",
    url: "/horoscope/daily",
  },
  {
    name: "Gemini",
    src: "/assets/kundli/gemini.png",
    url: "/horoscope/daily",
  },
  {
    name: "Cancer",
    src: "/assets/kundli/cancer.png",
    url: "/horoscope/daily",
  },
  {
    name: "Leo",
    src: "/assets/kundli/leo.png",
    url: "/horoscope/daily",
  },
  {
    name: "Virgo",
    src: "/assets/kundli/virgo.png",
    url: "/horoscope/daily",
  },
  {
    name: "Libra",
    src: "/assets/kundli/libra.png",
    url: "/horoscope/daily",
  },
  {
    name: "Scorpio",
    src: "/assets/kundli/scorpio.png",
    url: "/horoscope/daily",
  },
  {
    name: "Sagittarius",
    src: "/assets/kundli/sagittarius.png",
    url: "/horoscope/daily",
  },
  {
    name: "Capricorn",
    src: "/assets/kundli/capricorn.png",
    url: "/horoscope/daily",
  },
  {
    name: "Aquarius",
    src: "/assets/kundli/aquarius.png",
    url: "/horoscope/daily",
  },
  {
    name: "Pieces",
    src: "/assets/kundli/pieces.png",
    url: "/horoscope/daily",
  },
];
type Props = {};

function TodaysHoroscope({}: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className=" pt-[30px]">
      <Section>
        <div className="">
          <div className="">
            <p className=" text-center font-[georgia] text-[30px] font-semibold ">
              {`Today's`} Horoscope
            </p>
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
                    <div className=" mt-[30px] rounded-3xl border-[10px] border-white">
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

            <div
              className="relative mx-auto  flex items-center justify-center  md:justify-center  lg:justify-between"
              style={{
                height: "330px",
                marginTop: "-28%",
                marginLeft: "-2%",
                marginRight: "-2%",
              }}
            >
              <button className="prev cursor-pointer md:mt-[20px]">
                <AiFillCaretLeft className="text-3xl text-black" />
              </button>
              <button className="next cursor-pointer md:mt-[20px]">
                <AiFillCaretRight className="text-3xl text-black" />
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default TodaysHoroscope;
