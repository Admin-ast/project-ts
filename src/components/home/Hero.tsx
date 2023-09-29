import { useRouter } from "next/router";
import React, { Key } from "react";

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
];

function Hero({}: Props) {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col items-center justify-between bg-[url('/assets/horoscope-bg.webp')]  bg-cover py-4 md:space-y-10 lg:py-[35px]">
        <div className="w-full px-2 ">
          <Slider slides={slides} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
