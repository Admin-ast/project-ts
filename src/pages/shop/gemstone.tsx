import Hero from "@/components/common/Hero";
import React from "react";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import Note from "@/components/shop/gemstone/Note";
import GemstoneCard from "@/components/shop/gemstone/GemstoneCard";

type Props = {};

const gemstone = (props: Props) => {
  return (
    <div>
      <Hero text="Gemstone" icon="/assets/shop/gemstone/gemhero.svg" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Gemstone
          </p>
        </div>
      </Section>
      <Note />
      <GemstoneCard />
    </div>
  );
};

export default gemstone;
