import Section from "@/components/Section";
import React, { Key, useState } from "react";
import Planetary from "./generaldetails/Planetary";
import VimshottariDasha from "./generaldetails/VimshottariDasha";
import Yoga from "./generaldetails/Yoga";
import GeneralDetails from "./generaldetails/GeneralDetails";

type Props = {};

type Tab = string[];

const tabOptions: Tab = [
  "General",
  "Planetary  ",
  "Vimshottari Dasha ",
  "Yoga ",
];

const General = (props: Props) => {
  const [activeTab, setActiveTab] = useState<any>(0);
  const getMainContent = (step: any) => {
    switch (step) {
      case 0:
        return <GeneralDetails />;
      case 1:
        return <Planetary />;
      case 2:
        return <VimshottariDasha />;
      case 3:
        return <Yoga />;
      default:
        throw new Error("Unknown Step");
    }
  };
  return (
    <div className="">
      <Section>
        <div className="my-2 grid grid-cols-4  rounded-lg   border border-gray-400 md:w-3/4">
          {tabOptions?.map((option: string, index: Key) => (
            <div
              key={index}
              onClick={() => {
                setActiveTab(index);
              }}
              className={`${
                index !== tabOptions.length - 1 ? "border-r" : "border-none"
              } ${
                activeTab === index ? "bg-[#D3B160]/40" : "bg-transparent"
              } cursor-pointer border-gray-400 py-2 text-center transition-colors duration-1000 hover:bg-[#D3B160]/40`}
            >
              {option}
            </div>
          ))}
        </div>
      </Section>
      <div>{getMainContent(activeTab)}</div>
    </div>
  );
};

export default General;
