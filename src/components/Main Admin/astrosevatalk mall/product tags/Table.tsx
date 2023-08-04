import React from "react";
import Btns from "./Btns";

type Props = {
  count: number;
  slug: string;

  desc: string;
  name: string;
};

const Table = ({ name, desc, slug, count }: Props) => {
  return (
    <div className="overflow-x-auto rounded-[5px] border-[1px] border-[#A9A9A9]">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Name</span>
              </label>
            </th>
            <th className="px-1 ">Description</th>
            <th className="px-20 ">Slug</th>
            <th className="px-5 ">Count</th>
          </tr>
        </thead>

        <tbody>
          {/* { table content start from here} */}
          <tr>
            <td className="bg-[#F5F5F5] px-4 ">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-[14px] font-bold">{`${name}`}</span>

              <div className="flex space-x-2">
                <button className="">Edit</button>
                <span className="text-[#A9A9A9]">|</span>
                <button className=" lg:w-20">Quick Edit</button>
                <span className="text-[#A9A9A9]">|</span>
                <button className="">Delete</button>
              </div>
              <div className="mt-2">
                <button className="">View</button>
              </div>
            </td>
            <td className="bg-[#F5F5F5] px-4">{`${desc}`}</td>
            <td className="bg-[#F5F5F5] px-4">{`${slug}`}</td>
            <td className="bg-[#F5F5F5] px-4">{`${count}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
