// import Image from "next/image";
// import React, { Key } from "react";
// import Button from "../common/Button";
// import Section from "../Section";

// type Props = {};

// type ShoppingList = {
//   name: string;
//   src: string;
// };

// const shoppingList: ShoppingList[] = [
//   {
//     name: "Love Score",
//     src: "/assets/home/shop-01.webp",
//   },
//   {
//     name: "Career Report",
//     src: "/assets/home/shop-02.webp",
//   },
//   {
//     name: "Gem",
//     src: "/assets/home/shop-03.webp",
//   },
// ];

// function Shop({}: Props) {
//   return (
//     <div className="bg-[#FFF7E5] py-12 lg:py-[38px]">
//       <Section>
//         <div className="">
//           <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
//             Shop
//           </h2>
//           <div className="mb-[42px] grid grid-cols-1 gap-6 lg:grid-cols-3">
//             {shoppingList.map((item: ShoppingList, index: Key) => (
//               <div
//                 key={index}
//                 className="overflow-hidden rounded-3xl border-[3px] border-black"
//               >
//                 <div className="h-[390px] rounded-t-3xl border-[10px] !border-b-0 border-white">
//                   <Image
//                     src={item.src}
//                     alt={item.name}
//                     width={366}
//                     height={618}
//                     loading={"lazy"}
//                     className="h-full w-full object-contain"
//                   />
//                 </div>
//                 <p className="bg-black py-[14px] px-[90px] text-center font-[georgia] text-2xl text-white lg:text-[32px]">
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

// export default Shop;

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

type Props = {};

type ShoppingList = {
  name: string;
  src: string;
  url: string;
};

const shoppingList: ShoppingList[] = [
  {
    name: "Love Score",
    src: "/assets/home/shop-01.webp",
    url: "/shop/lovescore",
  },
  {
    name: "Career Report",
    src: "/assets/home/shop-02.webp",
    url: "/",
  },
  {
    name: "Gem",
    src: "/assets/home/shop-03.webp",
    url: "/shop/gemstone",
  },
];

function Shop({}: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-[#FFF7E5] py-12 lg:py-[38px]">
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
                  <div className="overflow-hidden rounded-3xl border-[3px] border-black">
                    <div className="h-[390px] rounded-t-3xl border-[10px] !border-b-0 border-white">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={366}
                        height={618}
                        loading={"lazy"}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="bg-black py-[14px]  text-center font-[georgia] text-[20px] text-white lg:text-[32px]">
                      {item.name}
                    </p>
                  </div>
                </Link>
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

export default Shop;
