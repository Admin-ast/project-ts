import { Button } from "@/components/forms";
import React, { useState } from "react";

type Props = {
  onClose: () => void;
};

const PhoneNumberForm = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50  ">
      <div className="rounded-xl  bg-white shadow-lg  ">
        <div className="flex items-center justify-center gap-10 rounded-t-md bg-[#DC6563] py-5">
          <p className="text-center  text-xl font-bold text-white">
            Update Phone Numbers
          </p>

          <button
            onClick={onClose}
            className="text-end font-bold text-white text-[20x] hover:text-gray-800 focus:outline-none"
          >
            X
          </button>
        </div>
        <div className="bg-[#dc656380]">
          <p className="text-center">
            You will get call and chat alerts on these number
          </p>
        </div>

        <div className="py-5 px-4 font-bold">
          <label htmlFor="primaryPhoneNumber">Primary Phone Number:</label>
          <div className="flex gap-1">
            <input
              type="tel"
              id="primaryPhoneNumber"
              className="w-1/3 rounded-md border px-3 py-2"
              placeholder="+91 India"
            />

            <input
              type="tel"
              id="primaryPhoneNumber"
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter primary phone number"
            />
            <div className="bg-[#A9A9A9] px-10 text-[20px] text-white lg:ml-10">
              <Button btnText="Verify" />
            </div>
          </div>
        </div>
        <div>
          <div className="py-5 px-4">
            <label htmlFor="secondaryPhoneNumber" className="font-bold">
              Secondary Phone Number:
            </label>
            <div className="flex gap-1 ">
              <input
                type="tel"
                id="primaryPhoneNumber"
                className="w-1/3 rounded-md border px-3 py-2"
                placeholder="+91 India"
              />
              <input
                type="tel"
                id="primaryPhoneNumber"
                className="w-full rounded-md border px-3 py-2"
                placeholder="Enter secondary phone number"
              />
              <div className="bg-[#A9A9A9] px-10 text-[20px] text-white lg:ml-10">
                <Button btnText="Verify" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PhoneNumberForm;
