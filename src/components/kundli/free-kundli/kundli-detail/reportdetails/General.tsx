"use client";
import Section from "@/components/Section";
import React, { Key, useEffect, useState } from "react";
import Planetary from "./generaldetails/Planetary";
import VimshottariDasha from "./generaldetails/VimshottariDasha";
import Yoga from "./generaldetails/Yoga";
import GeneralDetails from "./generaldetails/GeneralDetails";
import { postFetcher } from "@/service";
import { toast } from "react-toastify";
import Vimshottari from "../dashadetails/Vimshottari";

type Props = {
  majorVdasha: any;
};

type Tab = string[];

const tabOptions: Tab = [
  "General",
  "Planetary  ",
  "Vimshottari Dasha ",
  "Yoga ",
];

const General = ({ majorVdasha }: Props) => {
  const [activeTab, setActiveTab] = useState<any>(0);
  const [basicDetail, setBasicDetail] = useState<any>();
  useEffect(() => {
    let bodyData: any;
    if (typeof window !== "undefined") {
      bodyData = localStorage.getItem("kundliData");
    }
    const generalResponse = async () => {
      const result = await postFetcher(
        "/kundli/general_nakshatra_report",
        bodyData
      );
      console.log(result?.res);
      if (result?.status) {
        setBasicDetail(result?.res ?? "");
      } else {
        toast.error(result.msg);
      }
    };

    generalResponse();
  }, []);
  const getMainContent = (step: any) => {
    switch (step) {
      case 0:
        return <GeneralDetails />;
      case 1:
        return <Planetary />;
      case 2:
        return <Vimshottari majorVdasha={majorVdasha} />;
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
      <Section>
        {activeTab === 0 && (
          <div className="space-y-4">
            {Object.keys(basicDetail ?? {}).map((key, index) => (
              <div
                key={index}
                className="space-y-1 rounded-xl border border-gray-300 p-4"
              >
                <p className="font-semibold">{key}</p>
                <p>{basicDetail[`${key}`]}</p>
              </div>
            ))}
          </div>
        )}
        <div>{getMainContent(activeTab)}</div>
      </Section>
    </div>
  );
};

export default General;
