import Section from "@/components/Section";
import React from "react";

type Props = {
  title: string;
  title2: string;
  className: string;
};

const Table = ({ title, title2, className }: Props) => {
  return (
    <div
      className={`w-full gap-[83px]  px-4 py-8 text-black md:px-16 lg:flex lg:px-32 ${className}`}
    >
      <div className="  rounded-[20px] border-[1px] border-white lg:w-1/2">
        <div className="mb-4  text-center font-bold">{title}</div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border-collapse">
            <thead>
              <tr>
                <th className="border p-2">
                  Auspicious Annaprashan Muhurat 2023
                </th>
                <th className="border p-2">Timings</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows go here */}
              <tr>
                <td className="border p-2">4 January 2023, Wednesday</td>
                <td className="border p-2">08.00 -10:00, 12.00 - 16:00</td>
              </tr>
              <tr>
                <td className="border p-2">4 January 2023, Wednesday</td>
                <td className="border p-2">08.00 -10:00, 12.00 - 16:00</td>
              </tr>
              <tr>
                <td className="border p-2">4 January 2023, Wednesday</td>
                <td className="border p-2">08.00 -10:00, 12.00 - 16:00</td>
              </tr>
              <tr>
                <td className="border p-2">4 January 2023, Wednesday</td>
                <td className="border p-2">08.00 -10:00, 12.00 - 16:00</td>
              </tr>
              <tr>
                <td className="border p-2">4 January 2023, Wednesday</td>
                <td className="border p-2">08.00 -10:00, 12.00 - 16:00</td>
              </tr>

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mx-auto mt-5 max-w-screen-xl rounded-[20px] border-[1px] border-white lg:w-1/2">
        <div className="mb-4  text-center font-bold">{title2}</div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border-collapse">
            <thead>
              <tr>
                <th className="border p-2">
                  Auspicious Annaprashan Muhurat 2023
                </th>
                <th className="border p-2">Timings</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows go here */}
              <tr>
                <td className="border p-2">4 January 2023, Wednesday</td>
                <td className="border p-2">08.00 -10:00, 12.00 - 16:00</td>
              </tr>
              <tr>
                <td className="border p-2">4 January 2023, Wednesday</td>
                <td className="border p-2">08.00 -10:00, 12.00 - 16:00</td>
              </tr>
              <tr>
                <td className="border p-2">4 January 2023, Wednesday</td>
                <td className="border p-2">08.00 -10:00, 12.00 - 16:00</td>
              </tr>
              <tr>
                <td className="border p-2">4 January 2023, Wednesday</td>
                <td className="border p-2">08.00 -10:00, 12.00 - 16:00</td>
              </tr>
              <tr>
                <td className="border p-2">4 January 2023, Wednesday</td>
                <td className="border p-2">08.00 -10:00, 12.00 - 16:00</td>
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
