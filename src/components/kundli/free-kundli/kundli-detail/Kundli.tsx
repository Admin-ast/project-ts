import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { Key, useEffect, useState } from "react";
import SecondaryTable from "./SecondaryTable";
import { toast } from "react-toastify";
import NorthIndian from "./chartdetails/NorthIndian";

type Props = {
  horoCharts: any;
  southHoroCharts: any;
};

function Kundli({ horoCharts, southHoroCharts }: Props) {
  const [planetDetails, setPlanetDetails] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<any>(0);

  type Tab = string[];
  const tabOptions: Tab = ["North Indian", "South Indian  "];
  const availableHoros = ["d1", "d9"];
  const getMainContent = (step: any) => {
    switch (step) {
      case 0:
        return (
          <NorthIndian
            availCharts={availableHoros}
            horoCharts={horoCharts}
            showChalit={false}
          />
        );
      case 1:
        return (
          <NorthIndian
            availCharts={availableHoros}
            horoCharts={southHoroCharts}
            showChalit={false}
          />
        );
      default:
        throw new Error("Unknown Step");
    }
  };
  useEffect(() => {
    const planetResponse = async () => {
      let bodyData: any;
      if (typeof window !== "undefined") {
        console.log("kundilll", localStorage.getItem("kundliData"));
        bodyData = localStorage.getItem("kundliData");
      }
      const result = await postFetcher("/kundli/planets", bodyData);
      console.log(result);
      if (result.status) {
        setPlanetDetails(JSON.parse(result?.res ?? ""));
      } else {
        toast.error(result.msg);
      }
    };
    planetResponse();
  }, []);

  return (
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
      <div>{getMainContent(activeTab)}</div>

      <p className="mb-2 font-medium">Planets</p>
      <div className="relative overflow-x-auto rounded-2xl border border-gray-400">
        <table className="w-full whitespace-normal text-left text-sm">
          <thead className=" text-gray-900">
            <tr className="whitespace-nowrap border-b border-gray-400 bg-[#FFF7E5] text-sm font-semibold">
              <th className="border-r border-gray-400 px-6 py-3">Planet</th>
              <th className="border-r border-gray-400 px-6 py-3">Sign</th>
              <th className="border-r border-gray-400 px-6 py-3">Sign Lord</th>
              <th className="border-r border-gray-400 px-6 py-3">Nakshatra</th>
              <th className="border-r border-gray-400 px-6 py-3">Naksh Lord</th>
              <th className="border-r border-gray-400 px-6 py-3">Degree</th>
              <th className="border-r border-gray-400 px-6 py-3">Retro(R)</th>
              <th className="border-r border-gray-400 px-6 py-3">Combust</th>
              <th className="border-r border-gray-400 px-6 py-3">Avastha</th>
              <th className="border-r border-gray-400 px-6 py-3">House</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {planetDetails.map((item: any, index: Key) => (
              <tr
                key={index}
                className={`${
                  index !== planetDetails.length - 1
                    ? "border-b"
                    : "border-none"
                } border-b border-gray-400 bg-white`}
              >
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.name}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.sign}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.signLord}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.nakshatra}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.nakshatraLord}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.normDegree}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.isRetro ? "Retro" : "Direct"}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">No</td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.planet_awastha}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.house}
                </td>
                <td className="px-6 py-4">--</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export default Kundli;
