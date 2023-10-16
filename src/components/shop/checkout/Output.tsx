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
    <>
      <div className="">
        <p className="mt-[35px] text-center text-[22px] font-semibold ">
          Continue With Saved Address
        </p>
      </div>

      <div className="mt-[10px] flex  justify-center">
        <div className="grid grid-cols-2  rounded-[20px]  border-[2px]   border-[#A9A9A9]">
          <div className="px-8  font-[Roboto] font-[500]">
            <p className="mt-[24px]">First Name : {firstName}</p>
            <p className="mt-[24px]">Gender : {gender}</p>
            <p className="mt-[24px]">Date Of Birth : {dob}</p>
            <p className="mt-[24px]">Time Of Birth : {tob}</p>
            <p className="mt-[24px]">Birth Location : {birthLocation}</p>
            <p className="mt-[24px]">City : {city}</p>
            <p className="mt-[24px]">LandMark : {landmark}</p>
            <p className="mt-[24px]">State : {state}</p>
            <p className="mt-[24px]">Country : {country}</p>
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
    </>
  );
};

export default Output;
