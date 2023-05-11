import Ashtakvarga from "@/components/kundli/free-kundli/kundli-detail/Ashtakvarga";
import Basic from "@/components/kundli/free-kundli/kundli-detail/Basic";
import Charts from "@/components/kundli/free-kundli/kundli-detail/Charts";
import Dasha from "@/components/kundli/free-kundli/kundli-detail/Dasha";
import KP from "@/components/kundli/free-kundli/kundli-detail/KP";
import Kundli from "@/components/kundli/free-kundli/kundli-detail/Kundli";
import Report from "@/components/kundli/free-kundli/kundli-detail/Report";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import React, { Key, useState } from "react";

type Props = {};

type Tab = string[];

const tabOptions: Tab = [
  "Basic",
  "Kundli",
  "KP",
  "Ashtakvarga",
  "Charts",
  "Dasha",
  "Report",
];

function BasicDetail({}: Props) {
  const [activeTab, setActiveTab] = useState<any>(0);

  const getMainContent = (step: any) => {
    switch (step) {
      case 0:
        return <Basic />;
      case 1:
        return <Kundli />;
      case 2:
        return <KP />;
      case 3:
        return <Ashtakvarga />;
      case 4:
        return <Charts />;
      case 5:
        return <Dasha />;
      case 6:
        return <Report />;
      //   case 4:
      //     return (
      //       <Assignment
      //         setActiveId={setActiveId}
      //         mobileNumber={mobileNumber}
      //         setCandidateDetails={setCandidateDetails}
      //         candidateDetails={candidateDetails}
      //       />
      //     );

      default:
        throw new Error("Unknown Step");
    }
  };
  return (
    <>
      <div className=" bg-gray-100 py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-5 w-5 bg-gray-300 p-1 text-gray-900" />
          <p className="bg-gray-300 py-1 px-2 text-sm">Free Kundli</p>
          <p className="bg-[#f0dba8] py-1 px-2 text-sm">Kundli Details</p>
        </div>
        <Section>
          <div className="my-6 grid justify-between  overflow-hidden rounded-lg border border-gray-400 md:grid-cols-7">
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
    </>
  );
}

export default BasicDetail;
