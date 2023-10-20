import React from "react";

type Props = {
  ftitle1: string;
  ftitleResult1: string;
  ftitle2: string;
  ftitleResult2: string;
  ftitle3: string;
  ftitleResult3: string;
  ftitle4: string;
  ftitleResult4: string;
  stitle1: string;
  stitleResult1: string;
  stitle2: string;
  stitleResult2: string;
  stitle3: string;
  stitleResult3: string;
  stitle4: string;
  stitleResult4: string;
};

const Table = ({
  ftitle1,
  ftitle2,
  ftitle3,
  ftitle4,
  ftitleResult1,
  ftitleResult2,
  ftitleResult3,
  ftitleResult4,
  stitle1,
  stitle2,
  stitle3,
  stitle4,
  stitleResult1,
  stitleResult2,
  stitleResult3,
  stitleResult4,
}: Props) => {
  return (
    <div
      className={`grid w-full gap-[83px] px-4 py-8 text-black md:px-16 lg:grid-cols-2 lg:px-32 `}
    >
      <div className="  rounded-[20px] border-[#A9A9A9]  lg:w-1/2">
        <div className="overflow-x-auto">
          <table className="border-[#A9A9A9]-collapse min-w-full table-fixed border">
            <thead>
              <tr>
                <th className="border border-[#A9A9A9] p-2">Muhurat</th>
                <th className="border border-[#A9A9A9] p-2">
                  Auspicious or Inauspicious
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows go here */}
              <tr>
                <td className="border border-[#A9A9A9] p-2">{ftitle1}</td>
                <td className="border border-[#A9A9A9] p-2">{ftitleResult1}</td>
              </tr>
              <tr>
                <td className="border border-[#A9A9A9] p-2">{ftitle2}</td>
                <td className="border border-[#A9A9A9] p-2">{ftitleResult2}</td>
              </tr>
              <tr>
                <td className="border border-[#A9A9A9] p-2">{ftitle3}</td>
                <td className="border border-[#A9A9A9] p-2">{ftitleResult3}</td>
              </tr>
              <tr>
                <td className="border border-[#A9A9A9] p-2">{ftitle4}</td>
                <td className="border border-[#A9A9A9] p-2">{ftitleResult4}</td>
              </tr>

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="rounded-[20px] border-[#A9A9A9]  lg:w-1/2">
        <div className="overflow-x-auto ">
          <table className="min-w-full table-fixed border-collapse">
            <thead>
              <tr>
                <th className="border border-[#A9A9A9] p-2">Muhurat</th>
                <th className="border border-[#A9A9A9] p-2">
                  Auspicious or Inauspicious
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows go here */}
              <tr>
                <td className="border border-[#A9A9A9] p-2">{stitle1}</td>
                <td className="border border-[#A9A9A9] p-2">{stitleResult1}</td>
              </tr>
              <tr>
                <td className="border border-[#A9A9A9] p-2">{stitle2}</td>
                <td className="border border-[#A9A9A9] p-2">{stitleResult2}</td>
              </tr>
              <tr>
                <td className="border border-[#A9A9A9] p-2">{stitle3}</td>
                <td className="border border-[#A9A9A9] p-2">{stitleResult3}</td>
              </tr>
              <tr>
                <td className="border border-[#A9A9A9] p-2">{stitle4}</td>
                <td className="border border-[#A9A9A9] p-2">{stitleResult4}</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
