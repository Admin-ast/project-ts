import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import Section from "../Section";

type Props = {};

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
        <div className="py-8 text-center lg:py-[55px] ">
          <div className="space-y-4 pb-12">
            <p className="font-[georgia] text-2xl font-semibold md:text-4xl">
              Today’s Panchang
            </p>
            <p className="text-lg lg:text-[22px]">
              {format(new Date(), "MMMM dd, EEEE")} | New Delhi, Delhi | India
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
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
            </div>
            <div className="col-span-4 flex flex-col justify-evenly rounded-2xl bg-[#FFF7E5] p-12">
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
        </div>
      </Section>
    </div>
  );
}

export default GetPanchang;
