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
  head: string;
};

type ShoppingList = {
  name: string;
  src: string;
  url: string;
};

const shoppingList: ShoppingList[] = [
  {
    name: "Love Score",
    src: "/assets/shop/lovescore.svg",
    url: "/shop/lovescore",
  },
  {
    name: "Career Report",
    src: "/assets/shop/carreereport.svg",
    url: "/shop/career-report",
  },
  {
    name: "Gemstone",
    src: "/assets/shop/gemstone.svg",
    url: "/shop/gemstone",
  },
  {
    name: "Kawach",
    src: "/assets/shop/kawach.svg",
    url: "/shop/kawach",
  },
];

function Shop({ head }: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className=" bg-[url('/assets/horoscope-bg.webp')] py-[30px]">
      <Section>
        <div className=" mx-auto max-w-7xl ">
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
              {shoppingList.map((item, index) => (
                <SwiperSlide key={item.src + index} className="">
                  <Link key={index} href={item?.url}>
                    <div className="mt-[20px]">
                      <div className=" relative  w-[100%] rounded-[15px] border-[3px] border-[#DC6563]">
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={220}
                          height={174}
                          loading={"lazy"}
                          className=" h-full  w-full py-[6px] px-[6px] "
                        />
                      </div>
                      <div className="absolute bottom-[0px] w-[100%]  ">
                        <p className=" rounded-[6px] bg-[#ca2127] py-1   text-center font-[georgia] text-white md:text-xl lg:text-[20px]">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="astroslideshop  relative mx-auto flex items-center justify-between">
              <button className="prev cursor-pointer">
                <AiFillCaretLeft className="text-3xl text-black" />
              </button>
              <button className="next cursor-pointer">
                <AiFillCaretRight className="text-3xl text-black" />
              </button>
            </div>
            {/* <div className="mt-[10px] mb-[10px] flex items-center justify-center">
              <button className="rounded-[10px] bg-[#ff3d23] px-4 py-2 font-[Roboto]    font-bold text-white">
                View More
              </button>
            </div> */}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Shop;
