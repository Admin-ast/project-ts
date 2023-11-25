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
    name: "Gemstone",
    src: "/assets/shop/gemstone.svg",
    url: "/shop/gemstone",
  },
];

function Shop({ head }: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    // <div className=" py-12 lg:py-[38px]">
    //   <Section>
    //     <div className="space-y-6">
    //       <div className="mb-[35px]">
    //         <h2 className="mb-[15px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[48px]">
    //           Shop
    //         </h2>
    //       </div>
    //       <Swiper
    //         navigation={{
    //           prevEl: ".prev",
    //           nextEl: ".next",
    //         }}
    //         onActiveIndexChange={(e) => setActive(e.activeIndex)}
    //         breakpoints={{
    //           640: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //           },
    //           768: {
    //             slidesPerView: 3,
    //             spaceBetween: 40,
    //           },
    //         }}
    //         autoplay={{
    //           delay: 3500,
    //           disableOnInteraction: false,
    //         }}
    //         modules={[Pagination, Navigation, Autoplay]}
    //       >
    //         {shoppingList?.map((item, index) => (
    //           <SwiperSlide key={item.src + index}>
    //             <Link key={index} href={item?.url}>
    //               <div className="overflow-hidden rounded-[10px] h-[236px] border-[3px] border-[#DC6563]">
    //                 <div className=" ">
    //                   <Image
    //                     src={item.src}
    //                     alt={item.name}
    //                     width={337}
    //                     height={348}
    //                     loading={"lazy"}
    //                     className="mx-auto h-full w-full object-contain"
    //                   />
    //                 </div>
    //                 <p className="bg-[#ca2127] py-[14px]  text-center font-[georgia] text-[20px] text-white lg:text-[32px]">
    //                   {item.name}
    //                 </p>
    //               </div>
    //             </Link>
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //       {/* <div className=" flex items-center justify-center  lg:relative lg:bottom-[250px] ">
    //         <div className="z-10  lg:absolute   lg:left-[-100px]">
    //           <button className="prev cursor-pointer">
    //             <AiFillCaretLeft className={`text-[40px]    text-black  `} />
    //           </button>
    //         </div>

    //         <div className="z-10 lg:absolute     lg:left-[1290px] ">
    //           <button className="next cursor-pointer">
    //             <AiFillCaretRight className={`text-[40px]    text-black  `} />
    //           </button>{" "}
    //         </div>
    //       </div> */}
    //       {/* <div className=" flex items-center justify-center   ">
    //         <div className="     ">
    //           <button className="prev cursor-pointer">
    //             <AiFillCaretLeft className={`text-[40px]    text-black  `} />
    //           </button>
    //         </div>

    //         <div className=" ">
    //           <button className="next cursor-pointer">
    //             <AiFillCaretRight className={`text-[40px]    text-black  `} />
    //           </button>{" "}
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-center">
    //         <button className="rounded-[10px] bg-[#ff3d23] px-4 py-2 font-[Roboto]   text-[28px] font-bold text-white">
    //           View More
    //         </button>
    //       </div> */}

    //     </div>
    //     {/* <div className="">
    //           <div className=" absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md">
    //             <button className="prev cursor-pointer">
    //               <AiFillCaretLeft className={`text-[30px]    text-black  `} />
    //             </button>
    //           </div>
    //           <div className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md4">
    //             <button className="next cursor-pointer">
    //               <AiFillCaretRight className={`text-[30px]    text-black  `} />
    //             </button>{" "}
    //           </div>
    //         </div>
    //         <div className="flex items-center justify-center">
    //           <button className="rounded-[10px] bg-[#ff3d23] px-4 py-2 font-[Roboto]   text-[28px] font-bold text-white">
    //             View More
    //           </button>
    //         </div> */}

    //   </Section>
    // </div>

    <div className=" bg-[url('/assets/horoscope-bg.webp')] py-[30px]">
      <Section>
        <div className="  ">
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
                    <div className="mt-[30px]">
                      <div className=" relative  w-[95%] rounded-[15px] border-[3px] border-[#DC6563]">
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={206}
                          height={174}
                          loading={"lazy"}
                          className=" h-full  w-full py-[6px] px-[6px] "
                        />
                      </div>
                      <div className="absolute bottom-[0px] w-[95%]  ">
                        <p className=" rounded-[6px] bg-[#ca2127] py-1   text-center font-[georgia] text-white md:text-2xl lg:text-[20px]">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="relative  mx-auto flex items-center justify-between"
              style={{
                height: "330px",
                marginTop: "-26%",
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
            <div className="mt-[30px] flex items-center justify-center">
              <button className="rounded-[10px] bg-[#ff3d23] px-4 py-2 font-[Roboto]    font-bold text-white">
                View More
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Shop;
