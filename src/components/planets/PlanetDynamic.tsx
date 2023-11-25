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

type Props = {
  title: string;
  text: string;
  head: string;
};
const card = [
  {
    id: 1,
    src: "/assets/planet/sun.png",
    name: "Sun",
    sub: "Planet Of Self",
    url: "/",
  },
  {
    id: 2,
    src: "/assets/planet/moon.png",
    name: "Moon",
    sub: "Planet Of Emotions",
    url: "/",
  },
  {
    id: 3,
    src: "/assets/planet/mercury.png",
    name: "Mercury",
    sub: "Planet Of Communication",
    url: "/",
  },
  {
    id: 4,
    src: "/assets/planet/venus.png",
    name: "Venus",
    sub: "Planet Of Love & Money",
    url: "/",
  },
  {
    id: 5,
    src: "/assets/planet/mars.png",
    name: "Mars",
    sub: "Planet Of Passion",
    url: "/",
  },

  {
    id: 6,
    src: "/assets/planet/jupiter.png",
    name: "Jupiter",
    sub: "Planet Of Luck",
    url: "/",
  },
  {
    id: 7,
    src: "/assets/planet/saturn.png",
    name: "Saturn",
    sub: "Planet Of Karma",
    url: "/",
  },
  {
    id: 8,
    src: "/assets/planet/uranus.png",
    name: "Uranus",
    sub: "Planet Of Rebellion",
    url: "/",
  },
  {
    id: 9,
    src: "/assets/planet/neptune.png",
    name: "Neptune",
    sub: "Planet Of Illusion",
    url: "/",
  },
  {
    id: 10,

    src: "/assets/planet/pluto.png",
    name: "Pluto",
    sub: "Planet Of Power",
    url: "/",
  },
];
const PlanetDynamic = ({ head, title, text }: Props) => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] py-[30px] shadow-xl">
      <Section>
        <div className="text-justify">
          <p className="text-center text-[30px] font-bold ">{head}</p>
          <p className="mt-[10px]">{text}</p>
        </div>
        <div className=" bg-[url('/assets/horoscope-bg.webp')] py-[30px]">
          <Section>
            <div className="  ">
              <div className="">
                <h2 className=" text-center font-[georgia] text-xl text-[20px] font-semibold md:text-[30px] lg:text-[30px]">
                  {head}
                </h2>
                <Swiper
                  className=""
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
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                  }}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Navigation, Autoplay]}
                >
                  {/* {card.map((item, index) => (
              <SwiperSlide key={item.src + index} className="">
                <Link key={index} href={item?.url}>
                 <div className="mt-[30px]">
                 <div className=" rounded-[15px]  w-[95%] relative border-[3px] border-[#DC6563]">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={206}
                      height={174}
                      loading={"lazy"}
                      className=" py-[6px]  h-full w-full px-[6px] "
                    />
                    
                  </div>
                  <div className="flex justify-center items-center">
                <div className="">
                <p className="text-[22px] font-semibold text-center">{item.name}</p>
                <p className="text-center">{item.sub}</p>
                </div>
            </div>
                 </div>
                </Link>
              </SwiperSlide>
            ))} */}

                  {card.map((item, index) => (
                    <SwiperSlide key={item.src + index} className="">
                      <Link key={index} href={item?.url}>
                        <div key={index} className="mt-[30px]">
                          <div className="h-[235px] rounded-[20px] border-r-[2px] border-b-[2px] border-[#DC6563] bg-white shadow-xl">
                            <div className="flex items-center justify-center ">
                              <img
                                src={item.src}
                                alt={item.name}
                                className=""
                              />
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="">
                                <p className="text-center text-[22px] font-semibold">
                                  {item.name}
                                </p>
                                <p className="text-center">{item.sub}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  className="relative  mx-auto flex items-center justify-between"
                  style={{
                    height: "330px",
                    marginTop: "-23%",
                    marginLeft: "-2%",
                    marginRight: "-2%",
                  }}
                >
                  <button className="prev cursor-pointer">
                    <AiFillCaretLeft className="text-3xl text-black" />
                  </button>
                  <button className="next cursor-pointer">
                    <AiFillCaretRight className="text-3xl text-black" />
                  </button>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </Section>
    </div>
  );
};

export default PlanetDynamic;
