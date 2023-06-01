import React from "react";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import About from "@/components/muhurat/Namakaran/About";
import MuhuratDate from "@/components/muhurat/Namakaran/MuhuratDate";
import Note from "@/components/muhurat/Namakaran/Note";
import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";

type Props = {};

const Muhurat = (props: Props) => {
  return (
    <div>
      <Hero text="Namakaran Muhurat" icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Namakaran Muhurat
          </p>
        </div>
      </Section>
      <About />
      <MuhuratDate />
      <Note />
    </div>
  );
};

export default Muhurat;
