"use client";
import ConnectCard from "@/components/common/ConnectCard";
import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { Key, useEffect, useState } from "react";
import SecondaryTable from "./SecondaryTable";
import { toast } from "react-toastify";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import Canvas from "@/components/canvas/Canvas";
import ChartCanvas from "@/components/canvas/ChartCanvas";

type Props = {};

function KP({ }: Props) {
  const [KPPlanetDetails, setKPPlanetDetails] = useState<any>([]);
  const [chalitChart, setChalitChart] = useState<any>({});
  const [cuspDetails, setCuspDetails] = useState<any>([]);
  const [birthChart, setBirthChart] = useState<any>({});
  const [KPHouseSignificator, setKPHouseSignificator] = useState<any>([]);
  const [KPPlanetSignificator, setKPPlanetSignificator] = useState<any>([]);
    useEffect(() => {
      let bodyData: any;
      if (typeof window !== "undefined") {

        bodyData = localStorage.getItem("kundliData");
      }
         
    const kpPlanetResponse = async () => {
      const kpPlanet = await postFetcher("/kundli/kp_planets",bodyData);
      if(kpPlanet?.status){
        setKPPlanetDetails(kpPlanet?.res);
      }
    }  
    
    const chartResponse = async () => {
      
      
      const chalit = await postFetcher("/kundli/kp_birth_chart", bodyData);
      
      if (chalit?.status) {

        setChalitChart(chalit?.res);
      }

    };

    const chart1Response = async () => {
      
      
        const getbirthChart = await postFetcher("/horo_chart/d1", bodyData);
        
        if (getbirthChart?.status) {
     //     console.log(getbirthChart?.res);
          setBirthChart(getbirthChart?.res);
          
        }
      
    }

    const get = async () => {
      
      

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
      
      
      const result = await postFetcher("/kundli/kp_house_cusps", bodyData);
      if (result?.status) {
        setCuspDetails(result?.res);
              } else {
        toast.error(result?.msg);
      }
    };
    chartResponse();
    chart1Response();
    kpPlanetResponse();
   
      get();
    
      cuspResponse();
    
  }, []);
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
                  </div></div>) : (<div key={"1"}>
                    
                    <Canvas width={350} height={350} birthchart = {chalitChart}></Canvas>

                  </div>)}

              </div>
              <div className="col-span-6">
                <div>Birth Chart</div>
                {Object.keys(birthChart).length === 0 ? (<div>
                  <div className="content-center">
                    <Loading />
                  </div></div>) : (<div key={"2"}>
                    
            <ChartCanvas width={350} height={350} birthchart = {birthChart}></ChartCanvas>

                
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
                        key={"planetdetails" + index + item?.sign_lord}
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
                        key={"cusp" + item.sign}
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
                            key={"significator" + item.house_id}
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
                            key={"planetsignificator" + item.planet_name}
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
