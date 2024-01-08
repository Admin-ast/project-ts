import Section from "@/components/Section";

import YearBook from "@/components/yearbook/YearBook";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <div className=" ">
        <Section>
          <div className="items-center justify-between space-x-2 bg-[#F5F5F5]  lg:flex">
            <div className="flex">
              <HomeIcon className="h-6 w-6  p-1" />
              <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
                Year Book
              </p>
            </div>
          </div>
        </Section>
      </div>
      <YearBook />
    </div>
  );
};

export default index;
