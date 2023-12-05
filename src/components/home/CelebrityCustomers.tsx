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
import VideoCard from "./VideoCard";
type Props = {};
interface VideoData {
  title: string;
  thumbnail: string;
}
const videoDataArray: VideoData[] = [
  {
    title: "Priyanka Chopra",
    thumbnail: "/assets/home/priyanka.png",
  },
  {
    title: "Irfan Khan",
    thumbnail: "/assets/home/irfan.png",
  },
  {
    title: "Genelia",
    thumbnail: "/assets/home/gen.png",
  },
  {
    title: "Shahrukh Khan",
    thumbnail: "/assets/home/shah.jpg",
  },

  // Add more video data as needed
];
const CelebrityCustomers = (props: Props) => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-gradient-to-b from-[#ef824c] to-[#d84f50]  py-[30px]">
      <Section>
        <div className="">
          <div className="">
            <p className=" text-center font-[georgia] text-xl text-[20px] font-semibold text-white  md:text-[30px] lg:text-[30px]">
              Our Celebrity Customers
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
              {videoDataArray.map((videoData, index) => (
                <SwiperSlide key={index} className="">
                  <Link key={index} href={videoData?.thumbnail}>
                    <div className="flex justify-center  ">
                      <VideoCard key={index} {...videoData} />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="relative     mx-auto flex items-center justify-between"
              style={{
                height: "250px",
                marginTop: "-20%",
                marginLeft: "-2%",
                marginRight: "-2%",
              }}
            >
              <button className="prev cursor-pointer">
                <AiFillCaretLeft className="text-3xl text-white" />
              </button>
              <button className="next cursor-pointer">
                <AiFillCaretRight className="text-3xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CelebrityCustomers;
