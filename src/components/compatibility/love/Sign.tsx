// components/ChooseSign.js
import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import Section from "@/components/Section";

type Props = {
  headText: string;
  onSelect: (selectedSign: string) => void;
};

const Sign = ({ headText, onSelect }: Props) => {
    const cardDetails = [
        {
          link: "/horoscope/daily-horoscope/aries",
          src: "/assets/kundli/aries.png",
          icon: "/assets/single-horoscope/aries.svg",
          id: "Aries",
          name: "Aries",
        },
        {
          link: "/horoscope/daily-horoscope/taurus",
          src: "/assets/kundli/taurus.png",
          icon: "/assets/single-horoscope/taurus.svg",
          id: "Taurus",
          name: "Taurus",
        },
        {
          link: "/horoscope/daily-horoscope/gemini",
          src: "/assets/kundli/gemini.png",
          icon: "/assets/single-horoscope/gemini.svg",
          id: "Gemini",
          name: "Gemini",
        },
        {
          link: "/horoscope/daily-horoscope/cancer",
          src: "/assets/kundli/cancer.png",
          icon: "/assets/single-horoscope/cancer.svg",
          id: "Cancer",
          name: "Cancer",
        },
        {
          link: "/horoscope/daily-horoscope/leo",
          src: "/assets/kundli/leo.png",
          icon: "/assets/single-horoscope/leo.svg",
          id: "Leo",
          name: "Leo",
        },
        {
          link: "/horoscope/daily-horoscope/virgo",
          src: "/assets/kundli/virgo.png",
          icon: "/assets/single-horoscope/virgo.svg",
          id: "Virgo",
          name: "Virgo",
        },
        {
          link: "/horoscope/daily-horoscope/libra",
          src: "/assets/kundli/libra.png",
          icon: "/assets/single-horoscope/libra.svg",
          id: "Libra",
          name: "Libra",
        },
        {
          link: "/horoscope/daily-horoscope/scorpio",
          src: "/assets/kundli/scorpio.png",
          icon: "/assets/single-horoscope/scorpio.svg",
          id: "Scorpio",
          name: "Scorpio",
        },
        {
          link: "/horoscope/daily-horoscope/sagittarius",
          src: "/assets/kundli/sagittarius.png",
          icon: "/assets/single-horoscope/sagittarius.svg",
          id: "Sagittarius",
          name: "Sagittarius",
        },
        {
          link: "/horoscope/daily-horoscope/capricorn",
          src: "/assets/kundli/capricorn.png",
          icon: "/assets/single-horoscope/capricorn.svg",
          id: "Capricorn",
          name: "Capricorn",
        },
        {
          link: "/horoscope/daily-horoscope/aquarius",
          src: "/assets/kundli/aquarius.png",
          icon: "/assets/single-horoscope/aquarius.svg",
          id: "Aquarius",
          name: "Aquarius",
        },
        {
          link: "/horoscope/daily-horoscope/pisces",
          src: "/assets/kundli/pisces.png",
          icon: "/assets/single-horoscope/pisces.svg",
          id: "Pisces",
          name: "Pieces",
        },
      ];
  return (
    <Section>
      <div className="space-y-6 py-8">
        <div className="text-center text-[36px] font-bold">{headText}</div>
        <div className="flex flex-wrap justify-center gap-5">
          {cardDetails.map((item: any, index: Key) => (
            <Link href={`/compatibility/select-partner?yourSign=${item.id}`} key={index}>
              <div className="flex flex-col justify-end cursor-pointer">
                <div className="mx-auto" onClick={() => onSelect(item.id)}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={151}
                    height={140}
                    loading={"lazy"}
                  />
                  <p className="text-center text-[30px]">{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Sign;
