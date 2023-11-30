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
  id: number;
};

const services: Service[] = [
  {
    id: 1,
    name: "Vaar",
    src: "/assets/home/panchang1.png",
    url: "/today-panchang",
  },
  {
    id: 2,
    name: "Vaar",
    src: "/assets/home/panchang2.png",
    url: "/today-panchang",
  },
  {
    id: 3,
    name: "Vaar",
    src: "/assets/home/panchang3.png",
    url: "/today-panchang",
  },
  {
    id: 4,
    name: "Vaar",
    src: "/assets/home/panchang3.png",
    url: "/today-panchang",
  },
];
type Props = {};

const Panchang = (props: Props) => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className=" bg-gradient-to-b from-[#ef824c] to-[#d84f50]  py-[30px]">
      <Section>
        <div className=" mx-auto max-w-7xl ">
          <div className=" ">
            <h2 className=" text-center font-[georgia] text-xl text-[20px] font-semibold text-white sm:text-2xl md:text-[30px] lg:text-[30px]">
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
              <div className="">
                {services.map((item, index) => (
                  <SwiperSlide key={item.src + index} className="">
                    <Link key={index} href={item.url}>
                      <div className="">
                        <div className="  mt-[30px]    ">
                          <div className=" ">
                            <Image
                              src={item.src}
                              alt={item.name}
                              width={156}
                              height={145}
                              loading={"lazy"}
                              className="h-full  w-full rounded-t-[10px] object-contain"
                            />
                          </div>
                          <div className="  rounded-b-[10px] bg-white  py-[5px] ">
                            <p className=" text-center text-[20px]">
                              {item?.name}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="">
                        <div className=""></div>
                      </div> */}
                    </Link>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div
              className="relative     mx-auto flex items-center justify-between"
              style={{
                height: "367px",
                marginTop: "-30%",
                marginLeft: "-3%",
                marginRight: "-3%",
              }}
            >
              <button className="prev cursor-pointer">
                <AiFillCaretLeft className="text-3xl text-white" />
              </button>
              <button className="next cursor-pointer">
                <AiFillCaretRight className="text-3xl text-white" />
              </button>
            </div>
            {/* <div className="flex items-center justify-center">
              <button className="rounded-[10px] bg-[#ff3d23] px-4 py-2 font-[Roboto]   text-[28px] font-bold text-white">
                View More
              </button>
            </div> */}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Panchang;
