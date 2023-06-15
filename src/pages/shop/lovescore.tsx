import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import Cart from "@/components/shop/karmareport/Cart";
import LoveForm from "@/components/shop/lovescore/LoveForm";
import LoveScore from "@/components/shop/lovescore/LoveScore";
import { HomeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";

type Props = {};

const lovescore = (props: Props) => {
  return (
    <div className="">
      <Hero text="Love Score" />
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
      <LoveScore />

      {/* <LoveForm/> */}
    </div>
  );
};

export default lovescore;
