import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../Section";

type Props = {};
type Service = {
  name: string;
  src: string;
  url: string;
};

const services: Service[] = [
  {
    name: "Priyanka Chopra",
    src: "/assets/home/priyanka.png",
    url: "/",
  },
  {
    name: "Priyanka Chopra",
    src: "/assets/home/priyanka.png",
    url: "/",
  },
  {
    name: "Priyanka Chopra",
    src: "/assets/home/priyanka.png",
    url: "/",
  },
  {
    name: "Priyanka Chopra",
    src: "/assets/home/priyanka.png",
    url: "/",
  },
];
const News = (props: Props) => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] py-[30px] ">
      <Section>
        <div className=" ">
          <div className="">
            <p className=" text-center font-[georgia] text-[20px] font-bold sm:text-2xl md:text-[30px] lg:text-[30px]">
              AstroSevaTalk In News
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
                    <div className="mt-[30px] rounded-t-[10px] ">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={246}
                        height={175}
                        loading={"lazy"}
                        className="  w-full object-contain"
                      />
                      <div className=" w-full ">
                        <p className=" rounded-b-[10px] bg-[#ca2127] py-1   text-center font-[georgia] text-white ">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="relative z-50 mx-auto flex items-center justify-between"
              style={{
                height: "280px",
                marginTop: "-20%",
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
  );
};

export default News;
