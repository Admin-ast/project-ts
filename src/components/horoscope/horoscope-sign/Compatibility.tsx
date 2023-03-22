import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

type Props = {
  horoscopeType: string | string[] | undefined;
};

const Compatibility = ({ horoscopeType }: Props) => {
  const compareCards = [
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: `/assets/single-horoscope/aries.svg`,
      btn: `${horoscopeType} And Aries`,
    },
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: "/assets/single-horoscope/taurus.svg",
      btn: `${horoscopeType} And Taurus`,
    },
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: "/assets/single-horoscope/gemini.svg",
      btn: `${horoscopeType} And Gemini`,
    },
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: "/assets/single-horoscope/cancer.svg",
      btn: `${horoscopeType} And Cancer`,
    },
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: "/assets/single-horoscope/leo.svg",
      btn: `${horoscopeType} And leo`,
    },
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: "/assets/single-horoscope/virgo.svg",
      btn: `${horoscopeType} And Virgo`,
    },
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: "/assets/single-horoscope/libra.svg",
      btn: `${horoscopeType} And Libra`,
    },
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: "/assets/single-horoscope/scorpio.svg",
      btn: `${horoscopeType} And Scorpio`,
    },
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: "/assets/single-horoscope/sagittarius.svg",
      btn: `${horoscopeType} And Sagittarius`,
    },
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: "/assets/single-horoscope/capricon.svg",
      btn: `${horoscopeType} And Capricon`,
    },
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: "/assets/single-horoscope/acquarius.svg",
      btn: `${horoscopeType} And Acquarius`,
    },
    {
      src: `/assets/single-horoscope/${horoscopeType}.svg`,
      src1: "/assets/single-horoscope/pisces.svg",
      btn: `${horoscopeType} And Pisces`,
    },
  ];
  return (
    <div className="mb-4 bg-[url('/assets/cloud-bg.webp')] bg-cover py-12 lg:py-20">
      <Section>
        <div>
          <p className="pb-10 text-center text-2xl font-bold text-white md:text-4xl">
            {horoscopeType} Compatibility With Other Signs
          </p>
        </div>
        <div className="grid gap-x-3 gap-y-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {compareCards?.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="flex space-x-6">
                <div className=" flex h-[115px] w-[123px] items-center justify-center rounded-2xl border-b-2 border-b-[#e7bb55]  bg-black">
                  <div className="h-[108px] w-[84px]">
                    <Image
                      src={item.src}
                      alt="name"
                      width={240}
                      height={307}
                      loading={"lazy"}
                    />
                  </div>
                </div>
                <div className=" flex h-[115px] w-[123px] items-center justify-center rounded-2xl border-b-2 border-b-[#e7bb55]  bg-black">
                  <div className="h-[108px] w-[84px]">
                    <Image
                      src={item.src1}
                      alt="name"
                      width={240}
                      height={307}
                      loading={"lazy"}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[272px]">
                <button className="w-full rounded-md bg-gradient-to-b from-[#D3B160] to-[#FFE9A1] py-1 px-5 text-[18px] font-medium text-black">
                  {item?.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Compatibility;
