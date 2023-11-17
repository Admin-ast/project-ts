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
    url: "/compatibility",
  },
  {
    name: "Compatibility",
    src: "/assets/home/priyanka.png",
    url: "/compatibility",
  },
  {
    name: "Compatibility",
    src: "/assets/home/priyanka.png",
    url: "/compatibility",
  },
];
const News = (props: Props) => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="mt-[35px] bg-[url('/assets/horoscope-bg.webp')] ">
      <Section>
        <div className="">
          <div className="space-y-6">
            <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
              AstroSevaTalk In News
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
                    <div className=" rounded-3xl  ">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={337}
                        height={348}
                        loading={"lazy"}
                        className="mx-auto h-full w-full object-contain"
                      />
                    </div>
                    <div className="">
                      <p className=" rounded-[10px] bg-[#ca2127] py-[14px]  text-center font-[georgia] text-white ">
                        {item.name}
                      </p>
                    </div>
                  </Link>
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

export default News;
