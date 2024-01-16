import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

type Props = {
  horoscopeType: string | string[] | undefined;
};

const Compatibility = ({ horoscopeType }: Props) => {
  const compareCards = [
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: `/assets/kundli/aries.png`,
      btn: `${horoscopeType} And Aries`,
    },
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: "/assets/kundli/taurus.png",
      btn: `${horoscopeType} And Taurus`,
    },
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: "/assets/kundli/gemini.png",
      btn: `${horoscopeType} And Gemini`,
    },
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: "/assets/kundli/cancer.png",
      btn: `${horoscopeType} And Cancer`,
    },
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: "/assets/kundli/leo.png",
      btn: `${horoscopeType} And leo`,
    },
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: "/assets/kundli/virgo.png",
      btn: `${horoscopeType} And Virgo`,
    },
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: "/assets/kundli/libra.png",
      btn: `${horoscopeType} And Libra`,
    },
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: "/assets/kundli/scorpio.png",
      btn: `${horoscopeType} And Scorpio`,
    },
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: "/assets/kundli/sagittarius.png",
      btn: `${horoscopeType} And Sagittarius`,
    },
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: "/assets/kundli/capricorn.png",
      btn: `${horoscopeType} And Capricon`,
    },
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: "/assets/kundli/aquarius.png",
      btn: `${horoscopeType} And Aquarius`,
    },
    {
      src: `/assets/kundli/${horoscopeType}.png`,
      src1: "/assets/kundli/pisces.png",
      btn: `${horoscopeType} And Pisces`,
    },
  ];
  return (
    <div className="mb-4  bg-cover py-12 lg:py-20">
      <Section>
        <div>
          <p className="pb-10 text-center text-2xl font-bold  md:text-4xl">
            {horoscopeType} Compatibility With Other Signs
          </p>
        </div>
        <div className="grid gap-x-3 gap-y-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {compareCards?.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="flex space-x-6">
                <div className=" flex h-[115px] w-[123px] items-center justify-center rounded-2xl border-b-2 border-r-2 border-b-[#DC6563] border-r-[#DC6563]  ">
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
                <div className=" flex h-[115px] w-[123px] items-center justify-center rounded-2xl border-b-2 border-r-2 border-b-[#DC6563] border-r-[#DC6563] ">
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
                <button className="w-full rounded-md bg-[#DC6563] py-1 px-5 text-[18px] font-medium text-white ">
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
