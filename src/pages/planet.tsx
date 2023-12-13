import React from "react";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import Section from "@/components/Section";

import PlanetsCard from "@/components/planets/PlanetsCard";

import Hero from "@/components/common/Hero";
import Planets from "@/components/planets/Planets";
import Store from "@/components/planets/Store";

type Props = {};

const Muhurat = (props: Props) => {
  return (
    <div>
      <Hero text="Planets" icon="/assets/palnet/planet.png" />
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#Dc6563] p-1 px-4 text-[10px] font-medium text-white">
              Planets
            </p>
          </div>
        </Section>
      </div>
      <Planets />
      <Store />
    </div>
  );
};

export default Muhurat;
