import React from "react";
import { FaUser } from "react-icons/fa";

type Props = {};

const Payment = (props: Props) => {
  return (
    <div className="my-auto mt-[34px] rounded-[12px] border-[1px] border-[#D9D9D9] px-[15px]">
      <div className="mt-[15px] bg-[#D9D9D9]">
        <div className="flex  h-[20px] items-center gap-[6px] px-4">
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[100%]  border-[1px] border-[#D9D9D9]">
            <FaUser className="text-[15px] text-[#A9A9A9]" />
          </div>
          <p className="text-[#A9A9A9]">Birth Details</p>
        </div>
      </div>

      <form className="mx-auto mt-8  max-w-md">
        {/* 1st line - 1 input */}
        <div className="mb-4">
          <label
            htmlFor="input1"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Card Number
          </label>
          <input
            type="text"
            id="input1"
            name="input1"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </div>

        {/* 2nd line - 3 inputs in flex direction */}
        <div className="mb-4 flex">
          {[1, 2].map((index) => (
            <div key={index} className="mr-2 flex-1">
              <label
                htmlFor={`input2_${index}`}
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id={`input2_${index}`}
                name={`input2_${index}`}
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>
          ))}
        </div>

        {/* 3rd line - 3 inputs in flex direction */}

        {/* 4th line - 1 input */}

        {/* Submit button */}
        {/* <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div> */}
      </form>
    </div>
  );
};

export default Payment;
