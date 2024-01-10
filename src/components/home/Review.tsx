
// import React, { useState } from "react";
// import Section from "../Section";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";

// type Props = {};

// type Review = {
//   name: string;
//   src: string;
//   review: string;
// };

// const reviews: Review[] = [
//   // ... (your reviews data)
//   {
//     name: "Ruchi Pathak",
//     src: "",
//     review:
//       " I feel short of words to state how thankful I'm to the gem of astrologers at the Astrosevatalk. I was going through extreme distress in my life due to my career and then I randomly came across the Astrosevatalk platform. I had a chat with one of their astrologers who suggested I switch my career toward government jobs. Guess what today I'm working as a village development officer under the state services of MP. I never thought about what was destined for me until my birth chart revealed it for me through the finest astrology services of Astrosevatalk.",
//   },
//   {
//     name: "Hardik Sharma",
//     src: "",
//     review:
//       "I was going through the Rahu Mahadasha which was really troubling all aspects of my life despite trying my level best. Sometimes I was falling into constant depression and at others, my health was deteriorating. My Aunt introduced me to the Astrosevatalk to get my birth chart analysis by some astrologer there. I had a short chat with an astrologer there who suggested me some simple home remedies to nullify the severe effect of Rahu Mahadasha. Guess what? I have been feeling truly at peace and in harmony following those simple home remedies in the form of daily worship.-",
//   },
//   {
//     name: "Shalini Thakur",
//     src: "",
//     review:
//       " I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
//   },
//   {
//     name: "Shalini Thakur",
//     src: "",
//     review:
//       " I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
//   },
//   {
//     name: "Shalini Thakur",
//     src: "",
//     review:
//       " I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
//   },
//   {
//     name: "Shalini Thakur",
//     src: "",
//     review:
//       " I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
//   },
//   {
//     name: "Shalini Thakur",
//     src: "",
//     review:
//       " I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
//   },
// ];

// const initialVisibleReviews = 3;
// const additionalReviewsToShow = 2;

// function Review({}: Props) {
//   const [visibleReviews, setVisibleReviews] = useState(initialVisibleReviews);

//   const handleViewMoreClick = () => {
//     setVisibleReviews(
//       (prevVisibleReviews) => prevVisibleReviews + additionalReviewsToShow
//     );
//   };

//   return (
//     <div className="bg-white shadow-xl ">
//       <Section>
//         <div className="py-[30px]">
//           <div className="">
//             <h2 className="text-center font-[georgia] text-[20px] font-bold sm:text-2xl md:text-[30px] lg:text-[30px]">
//               Client Reviews
//             </h2>
//             <p className="mt-[15px] text-center text-sm font-semibold sm:text-lg lg:text-[24px]">
//               Hear about us from our customers
//             </p>
//           </div>
//           {reviews?.slice(0, visibleReviews).map((item, index) => (
//             <div
//               className="mt-[25px] items-center gap-4 rounded-[10px] border-[1px] border-[#D9D9D9] px-4 md:flex lg:flex"
//               key={index}
//             >
//               <div className="py-2 px-10  ">
//                 <Image
//                   src="/assets/home/review.png"
//                   alt={item.name}
//                   width={108}
//                   height={108}
//                   loading={"lazy"}
//                   className="rounded-full border-4 border-[#DC6563]"
//                 />
//               </div>
//               <div className="w-full pb-4">
//                 <div className="flex justify-between ">
//                   <div className="">
//                     <p className="py-4 text-xl font-bold ">{item.name}</p>
//                   </div>
//                   <div className="flex px-4 py-4">
//                     <FaStar className="h-5 w-5 text-[#E9B741]" />
//                     <FaStar className="h-5 w-5 text-[#E9B741]" />
//                     <FaStar className="h-5 w-5 text-[#E9B741]" />
//                     <FaStar className="h-5 w-5 text-[#E9B741]" />
//                     <FaStar className="h-5 w-5 text-[#E9B741]" />
//                   </div>
//                 </div>

//                 <div className="text-base">
//                   <p className="">{item.review}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="mt-[30px] flex items-center justify-center">
//             {visibleReviews < reviews.length && (
//               <button
//                 className="rounded-[10px] bg-gradient-to-b from-[#ff5834] to-[#ff160a] px-10 py-3 font-bold text-white"
//                 onClick={handleViewMoreClick}
//               >
//                 View More
//               </button>
//             )}
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

