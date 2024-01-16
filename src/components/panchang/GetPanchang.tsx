import { format } from "date-fns";
import Image from "next/image";
import React, { Key, useEffect, useState } from "react";
import Section from "../Section";
import Combo from "../common/Combo";
import { Form } from "../forms";
import { useForm } from "react-hook-form";
import { postFetcher } from "@/service";

type Props = {};

const details = [1, 2, 34, 5, 6, 6, 7, 8, 79];

function GetPanchang({}: Props) {
  const [placeName, setPlaceName] = useState<string>("New Delhi, DL, India");
  const [basicPanchang, setBasicPanchang] = useState<any>();
  const [ashubhaMuhurat, setAshubhaMuhurat] = useState<any>();
  const [planetPos, setPlanetPos] = useState<any>({});
  const [chalitChart, setChalitChart] = useState<any>({});

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lat: 28.6,
      lon: 77.2,
      tzone: 5.5,
    },
  });
  useEffect(() => {
    const bodyData: any = JSON.stringify({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      hour: new Date().getHours(),
      min: new Date().getMinutes(),
      lat: getValues("lat"),
      lon: getValues("lon"),
      tzone: getValues("tzone"),
    });
    const basicPanchang = async () => {
      const result = await postFetcher("/panchang/basic-panchang", bodyData);
      const data = result?.res ? result?.res : "";
      setBasicPanchang(data);
    };
    const ashubhaMuhurat = async () => {
      const result = await postFetcher("/panchang/ashubhaMuhurat", bodyData);
      const data = result?.res ? result?.res : "";
      // console.log(data);
      const { abhijit_muhurta, rahukaal, guliKaal, yamghant_kaal } = data;
      setAshubhaMuhurat({ abhijit_muhurta, rahukaal, guliKaal, yamghant_kaal });
    };
    const chalitChart = async () => {
      const chalit = await postFetcher("/horo_chart_image/chalit", bodyData);
      if (chalit.status) {

        setChalitChart(chalit?.res);
      }
    };
    const planetPosSun = async () => {
      const result = await postFetcher("/panchang/planetPos", bodyData);
      const data = result?.res ? result?.res : "";
      console.log(data);
      setPlanetPos(data);
    };
    chalitChart();
    planetPosSun();
    basicPanchang();
    ashubhaMuhurat();
  }, [getValues, placeName]);

  const onSubmit = (data: any) => {
    // console.log({ data });
  };

  return (
    <div>
      <div className=" bg-white shadow-xl bg-[url('/assets/home/cloud.png')] ">
        <Section>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mx-auto ">
            <div className="grid  gap-[15px]  md:flex  md:gap-[15px] lg:flex py-[50px]  ">
              <Combo
                hasDefaultValue={true}
                setValue={setValue}
                setPlaceName={setPlaceName}
                placeholder="Enter City Name"
                className={`appearance-none  px-[35px] rounded-xl border border-gray-400  !py-3 !text-[22px] text-sm text-gray-900 placeholder:text-[22px] placeholder:font-normal focus:border-[#0B8188] focus:outline-none md:w-full `}
              />
              <div className="flex justify-center   ">
                <button className="whitespace-nowrap  rounded-[10px] bg-gradient-to-b from-[#FF7646] to-[#FF0600] px-4  text-[24px] text-white">
                  Get Panchang
                </button>
              </div>
            </div>
          </div>
        </Form>
        </Section>
      </div>
      <Section>
        <div className="space-y-12 py-8 text-center ">
          <div className="space-y-4">
            <p className="font-[georgia] text-2xl font-semibold md:text-4xl">
              Today’s Panchang
            </p>
            <p className="text-lg lg:text-[22px]">
              {format(new Date(), "MMMM dd, EEEE")} | {placeName}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="col-span-8 space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div className="rounded-2xl bg-[#DC6563] p-3 text-white">
                  <p className="text-[18px] md:text-[22px] lg:text-[22px]">
                    Sunrise
                  </p>
                  <p className="text-xs">{basicPanchang?.vedic_sunrise}</p>
                </div>
                <div className="rounded-2xl bg-[#DC6563] p-3 text-white">
                  <p className=" text-[18px] md:text-[22px] lg:text-[22px]">
                    Moonrise
                  </p>
                  <p className="text-xs">{basicPanchang?.vedic_sunset}</p>
                </div>
              </div>

              <div className="relative  overflow-x-auto border border-gray-400 sm:rounded-lg">
                <table className="w-full text-left text-base text-gray-900">
                  <tbody>
                    <tr className={`border-b border-gray-400 bg-white`}>
                      <td
                        // scope="row"
                        className="border-r border-gray-400 px-6 py-2"
                      >
                        Tithi
                      </td>

                      <td className="px-6 py-2 ">
                        {basicPanchang?.tithi?.details?.tithi_name &&
                          basicPanchang.tithi.details.tithi_name}
                      </td>
                    </tr>
                    <tr className={`border-b border-gray-400 bg-white`}>
                      <td
                        // scope="row"
                        className="border-r border-gray-400 px-6 py-2"
                      >
                        Nakshatra
                      </td>

                      <td className="px-6 py-2">
                        {basicPanchang?.nakshatra?.details?.nak_name &&
                          basicPanchang.nakshatra.details.nak_name}
                      </td>
                    </tr>
                    <tr className={`border-b border-gray-400 bg-white`}>
                      <td
                        // scope="row"
                        className="border-r border-gray-400 px-6 py-2"
                      >
                        Yoga
                      </td>

                      <td className="px-6 py-2">
                        {basicPanchang?.yog?.details?.yog_name &&
                          basicPanchang.yog.details.yog_name}
                      </td>
                    </tr>
                    <tr className={`border-b border-gray-400 bg-white`}>
                      <td
                        // scope="row"
                        className="border-r border-gray-400 px-6 py-2"
                      >
                        Karna
                      </td>

                      <td className="px-6 py-2">
                        {basicPanchang?.karan?.details?.karan_name &&
                          basicPanchang.karan.details.karan_name}
                      </td>
                    </tr>
                    <tr className={`border-b border-gray-400 bg-white`}>
                      <td
                        // scope="row"
                        className="border-r border-gray-400 px-6 py-2"
                      >
                        Paksha
                      </td>

                      <td className="px-6 py-2">
                        {basicPanchang?.paksha && basicPanchang.paksha}
                      </td>
                    </tr>
                    <tr className={`border-b border-gray-400 bg-white`}>
                      <td
                        // scope="row"
                        className="border-r border-gray-400 px-6 py-2"
                      >
                        Weekday
                      </td>

                      <td className="px-6 py-2">
                        {basicPanchang?.day && basicPanchang.day}
                      </td>
                    </tr>
                    <tr className={`border-b border-gray-400 bg-white`}>
                      <td
                        // scope="row"
                        className="border-r border-gray-400 px-6 py-2"
                      >
                        Sakha Samvat
                      </td>

                      <td className="px-6 py-2">
                        {basicPanchang?.shaka_samvat &&
                          basicPanchang.shaka_samvat}
                      </td>
                    </tr>
                    <tr className={`bg-white `}>
                      <td
                        // scope="row"
                        className="border-r border-gray-400 px-6 py-2"
                      >
                        Vikram Samvat
                      </td>

                      <td className="px-6 py-2">
                        {basicPanchang?.vikram_samvat &&
                          basicPanchang.vikram_samvat}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-4 flex flex-col justify-center space-y-6 rounded-2xl bg-white px-12 py-6 shadow-xl">
              <Image
                src={"/assets/appointment/live-astro.png"}
                alt={"astrologer"}
                width={300}
                height={370}
                loading={"lazy"}
                className="h-5/6 w-full object-contain"
              />
              <p className="text-base">Talk to our best Astrologers</p>
            </div>
          </div>
          <div className="relative overflow-x-auto rounded-2xl border-r border-l border-gray-300">
            <table className="w-full text-left text-base">
              <thead className="bg-[#DC6563] text-center text-gray-900">
                <tr>
                  <th
                    colSpan={3}
                    className="px-6 py-3 font-[georgia] text-[36px] text-white"
                  >
                    Inauspicious Timings (Ashubha Muhurat)
                  </th>
                </tr>
              </thead>
              <tbody>
                {ashubhaMuhurat &&
                  Object.keys(ashubhaMuhurat).map((item, index: Key) => (
                    <tr
                      key={index}
                      className="border-b border-gray-300 bg-white text-left"
                    >
                      <td className="px-6 py-4 text-left">{item}</td>
                      <td className="px-6 py-4">
                        From{" "}
                        {ashubhaMuhurat[`${item}`] &&
                          ashubhaMuhurat[`${item}`]["start"]}
                      </td>
                      <td className="px-6 py-4">
                        To{" "}
                        {ashubhaMuhurat[`${item}`] &&
                          ashubhaMuhurat[`${item}`]["end"]}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
            <div className="overflow-hidden rounded-lg">
              <p className="bg-[#DC6563] p-5 font-[georgia] text-3xl font-semibold text-white">
                Lagna Chart at Sunrise
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: chalitChart && chalitChart.svg && chalitChart.svg,
                }}
              >
                
              </div>
             <div className="bg-white shadow-xl  rounded-[20px]">
             <Image
    src="/assets/panchang/chart.png"
    alt="chart"
    width={514}
    height={424}
    className='  '
    />
             </div>
            </div>
            <div className="relative overflow-x-auto rounded-2xl bg-white shadow-xl">
              <table className="w-full text-left text-base">
                <thead className="bg-[#DC6563] text-center text-gray-900">
                  <tr>
                    <th
                      colSpan={2}
                      className="p-5  font-[georgia] text-[30px] font-semibold text-white"
                    >
                      Chandrabalam And Tarabalam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-400 text-center">
                    <td className="border-r border-gray-400 py-4 font-medium lg:px-6">
                      Tara Bhala
                    </td>
                    <td className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 md:gap-4 md:p-6 md:pb-16 lg:gap-4 lg:p-6 ">
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Bharani
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Rohini
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Aadra
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Bharani
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Rohini
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Aadra
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Bharani
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Rohini
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Aadra
                      </p>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="whitespace-nowrap border-r border-gray-400 px-6 py-4 font-medium">
                      Chandra Bhala
                    </td>
                    <td className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2  md:gap-4 md:p-6 md:pb-16 lg:gap-4 lg:p-6 ">
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Virgo
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Gemini
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Taurus
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Aries
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Cancer
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
                        Scorpio
                      </p>
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-9 text-base">
                        Capricorn
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="relative overflow-x-auto rounded-2xl border border-gray-400">
            <table className="w-full text-left text-base">
              <thead className=" text-center text-gray-900">
                <tr>
                  <th
                    colSpan={5}
                    className="bg-[#DC6563] px-6 py-3 font-[georgia] text-4xl text-white"
                  >
                    Planetary Position at Sunrise
                  </th>
                </tr>
                <tr className="border-b border-gray-400 bg-white">
                  <th className="border-r border-gray-400 px-6 py-3 text-base font-medium">
                    Planets
                  </th>
                  <th className="border-r border-gray-400 px-6 py-3 text-base font-medium">
                    Rashi
                  </th>
                  <th className="border-r border-gray-400 px-6 py-3 text-base font-medium">
                    Nakshaktra
                  </th>
                </tr>
              </thead>
              <tbody>
                {planetPos &&
                  planetPos.length > 0 &&
                  planetPos.map((item: any, index: Key) => (
                    <tr
                      key={index}
                      className="border-b border-gray-400 bg-white text-center"
                    >
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.name}
                      </td>
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.sign}
                      </td>
                      <td className="border-r border-gray-400 px-6 py-4">
                        {item.nakshatra}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default GetPanchang;
