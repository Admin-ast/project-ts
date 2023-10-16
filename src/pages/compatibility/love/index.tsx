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
      <Hero text="Love Compatibility" icon="/assets/compatibility/comp1.png" />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
            Compatibility
          </p>
        </div>
      </div>
      <Section>
        <div className="mt-5">
          Find out if you and your love interest or partner are soul mates, best
          friends, or a recipe for disaster. But no fear - even opposites can
          attract. Find out how you fare now.
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
