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
import Horoscope from "./Horoscope";
import Link from "next/link";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

type Service = {
  name: string;
  src: string;
  url: string;
};

const services: Service[] = [
  {
    name: "Pitra Dosh Shanti Pooja",
    src: "/assets/home/compat.png",
    url: "/compatibility",
  },
  // {
  //   name: "Muhurat",
  //   src: "/assets/home/muhu.png",
  //   url: "/muhurat",
  // },
  {
    name: "Buri Nazar Nivaran Pooja",
    src: "/assets/home/cheinese-horoscope.png",
    url: "/chines-horoscope",
  },
  {
    name: "Manokamna Siddhi Pooja",
    src: "/assets/home/kundli.png",
    url: "/free-kundli",
  },
  {
    name: "Bagalamukhi Mata Pooja",
    src: "/assets/home/kundli-matching.png",
    url: "/kundli-matching",
  },
  {
    name: "Dhan Prapti Laxmi Pooja",
    src: "/assets/home/Horoscope.png",
    url: "/horoscope/daily",
  },
  {
    name: "Devi Mahakali Pooja",
    src: "/assets/home/Panchang.png",
    url: "/today-panchang",
  },
  {
    name: "Shani Graha Shanti Pooja",
    src: "/assets/home/festival-2024.png",
    url: "/festival",
  },
];
type Props = {
  head: string;
};

function BookPooja({ head }: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className=" bg-[url('/assets/horoscope-bg.webp')] py-[30px]">
      <Section>
        <div className="max-w-6,5xl mx-auto">
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
              {services.map((item, index) => (
                <SwiperSlide key={item.src + index} className="">
                  <Link key={index} href={item?.url}>
                    <div className="mt-[30px] flex justify-center">
                      <div className=" relative  w-[100%] rounded-[15px] border-[3px] border-[#DC6563]">
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={206}
                          height={174}
                          loading={"lazy"}
                          className=" h-full w-full  rounded-[20px] py-[6px] px-[6px] "
                        />
                      </div>
                      <div className="absolute bottom-[-1px] w-[100%]  ">
                        <p className="bookpooja rounded-[5px] bg-[#ca2127] py-1   text-center font-[georgia] text-white md:text-[16px] lg:text-[20px]">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="astroslidefreeservice     relative mx-auto flex items-center justify-between">
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
  );
}

export default BookPooja;
