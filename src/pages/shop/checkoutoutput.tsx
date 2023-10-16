import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import Checkout from "@/components/shop/checkout/Checkout";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const checkoutoutput = (props: Props) => {
  return (
    <div className="">
      <Hero text="Checkout" icon="" />

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
              Chat With Astrologer
            </p>
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
              Chat Form
            </p>
          </div>
        </Section>
      </div>
      <Checkout />
    </div>
  );
};

export default checkoutoutput;
