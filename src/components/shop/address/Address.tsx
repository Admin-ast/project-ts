import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import AddressForm from "./AddressForm";
import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";

type Props = {};

const Address = (props: Props) => {
  return (
    <div className=" bg-[url('/assets/horoscope-bg.webp')]">
      <Hero text="Checkout" icon="" />
      <div className="bg-[#F5F5F5] py-1">
        <div className="bg-[#F5F5F5] py-2">
          <Section>
            <div className="flex items-center space-x-2">
              <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
              <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
                Chat With Astrologer
              </p>
            </div>
          </Section>
        </div>
      </div>
      <div className="">
        <AddressForm />
      </div>
    </div>
  );
};

export default Address;
