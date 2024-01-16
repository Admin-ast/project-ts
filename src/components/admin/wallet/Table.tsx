import React from "react";

type Props = {};

const Table = (props: Props) => {
  const Data = [
    {
      orderId: "12345",
      description: "Sample description 1",
      category: "Sample category 1",
      transactionAmount: "$100.00",
      dateTime: "2023-07-28 12:34:56",
    },
    {
      orderId: "67890",
      description: "Sample description 2",
      category: "Sample category 2",
      transactionAmount: "$50.00",
      dateTime: "2023-07-28 15:20:30",
    },
    // Add more sample data as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/6 border border-gray-300 px-4 py-2">Order ID</th>
            <th className="w-1/5 border border-gray-300 px-4 py-2">
              Description
            </th>
            <th className="w-1/5 border border-gray-300 px-4 py-2">Category</th>
            <th className="w-1/5 border border-gray-300 px-4 py-2">
              Transaction Amount
            </th>
            <th className="w-1/5 border border-gray-300 px-4 py-2">
              Date & Time
            </th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item) => (
            <tr key={item.orderId} className="bg-white hover:bg-gray-100">
              <td className="w-1/5 border border-gray-300 px-4 py-2">
                {item.orderId}
              </td>
              <td className="w-1/5 border border-gray-300 px-4 py-2">
                {item.description}
              </td>
              <td className="w-1/5 border border-gray-300 px-4 py-2">
                {item.category}
              </td>
              <td className="w-1/5 border border-gray-300 px-4 py-2">
                {item.transactionAmount}
              </td>
              <td className="w-1/5 border border-gray-300 px-4 py-2">
                {item.dateTime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
