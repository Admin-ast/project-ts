import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { useEffect, useState } from "react";

type Props = {
  horoCharts: any;
  availCharts: any;
  showChalit: boolean;
};

const NorthIndian = ({ horoCharts, availCharts, showChalit }: Props) => {
  const [majorYogni, setMajorYogni] = useState({});
  const [activeTab, setActiveTab] = useState<any>(0);
  useEffect(() => {}, []);

  return (
    <div className="mb-20 ">
      <Section>
        <div className="flex w-full flex-wrap justify-between gap-2">
          {showChalit && (
            <div>
              <div className="font-semibold">Chalit</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: horoCharts["chalit"] && horoCharts["chalit"],
                }}
              ></div>
            </div>
          )}

          {horoCharts &&
            availCharts?.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <div className="font-semibold capitalize">{item}</div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: horoCharts[item] && horoCharts[item]?.svg,
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
