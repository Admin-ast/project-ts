"use client";
import React, { Key } from "react";
import { startCase, toLower } from "lodash";

type Props = { details: any };

function PrimaryTable({ details }: Props) {
  const bodyContent = Object.keys(details).map((key) => {
    return (
      <tr key={key} className="bg-white text-start odd:bg-[#FFF7E5]">
        <td className="w-1/2 px-6 py-4">{startCase(toLower(key))}</td>
        <td className="w-1/2 px-6 py-4">
          {typeof details[key] === "string" && !details[key].includes(":")
            ? startCase(toLower(details[key]))
            : details[key]}
        </td>
      </tr>
    );
  });

  return (
    <div className="relative h-fit overflow-x-auto rounded-2xl border border-gray-300 text-gray-800">
      <table className="w-full text-left text-sm">
        <tbody>{bodyContent}</tbody>
      </table>
    </div>
  );
}

export default PrimaryTable;
