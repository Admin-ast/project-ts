// import Image from "next/image";
// import React, { Key } from "react";
// import Button from "../common/Button";
// import Section from "../Section";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import { PlayIcon } from "@heroicons/react/24/solid";

// // import required modules
// import { Pagination, Navigation, Autoplay } from "swiper";

// type Props = {};

// type Service = {
//   name: string;
//   src: string;
// };

// const services: Service[] = [
//   {
//     name: "Compatibility",
//     src: "/assets/home/service-1.webp",
//   },
//   {
//     name: "Muhurat",
//     src: "/assets/home/service-2.webp",
//   },
//   {
//     name: "Palm Reading",
//     src: "/assets/home/service-3.webp",
//   },
// ];

// function Services({}: Props) {
//   return (
//     <div className="bg-[#FFF7E5] py-12 lg:py-[38px]">
//       <Section>
//         <div className="">
//           <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
//             Our Services
//           </h2>
//           <div className="mb-[42px] grid grid-cols-1 gap-6 lg:grid-cols-3">
//             {services.map((item: Service, index: Key) => (
//               <div key={index} className="overflow-hidden rounded-2xl border-[3px] border-black">
//                 <div className="h-[390px] rounded-3xl border-[10px] border-white p-6">
//                   <Image
//                     src={item.src}
//                     alt={item.name}
//                     width={337}
//                     height={348}
//                     loading={"lazy"}
//                     className="mx-auto h-full w-full object-contain"
//                   />
//                 </div>
//                 <p className="-mt-5 bg-black py-[14px] px-[90px] text-center font-[georgia] text-2xl text-white lg:text-[32px]">
//                   {item.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <Button text="View More" className="mx-auto lg:text-[28px]" />
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

type Service = {
  name: string;
  src: string;
};

const services: Service[] = [
  {
    name: "Compatibility",
    src: "/assets/home/service-1.webp",
  },
  {
    name: "Muhurat",
    src: "/assets/home/service-2.webp",
  },
  {
    name: "Palm Reading",
    src: "/assets/home/service-3.webp",
  },
  {
    name: "Compatibility",
    src: "/assets/home/service-1.webp",
  },
  {
    name: "Muhurat",
    src: "/assets/home/service-2.webp",
  },
  {
    name: "Palm Reading",
    src: "/assets/home/service-3.webp",
  },
];
type Props = {};

function Services({}: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-white py-20">
      <Section>
        <div className="space-y-6">
          <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
            Our Services
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
                <div className="h-[390px] rounded-3xl border-[10px] border-white p-6">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={337}
                    height={348}
                    loading={"lazy"}
                    className="mx-auto h-full w-full object-contain"
                  />
                </div>
                <p className="-mt-5 bg-black py-[14px] px-[90px] text-center font-[georgia] text-white md:text-2xl lg:text-[32px]">
                  {item.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative z-20 -mt-2 flex items-center justify-center space-x-4">
            <button className="prev cursor-pointer" aria-label="prev">
              <PlayIcon
                className={`h-10 w-10 rotate-180 rounded-full border-2 border-black p-2 text-black `}
              />
            </button>
            <button className="next cursor-pointer" aria-label="next">
              <PlayIcon
                className={`h-10 w-10 rounded-full border-2 border-black p-2 text-black `}
              />
            </button>{" "}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Services;
