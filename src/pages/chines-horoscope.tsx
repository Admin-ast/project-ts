import React from "react";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import Hero from "@/components/chineshoroscope/Hero";
import ChoseSign from "@/components/chineshoroscope/ChoseSign";
import AnimalSign from "@/components/chineshoroscope/AnimalSign";

type Props = {};

const chineshoroscope = (props: Props) => {
  return (
    <div>
      <Hero />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
            Daily Chinese Horoscope
          </p>
        </div>
      </Section>
      <ChoseSign />
      <AnimalSign />
    </div>
  );
};

export default chineshoroscope;
