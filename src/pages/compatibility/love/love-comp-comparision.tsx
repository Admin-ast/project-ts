import Section from "@/components/Section";
import Hero from "@/components/compatibility/Hero";

import Comp from "@/components/compatibility/love/Comp";
import ChooseSign from "@/components/compatibility/work/ChooseSign";
import WorkCompatibilityMatches from "@/components/compatibility/work/WorkCompatibilityMatching";
import Store from "@/components/planets/Store";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const lovecompcomparision = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icons="/assets/kundli/taurus.png"
        text="Love Compatibility"
        icon="/assets/kundli/virgo.png"
      />

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Compatibility
            </p>
          </div>
        </Section>
      </div>
      <Section>
        <Comp
          headText="Choose 2 Signs To Create Your Match"
          subText="Do you make an outstanding team or will working together be a real pain? Know how to interact most effectively with all your colleagues, bosses, and partners."
        />
      </Section>
      <Store />
    </div>
  );
};

export default lovecompcomparision;
