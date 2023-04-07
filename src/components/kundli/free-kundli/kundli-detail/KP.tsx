import ConnectCard from "@/components/common/ConnectCard";
import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { Key, useEffect, useState } from "react";
import SecondaryTable from "./SecondaryTable";

type Props = {};

function KP({}: Props) {
  const [KPPlanetDetails, setKPPlanetDetails] = useState<any>([]);
  const [cuspDetails, setCuspDetails] = useState<any>([]);
  useEffect(() => {
    const planetResponse = async () => {
      const bodyData = JSON.stringify({
        day: "10",
        month: "5",
        year: "1990",
        hour: "19",
        min: "55",
        lat: "19.2",
        lon: "25.2",
        tzone: "5.5",
      });
      const result = await postFetcher("/kundli/kp_planets", bodyData);
      setKPPlanetDetails(JSON.parse(result?.response));
    };
    const cuspResponse = async () => {
      const bodyData = JSON.stringify({
        day: "10",
        month: "5",
        year: "1990",
        hour: "19",
        min: "55",
        lat: "19.2",
        lon: "25.2",
        tzone: "5.5",
      });
      const result = await postFetcher("/kundli/kp_house_cusps", bodyData);
      console.log("result", result);
      setCuspDetails(JSON.parse(result?.response));
    };
    cuspResponse();
    planetResponse();
  }, []);

  console.log(KPPlanetDetails);

  return (
    <div className="mb-20 space-y-20">
      <Section>
        <div className="space-y-4">
          <div>
            <p className="mb-2 font-medium">Planets</p>
            <div className="relative overflow-x-auto rounded-2xl border border-gray-400">
              <table className="w-full whitespace-normal text-left text-sm">
                <thead className=" text-gray-900">
                  <tr className="whitespace-nowrap border-b border-gray-400 bg-[#FFF7E5] text-sm font-semibold">
                    <th className="border-r border-gray-400 px-6 py-3">
                      Planets
                    </th>
                    <th className="border-r border-gray-400 px-6 py-3">Cusp</th>
                    <th className="border-r border-gray-400 px-6 py-3">Sign</th>
                    <th className="border-r border-gray-400 px-6 py-3">
                      Sign Lord
                    </th>
                    <th className="border-r border-gray-400 px-6 py-3">
                      Star Lord
                    </th>
                    <th className="px-6 py-3">Sub Lord</th>
                  </tr>
                </thead>
                <tbody>
                  {KPPlanetDetails.map((item: any, index: Key) => (
                    <tr
                      key={index}
                      className={`${
                        index !== KPPlanetDetails.length - 1
                          ? "border-b"
                          : "border-none"
                      } border-b border-gray-400 bg-white`}
                    >
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.planet_name}
                      </td>
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.house}
                      </td>
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.sign}
                      </td>
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.sign_lord}
                      </td>
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.sub_lord}
                      </td>
                      <td className="px-6 py-4">{item.sub_sub_lord}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="mb-2 font-medium">Cusps</p>
            <div className="relative overflow-x-auto rounded-2xl border border-gray-400">
              <table className="w-full whitespace-normal text-left text-sm">
                <thead className=" text-gray-900">
                  <tr className="whitespace-nowrap border-b border-gray-400 bg-[#FFF7E5] text-sm font-semibold">
                    <th className="border-r border-gray-400 px-6 py-3">Cusp</th>
                    <th className="border-r border-gray-400 px-6 py-3">
                      Degree
                    </th>
                    <th className="border-r border-gray-400 px-6 py-3">Sign</th>
                    <th className="border-r border-gray-400 px-6 py-3">
                      Sign Lord
                    </th>
                    <th className="border-r border-gray-400 px-6 py-3">
                      Star Lord
                    </th>
                    <th className="px-6 py-3">Sub Lord</th>
                  </tr>
                </thead>
                <tbody>
                  {cuspDetails.map((item: any, index: Key) => (
                    <tr
                      key={index}
                      className={`${
                        index !== cuspDetails.length - 1
                          ? "border-b"
                          : "border-none"
                      } border-b border-gray-400 bg-white`}
                    >
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.house_id}
                      </td>
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.cusp_full_degree}
                      </td>
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.sign}
                      </td>
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.sign_lord}
                      </td>
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.sub_lord}
                      </td>
                      <td className="px-6 py-4">{item.sub_sub_lord}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>
      <ConnectCard />
    </div>
  );
}

export default KP;
