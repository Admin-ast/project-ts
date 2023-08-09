import ConnectCard from "@/components/common/ConnectCard";
import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { Key, useEffect, useState } from "react";
import SecondaryTable from "./SecondaryTable";
import { toast } from "react-toastify";

type Props = {};

function KP({ }: Props) {
  const [KPPlanetDetails, setKPPlanetDetails] = useState<any>([]);
  const [chalitChart, setChalitChart] = useState<any>({});
  const [cuspDetails, setCuspDetails] = useState<any>([]);
  const [birthChart, setBirthChart] = useState<any>({});
  const [KPHouseSignificator, setKPHouseSignificator] = useState<any>([]);
  const [KPPlanetSignificator, setKPPlanetSignificator] = useState<any>([]);
  const [KPDetails, setKPDetails] = useState<any>([]);
  useEffect(() => {
    const planetResponse = async () => {
      let bodyData: any;
      if (typeof window !== "undefined") {

        bodyData = localStorage.getItem("kundliData");
      }
      const result = await postFetcher("/kundli/kp_planets", bodyData);
      const chalit = await postFetcher("/horo_chart_image/chalit", bodyData);
      const getbirthChart = await postFetcher("/horo_chart_image/d1", bodyData);
      const getKPHouseSignificator = await postFetcher("/kundli/kp_house_significator", bodyData);
      const getKPPlanetSignificator = await postFetcher("/kundli/kp_planet_significator", bodyData);



      if (chalit.status) {

        setChalitChart(JSON.parse(chalit?.res));
      }

      if (result.status) {
        setKPPlanetDetails(JSON.parse(result?.res));
      } else {
        toast.error(result.msg);
      }
      if (getbirthChart.status) {
        setBirthChart(JSON.parse(getbirthChart?.res));
      }
      if (getKPHouseSignificator.status) {
        const KPHouseSignificatorget = JSON.stringify(getKPHouseSignificator?.res);
        setKPHouseSignificator(JSON.parse(getKPHouseSignificator?.res));

      }
      if (getKPPlanetSignificator.status) {
        setKPPlanetSignificator(JSON.parse(getKPPlanetSignificator?.res));
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
  if (Object.keys(chalitChart).length === 0) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  else {
    return (
      <div className="mb-20 space-y-20">
        <Section>
          <div className="space-y-4">
            <div className="grid grid-cols-12 gap-1">
              <div className="col-span-6">
                <div>Bhav Chalit Chart</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: chalitChart && chalitChart,
                  }}
                ></div>
              </div>
              <div className="col-span-6">
                <div>Birth Chart</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: birthChart && birthChart.svg && birthChart.svg,
                  }}
                ></div>
              </div>
            </div>
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
                        className={`${index !== KPPlanetDetails.length - 1
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
                        className={`${index !== cuspDetails.length - 1
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

              <div>


                <div>
                  <p className="mb-2 font-medium">KP House Significator</p>
                  <div className="relative overflow-x-auto rounded-2xl border border-gray-400">
                    <table className="w-full whitespace-normal text-left text-sm">
                      <thead className=" text-gray-900">
                        <tr className="whitespace-nowrap border-b border-gray-400 bg-[#FFF7E5] text-sm font-semibold">
                          <th className="border-r border-gray-400 px-6 py-3">
                            House
                          </th>
                          <th className="border-r border-gray-400 px-6 py-3">Significator</th>

                        </tr>
                      </thead>
                      <tbody>
                        {KPHouseSignificator.map((item: any, index: Key) => (
                          <tr
                            key={index}
                            className={`${index !== KPHouseSignificator.length - 1
                              ? "border-b"
                              : "border-none"
                              } border-b border-gray-400 bg-white`}
                          >
                            <td className="border-r border-gray-400 px-6 py-4">
                              {item.house_id}
                            </td>
                            <td className="border-r border-gray-400 px-6 py-4">
                              {item.significators.map((item1:any, index1:any) => {
                                if (index1 === 0) {
                                  return <>{item1}</>
                                }
                                return <><br />{item1}</>
                              })
                              }
                            </td>




                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-medium">KP Planet Significator</p>
                  <div className="relative overflow-x-auto rounded-2xl border border-gray-400">
                    <table className="w-full whitespace-normal text-left text-sm">
                      <thead className=" text-gray-900">
                        <tr className="whitespace-nowrap border-b border-gray-400 bg-[#FFF7E5] text-sm font-semibold">
                          <th className="border-r border-gray-400 px-6 py-3">
                            Planet Name
                          </th>
                          <th className="border-r border-gray-400 px-6 py-3">Significators</th>

                        </tr>
                      </thead>
                      <tbody>
                        {KPPlanetSignificator.map((item: any, index: Key) => (
                          <tr
                            key={index}
                            className={`${index !== KPPlanetSignificator.length - 1
                              ? "border-b"
                              : "border-none"
                              } border-b border-gray-400 bg-white`}
                          >
                            <td className="border-r border-gray-400 px-6 py-4">
                              {item.planet_name}
                            </td>
                            <td className="border-r border-gray-400 px-6 py-4">
                              {item.significators.map((item1:any, index1:any) => {
                                if (index1 === 0) {
                                  return <>{item1}</>
                                }
                                return <>, {item1}</>
                              })}
                            </td>

                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>


              </div>
            </div>


          </div>
        </Section>
        <ConnectCard />
      </div>
    );
  }
}

export default KP;
