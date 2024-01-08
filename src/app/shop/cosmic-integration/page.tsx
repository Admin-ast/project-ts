import React from "react";
import Hero from "@/components/common/Hero";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import CosmicCard from "@/components/shop/cosmic/CosmicCard";

type Props = {};

const cosmicintegration = (props: Props) => {
  return (
    <div>
      <Hero text="Cosmic-integration Products" icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
            Cosmic-integration Products
          </p>
        </div>
      </Section>
      <CosmicCard />
    </div>
  );
};

export default cosmicintegration;
