import React, { useState } from "react";
import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { PlayIcon } from "@heroicons/react/24/solid";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Horoscope from "../home/Horoscope";

type Props = {};

type Review = {
  name: string;
  src: string;
  review: string;
};

const reviews: Review[] = [
  {
    name: "Ruchi Pathak",
    src: "",
    review:
      " I feel short of words to state how thankful I'm to the gem of astrologers at the Astrosevatalk. I was going through extreme distress in my life due to my career and then I randomly came across the Astrosevatalk platform. I had a chat with one of their astrologers who suggested I switch my career toward government jobs. Guess what today I'm working as a village development officer under the state services of MP. I never thought about what was destined for me until my birth chart revealed it for me through the finest astrology services of Astrosevatalk.",
  },
  {
    name: "Hardik Sharma",
    src: "",
    review:
      "I was going through the Rahu Mahadasha which was really troubling all aspects of my life despite trying my level best. Sometimes I was falling into constant depression and at others, my health was deteriorating. My Aunt introduced me to the Astrosevatalk to get my birth chart analysis by some astrologer there. I had a short chat with an astrologer there who suggested me some simple home remedies to nullify the severe effect of Rahu Mahadasha. Guess what? I have been feeling truly at peace and in harmony following those simple home remedies in the form of daily worship.-",
  },
  {
    name: "Shalini Thakur",
    src: "",
    review:
      " I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
  },
];

function Review({}: Props) {
  // const [active, setActive] = useState<Number>(0);
  return (
    // <div className=" py-10">
    //   <Section>
    //     <div className="space-y-6">
    //       <div className="mb-[35px]">
    //         <h2 className="mb-[15px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[48px]">
    //           Client Reviews
    //         </h2>
    //         <p className="text-center text-sm font-semibold sm:text-lg lg:text-2xl">
    //           Hear about us from our customers
    //         </p>
    //       </div>
    //       {/* <Swiper
    //         navigation={{
    //           prevEl: ".prev",
    //           nextEl: ".next",
    //         }}
    //         onActiveIndexChange={(e) => setActive(e.activeIndex)}
    //         breakpoints={{
    //           640: {
    //             slidesPerView: 1,
    //             spaceBetween: 20,
    //           },
    //         }}
    //         autoplay={{
    //           delay: 3500,
    //           disableOnInteraction: false,
    //         }}
    //         modules={[Pagination, Navigation, Autoplay]}
    //       > */}
    //         {reviews?.map((item, index) => (
    //           // <SwiperSlide key={item.src + index}>
    //             <div
    //               key={index}
    //               className="items-center space-y-4 overflow-hidden rounded-2xl border border-gray-800   lg:flex lg:items-center lg:gap-y-0 lg:gap-x-8 lg:space-y-0"
    //             >
    //               <div className="">
    //               <Image
    //                     src="/assets/home/review.png"
    //                     alt={item.name}
    //                     width={108}
    //                     height={108}
    //                     loading={"lazy"}
    //                   />
    //               </div>
    //               <div className=" flex items-center space-x-4 lg:col-span-1 ">

    //                 <div className="space-y-2 ">
    //                   {/* <p className="text-[20px] font-semibold">{item.name}</p> */}

    //                 </div>
    //               </div>
    //               <div className="flex ">
    //                 <div className="">
    //                 <p className="hidden text-[20px] font-semibold lg:block">
    //                   {item.name}
    //                 </p>
    //                 </div>

    //                 <div className="flex">
    //                     <FaStar className="h-5 w-5 text-[#E9B741]" />
    //                     <FaStar className="h-5 w-5 text-[#E9B741]" />
    //                     <FaStar className="h-5 w-5 text-[#E9B741]" />
    //                     <FaStar className="h-5 w-5 text-[#E9B741]" />
    //                     <FaStar className="h-5 w-5 text-[#E9B741]" />
    //                   </div>

    //               </div>
    //               <div className="">
    //               <p className="text-justify text-base">{item.review}</p>
    //               </div>
    //             </div>

    //           // </SwiperSlide>
    //         ))}
    //       {/* </Swiper>  */}
    //       {/* <div className="relative z-20 -mt-2 flex items-center justify-center space-x-4">
    //         <button className="prev cursor-pointer" aria-label="prev">
    //           <PlayIcon
    //             className={`h-10 w-10 rotate-180 rounded-full border-2 border-black p-2 text-black `}
    //           />
    //         </button>
    //         <button className="next cursor-pointer" aria-label="next">
    //           <PlayIcon
    //             className={`h-10 w-10 rounded-full border-2 border-black p-2 text-black `}
    //           />
    //         </button>{" "}
    //       </div> */}

    //     </div>
    //   </Section>
    // </div>

    <div className="bg-white shadow-xl ">
      <Section>
        <div className="py-[30px]">
          <div className="">
            <h2 className=" text-center font-[georgia]  text-[20px] font-bold sm:text-2xl md:text-[30px] lg:text-[30px]">
              Client Reviews
            </h2>
            <p className="mt-[15px] text-center text-sm font-semibold sm:text-lg lg:text-[24px]">
              Hear about us from our customers
            </p>
          </div>
          {reviews?.map((item, index) => (
            <div
              className="mt-[25px] items-center gap-4  rounded-[10px] border-[1px] border-[#D9D9D9] md:flex lg:flex"
              key={index}
            >
              <div className="py-2 px-10  ">
                <Image
                  src="/assets/home/review.png"
                  alt={item.name}
                  width={108}
                  height={108}
                  loading={"lazy"}
                  className="rounded-full border-4 border-[#DC6563]"
                />
              </div>
              <div className="w-full pb-4">
                <div className="flex justify-between ">
                  <div className="">
                    <p className="py-4 text-xl font-bold ">{item.name}</p>
                  </div>
                  <div className="flex px-4 py-4">
                    <FaStar className="h-5 w-5 text-[#E9B741]" />
                    <FaStar className="h-5 w-5 text-[#E9B741]" />
                    <FaStar className="h-5 w-5 text-[#E9B741]" />
                    <FaStar className="h-5 w-5 text-[#E9B741]" />
                    <FaStar className="h-5 w-5 text-[#E9B741]" />
                  </div>
                </div>

                <div className="text-base">
                  <p className="">{item.review}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-[30px] flex items-center justify-center">
            <button className=" rounded-[10px] bg-gradient-to-b from-[#ff5834] to-[#ff160a] px-10 py-3 font-bold text-white">
              View More
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Review;
