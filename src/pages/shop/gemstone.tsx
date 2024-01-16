import Hero from "@/components/common/Hero";
import React from "react";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import Note from "@/components/shop/gemstone/Note";
import GemstoneCard from "@/components/shop/gemstone/GemstoneCard";

type Props = {};

const gemstone = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      {/* <Hero text="Gemstone" icon="/assets/shop/gemstone/gemhero.svg" /> */}

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Astroseva Shop
            </p>
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Gemstone
            </p>
          </div>
        </Section>
      </div>
      <div className="pt-[30px]">
        <p className="text-center text-[30px] font-bold ">Gemstone</p>
              
      </div>
      {/* <Note /> */}
      <GemstoneCard />
    </div>
  );
};

export default gemstone;
