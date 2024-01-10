import Section from "@/components/Section";
import AstrosevatalkPromisses from "@/components/common/AstrosevatalkPromisses";
import Hero from "@/components/common/Hero";
import Review from "@/components/home/Review";
import DetailsGemstone from "@/components/shop/gemstone/details/DetailsGemstone";
import DetailsNote from "@/components/shop/gemstone/details/DetailsNote";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const gemstonedetails = (props: Props) => {
  return (
    <div>
      {/* <Hero text="Gemstone" icon="/assets/shop/gemstone/gemhero.svg" /> */}
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Astroseva Shop
          </p>
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Gemstone
          </p>
        </div>
      </Section>
      <DetailsGemstone />
      <DetailsNote />
      <Review />
      <AstrosevatalkPromisses />
    </div>
  );
};

export default gemstonedetails;
