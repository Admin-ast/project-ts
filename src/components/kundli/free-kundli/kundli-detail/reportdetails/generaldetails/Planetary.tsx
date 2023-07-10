import Section from "@/components/Section";
import React from "react";
import { returnPlanetryDetails } from "../../dashadetails/VdashaCardDetails";
type Props = {};

const Planetary = (props: Props) => {
  const planets = [
    "Sun",
    "Moon",
    "Mercury",
    "Venus",
    "Mars",
    "Jupiter",
    "Saturn",
    "Rahu",
    "Ketu",
  ];
  return (
    <div className="mb-20 space-y-20">
      <Section>
        {planets.map((item: any, index: any) => (
          <div
            key={index}
            className="my-1 rounded-[10px] border-2 border-slate-300 p-5"
          >
            <div className="flex flex-col gap-2  text-justify text-gray-700">
              <div className="flex items-center justify-between text-slate-900">
                <p className="text-lg font-bold">{item} Consideration</p>
              </div>
              <div className="flex flex-col gap-4">
                {returnPlanetryDetails(item)?.map((item: any, index: any) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            </div>
          </div>
        ))}
      </Section>
    </div>
  );
};

export default Planetary;