// export default Review;


import React, { useState } from "react";
import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Autoplay, Navigation, Pagination } from "swiper";

type Props = {};
const card = [
  // ... (your reviews data)
  {
    img: "/assets/home/review.png",
    name: "Ruchi Pathak",
    src: "",
    review:
      " I feel short of words to state how thankful I'm to the gem of astrologers at the Astrosevatalk. I was going through extreme distress in my life due to my career and then I randomly came across the Astrosevatalk platform. I had a chat with one of their astrologers who suggested I switch my career toward government jobs. Guess what today I'm working as a village development officer under the state services of MP. I never thought about what was destined for me until my birth chart revealed it for me through the finest astrology services of Astrosevatalk.",
  },
  {
    img: "/assets/home/review.png",
    name: "Hardik Sharma",
    src: "",
    review:
      "I was going through the Rahu Mahadasha which was really troubling all aspects of my life despite trying my level best. Sometimes I was falling into constant depression and at others, my health was deteriorating. My Aunt introduced me to the Astrosevatalk to get my birth chart analysis by some astrologer there. I had a short chat with an astrologer there who suggested me some simple home remedies to nullify the severe effect of Rahu Mahadasha. Guess what? I have been feeling truly at peace and in harmony following those simple home remedies in the form of daily worship.-",
  },
  {
    img: "/assets/home/review.png",
    name: "Shalini Thakur",
    src: "",
    review:
      " I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
  },
  {
    img: "/assets/home/review.png",
    name: "Shalini Thakur",
    src: "",
    review:
      " I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
  },
  {
    img: "/assets/home/review.png",
    name: "Shalini Thakur",
    src: "",
    review:
      " I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
  },
  {
    img: "/assets/home/review.png",
    name: "Shalini Thakur",
    src: "",
    review:
      " I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
  },
  {
    img: "/assets/home/review.png",
    name: "Shalini Thakur",
    src: "",
    review:
      " I have the mangal dosha in my Kundali which was causing me extreme stress towards taking the marriage decision. I thankfully came across the Astrosevatalk website and got my birth chart analysis from one of their astrologers. He told me to do some home remedies and pool for 3 months and then advised me to go for the marriage. I followed the suggested solution and I couldn't believe all of a sudden I started getting decent numbers of marriage proposals. Today I'm happily arranged married and living the best of my life",
  },
];
const Review = (props: Props) => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className=" bg-gradient-to-b from-[#ef824c] to-[#d84f50] py-[30px]">
      <Section>
        <div className=" max-w-6.5xl ">
          <div className=" ">
            <h2 className="text-white text-center font-[georgia] text-xl text-[20px] font-semibold sm:text-2xl md:text-[30px] lg:text-[30px]">
              Client Reviews
            </h2>
            <p className="text-white mt-[10px] text-center text-[20px] font-semibold">
              Hear about us from our customers
            </p>
            <Swiper className=""
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
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
            >
              <div className="">
                {card.map((item, index) => (
                  <SwiperSlide key={item.img + index} className="">
                    <div key={index} className="mt-10 cursor-pointer">
                     <Link href="/review/review">
                     <div className="">
                        <div className="pb-[30px] pt-[20px] px-[20px] mt-[10px] flex gap-4  items-center rounded-[10px]  border-r-[3px] border-b-[3px] border-[#DC6563]  bg-white ">
                          <div className="">
                            <div className=" flex  ">
                              <Image
                                src={item.img}
                                alt={item.name}
                                width={108}
                                height={108}
                                loading={"lazy"}
                                className="   rounded-[10px] object-contain"
                              />
                            </div>
                            <p className="text-center text-[#DC6563]">
                              {item.name}
                            </p>
                          </div>

                          <div className="truncate-lines  rounded-b-[10px] bg-white px-2 ">
                            {item?.review}
                          </div>
                        </div>
                      </div>
                     </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className="astroslideblo  text-white  relative mx-auto  flex  justify-between">
              <button className="prev cursor-pointer">
                <AiFillCaretLeft className="text-3xl " />
              </button>
              <button className="next cursor-pointer">
                <AiFillCaretRight className="text-3xl " />
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Review;
