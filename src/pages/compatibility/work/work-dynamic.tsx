import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import Store from "@/components/compatibility/StoreSection";
import Comp from "@/components/compatibility/love/Comp";

import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const WorkDynamic = (props: Props) => {
  return (
    <div className="">
      <Hero
        text="Work Compatibility"
        subText=""
        icon="/assets/compatibility/work/aw-01.png"
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Compatibility
          </p>
        </div>
      </div>
      <Section>
        <Comp
          headText="Choose 2 Signs To Create Your Match"
          subText="Do you make an outstanding team or will working together be a real pain? Know how to interact most effectively with all your colleagues, bosses, and partners."
        />
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
};

export default WorkDynamic;
