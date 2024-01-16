import React, { useState } from "react";
import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
type Astrologers = {
  name: string;
  src: string;
};

const services: Astrologers[] = [
  {
    name: "Isha",
    src: "/assets/home/astro1.png",
  },
  {
    name: "Isha",
    src: "/assets/home/astro2.png",
  },
  {
    name: "Isha",
    src: "/assets/home/astro3.png",
  },
  {
    name: "Isha",
    src: "/assets/home/astro4.png",
  },
  {
    name: "Isha",
    src: "/assets/home/isha.png",
  },
  {
    name: "Isha",
    src: "/assets/home/abhi.png",
  },
  {
    name: "Isha",
    src: "/assets/home/nitin.png",
  },
];
type Props = {};

const LIveAstro = (props: Props) => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] py-[30px] ">
      <Section>
        <div className="max-w-6.5xl mx-auto">
          <p className=" text-center  font-[georgia] text-[20px] font-semibold  md:text-[30px] lg:text-[30px]">
            Live Astrologers
          </p>
          <div className="mt-[30px]">
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
                  slidesPerView: 6,
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
                  <div key={index} className="relative">
                    <Link href="">
                      <div className=" w-[100%] rounded-[11px] ">
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={190}
                          height={214}
                          loading={"lazy"}
                          className="mx-auto h-full w-full rounded-[10px] object-contain"
                        />
                      </div>
                      <div className="absolute bottom-[31px] left-[140px] md:left-[80px] lg:left-[50px] ">
                        <p className=" z-1 rounded-[10px]   py-[14px]  text-center font-[georgia] text-base font-bold text-white   md:text-[22px] lg:text-[22px]">
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="astroslideliveastrologer   relative mx-auto flex items-center justify-between">
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
};

export default LIveAstro;
