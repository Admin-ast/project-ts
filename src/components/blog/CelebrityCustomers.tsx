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
import VideoCard from "../home/VideoCard";

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
    title: "Priyanka Chopra",
    thumbnail: "/assets/home/priyanka.png",
  },
  {
    title: "Priyanka Chopra",
    thumbnail: "/assets/home/priyanka.png",
  },
  {
    title: "Priyanka Chopra",
    thumbnail: "/assets/home/priyanka.png",
  },

  // Add more video data as needed
];
const CelebrityCustomers = (props: Props) => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-[]  py-[30px]">
      <Section>
        <div className="">
          <div className="">
            <p className=" text-center font-[georgia] text-xl text-[20px] font-semibold   md:text-[30px] lg:text-[30px]">
              OUR CELEBRITY CUSTOMERS
            </p>

            <div className="grid lg:grid-cols-4 ">
              {videoDataArray.map((videoData, index) => (
                <Link key={index} href={videoData?.thumbnail}>
                  <div className="flex justify-center ">
                    <VideoCard key={index} {...videoData} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CelebrityCustomers;
