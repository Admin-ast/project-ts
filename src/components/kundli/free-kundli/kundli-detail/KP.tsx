import ConnectCard from "@/components/common/ConnectCard";
import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { Key, useEffect, useState } from "react";
import SecondaryTable from "./SecondaryTable";
import { toast } from "react-toastify";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import Canvas from "@/components/canvas/Canvas";

type Props = {};

function KP({ }: Props) {
  const [KPPlanetDetails, setKPPlanetDetails] = useState<any>([]);
  const [chalitChart, setChalitChart] = useState<any>({});
  const [cuspDetails, setCuspDetails] = useState<any>([]);
  const [birthChart, setBirthChart] = useState<any>({});
  const [KPHouseSignificator, setKPHouseSignificator] = useState<any>([]);
  const [KPPlanetSignificator, setKPPlanetSignificator] = useState<any>([]);
  const [KPDetails, setKPDetails] = useState<any>([]);
  const [ischartLoaded, setchartLoaded] = useState(false);
  const [iscustLoaded, setcustLoaded] = useState(false);
  const [isplanetLoaded, setplanetLoaded] = useState(false);
  const [isgetLoaded, setgetLoaded] = useState(false);
  const [jsonobj, setjsonobj] = useState(String);
  useEffect(() => {
    const planetResponse = async () => {
      let bodyData: any;
      if (typeof window !== "undefined") {

        bodyData = localStorage.getItem("kundliData");
      }
      const result = await postFetcher("/kundli/kp_planets", bodyData);
      if (result?.status) {
        setKPPlanetDetails(result?.res);
        setplanetLoaded(true);
      } else {
        toast.error(result.msg);
      }
    };
    
    const chartResponse = async () => {
      let bodyData: any;
      if (typeof window !== "undefined") {

        bodyData = localStorage.getItem("kundliData");
      }
      const chalit = await postFetcher("/kundli/kp_birth_chart", bodyData);
      
      if (chalit?.status) {

        setChalitChart(chalit?.res);
      }

    };

    const chart1Response = async () => {
      let bodyData: any;
      if (typeof window !== "undefined") {

        bodyData = localStorage.getItem("kundliData");
        const getbirthChart = await postFetcher("/horo_chart_image/d1", bodyData);
        if (getbirthChart?.status) {
          setBirthChart(getbirthChart?.res);
          setchartLoaded(true);
        }
      }
    }

    const get = async () => {
      let bodyData: any;
      if (typeof window !== "undefined") {

        bodyData = localStorage.getItem("kundliData");
      }

      const getKPHouseSignificator = await postFetcher("/kundli/kp_house_significator", bodyData);
      const getKPPlanetSignificator = await postFetcher("/kundli/kp_planet_significator", bodyData);
      if (getKPHouseSignificator?.status) {
        setKPHouseSignificator(getKPHouseSignificator?.res);

      }
      if (getKPPlanetSignificator?.status) {
        setKPPlanetSignificator(getKPPlanetSignificator?.res);
      }
    };





    const cuspResponse = async () => {
      let bodyData: any;
      if (typeof window !== "undefined") {

        bodyData = localStorage.getItem("kundliData");
      }
      const result = await postFetcher("/kundli/kp_house_cusps", bodyData);
      if (result?.status) {
        setCuspDetails(result?.res);
        setcustLoaded(true);
      } else {
        toast.error(result?.msg);
      }
    };
    chartResponse();
    chart1Response();
    if (ischartLoaded) {
      planetResponse();
    }
    if (iscustLoaded) {
      get();
    }
    if (isplanetLoaded) {
      cuspResponse();
    }
  }, [ischartLoaded, isplanetLoaded, iscustLoaded, isgetLoaded]);
  if (Object.keys(chalitChart).length === 0) {
    return (
      <div className="content-center">
        <Loading />
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
                {Object.keys(chalitChart).length === 0 ? (<div>
                  <div className="content-center">Image
                    <Loading />
                  </div></div>) : (<div>
                    
                    <Canvas width={350} height={350} birthchart = {chalitChart}></Canvas>

                  </div>)}

              </div>
              <div className="col-span-6">
                <div>Birth Chart</div>
                {Object.keys(chalitChart).length === 0 ? (<div>
                  <div className="content-center">
                    <Loading />
                  </div></div>) : (<div>
                    <div
                  dangerouslySetInnerHTML={{
                    __html: birthChart && birthChart.svg && birthChart.svg,
                  }}
                ></div>
                  </div>)}
               
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
                              {item.significators.map((item1: any, index1: any) => {
                                if (index1 === 0) {
                                  return <>{item1}</>
                                }
                                return <>, {item1}</>
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
                              {item.significators.map((item1: any, index1: any) => {
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
