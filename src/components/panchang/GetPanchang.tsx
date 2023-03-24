import React from "react";
import { Input } from "../forms";

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
    </div>
  );
}

export default GetPanchang;
