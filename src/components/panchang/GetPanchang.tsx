import { format } from "date-fns";
import Image from "next/image";
import React, { Key } from "react";
import Section from "../Section";

type Props = {};

const details = [1, 2, 34, 5, 6, 6, 7, 8, 79];
const timings = [1, 2, 34, 5, 6, 6];

function GetPanchang({}: Props) {
  return (
    <div>
      <div className="bg-[url('/assets/cloud-bg.webp')] py-[55px]">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-x-6">
          <div className="col-span-8">
            <input
              type="text"
              id="location"
              defaultValue={"New Delhi, India"}
              className={`bg-[#FFF9EA]] w-full appearance-none rounded-xl border border-gray-400 px-12 !py-3 !text-[22px] text-sm text-gray-900 placeholder:text-[22px] placeholder:font-normal focus:border-[#0B8188] focus:outline-none`}
              placeholder={"Enter your city"}
              name={"location"}
            />
          </div>
          <div className="col-span-4">
            <button
              type="submit"
              className="mx-auto w-full rounded-xl border-2 border-gray-900 bg-gradient-to-b from-[#D3B160] to-[#FFE9A1] px-12 py-2 font-semibold text-black lg:text-[22px]"
            >
              Get Panchang
            </button>
          </div>
        </div>
      </div>
      <Section>
        <div className="space-y-12 py-8 text-center lg:py-[55px]">
          <div className="space-y-4">
            <p className="font-[georgia] text-2xl font-semibold md:text-4xl">
              Today’s Panchang
            </p>
            <p className="text-lg lg:text-[22px]">
              {format(new Date(), "MMMM dd, EEEE")} | New Delhi, Delhi | India
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div className="rounded-2xl bg-[#E2CB85] p-3">
                  <p className="text-[22px]">Sunrise</p>
                  <p className="text-xs">06:44 - 18:21</p>
                </div>
                <div className="rounded-2xl bg-[#E2CB85] p-3">
                  <p className="text-[22px]">Moonrise</p>
                  <p className="text-xs">14:34 - 04:18</p>
                </div>
              </div>

              <div className="relative overflow-x-auto border border-gray-400 sm:rounded-lg">
                <table className="w-full text-left text-base text-gray-900">
                  <tbody>
                    {details?.map((item, index: Key) => (
                      <tr
                        key={index}
                        className={`bg-white ${
                          index !== details.length - 1
                            ? "border-b border-gray-400"
                            : ""
                        }`}
                      >
                        <td
                          // scope="row"
                          className="border-r border-gray-400 px-6 py-2"
                        >
                          Tithi
                        </td>
                        <td className="px-6 py-2">Dawadashi</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-4 flex flex-col justify-center space-y-6 rounded-2xl bg-[#FFF7E5] px-12 py-6">
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
              <thead className="bg-[#E2CB85] text-center text-gray-900">
                <tr>
                  <th colSpan={3} className="px-6 py-3 font-[georgia] text-4xl">
                    Inauspicious Timings (Ashubha Muhurat)
                  </th>
                </tr>
              </thead>
              <tbody>
                {timings.map((item, index: Key) => (
                  <tr
                    key={index}
                    className="border-b border-gray-300 bg-white text-center"
                  >
                    <td className="px-6 py-4">Kantaka / Mrityu</td>
                    <td className="px-6 py-4">From 04-03-23 02:41:01 AM</td>
                    <td className="px-6 py-4">To 04-03-23 04:08:23 AM</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
            <div className="overflow-hidden rounded-lg">
              <p className="bg-[#E2CB85] p-5 font-[georgia] text-3xl font-semibold">
                Lagna Chart at Sunrise
              </p>
              <div className="bg-[#FFF7E5] p-4">
                <Image
                  src={"/assets/panchang/chart.png"}
                  alt={"astrologer"}
                  width={300}
                  height={370}
                  loading={"lazy"}
                  className="h-1/2 w-full object-contain"
                />
              </div>
            </div>
            <div className="relative overflow-x-auto rounded-2xl bg-[#FFF7E5]">
              <table className="w-full text-left text-base">
                <thead className="bg-[#E2CB85] text-center text-gray-900">
                  <tr>
                    <th
                      colSpan={2}
                      className="p-5 font-[georgia] text-3xl font-semibold"
                    >
                      Chandrabalam And Tarabalam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-400 text-center">
                    <td className="border-r border-gray-400 px-6 py-4 font-medium">
                      Tara Bhala
                    </td>
                    <td className="grid grid-cols-3 gap-4 p-6 pb-16">
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
                    <td className="grid grid-cols-3 gap-4 p-6 pb-16">
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
                      <p className="mx-auto flex w-full items-center justify-center rounded-lg border border-gray-400 py-2 px-7 text-base">
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
                    className="bg-[#E2CB85] px-6 py-3 font-[georgia] text-4xl"
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
                    Longtitude
                  </th>
                  <th className="border-r border-gray-400 px-6 py-3 text-base font-medium">
                    Nakshaktra
                  </th>
                  <th className="px-6 py-3 text-base font-medium">Pada</th>
                </tr>
              </thead>
              <tbody>
                {timings.map((item, index: Key) => (
                  <tr
                    key={index}
                    className="border-b border-gray-400 bg-white text-center"
                  >
                    <td className="border-r border-gray-400 px-6 py-4">
                      Ascendent
                    </td>
                    <td className="border-r border-gray-400 px-6 py-4">
                      Cancer
                    </td>
                    <td className="border-r border-gray-400 px-6 py-4">
                      17∘27′48″
                    </td>
                    <td className="border-r border-gray-400 px-6 py-4">
                      Shatabhisha
                    </td>
                    <td className="px-6 py-4">4</td>
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
