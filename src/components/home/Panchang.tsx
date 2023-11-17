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
    name: "Vaar",
    src: "/assets/home/panchang1.png",
    url: "/",
  },
  {
    name: "Vaar",
    src: "/assets/home/panchang2.png",
    url: "/",
  },
  {
    name: "Vaar",
    src: "/assets/home/panchang3.png",
    url: "/",
  },
];
type Props = {};

const Panchang = (props: Props) => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className=" mt-[35px] bg-gradient-to-b from-[#ef824c] to-[#d84f50] py-6">
      <Section>
        <div className="">
          <div className="space-y-6">
            <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-[40px]">
              Panchang
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
                    <div className="    ">
                      <div className="">
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={280}
                          height={302}
                          loading={"lazy"}
                          className="mx-auto h-full w-full object-contain"
                        />
                        <div className="bg-white ">
                          <p className=" rounded-[10px]  py-[14px]  text-center font-[georgia]  md:text-2xl lg:text-[36px]">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className=" flex items-center justify-center   ">
              <div className="     ">
                <button className="prev cursor-pointer">
                  <AiFillCaretLeft className={`text-[40px]    text-white  `} />
                </button>
              </div>

              <div className=" ">
                <button className="next cursor-pointer">
                  <AiFillCaretRight className={`text-[40px]    text-white `} />
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Panchang;
