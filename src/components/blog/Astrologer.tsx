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
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

type Props = {};

type Astrologers = {
  name: string;
  type: string;
  src: string;
};

const astrologers: Astrologers[] = [
  {
    name: "Devarshi Ojha",
    type: "Taroyt",
    src: "",
  },
  {
    name: "Anil",
    type: "Taroyt",
    src: "",
  },
  {
    name: "Nitika",
    type: "Taroyt",
    src: "",
  },

  {
    name: "Nidhi",
    type: "Taroyt",
    src: "",
  },
];

function Astrologer({}: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-gradient-to-b from-[#ef824c] to-[#d84f50] bg-cover py-[30px]">
      <Section>
        <div className="max-w-6.5xl mx-auto">
          <div className="">
            <p className=" text-center font-[georgia] text-[15px] text-base font-semibold text-white sm:text-2xl md:text-[30px] lg:text-[30px]">
              Our Astrologers
            </p>
          </div>

          <div className="grid gap-[10px] md:grid-cols-2 lg:grid-cols-4">
            {astrologers?.map((item, index) => (
              <div
                key={index}
                className=" mt-6 flex  flex-col items-center justify-center  space-y-4 rounded-2xl bg-white py-4 px-6 shadow-xl"
              >
                <div className="h-[170px]   rounded-full ">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/home/review.png"
                      alt={item.name}
                      width={108}
                      height={108}
                      loading={"lazy"}
                      className="rounded-full border-[6px] border-[#DC6563]"
                    />
                  </div>
                  <div className="w-[100%] text-center font-[georgia] ">
                    <p className="text-[22px] font-semibold">{item?.name}</p>
                    <p className="text-base font-semibold">{item.type}</p>
                  </div>
                </div>
                <div className="flex gap-[20px]">
                  <div className="">
                    <Image
                      src="/assets/home/icon-01.png"
                      alt={item.name}
                      width={36}
                      height={35}
                      loading={"lazy"}
                      className=""
                    />
                  </div>
                  <div className="">
                    <Image
                      src="/assets/home/icon-02.png"
                      alt={item.name}
                      width={36}
                      height={35}
                      loading={"lazy"}
                      className=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Astrologer;
