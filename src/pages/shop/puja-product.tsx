import Hero from "@/components/common/Hero";
import React from "react";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import PujaCard from "@/components/shop/puja/PujaCard";
type Props = {};

const pujaproduct = (props: Props) => {
  return (
    <div>
      <Hero text="Puja- Products" icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Puja- Products
          </p>
        </div>
      </Section>
      <PujaCard />
    </div>
  );
};

export default pujaproduct;
