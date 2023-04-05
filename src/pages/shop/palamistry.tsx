import React from "react";
import Hero from "@/components/common/Hero";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import PalamistryCard from "@/components/shop/palamistry/PalamistryCard";

type Props = {};

const palamistry = (props: Props) => {
  return (
    <div>
      <Hero text="Palmistry Products" icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Palmistry Products
          </p>
        </div>
      </Section>
      <PalamistryCard />
    </div>
  );
};

export default palamistry;
