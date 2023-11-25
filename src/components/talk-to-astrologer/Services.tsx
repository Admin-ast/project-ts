// import React, { useState } from "react";
// import Section from "../Section";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import { PlayIcon } from "@heroicons/react/24/solid";

// // import required modules
// import { Pagination, Navigation, Autoplay } from "swiper";
// import Horoscope from "../home/Horoscope";
// import Link from "next/link";
// import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

// type Service = {
//   name: string;
//   src: string;
//   url: string;
// };

// const services: Service[] = [
//   {
//     name: "Compatibility",
//     src: "/assets/home/compat.png",
//     url: "/compatibility",
//   },
//   {
//     name: "Muhurat",
//     src: "/assets/home/muhu.png",
//     url: "/muhurat",
//   },
//   {
//     name: "Palm Reading",
//     src: "/assets/home/palm.png",
//     url: "/",
//   },
// ];
// type Props = {
//   head: string;
// };

// function Services({ head }: Props) {
//   const [active, setActive] = useState<Number>(0);
//   return (
//     <div className=" bg-[url('/assets/horoscope-bg.webp')] py-[30px]">
//       <Section>
//         <div className="">
//           <div className="space-y-[30px]">
//             <h2 className=" text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
//               {head}
//             </h2>
//             <Swiper className=""
//               navigation={{
//                 prevEl: ".prev",
//                 nextEl: ".next",
//               }}
//               onActiveIndexChange={(e) => setActive(e.activeIndex)}
//               breakpoints={{
//                 640: {
//                   slidesPerView: 2,
//                   spaceBetween: 20,
//                 },
//                 768: {
//                   slidesPerView: 3,
//                   spaceBetween: 20,
//                 },
//               }}
//               autoplay={{
//                 delay: 3500,
//                 disableOnInteraction: false,
//               }}
//               modules={[Pagination, Navigation, Autoplay]}
//             >
//               {services.map((item, index) => (
//                 <SwiperSlide key={item.src + index} className="">
//                   <Link key={index} href={item?.url}>
//                    <div className="flex justify-center">
//                    <div className=" rounded-[15px]  w-[90%] relative border-[3px] border-[#DC6563]">
//                       <Image
//                         src={item.src}
//                         alt={item.name}
//                         width={192}
//                         height={174}
//                         loading={"lazy"}
//                         className=" py-[6px]  h-full w-full px-[6px] "
//                       />

//                     </div>
//                     <div className="absolute bottom-[1px] w-[90%]">
//                         <p className=" rounded-[15px] bg-[#ca2127] py-[14px]  text-center font-[georgia] text-white md:text-2xl lg:text-[32px]">
//                           {item.name}
//                         </p>
//                       </div>
//                    </div>
//                   </Link>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <div className=" flex  relative  ">

//               <div className="  absolute  ">
//                 <button className="prev cursor-pointer">
//                   <AiFillCaretLeft className={`text-[30px]    text-black  `} />
//                 </button>
//               </div>

//               <div className=" absolute ">
//                 <button className="next cursor-pointer">
//                   <AiFillCaretRight className={`text-[30px]    text-black  `} />
//                 </button>{" "}
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <button className="rounded-[10px] bg-[#ff3d23] px-4 py-2 font-[Roboto]   text-[28px] font-bold text-white">
//                 View More
//               </button>
//             </div>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

// export default Services;

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

type Service = {
  name: string;
  src: string;
  url: string;
};

const services: Service[] = [
  {
    name: "Compatibility",
    src: "/assets/home/compat.png",
    url: "/compatibility",
  },
  {
    name: "Muhurat",
    src: "/assets/home/muhu.png",
    url: "/muhurat",
  },
  {
    name: "Palm Reading",
    src: "/assets/home/palm.png",
    url: "/",
  },
  {
    name: "Palm Reading",
    src: "/assets/home/palm.png",
    url: "/",
  },
];
type Props = {
  head: string;
};

function Services({ head }: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className=" mt-[2px] bg-[url('/assets/home/cloud.png')] py-[30px]">
      <Section>
        <div className="">
          <div className="space-y-[30px]">
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
              {services.map((item, index) => (
                <SwiperSlide key={item.src + index} className="">
                  <Link key={index} href={item?.url}>
                    <div className="flex justify-center">
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
                      <div className="absolute bottom-[2px] w-[95%]  ">
                        <p className=" rounded-[10px] bg-[#ca2127]    text-center font-[georgia] text-white md:text-2xl lg:text-[20px]">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className=" flex  relative  ">
              <div className="  absolute right-[99%]   ">
                <button className="prev cursor-pointer">
                  <AiFillCaretLeft className={`text-[30px]    text-black  `} />
                </button>
              </div>
              <div className=" absolute left-[900px] bottom-[150px]">
                <button className="next cursor-pointer">
                  <AiFillCaretRight className={`text-[30px]    text-black  `} />
                </button>{" "}
              </div>
            </div> */}

            <div
              className="relative z-50    mx-auto flex items-center justify-between"
              style={{
                height: "330px",
                marginTop: "-23%",
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
}

export default Services;
