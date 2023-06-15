// import { StarIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";
// import React, { Key } from "react";
// import Button from "../common/Button";
// import Section from "../Section";

// type Props = {};

// type Review = {
//   name: string;
//   src: string;
//   review: string;
// };

// const reviews: Review[] = [
//   {
//     name: "Bani Sharma",
//     src: "",
//     review:
//       " Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution.",
//   },
//   {
//     name: "Bani Sharma",
//     src: "",
//     review:
//       "Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution. Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution.",
//   },
//   {
//     name: "Bani Sharma",
//     src: "",
//     review:
//       " Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution.",
//   },
// ];

// function Review({}: Props) {
//   return (
//     <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover py-[39px]">
//       <Section>
//         <div className="">
//           <div className="mb-[26px]">
//             <h2 className="mb-[15px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[48px]">
//               Client Reviews
//             </h2>
//             <h3 className="text-center text-sm font-semibold sm:text-lg lg:text-2xl">
//               Hear about us from our customers
//             </h3>
//           </div>
//           <div className="mb-8 space-y-4">
//             {reviews.map((item: Review, index: Key) => (
//               <div
//                 key={index}
//                 className="items-center space-y-4 overflow-hidden rounded-2xl border border-gray-800 bg-[#FFF7E5] px-9 py-5 lg:flex lg:items-center lg:gap-y-0 lg:gap-x-8 lg:space-y-0"
//               >
//                 <div className="col-span-12 flex items-center space-x-4 lg:col-span-1 lg:items-start">
//                   <div className="h-24 w-24 rounded-full border-[3px] border-black p-0.5">
//                     <Image
//                       src="/assets/home/review.png"
//                       alt={item.name}
//                       width={92}
//                       height={92}
//                       loading={"lazy"}
//                     />
//                   </div>
//                   <div className="space-y-2 lg:hidden">
//                     <p className="text-[20px] font-semibold">{item.name}</p>
//                     <div className="flex">
//                       <StarIcon className="h-5 w-5 text-[#E9B741]" />
//                       <StarIcon className="h-5 w-5 text-[#E9B741]" />
//                       <StarIcon className="h-5 w-5 text-[#E9B741]" />
//                       <StarIcon className="h-5 w-5 text-[#E9B741]" />
//                       <StarIcon className="h-5 w-5 text-[#E9B741]" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-span-12 ml-auto gap-y-[8px] lg:col-span-11 lg:w-[99%]">
//                   <p className="hidden text-[20px] font-semibold lg:block">
//                     {item.name}
//                   </p>
//                   <p className="text-justify text-base">{item.review}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <Button text="View More" className="mx-auto lg:text-[28px]" />
//         </div>
//       </Section>
//     </div>
//   );
// }

// export default Review;

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
    name: "Ruchi Pathak, Indore, MP",
    src: "",
    review:
      " ●	I feel short of words to state how thankful I'm to the gem of astrologers at the Astrosevatalk. I was going through extreme distress in my life due to my career and then I randomly came across the Astrosevatalk platform. I had a chat with one of their astrologers who suggested I switch my career toward government jobs. Guess what today I'm working as a village development officer under the state services of MP. I never thought about what was destined for me until my birth chart revealed it for me through the finest astrology services of Astrosevatalk.",
  },
  {
    name: "Hardik Sharma, Delhi",
    src: "",
    review:
      "●	I was going through the Rahu Mahadasha which was really troubling all aspects of my life despite trying my level best. Sometimes I was falling into constant depression and at others, my health was deteriorating. My Aunt introduced me to the Astrosevatalk to get my birth chart analysis by some astrologer there. I had a short chat with an astrologer there who suggested me some simple home remedies to nullify the severe effect of Rahu Mahadasha. Guess what? I have been feeling truly at peace and in harmony following those simple home remedies in the form of daily worship.-",
  },
  {
    name: "Shalini Thakur, Mathura",
    src: "",
    review:
      " ●	I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
  },
  {
    name: "Shivani Saha, Ahmedabad",
    src: "",
    review:
      " ●	Astrosevatalk has been the best source of self-reflection for me ever since I started consulting their astrologers. I used to be an unknown person within my own consciousness. A friend of mine suggested me to consult their astrologers and I randomly visited them. Just the 10 minutes of chat session provided me with a clear path as to what I should truly pursue in my life.",
  },
  {
    name: "Pooja, Mumbai",
    src: "",
    review:
      " ●	I just recently got married and had the Kundali milan done by an Astrologer at Astrosevatalk. He did a wonderful job by matching the kundali with ultimate compatibility with my now husband. We are truly living such a blessed and harmonious married life  . Kudos to the Astrosevatalk and their genius Astrologers who are shaping lives for the good.",
  },
];

function Review({}: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-[#FFF7E5] py-12 lg:py-[38px]">
      <Section>
        <div className="space-y-6">
          <div className="mb-[35px]">
            <h2 className="mb-[15px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[48px]">
              Client Reviews
            </h2>
            <p className="text-center text-sm font-semibold sm:text-lg lg:text-2xl">
              Hear about us from our customers
            </p>
          </div>
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            onActiveIndexChange={(e) => setActive(e.activeIndex)}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {reviews?.map((item, index) => (
              <SwiperSlide key={item.src + index}>
                <div
                  key={index}
                  className="items-center space-y-4 overflow-hidden rounded-2xl border border-gray-800 bg-[#FFF7E5] px-9 py-4 lg:flex lg:items-center lg:gap-y-0 lg:gap-x-8 lg:space-y-0"
                >
                  <div className="col-span-12 flex items-center space-x-4 lg:col-span-1 lg:items-start">
                    {/* <div className="h-24 w-24 rounded-full border-[3px] border-black p-0.5">
                      <Image
                        src="/assets/home/review.png"
                        alt={item.name}
                        width={92}
                        height={92}
                        loading={"lazy"}
                      />
                    </div> */}
                    <div className="space-y-2 lg:hidden">
                      <p className="text-[20px] font-semibold">{item.name}</p>
                      <div className="flex">
                        <FaStar className="h-5 w-5 text-[#E9B741]" />
                        <FaStar className="h-5 w-5 text-[#E9B741]" />
                        <FaStar className="h-5 w-5 text-[#E9B741]" />
                        <FaStar className="h-5 w-5 text-[#E9B741]" />
                        <FaStar className="h-5 w-5 text-[#E9B741]" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 ml-auto gap-y-[8px] lg:col-span-11 lg:w-[99%]">
                    <p className="hidden text-[20px] font-semibold lg:block">
                      {item.name}
                    </p>
                    <p className="text-justify text-base">{item.review}</p>
                  </div>
                </div>
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

export default Review;
