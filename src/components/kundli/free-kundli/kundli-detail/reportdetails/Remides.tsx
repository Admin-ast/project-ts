import Section from "@/components/Section";
import React, { Key, useState } from "react";
import Rudraksha from "./remidesdetails/Rudraksha";
import Gemstone from "./remidesdetails/Gemstone";

type Props = {
  combinedRemedies: any;
};

type Tab = string[];

const tabOptions: Tab = ["Rudraksha", "Gemstone"];

const Remides = ({ combinedRemedies }: Props) => {
  const [activeTab, setActiveTab] = useState<any>(0);
  const getMainContent = (step: any) => {
    switch (step) {
      case 0:
        return <Rudraksha combinedRemedies={combinedRemedies} />;
      case 1:
        return <Gemstone combinedRemedies={combinedRemedies} />;
      default:
        throw new Error("Unknown Step");
    }
  };
  return (
    <div className="">
      <Section>
        <div className="my-2 grid w-1/3  grid-cols-2   rounded-lg border border-gray-400">
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

export default Remides;
