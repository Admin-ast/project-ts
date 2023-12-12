import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import Section from "../Section";

type Props = {};

export type Card = {
  link: string;
  src: string;
  name: string;
  icon: string;
  id: string;
};

export const cards: Card[] = [
  {
    link: "/horoscope/daily-horoscope/aries",
    src: "/assets/kundli/aries.png",
    icon: "/assets/single-horoscope/aries.svg",
    id: "aries",
    name: "Aries",
  },
  {
    link: "/horoscope/daily-horoscope/taurus",
    src: "/assets/kundli/taurus.png",
    icon: "/assets/single-horoscope/taurus.svg",
    id: "taurus",
    name: "Taurus",
  },
  {
    link: "/horoscope/daily-horoscope/gemini",
    src: "/assets/kundli/gemini.png",
    icon: "/assets/single-horoscope/gemini.svg",
    id: "gemini",
    name: "Gemini",
  },
  {
    link: "/horoscope/daily-horoscope/cancer",
    src: "/assets/kundli/cancer.png",
    icon: "/assets/single-horoscope/cancer.svg",
    id: "cancer",
    name: "Cancer",
  },
  {
    link: "/horoscope/daily-horoscope/leo",
    src: "/assets/kundli/leo.png",
    icon: "/assets/single-horoscope/leo.svg",
    id: "leo",
    name: "Leo",
  },
  {
    link: "/horoscope/daily-horoscope/virgo",
    src: "/assets/kundli/virgo.png",
    icon: "/assets/single-horoscope/virgo.svg",
    id: "virgo",
    name: "Virgo",
  },
  {
    link: "/horoscope/daily-horoscope/libra",
    src: "/assets/kundli/libra.png",
    icon: "/assets/single-horoscope/libra.svg",
    id: "libra",
    name: "Libra",
  },
  {
    link: "/horoscope/daily-horoscope/scorpio",
    src: "/assets/kundli/scorpio.png",
    icon: "/assets/single-horoscope/scorpio.svg",
    id: "scorpio",
    name: "Scorpio",
  },
  {
    link: "/horoscope/daily-horoscope/sagittarius",
    src: "/assets/kundli/sagittarius.png",
    icon: "/assets/single-horoscope/sagittarius.svg",
    id: "sagittarius",
    name: "Sagittarius",
  },
  {
    link: "/horoscope/daily-horoscope/capricorn",
    src: "/assets/kundli/capricorn.png",
    icon: "/assets/single-horoscope/capricorn.svg",
    id: "capricorn",
    name: "Capricorn",
  },
  {
    link: "/horoscope/daily-horoscope/aquarius",
    src: "/assets/kundli/aquarius.png",
    icon: "/assets/single-horoscope/aquarius.svg",
    id: "aquarius",
    name: "Aquarius",
  },
  {
    link: "/horoscope/daily-horoscope/pisces",
    src: "/assets/kundli/pieces.png",
    icon: "/assets/single-horoscope/pisces.svg",
    id: "pisces",
    name: "Pieces",
  },
];

function Horoscope({}: Props) {
  return (
    <div className=" bg-[url('/assets/horoscope-bg.webp')] bg-cover py-8 lg:py-[30px]">
      <Section>
        <div className="">
          <div className="mb-[35px]">
            <h2 className="mb-[15px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[48px]">
              Horoscope Forecast
            </h2>
            <h3 className="text-center text-sm font-semibold sm:text-lg lg:text-2xl">
              Choose your Moon sign and start reading your FREE Daily Horoscope
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-[14px] md:grid-cols-4 lg:grid-cols-6">
            {cards?.map((item: Card, index: Key) => (
              <div key={index} className="mx-auto">
                <Link href={item.link}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={168}
                    height={169}
                    loading={"lazy"}
                  />
                </Link>
                <p className="flex items-center justify-center text-[32px] lg:text-[40px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Horoscope;
