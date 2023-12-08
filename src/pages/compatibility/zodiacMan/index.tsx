import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import ChooseSign from "@/components/compatibility/love/ChooseYourSign";
import Store from "@/components/planets/Store";

import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
type Props = {};

function Compatibility({}: Props) {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero text="Zodiac Man" icon="/assets/compatibility/love/kk-01.png" />
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
          We all know there{"`"}s more to him than meets the eye... and a little
          help from the zodiac never hurts! Whether it{"'"}s someone new you
          {"'"}re curious about, or someone you already love, this in-depth male
          horoscope guide about your zodiac man features everything you need to
          know about that male-identified person in your life.
        </div>
        <ChooseSign headText="Choose Your Sign" />
      </Section>

      <Store />
    </div>
  );
}

export default Compatibility;
