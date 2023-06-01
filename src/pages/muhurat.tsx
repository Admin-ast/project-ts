import React from "react";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import About from "@/components/muhurat/About";
import ImportenceofMuhurat from "@/components/muhurat/ImportenceofMuhurat";
import Diffrentmuhurat from "@/components/muhurat/Diffrentmuhurat";
import MustknowFactor from "@/components/muhurat/MustknowFactor";
import Yoga from "@/components/muhurat/Yoga";
import TithiPakshaNashtra from "@/components/muhurat/TithiPakshaNashtra";
import Karana from "@/components/muhurat/Karana";
import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";

type Props = {};

const Muhurat = (props: Props) => {
  return (
    <div>
      <Hero text="Muhurat" icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Shubh Muhurat
          </p>
        </div>
      </Section>
      <About />
      <ImportenceofMuhurat />
      <Diffrentmuhurat />
      <MustknowFactor />
      <TithiPakshaNashtra />
      <Yoga />
      <Karana />
    </div>
  );
};

export default Muhurat;
