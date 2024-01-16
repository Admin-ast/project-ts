"use client";
import Section from "@/components/Section";
import React from "react";
import { returnDetails } from "./VdashaCardDetails";

type Props = {
  majorVdasha: any;
};
const Vimshottari = ({ majorVdasha }: Props) => {
  return (
    <div className="mb-20 space-y-20">
      <Section>
        <p>Understanding your dasha</p>
        <div className="flex flex-col gap-2 py-4">
          {console.log(majorVdasha)}
          {majorVdasha &&
            majorVdasha?.map((item: any, index: any) => (
              <div
                key={index}
                className="rounded-[10px] border-2 border-slate-300 p-5"
              >
                <div className="flex flex-col gap-2  text-justify text-gray-700">
                  <div className="flex items-center justify-between text-slate-900">
                    <p className="text-lg font-bold">
                      {item?.planet && item?.planet} Mahadasha
                    </p>
                    <div className="flex gap-3">
                      <p className="text-lg font-bold">
                        {item?.start && item?.start}
                      </p>{" "}
                      {" - "}
                      <p className="text-lg font-bold">
                        {item?.end && item?.end}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    {returnDetails(item?.planet && item?.planet)?.map(
                      (item: any, index: any) => {
                        return <div key={index}>{item}</div>;
                      }
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Section>
    </div>
  );
};

export default Vimshottari;
