import ConnectCard from "@/components/common/ConnectCard";
import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { Key, useEffect, useState } from "react";
import SecondaryTable from "./SecondaryTable";
import { toast } from "react-toastify";

type Props = {};

function KP({}: Props) {
  const [KPPlanetDetails, setKPPlanetDetails] = useState<any>([]);
  const [chalitChart, setChalitChart] = useState<any>({});
  const [cuspDetails, setCuspDetails] = useState<any>([]);
  useEffect(() => {
    const planetResponse = async () => {
      let bodyData: any;
      if (typeof window !== "undefined") {
        console.log("kundilll", localStorage.getItem("kundliData"));
        bodyData = localStorage.getItem("kundliData");
      }
      const result = await postFetcher("/kundli/kp_planets", bodyData);
      const chalit = await postFetcher("/horo_chart_image/chalit", bodyData);
      if (chalit.status) {
        console.log(JSON.parse(chalit?.res));
        setChalitChart(JSON.parse(chalit?.res));
      } else {
        toast.error(result.msg);
      }
      if (result.status) {
        setKPPlanetDetails(JSON.parse(result?.res));
      } else {
        toast.error(result.msg);
      }
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
      if (result.status) {
        setCuspDetails(JSON.parse(result?.res));
      } else {
        toast.error(result.msg);
      }
    };
    cuspResponse();
    planetResponse();
  }, []);

  return (
    <div className="mb-20 space-y-20">
      <Section>
        <div className="space-y-4">
          <div>Bhav Chalit Chart</div>
          <div
            dangerouslySetInnerHTML={{
              __html: chalitChart && chalitChart.svg && chalitChart.svg,
            }}
          ></div>
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
