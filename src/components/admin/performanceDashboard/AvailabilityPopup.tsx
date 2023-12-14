import React, { useState } from "react";
import TableHeader from "./TableHeader";
interface AvailabilityPopupProps {
  onClose: () => void;
}

interface TableData {
  date: string;
  availableChat: number;
  availableCall: number;
  busyChat: number;
  busyCall: number;
  availableLive: number;
}

const AvailabilityPopup: React.FC<AvailabilityPopupProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const tableData = [
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    {
      date: "01-01-2023",
      availableChat: 10,
      availableCall: 5,
      busyChat: 2,
      busyCall: 1,
      availableLive: 3,
    },
    // Add more data for other days
  ];

  return (
    <div className="">
      {" "}
      {/* Add mt-10 here */}
      <div
        className={`fixed inset-0 flex items-center justify-center ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Rest of your component... */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => {
            setIsOpen(false);
            onClose();
          }}
        ></div>
        <div className="z-10 max-h-[80vh] overflow-y-auto rounded bg-white p-4 shadow-lg">
          <button
            onClick={() => {
              setIsOpen(false);
              onClose();
            }}
            className="absolute top-2 right-2 cursor-pointer text-gray-700 hover:text-gray-900"
          >
            Close
          </button>
          <div className=" mb-4 mt-4 font-bold">
            <TableHeader />
          </div>{" "}
          {/* Add heading here */}
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-center">Available Chat</th>
                <th className="py-2 px-4 text-center">Available Call</th>
                <th className="py-2 px-4 text-center">Busy Chat</th>
                <th className="py-2 px-4 text-center">Busy Call</th>
                <th className="py-2 px-4 text-center">Available Live</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="py-2 px-4">{row.date}</td>
                  <td className="py-2 px-4 text-center">{row.availableChat}</td>
                  <td className="py-2 px-4 text-center">{row.availableCall}</td>
                  <td className="py-2 px-4 text-center">{row.busyChat}</td>
                  <td className="py-2 px-4 text-center">{row.busyCall}</td>
                  <td className="py-2 px-4 text-center">{row.availableLive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityPopup;
