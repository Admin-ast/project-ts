import Hero from "@/components/common/Hero";
import React from "react";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import Card from "@/components/shop/Card";

type Props = {};

const shop = (props: Props) => {
  return (
    <div>
      <Hero text="Shop" icon="/assets/shop/heroicon.svg" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">Shop</p>
        </div>
      </Section>
      <Card />
    </div>
  );
};

export default shop;
