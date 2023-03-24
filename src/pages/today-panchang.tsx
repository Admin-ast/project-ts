import Hero from "@/components/common/Hero";
import GetPanchang from "@/components/panchang/GetPanchang";
import Karna from "@/components/panchang/Karna";
import Nakshtra from "@/components/panchang/Nakshtra";
import Tithi from "@/components/panchang/Tithi";
import Today from "@/components/panchang/Today";
import Vaar from "@/components/panchang/Vaar";
import WhyUse from "@/components/panchang/WhyUse";
import Yoga from "@/components/panchang/Yoga";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

function TodayPanchang({}: Props) {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="Today Panchang"
        subText="Hindu Panchang"
      />
      <div className="bg-[#F5F5F5]">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Today Panchang
          </p>
        </div>
      </div>
      <Today />
      <GetPanchang />
      <WhyUse />
      <Vaar />
      <Tithi />
      <Nakshtra />
      <Yoga />
      <Karna />
    </div>
  );
}

export default TodayPanchang;
