import React from "react";
import Hero from "@/components/common/Hero";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import ThetaCard from "@/components/shop/thetahealing/ThetaCard";

type Props = {};

const thetahealing = (props: Props) => {
  return (
    <div>
      <Hero text="Theta-healing Products" icon="" />

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
              Theta-healing Products
            </p>
          </div>
        </Section>
      </div>
      <ThetaCard />
    </div>
  );
};

export default thetahealing;
