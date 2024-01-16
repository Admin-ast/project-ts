"use client";
import Section from "@/components/Section";
import React, { Key, useState } from "react";
import General from "./reportdetails/General";
import Remides from "./reportdetails/Remides";
import Dosha from "./reportdetails/Dosha";

type Props = {
  majorVdasha: any;
  combinedRemedies: any;
  combinedReportDosha: any;
};

type Tab = string[];

const tabOptions: Tab = ["General", "Remides  ", "Dosha"];

const Report = ({
  majorVdasha,
  combinedRemedies,
  combinedReportDosha,
}: Props) => {
  const [activeTab, setActiveTab] = useState<any>(0);
  const getMainContent = (step: any) => {
    switch (step) {
      case 0:
        return <General majorVdasha={majorVdasha} />;
      case 1:
        return <Remides combinedRemedies={combinedRemedies} />;
      case 2:
        return <Dosha combinedReportDosha={combinedReportDosha} />;
      default:
        throw new Error("Unknown Step");
    }
  };
  return (
    <div className="">
      <Section>
        <div className="mt-4 mb-8 grid grid-cols-3 gap-2 rounded-lg md:w-3/4 ">
          {tabOptions?.map((option: string, index: Key) => (
            <div
              key={index}
              onClick={() => {
                setActiveTab(index);
              }}
              className={`${
                activeTab === index
                  ? "border-b bg-[#D3B160]/40"
                  : "bg-transparent"
              } cursor-pointer border-gray-400 border-[#D3B160]/40 py-2 text-center transition-colors duration-1000 hover:border-b`}
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

export default Report;
