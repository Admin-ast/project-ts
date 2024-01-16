import React from "react";

interface AvailabilityData {
  available: number;
  busy: number;
}

interface AvailabilityTableProps {
  data: {
    call: AvailabilityData;
    chat: AvailabilityData;
    live: AvailabilityData;
  };
}

const AvailabilityTable: React.FC<AvailabilityTableProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse">
      <thead className="sticky top-0 bg-gray-200">
        <tr>
          <th className="py-2 px-4"></th>
          <th className="py-2 px-4 text-center">Available</th>
          <th className="py-2 px-4 text-center">Busy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4">Call</td>
          <td className="py-2 px-4 text-center">{data.call.available}</td>
          <td className="py-2 px-4 text-center">{data.call.busy}</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="py-2 px-4">Chat</td>
          <td className="py-2 px-4 text-center">{data.chat.available}</td>
          <td className="py-2 px-4 text-center">{data.chat.busy}</td>
        </tr>
        <tr>
          <td className="py-2 px-4">Live</td>
          <td className="py-2 px-4 text-center">{data.live.available}</td>
          <td className="py-2 px-4 text-center">{data.live.busy}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AvailabilityTable;
