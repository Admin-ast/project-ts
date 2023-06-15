import Section from "@/components/Section";
import React, { Key, useState } from "react";
import NorthIndian from "./chartdetails/NorthIndian";
import SouthIndian from "./chartdetails/SouthIndian";

type Props = {
  horoCharts: any;
  southHoroCharts: any;
};

type Tab = string[];

const tabOptions: Tab = ["North Indian", "South Indian  "];

const Charts = ({ horoCharts, southHoroCharts }: Props) => {
  const [activeTab, setActiveTab] = useState<any>(0);
  const availableHoros = [
    "sun",
    "moon",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d7",
    "d8",
    "d9",
    "d10",
    "d12",
    "d16",
    "d20",
    "d24",
    "d27",
    "d30",
    "d40",
    "d45",
    "d60",
  ];
  const getMainContent = (step: any) => {
    switch (step) {
      case 0:
        return (
          <NorthIndian
            availCharts={availableHoros}
            horoCharts={horoCharts}
            showChalit={true}
          />
        );
      case 1:
        return (
          <NorthIndian
            availCharts={availableHoros}
            horoCharts={southHoroCharts}
            showChalit={true}
          />
        );
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

export default Charts;
