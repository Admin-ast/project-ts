import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import CheckoutCard from "@/components/shop/lovescore/CheckoutCard";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const lovescorecheckout = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover">
      <Hero text="Love Score : Checkout" icon="" />

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Chat With astrologer
            </p>
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Chat Form
            </p>
          </div>
        </Section>
      </div>
      <CheckoutCard />
    </div>
  );
};

export default lovescorecheckout;
