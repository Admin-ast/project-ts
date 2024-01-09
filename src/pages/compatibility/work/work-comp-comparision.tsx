import Section from "@/components/Section";
import Hero from "@/components/compatibility/Hero";

import Header from "@/components/compatibility/love/Header";
import WorkCompatibilityMatches from "@/components/compatibility/work/WorkCompatibilityMatching";
import Store from "@/components/planets/Store";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const Workcomparision = (props: Props) => {
  return (
    <div className="">
      <Hero
        icons="/assets/kundli/taurus.png"
        text="Virgo And Taurus Work Compatibility"
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
      <Header />
      <WorkCompatibilityMatches />
      <Store />
    </div>
  );
};

export default Workcomparision;
