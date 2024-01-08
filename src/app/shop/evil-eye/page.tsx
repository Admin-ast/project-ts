import React from "react";
import Hero from "@/components/common/Hero";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import EvileyeCard from "@/components/shop/evileye/EvileyeCard";

type Props = {};

const evileye = (props: Props) => {
  return (
    <div>
      <Hero text="Evil-eye-nazar-lagna Products" icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
            Evil-eye-nazar-lagna Products
          </p>
        </div>
      </Section>
      <EvileyeCard />
    </div>
  );
};

export default evileye;
