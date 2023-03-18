import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import Section from "../Section";

type Props = {};

type Card = {
  link: string;
  src: string;
  alt: string;
};

const cards: Card[] = [
  {
    link: "/horoscope/aries",
    src: "/assets/home/aries-card.svg",
    alt: "aries",
  },
  {
    link: "/horoscope/taurus",
    src: "/assets/home/taurus-card.svg",
    alt: "taurus",
  },
  {
    link: "/horoscope/gemini",
    src: "/assets/home/gemini-card.svg",
    alt: "gemini",
  },
  {
    link: "/horoscope/cancer",
    src: "/assets/home/cancer-card.svg",
    alt: "cancer",
  },
  {
    link: "/horoscope/leo",
    src: "/assets/home/leo-card.svg",
    alt: "leo",
  },
  {
    link: "/horoscope/virgo",
    src: "/assets/home/virgo-card.svg",
    alt: "virgo",
  },
  {
    link: "/horoscope/libra",
    src: "/assets/home/libra-card.svg",
    alt: "libra",
  },
  {
    link: "/horoscope/scorpio",
    src: "/assets/home/scorpio-card.svg",
    alt: "scorpio",
  },
  {
    link: "/horoscope/sagittarius",
    src: "/assets/home/sagittarius-card.svg",
    alt: "sagittarius",
  },
  {
    link: "/horoscope/capricorn",
    src: "/assets/home/capricorn-card.svg",
    alt: "capricorn",
  },
  {
    link: "/horoscope/aquarius",
    src: "/assets/home/aquarius-card.svg",
    alt: "aquarius",
  },
  {
    link: "/horoscope/pisces",
    src: "/assets/home/pisces-card.svg",
    alt: "pisces",
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
                    alt={item.alt}
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
