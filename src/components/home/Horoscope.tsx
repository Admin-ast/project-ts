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
    src: "/assets/home/aries-card.svg",
    icon: "/assets/single-horoscope/aries.svg",
    id: "aries",
    name: "Aries",
  },
  {
    link: "/horoscope/daily-horoscope/taurus",
    src: "/assets/home/taurus-card.svg",
    icon: "/assets/single-horoscope/taurus.svg",
    id: "taurus",
    name: "Taurus",
  },
  {
    link: "/horoscope/daily-horoscope/gemini",
    src: "/assets/home/gemini-card.svg",
    icon: "/assets/single-horoscope/gemini.svg",
    id: "gemini",
    name: "Gemini",
  },
  {
    link: "/horoscope/daily-horoscope/cancer",
    src: "/assets/home/cancer-card.svg",
    icon: "/assets/single-horoscope/cancer.svg",
    id: "cancer",
    name: "Cancer",
  },
  {
    link: "/horoscope/daily-horoscope/leo",
    src: "/assets/home/leo-card.svg",
    icon: "/assets/single-horoscope/leo.svg",
    id: "leo",
    name: "Leo",
  },
  {
    link: "/horoscope/daily-horoscope/virgo",
    src: "/assets/home/virgo-card.svg",
    icon: "/assets/single-horoscope/virgo.svg",
    id: "virgo",
    name: "Virgo",
  },
  {
    link: "/horoscope/daily-horoscope/libra",
    src: "/assets/home/libra-card.svg",
    icon: "/assets/single-horoscope/libra.svg",
    id: "libra",
    name: "Libra",
  },
  {
    link: "/horoscope/daily-horoscope/scorpio",
    src: "/assets/home/scorpio-card.svg",
    icon: "/assets/single-horoscope/scorpio.svg",
    id: "scorpio",
    name: "Scorpio",
  },
  {
    link: "/horoscope/daily-horoscope/sagittarius",
    src: "/assets/home/sagittarius-card.svg",
    icon: "/assets/single-horoscope/sagittarius.svg",
    id: "sagittarius",
    name: "Sagittarius",
  },
  {
    link: "/horoscope/daily-horoscope/capricorn",
    src: "/assets/home/capricorn-card.svg",
    icon: "/assets/single-horoscope/capricorn.svg",
    id: "capricorn",
    name: "Capricorn",
  },
  {
    link: "/horoscope/daily-horoscope/aquarius",
    src: "/assets/home/aquarius-card.svg",
    icon: "/assets/single-horoscope/aquarius.svg",
    id: "aquarius",
    name: "Aquarius",
  },
  {
    link: "/horoscope/daily-horoscope/pisces",
    src: "/assets/home/pisces-card.svg",
    icon: "/assets/single-horoscope/pisces.svg",
    id: "pisces",
    name: "Pisces",
  },
];

function Horoscope({}: Props) {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover py-8 lg:py-[45px]">
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
                    width={210}
                    height={294}
                    loading={"lazy"}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Horoscope;
