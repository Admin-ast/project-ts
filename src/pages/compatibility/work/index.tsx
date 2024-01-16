import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import ChooseSign from "@/components/compatibility/work/ChooseSign";
import WorkCompatibilityMatches from "@/components/compatibility/work/WorkCompatibilityMatching";
import Store from "@/components/planets/Store";

import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
type Props = {};

function Compatibility({}: Props) {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        text="Work Compatibility"
        subText="Taurus And Virgo"
        icon="/assets/compatibility/work/aw-01.png"
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Compatibility
          </p>
        </div>
      </div>
      <Section>
        <ChooseSign
          headText="Choose 2 Signs To Create Your Match"
          btn="Try Another Match"
          
          subText="Since both Taurus and Virgo are Earth Signs, they see life and work from much the same perspective. Both are focused on building more stability and security, which makes them like-minded when it comes to working together. Taurus desires more creature comforts and sensual pleasures, while Virgo is busy building a nest egg for the future. Together, these two signs can provide a real boost to any organization lucky enough to have them. These two power through any obstacles and offer loyalty to thei employers. The sky's the limit for these two signs"
        />
      </Section>
      <WorkCompatibilityMatches />
     
      <Store />
    </div>
  );
}

export default Compatibility;
