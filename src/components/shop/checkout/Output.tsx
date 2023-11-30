import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

type Props = {
  firstName: string;
  gender: string;
  dob: string;
  tob: string;
  birthLocation: string;
  city: string;
  state: string;
  country: string;
  landmark: string;
};

const Output = ({
  firstName,
  gender,
  dob,
  tob,
  birthLocation,
  city,
  state,
  country,
  landmark,
}: Props) => {
  return (
    <div className="py-[30px]">
      <div className="">
        <p className=" text-center text-[22px] font-semibold ">
          Continue With Saved Address
        </p>
      </div>

      <div className="mt-[10px]  flex  justify-center">
        <div className="grid rounded-[20px] border-[2px]  border-[#A9A9A9]  pb-[30px]   lg:flex">
          <div className="px-8  font-[Roboto] font-[500]">
            <p className="mt-[24px]">First Name : {firstName}</p>
            <p className="mt-[24px]">Gender : {gender}</p>
            <p className="mt-[24px]">Date Of Birth : {dob}</p>
            <p className="mt-[24px]">Time Of Birth : {tob}</p>
            <p className="mt-[24px]">Birth Location : {birthLocation}</p>
            <p className="mt-[24px]">City : {city}</p>
            <p className="mt-[24px]">LandMark : {landmark}</p>
            <p className="mt-[24px]">State : {state}</p>
            <div className="flex items-center gap-5 lg:gap-[200px]">
              <div className="">
                {" "}
                <p className="">Country : {country}</p>
              </div>
              <div className="">
                {" "}
                <button className="rounded-[10px]  bg-gradient-to-b from-[#FF0600] to-[#d84f50] px-2 py-1 text-white">
                  Deliver To This Address
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[16px] flex justify-end gap-[10px] px-8">
            <div className="">
              <Image
                src="/assets/shop/edit.png"
                alt="edit"
                width={20}
                height={20}
                className=""
              />
            </div>
            <div className="">
              <Image
                src="/assets/shop/delete.png"
                alt="edit"
                width={20}
                height={20}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output;
