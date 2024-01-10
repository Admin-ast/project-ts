import React from "react";
import Hero from "@/components/common/Hero";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import OnlinepoojaCard from "@/components/shop/onlinepuja/OnlinepoojaCard";

type Props = {};

const onlinepuja = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <div>
        {/* <Hero text="Online-puja Products" icon="" /> */}

        <div className="bg-[#F5F5F5] py-2">
          <Section>
            <div className="flex items-center space-x-2">
              <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
              <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
                Astroseva Shop
              </p>
              <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
                Online-puja Products
              </p>
            </div>
          </Section>
        </div>
        <div className="pt-[30px]">
          <p className="text-center text-[30px] font-bold ">
            Online-puja Products
          </p>
        </div>
        <OnlinepoojaCard />
      </div>
    </div>
  );
};

export default onlinepuja;
