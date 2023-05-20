import Section from "@/components/Section";
import React, { Key, useState } from "react";
import Manglik from "./doshadetails/Manglik";
import Kalsarpa from "./doshadetails/Kalsarpa";
import Sadesati from "./doshadetails/Sadesati";

type Props = {};

type Tab = string[];

const tabOptions: Tab = ["Manglik", "Kalsarpa  ", "Sadesati"];

const Dosha = (props: Props) => {
  const [activeTab, setActiveTab] = useState<any>(0);
  const getMainContent = (step: any) => {
    switch (step) {
      case 0:
        return <Manglik />;
      case 1:
        return <Kalsarpa />;
      case 2:
        return <Sadesati />;
      default:
        throw new Error("Unknown Step");
    }
  };
  return (
    <div className="">
      <Section>
        <div className="my-2 grid grid-cols-3  rounded-lg   border border-gray-400 md:w-1/2">
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

export default Dosha;
