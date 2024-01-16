import Hero from "@/components/common/Hero";
import React from "react";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import PujaCard from "@/components/shop/puja/PujaCard";
type Props = {};

const pujaproduct = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      {/* <Hero text="Puja- Products" icon="" /> */}

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Astroseva Shop
            </p>
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Puja- Products
            </p>
          </div>
        </Section>
      </div>
      <div className="pt-[30px]">
        <p className="text-center text-[30px] font-bold ">Puja- Products</p>
              
      </div>
      <PujaCard />
    </div>
  );
};

export default pujaproduct;
