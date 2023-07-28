import React from "react";
import Section from "../Section";
import { BsToggleOn } from "react-icons/bs";

const Table = () => {
  return (
    <div className="shadow-[0px 4px 4px 0px] bg-[#FFF]">
      <table className="mt-[35px]  w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b bg-gray-100 py-2  lg:text-2xl">Type</th>
            <th className="border-b bg-gray-100 py-2  lg:text-2xl">
              Your Price
            </th>
            <th className="border-b bg-gray-100 py-2 lg:text-2xl">Status</th>
            <th className="py- px- border-b bg-gray-100 lg:text-2xl">
              Next Online Time
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border-b py-2 px-4 lg:text-xl">Report</td>
            <td className="border-b  py-2 lg:px-20 lg:text-xl">(0.0/query)</td>
            <td className="border-b py-2 px-8 lg:px-60 lg:text-xl">
              <BsToggleOn className="text-[20px] text-[#CF2927]" />
            </td>
            <td className=" border-b ">
              <button className="bg-[gray] px-[25px] text-lg text-white md:px-[100px]  lg:py-[14px]">
                N/A
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-b py-2 px-4 lg:text-xl">Report</td>
            <td className="border-b  py-2 lg:px-20 lg:text-xl">(0.0/query)</td>
            <td className="border-b py-2 px-8 lg:px-60 lg:text-xl">
              <BsToggleOn className="text-[20px] text-[#CF2927]" />
            </td>
            <td className=" border-b ">
              <button className="bg-[#00AF1C] px-[25px] text-lg text-white md:px-[100px]  lg:py-[14px]">
                N/A
              </button>
            </td>
          </tr>
          {/* <tr>
            <td className="border-b py-2 px-4 lg:text-xl">Report</td>
            <td className="border-b  py-2 lg:px-40 lg:text-xl">(0.0/query)</td>
            <td className="border-b py-2 px-8 lg:px-60 lg:text-xl">
              <BsToggleOn className="text-[20px] text-[#CF2927]" />
            </td>
            <td className=" border-b ">
              <button className="bg-[#00AF1C] px-[25px] text-lg text-white md:px-[100px] lg:px-[100px] lg:py-[14px]">
                N/A
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-b py-2 px-4 lg:text-xl">Report</td>
            <td className="border-b  py-2 lg:px-40 lg:text-xl">(0.0/query)</td>
            <td className="border-b py-2 px-8 lg:px-60 lg:text-xl">
              <BsToggleOn className="text-[20px] text-[#CF2927]" />
            </td>
            <td className=" border-b ">
              <button className="bg-[#00AF1C] px-[25px] text-lg text-white md:px-[100px] lg:px-[100px] lg:py-[14px]">
                N/A
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-b py-2 px-4 lg:text-xl">Report</td>
            <td className="border-b  py-2 lg:px-40 lg:text-xl">(0.0/query)</td>
            <td className="border-b py-2 px-8 lg:px-60 lg:text-xl">
              <BsToggleOn className="text-[20px] text-[#CF2927]" />
            </td>
            <td className=" border-b ">
              <button className="bg-[#00AF1C] px-[25px] text-lg text-white md:px-[100px] lg:px-[100px] lg:py-[14px]">
                N/A
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-b py-2 px-4 lg:text-xl">Report</td>
            <td className="border-b  py-2 lg:px-40 lg:text-xl">(0.0/query)</td>
            <td className="border-b py-2 px-8 lg:px-60 lg:text-xl">
              <BsToggleOn className="text-[20px] text-[#CF2927]" />
            </td>
            <td className=" border-b ">
              <button className="bg-[#00AF1C] px-[25px] text-lg text-white md:px-[100px] lg:px-[100px] lg:py-[14px]">
                N/A
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-b py-2 px-4 lg:text-xl">Report</td>
            <td className="border-b  py-2 lg:px-40 lg:text-xl">(0.0/query)</td>
            <td className="border-b py-2 px-8 lg:px-60 lg:text-xl">
              <BsToggleOn className="text-[20px] text-[#CF2927]" />
            </td>
            <td className=" border-b ">
              <button className="bg-[#00AF1C] px-[25px] text-lg text-white md:px-[100px] lg:px-[100px] lg:py-[14px]">
                N/A
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-b py-2 px-4 lg:text-xl">Report</td>
            <td className="border-b  py-2 lg:px-40 lg:text-xl">(0.0/query)</td>
            <td className="border-b py-2 px-8 lg:px-60 lg:text-xl">
              <BsToggleOn className="text-[20px] text-[#CF2927]" />
            </td>
            <td className=" border-b ">
              <button className="bg-[#00AF1C] px-[25px] text-lg text-white md:px-[100px] lg:px-[100px] lg:py-[14px]">
                N/A
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-b py-2 px-4 lg:text-xl">Report</td>
            <td className="border-b  py-2 lg:px-40 lg:text-xl">(0.0/query)</td>
            <td className="border-b py-2 px-8  lg:text-xl">
              <BsToggleOn className="text-[20px] text-[#CF2927]" />
            </td>
            <td className=" border-b ">
              <button className="bg-[#00AF1C] px-[25px] text-lg text-white md:px-[100px] lg:px-[100px] lg:py-[14px]">
                N/A
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-b py-2 px-4 lg:text-xl">Report</td>
            <td className="border-b  py-2 lg:px-40 lg:text-xl">(0.0/query)</td>
            <td className="border-b py-2 px-8 lg:px-60 lg:text-xl">
              <BsToggleOn className="text-[20px] text-[#CF2927]" />
            </td>
            <td className=" border-b ">
              <button className="bg-[#00AF1C] px-[25px] text-lg text-white md:px-[100px] lg:px-[100px] lg:py-[14px]">
                N/A
              </button>
            </td>
          </tr> */}

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
