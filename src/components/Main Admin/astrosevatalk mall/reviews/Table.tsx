import React from "react";

type Props = {};

const Table = (props: Props) => {
  return (
    <div className="overflow-x-auto rounded-[5px] border-[1px] border-[#A9A9A9]">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border-b-[1px] border-[#A9A9A9] px-4 py-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Type</span>
              </label>
            </th>
            <th className="border-b-[1px] border-[#A9A9A9] px-4">Author</th>
            <th className="border-b-[1px] border-[#A9A9A9] px-4">Rating</th>
            <th className="border-b-[1px] border-[#A9A9A9] px-4">Review</th>
            <th className="border-b-[1px] border-[#A9A9A9] px-4">Product</th>
            <th className="border-b-[1px] border-[#A9A9A9] px-4">
              Submitted on
            </th>
          </tr>
        </thead>

        <tbody>
          {/* { table content start from here} */}
          {/* <td className="px-4">
             <div className="bg-[#F5F5F5]">
            <p className="">No Review Found</p>
        </div> 
            </td>  */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
