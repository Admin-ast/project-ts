import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import ChooseSign from "@/components/compatibility/love/ChooseYourSign";
import Store from "@/components/compatibility/StoreSection";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
type Props = {};

function Compatibility({}: Props) {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero text="Zodiac Women" icon="/assets/compatibility/love/7-01.png" />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-color_gold p-1 px-4 text-[10px] font-medium">
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
        <ChooseSign headText="Choose Your Sign" />
      </Section>

      <Store
        cardDetails={[
          {
            name: "Career Report",
            img: "/assets/compatibility/work/Rectangle_109.png",
            link: "",
          },
          {
            name: "Kawach",
            img: "/assets/compatibility/work/Rectangle_109.png",
            link: "",
          },
          {
            name: "Spell",
            img: "/assets/compatibility/work/Rectangle_130.png",
            link: "",
          },
        ]}
      />
    </div>
  );
}

export default Compatibility;
