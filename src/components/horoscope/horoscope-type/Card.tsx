// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React from "react";
// import Section from "../../Section";
// import Zodiac from "@/components/compatibility/Zodiac";

// type Props = {
//   horos: any;
//   predictionArray: any;
//   type: any;
// };

// type CardDetail = {
//   id: number;
//   img: string;
//   name: string;
//   date: string;
//   note: string;
//   url: string;
// };

// const card: CardDetail[] = [
//   {
//     id: 1,
//     img: "/assets/home/aries-card.svg",
//     name: "Aries Daily Horoscope",
//     url: "aries",
//     date: "March 21 - April 19",
//     note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
//   },
//   {
//     id: 2,
//     img: "/assets/home/aries-card.svg",
//     name: "Aries Daily Horoscope",
//     url: "aries",
//     date: "March 21 - April 19",
//     note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
//   },
//   {
//     id: 3,
//     img: "/assets/home/aries-card.svg",
//     name: "Aries Daily Horoscope",
//     url: "aries",
//     date: "March 21 - April 19",
//     note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
//   },
//   {
//     id: 4,
//     img: "/assets/home/aries-card.svg",
//     name: "Aries Daily Horoscope",
//     url: "aries",
//     date: "March 21 - April 19",
//     note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
//   },
//   {
//     id: 5,
//     img: "/assets/home/aries-card.svg",
//     name: "Aries Daily Horoscope",
//     url: "aries",
//     date: "March 21 - April 19",
//     note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
//   },
//   {
//     id: 6,
//     img: "/assets/home/aries-card.svg",
//     name: "Aries Daily Horoscope",
//     url: "aries",
//     date: "March 21 - April 19",
//     note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
//   },
//   {
//     id: 7,
//     img: "/assets/home/aries-card.svg",
//     name: "Aries Daily Horoscope",
//     url: "aries",
//     date: "March 21 - April 19",
//     note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
//   },
//   {
//     id: 8,
//     img: "/assets/home/aries-card.svg",
//     name: "Aries Daily Horoscope",
//     url: "aries",
//     date: "March 21 - April 19",
//     note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
//   },
// ];

// const Card = ({ horos, predictionArray, type }: Props) => {
//   const router = useRouter();
//   // console.log(horos && horos.aries.prediction.personal_life)
//   const int_slug: String = router?.query?.slug ? router?.query?.slug[0] : "";
//   const zodaics = [
//     "aries",
//     "taurus",
//     "gemini",
//     "cancer",
//     "leo",
//     "virgo",
//     "libra",
//     "scorpio",
//     "sagittarius",
//     "capricorn",
//     "aquarius",
//     "pisces",
//   ];
//   return (
//     <div className="py-8">
//       <Section>
//         <div className="flex flex-col space-y-4 text-justify">
//           <p>
//             {` Looking for today's horoscope? Or yesterday's? Well, on
//             Astrosevatalk we have covered everything right from Daily horoscope
//             to weekly to monthly horoscope. What is the use of one's Daily
//             horoscope you may ask? Well, as per our astrologers, the daily
//             horoscope is one of the ways that you can use to plan out your day.
//             As per astrology, our day to day life is influenced by the movements
//             of planets, as they constantly shift their positions from one sign
//             to another. The movement can bring both positive and negative
//             influences in one's life, and you knowing such things in advance
//             helps you in safeguarding yourself from the uncertainties.`}
//           </p>
//           <p>
//             {`So reading Today's horoscope is like a healthy habit one can
//             consider adopting as it shall help in changing the outcomes of your
//             life. The daily horoscope on Astrosevatalk is prepared by expert
//             astrologers and thus is very insightful. The daily horoscope not
//             only tells you what's coming for you in the future but also allows
//             you remedies that you can adopt to tackle anything negative. The
//             Today's horoscope is one of the ways that can help you in steering
//             your life in the right direction. So make sure you give it a read.`}
//           </p>
//         </div>
//         <div className="mt-4 flex-wrap justify-center gap-5 md:flex">
//           {zodaics.map((item: string, index: number) => (
//             <div
//               key={index}
//               onClick={() => {
//                 router.push(`/horoscope?type=${type}&zodiac=${item}`);
//               }}
//               className=" my-1 flex flex-col rounded-xl border-2 border-[#DC6563]  p-4 md:my-0 md:grid md:!w-[570px] md:grid-cols-12 md:gap-6"
//             >
//               <div className="col-span-4 mx-auto">
//                 <Image
//                   src="/assets/home/aries-card.svg"
//                   alt="name"
//                   width={132}
//                   height={185}
//                   loading={"lazy"}
//                   className="object-contain md:h-full md:w-full"
//                 />
//               </div>
//               <div className="col-span-8 flex flex-col gap-2 text-justify">
//                 <div>
//                   <p className="text-[22px] font-bold capitalize">{item}</p>
//                   {/* <p>{item?.date}</p> */}
//                 </div>
//                 <p>
//                   {predictionArray ? (
//                     <span className="">
//                       {horos && horos[item]?.prediction[0]}
//                     </span>
//                   ) : (
//                     <span className="">
//                       <span className="font-semibold"> Personal: </span>
//                       {horos && horos[item]?.prediction?.personal_life}
//                     </span>
//                   )}
//                 </p>
//                 <button
//                   // onClick={() =>
//                   // router.push(`/horoscope/${int_slug}/${item.url}`)
//                   // }
//                   className="flex cursor-pointer justify-end font-bold"
//                 >
//                   Read More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Section>
//     </div>
//   );
// };

