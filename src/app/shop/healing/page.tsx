import React from "react";
import Hero from "@/components/common/Hero";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import HealingCard from "@/components/shop/healing/HealingCard";

type Props = {};

const healing = (props: Props) => {
  return (
    <div>
      <Hero text="Healing-oil Products" icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
            Healing-oil Products
          </p>
        </div>
      </Section>
      <HealingCard />
    </div>
  );
};

export default healing;
