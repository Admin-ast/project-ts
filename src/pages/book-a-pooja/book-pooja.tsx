import Section from "@/components/Section";
import Search from "@/components/common/Search";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const bookpooja = (props: Props) => {
  return (
    <div className="">
      <div className="">
        <Section>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <HomeIcon className="h-6 w-6  p-1" />
              <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
                Book A Pooja
              </p>
            </div>
            <div className="">
              <Search />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default bookpooja;
