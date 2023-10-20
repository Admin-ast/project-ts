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

type Props = {};

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
];

function Shop({}: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className=" py-12 lg:py-[38px]">
      <Section>
        <div className="space-y-6">
          <div className="mb-[35px]">
            <h2 className="mb-[15px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[48px]">
              Shop
            </h2>
          </div>
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
            {shoppingList?.map((item, index) => (
              <SwiperSlide key={item.src + index}>
                <Link key={index} href={item?.url}>
                  <div className="overflow-hidden rounded-3xl border-[3px] border-[#DC6563]">
                    <div className="rounded-t-3xl border-[10px] !border-b-0 border-white lg:h-[390px]">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={366}
                        height={618}
                        loading={"lazy"}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="bg-[#ca2127] py-[14px]  text-center font-[georgia] text-[20px] text-white lg:text-[32px]">
                      {item.name}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" flex items-center justify-center  lg:relative lg:bottom-[250px] ">
            <div className="z-10  lg:absolute   lg:left-[-100px]">
              <button className="prev cursor-pointer">
                <AiFillCaretLeft className={`text-[40px]    text-black  `} />
              </button>
            </div>

            <div className="z-10 lg:absolute     lg:left-[1290px] ">
              <button className="next cursor-pointer">
                <AiFillCaretRight className={`text-[40px]    text-black  `} />
              </button>{" "}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="rounded-[10px] bg-[#ff3d23] px-4 py-2 font-[Roboto]   text-[28px] font-bold text-white">
              View More
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Shop;
