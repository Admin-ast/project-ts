import Section from "@/components/Section";
import Hero from "@/components/common/Hero";

import Store from "@/components/compatibility/StoreSection";
import ChooseSign from "@/components/compatibility/love/ChooseYourSign";
import LoveCompatibilityCard from "@/components/compatibility/love/LoveCompatibilityCard";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const lovecompatibility = (props: Props) => {
  return (
    <div className="">
      <Hero
        text="Virgo Love Compatibility"
        icon="/assets/compatibility/virgo.png"
      />
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
              Compatibility
            </p>
          </div>
        </Section>
      </div>
      <LoveCompatibilityCard
        title=""
        text="Your analytical, thoughtful, and sometimes moody mentality demands that your mate show you just how much he or she loves you. You want regular verbal reminders that you are appreciated, and tokens of affection really lift your spirits. Receiving also makes you a generous giver. Find out if your relationship will go all the way..."
      />

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
};

export default lovecompatibility;
