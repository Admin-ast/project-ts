import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { useEffect, useState } from "react";

type Props = {
  horoCharts: any;
};
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
const NorthIndian = ({ horoCharts }: Props) => {
  const [majorYogni, setMajorYogni] = useState({});
  const [activeTab, setActiveTab] = useState<any>(0);
  useEffect(() => {}, []);

  return (
    <div className="mb-20 ">
      <Section>
        <div className="flex w-full flex-wrap justify-between gap-2">
          <div>
            <div className="font-semibold">Chalit</div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  horoCharts["chalit"] && JSON.parse(horoCharts["chalit"]),
              }}
            ></div>
          </div>

          {horoCharts &&
            availableHoros?.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <div className="font-semibold capitalize">{item}</div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        horoCharts[item] && JSON.parse(horoCharts[item])?.svg,
                    }}
                  ></div>
                </div>
              );
            })}
        </div>
      </Section>
    </div>
  );
};

export default NorthIndian;
