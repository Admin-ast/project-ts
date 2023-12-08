import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import Section from "../../Section";

type Props = {
  headText: string;
};

const ChooseSign = ({ headText }: Props) => {
  const cardDetails = [
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
      src: "/assets/kundli/pisces.png",
      icon: "/assets/single-horoscope/pisces.svg",
      id: "pisces",
      name: "Pieces",
    },
  ];
  return (
    <Section>
      <div className="space-y-6 py-8  lg:py-[50px]">
        <div className="text-center text-[36px] font-bold">{headText}</div>
        <div className="mb-[42px] flex flex-wrap justify-center gap-5">
          {cardDetails.map((item: any, index: Key) => (
            <Link
              href={item.link}
              key={index}
              className="flex flex-col justify-end "
            >
              <div className="mx-auto">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={171}
                  height={238}
                  loading={"lazy"}
                />
                <p className="text-center text-[40px]">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ChooseSign;
