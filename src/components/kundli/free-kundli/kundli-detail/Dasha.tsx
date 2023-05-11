import Section from "@/components/Section";
import React, { Key, useState } from "react";
import Vimshottari from "./dashadetails/Vimshottari";
import Yogni from "./dashadetails/Yogni";

type Props = {};

type Tab = string[];

const tabOptions: Tab = ["Vimshottari ", "Yogni"];

const Dasha = (props: Props) => {
  const [activeTab, setActiveTab] = useState<any>(0);
  const getMainContent = (step: any) => {
    switch (step) {
      case 0:
        return <Vimshottari />;
      case 1:
        return <Yogni />;
      default:
        throw new Error("Unknown Step");
    }
  };
  return (
    <div className="">
      <Section>
        <div className="my-2 grid w-56  grid-cols-2   rounded-lg border border-gray-400">
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

export default Dasha;
