import Section from "@/components/Section";
import Festival from "@/components/festival/Festival";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const festival = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <div className=" ">
        <Section>
          <div className="items-center justify-between space-x-2 py-[30px] lg:flex">
            <div className="flex">
              <HomeIcon className="h-6 w-6  p-1" />
              <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
                Festival
              </p>
            </div>
          </div>
        </Section>
      </div>
      <Festival head="Festivals" />
    </div>
  );
};

export default festival;
