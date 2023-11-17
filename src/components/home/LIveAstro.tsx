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
  {
    name: "Isha",
    src: "/assets/home/isha.png",
  },
];
type Props = {};

const LIveAstro = (props: Props) => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="mt-[35px] bg-[url('/assets/horoscope-bg.webp')] ">
      <Section>
        <div className="">
          <div className="space-y-6">
            <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
              Live Astrologers
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
                1024: {
                  slidesPerView: 4,
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
                  <div key={index} className="relative">
                    <Link href="">
                      <div className=" rounded-3xl ">
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={250}
                          height={343}
                          loading={"lazy"}
                          className="mx-auto h-full w-full object-contain"
                        />
                      </div>
                      <div className="absolute bottom-[41px] left-[140px] md:left-[80px] lg:left-[100px] ">
                        <p className=" z-1 rounded-[10px]   py-[14px]  text-center font-[georgia] font-bold text-white   md:text-[21px] lg:text-[21px]">
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className=" flex items-center justify-center   ">
              <div className="     ">
                <button className="prev cursor-pointer">
                  <AiFillCaretLeft className={`text-[40px]    text-black  `} />
                </button>
              </div>

              <div className=" ">
                <button className="next cursor-pointer">
                  <AiFillCaretRight className={`text-[40px]    text-black  `} />
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LIveAstro;
