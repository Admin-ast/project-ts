import React, { useState } from "react";
import Hero from "@/components/common/Hero";
import LoveForm from "@/components/shop/lovescore/LoveForm";
import LoveScore from "@/components/shop/lovescore/LoveScore";
import { HomeIcon } from "@heroicons/react/24/solid";
import Section from "@/components/Section";
import KarmaReport from "@/components/shop/karmareport/KarmaReport";
import { BsFillCartFill } from "react-icons/bs";
import Cart from "@/components/shop/karmareport/Cart";
type Props = {};

const karmareport = (props: Props) => {
  return (
    <div className="">
      <Hero text="Karma Report" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Chat With astrologer
          </p>
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Chat Form
          </p>
        </div>
      </Section>
      <Cart />
      <KarmaReport />
    </div>
  );
};

export default karmareport;
