import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import Sign from "@/components/compatibility/love/Sign";

import Store from "@/components/planets/Store";

import { HomeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
type Props = {};

function Compatibility({}: Props) {
  const [yourSign, setYourSign] =useState<string | null>(null);

  const handleSelectYourSign = (selectedSign: string) => {
    setYourSign(selectedSign);
  };
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero text="Zodiac Women" icon="/assets/compatibility/love/7-01.png" />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Compatibility
          </p>
        </div>
      </div>
      <Section>
        <div className="mt-5">
          When trying to understand that female-identified person in your life,
          their zodiac sign is the door into their personal style, as well as
          what makes them tick. This in-depth horoscope guide about the zodiac
          woman in your life has everything you need to know from sex, career,
          home life, gift ideas, and love compatibility.
        </div>
        <Sign headText="Choose Your Sign" onSelect={handleSelectYourSign}/>
      </Section>

      <Store />
    </div>
  );
}

export default Compatibility;
