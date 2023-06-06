import { useRouter } from "next/router";
import React, { Key } from "react";
// import AppointmentsHero from "./AppoinmentsHero";
import Link from "next/link";
import HeroCard from "./HeroCard";
import Slider from "../common/Slider";
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
  // { url: "/assets/home/banner/bannerImage_5.svg" },
  // { url: "/assets/home/banner/bannerImage_6.svg" },
];

function Hero({}: Props) {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col items-center justify-between bg-[url('/assets/home/home-hero-bg.webp')] bg-cover py-4 md:space-y-10 lg:py-[35px]">
        {/* <div className="mx-auto hidden max-w-5xl flex-wrap items-center justify-center space-x-[30px] lg:flex">
          {links.map((item: Links, index: Key) => (
            <Link key={index} href={item?.url}>
              <p
                className={`cursor-pointer text-[20px] font-bold text-white ${
                  router.pathname === item.url
                    ? "underline decoration-[#B62022] underline-offset-8"
                    : ""
                }`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div> */}
        <div className="w-full px-2 ">
          <Slider slides={slides} />
        </div>
        {/* <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="mb-3 text-lg font-black text-[#F0C668] lg:mb-[29px] lg:text-[32px]">
          PROFESSIONAL ASTROLOGY CONSULTATIONS
        </p>
        <p className="bg-gradient-from-t h-fit bg-gradient-to-b from-[#FDFF44] to-[#C83000] bg-clip-text text-3xl font-black text-transparent lg:text-[75px] lg:leading-[100px]">
          Let the stars Guide you
        </p>
      </div> */}
      </div>
    </div>
  );
}

export default Hero;
