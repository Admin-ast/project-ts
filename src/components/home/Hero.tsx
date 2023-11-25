// import { useRouter } from "next/router";
// import React, { Key } from "react";

// import Link from "next/link";
// import HeroCard from "./HeroCard";
// import Slider from "../common/Slider";
// type Props = {};
// type Links = {
//   name: string;
//   url: string;
// };

// const links: Links[] = [
//   {
//     name: "Home",
//     url: "/",
//   },
//   {
//     name: "Chat With Astrologer",
//     url: "/chat-with-astrologer",
//   },
//   {
//     name: "Talk To Astrologer",
//     url: "/talk-to-astrologer",
//   },
//   {
//     name: "Live Astrologer",
//     url: "/live-astrologer",
//   },
//   {
//     name: "Daily Horoscope",
//     url: "/horoscope/daily-horoscope",
//   },
//   {
//     name: "Live Video Chat",
//     url: "/live-video-chat",
//   },
//   {
//     name: "Free Kundli",
//     url: "/free-kundli",
//   },
//   {
//     name: "Kundli Matching",
//     url: "/kundli-matching",
//   },
//   {
//     name: "Panchang",
//     url: "/today-panchang",
//   },
//   {
//     name: "Shubh Muhurat",
//     url: "/muhurat",
//   },
//   {
//     name: "Compatibility",
//     url: "/compatibility",
//   },
//   {
//     name: "Astro store-Shop",
//     url: "/shop/shop",
//   },
//   {
//     name: "Blog",
//     url: "/blog",
//   },
// ];

// const slides = [
//   { url: "/assets/home/banner/BUSINESS PROBLEM@2x.svg" },
//   { url: "/assets/home/banner/FINANCIAL ISSUES@2x 1.svg" },
//   { url: "/assets/home/banner/LOVE MARRIAGE@2x.svg" },
//   { url: "/assets/home/banner/love problem@2x.svg" },
// ];

// function Hero({}: Props) {
//   const router = useRouter();
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-between bg-[#000000]  bg-cover py-4 md:space-y-10 lg:py-[35px]">
//         <div className="w-full px-2 ">
//           <Slider slides={slides} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import { useRouter } from "next/router";
import React, { Key } from "react";

import Link from "next/link";
import HeroCard from "./HeroCard";
import Slider from "../common/Slider";
import Section from "../Section";
type Props = {};
type Links = {
  name: string;
  url: string;
};

const links: Links[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Chat With Astrologer",
    url: "/chat-with-astrologer",
  },
  {
    name: "Talk To Astrologer",
    url: "/talk-to-astrologer",
  },
  {
    name: "Live Astrologer",
    url: "/live-astrologer",
  },
  {
    name: "Daily Horoscope",
    url: "/horoscope/daily-horoscope",
  },
  {
    name: "Live Video Chat",
    url: "/live-video-chat",
  },
  {
    name: "Free Kundli",
    url: "/free-kundli",
  },
  {
    name: "Kundli Matching",
    url: "/kundli-matching",
  },
  {
    name: "Panchang",
    url: "/today-panchang",
  },
  {
    name: "Shubh Muhurat",
    url: "/muhurat",
  },
  {
    name: "Compatibility",
    url: "/compatibility",
  },
  {
    name: "Astro store-Shop",
    url: "/shop/shop",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];

const slides = [
  { url: "/assets/home/banner/BUSINESS PROBLEM@2x.svg" },
  { url: "/assets/home/banner/FINANCIAL ISSUES@2x 1.svg" },
  { url: "/assets/home/banner/LOVE MARRIAGE@2x.svg" },
  { url: "/assets/home/banner/love problem@2x.svg" },
];

function Hero({}: Props) {
  const router = useRouter();
  return (
    <div className="bg-[black]">
      <Section>
        <div className="flex flex-col items-center justify-between bg-[url('/assets/horoscope-bg.webp')]  bg-cover py-4 md:space-y-10 lg:py-[35px]">
          <div className="w-full px-2 ">
            <div id="NewRootRoot" className="flex w-full flex-row items-start">
              <div className="bg-50%_50% flex w-full flex-row items-start justify-between rounded-[36px] bg-[linear-gradient(90deg,_#ff4f00_0%,#e39f80_18%,#ffffff_50%,#ffffff_50%,#e39f80_82%,#ff4f00_100%)] bg-cover bg-no-repeat px-24 pt-8 bg-blend-normal">
                <img
                  src="https://file.rendit.io/n/60cbmUwgn2rpTmDuV8QN.png"
                  alt="Untitled"
                  id="Untitled"
                  className="mb-8"
                />
                <div className="mt-5 flex w-1/3 flex-col items-start gap-10 drop-shadow-xl ">
                  <div className="relative flex w-full flex-row items-start">
                    <div className="w-[316px] text-center font-sans text-4xl  font-bold   text-white">
                      ASTROLOGICAL
                      <br />
                      REMEDIES
                      <br />
                      FOR
                      <br />
                      LOVE MARRIAGE
                    </div>
                  </div>
                  <Link href="/chat-with-astrologer/chat-with-astrologer">
                    <div className="ml-16 flex h-10 flex-row items-start justify-center rounded-[35px] bg-black px-6 py-[4px]  text-center font-sans text-2xl tracking-[0.38] text-white">
                      <p className=""> Chat Now</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Hero;