// export default Card;

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Section from "../../Section";
import Zodiac from "@/components/compatibility/Zodiac";

type Props = {
  horos: any;
  predictionArray: any;
  type: any;
};

type CardDetail = {
  id: number;
  img: string;
  name: string;
  date: string;
  note: string;
  url: string;
};

const card: CardDetail[] = [
  {
    id: 1,
    img: "/assets/kundli/aries.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 2,
    img: "/assets/kundli/taurus.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 3,
    img: "/assets/kundli/gemini.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 4,
    img: "/assets/kundli/cancer.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 5,
    img: "/assets/kundli/leo.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 6,
    img: "/assets/kundli/virgo.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 7,
    img: "/assets/kundli/libra.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 8,
    img: "/assets/kundli/scorpio.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 9,
    img: "/assets/kundli/sagittarius.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 10,
    img: "/assets/kundli/capricorn.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 11,
    img: "/assets/kundli/aquarius.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 12,
    img: "/assets/kundli/pieces.png",
    name: "Aries Daily Horoscope",
    url: "aries",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },

  // ... (other zodiac cards)
];

const Card = ({ horos, predictionArray, type }: Props) => {
  const router = useRouter();
  const int_slug: string = router?.query?.slug ? router?.query?.slug[0] : "";

  return (
    <div className="py-8">
      <Section>
        <div className="flex flex-col space-y-4 text-justify">
          <p>
            {` Looking for today's horoscope? Or yesterday's? Well, on
            Astrosevatalk we have covered everything right from Daily horoscope
            to weekly to monthly horoscope. What is the use of one's Daily
            horoscope you may ask? Well, as per our astrologers, the daily
            horoscope is one of the ways that you can use to plan out your day.
            As per astrology, our day to day life is influenced by the movements
            of planets, as they constantly shift their positions from one sign
            to another. The movement can bring both positive and negative
            influences in one's life, and you knowing such things in advance
            helps you in safeguarding yourself from the uncertainties.`}
          </p>
          <p>
            {`So reading Today's horoscope is like a healthy habit one can
            consider adopting as it shall help in changing the outcomes of your
            life. The daily horoscope on Astrosevatalk is prepared by expert
            astrologers and thus is very insightful. The daily horoscope not
            only tells you what's coming for you in the future but also allows
            you remedies that you can adopt to tackle anything negative. The
            Today's horoscope is one of the ways that can help you in steering
            your life in the right direction. So make sure you give it a read.`}
          </p>
        </div>
        <div className="mt-4 flex-wrap justify-center gap-5 md:flex">
          {card.map((item: CardDetail, index: number) => (
            <div
              key={index}
              onClick={() => {
                router.push(`/horoscope?type=${type}&zodiac=${item.url}`);
              }}
              className="my-1 flex flex-col rounded-xl border-2 border-[#DC6563] p-4 md:my-0 md:grid md:!w-[570px] md:grid-cols-12 md:gap-6"
            >
              <div className="col-span-4 mx-auto">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={132}
                  height={185}
                  loading={"lazy"}
                  className="object-contain md:h-full md:w-full"
                />
              </div>
              <div className="col-span-8 flex flex-col gap-2 text-justify">
                <div>
                  <p className="text-[22px] font-bold capitalize">
                    {item.name}
                  </p>
                  <p>{item.date}</p>
                </div>
                <p>
                  {predictionArray ? (
                    <span className="">
                      {horos && horos[item.url]?.prediction[0]}
                    </span>
                  ) : (
                    <span className="">
                      <span className="font-semibold"> Personal: </span>
                      {horos && horos[item.url]?.prediction?.personal_life}
                    </span>
                  )}
                </p>
                <button className="flex cursor-pointer justify-end font-bold">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Card;
