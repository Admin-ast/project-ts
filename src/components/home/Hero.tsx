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
        <div className="flex flex-col items-center justify-between bg-[url('/assets/horoscope-bg.webp')]  bg-cover  pt-5 md:space-y-10">
          <div className="w-full px-2 ">
            <div className="bg-50%_50% rounded-[12px] bg-[linear-gradient(90deg,_#ff4f00_0%,#e39f80_18%,#ffffff_50%,#ffffff_50%,#e39f80_82%,#ff4f00_100%)] bg-cover bg-no-repeat pt-0 pl-[10px] pr-[10px] bg-blend-normal">
              <div className="flex  items-center">
                <div className="3/10 p-4 ">
                  <img
                    src="/assets/home/banner.png"
                    alt="Untitled"
                    id="Untitled"
                    className="   top-8 left-8"
                  />
                </div>
                <div className="7/10 content-center p-4">
                  <div className="mb-4 mt-4  font-sans  text-3xl  capitalize">
                    Astrological Remedies for love Marriage
                  </div>
                  <div className="font-sans text-3xl  capitalize  ">
                    <span className="mb-5 text-left text-5xl font-normal">
                      Chat With Astrologer
                    </span>
                  </div>
                  <Link href="/chat-with-astrologer/chat-with-astrologer">
                    {" "}
                    <button className="mt-8  mb-10 rounded-[35px] bg-black py-3 px-12 font-bold text-white ">
                      Chat Now
                    </button>
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
