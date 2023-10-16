import Hero from "@/components/common/Hero";
import Card from "@/components/compatibility/Card";
import Zodiac from "@/components/compatibility/Zodiac";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

function Compatibility({}: Props) {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero text="Compatibility" icon="/assets/compatibility/comp.png" />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
            Compatibility
          </p>
        </div>
      </div>
      <Card />
      <Zodiac />
    </div>
  );
}

export default Compatibility;
