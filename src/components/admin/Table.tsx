// import React, { useState } from "react";
// import Section from "../Section";
// import { BsToggleOn } from "react-icons/bs";
// import ToggleSwitch from "./offer/ToggleSwitch";
// import Popup from "./Popup";

// const Table = () => {
//   const [isPopupOpen,setIsPopupOpen]=useState(false)

//   const togglePopup=()=>{
//     setIsPopupOpen(!isPopupOpen)
//   }
//   return (
//     <div className="shadow-xl bg-[#FFF]">
//       <table className="mt-[35px]  w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="border-b bg-gray-100 py-2  lg:text-2xl">Type</th>
//             <th className="border-b bg-gray-100 py-2  lg:text-2xl">
//               Your Price
//             </th>
//             <th className="border-b bg-gray-100 py-2 lg:text-2xl">Status</th>
//             <th className="border-b bg-gray-100 lg:text-2xl text-[12px]">
//               Next Online Time
//             </th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td className="border-b py-2 px-4 lg:text-xl">Report</td>
//             <td className="border-b  py-2 lg:px-20 lg:text-xl">(0.0/query)</td>
//             <td className="border-b py-2 px-8 lg:px-60 lg:text-xl">
//               <ToggleSwitch className="bg-[#00AF1C]" anyName="bg-[#CF2927]" />
//             </td>
//             <td className=" border-b ">
//               <button className="bg-[gray] px-1  text-lg text-white md:px-[70px]  lg:py-[14px]">
//                 N/A
//               </button>
//             </td>
//           </tr>
//           <tr>
//             <td className="border-b py-2 px-4 lg:text-xl">Report</td>
//             <td className="border-b  py-2 lg:px-20 lg:text-xl">(0.0/query)</td>
//             <td className="border-b py-2 px-8 lg:px-60 lg:text-xl">
//               <ToggleSwitch className="bg-[#00AF1C]" anyName="bg-[#CF2927]" />
//             </td>
//             <td className=" border-b ">
//               <button onClick={togglePopup} className="bg-[#00AF1C] px-1 text-lg text-white md:px-[70px]  lg:py-[14px]">
//                 N/A
//               </button>
//               <Popup isOpen={isPopupOpen} onClose={togglePopup} day1="Today" day2="Tomorrow" day3="Tomorrow" day4="Tomorrow" day5="Tomorrow" day6="Tomorrow" day7="Tomorrow" time1="00:00" time2="00:00" time10="00:00" time3="00:00" time4="00:00" time5="00:00" time6="00:00" time7="00:00" time8="00:00" time9="00:00" time11="00:00" time12="00:00" time13="00:00" time14="00:00"/>
//               <div
//         className={`fixed top-0 left-0 h-screen w-screen transition-opacity ${
//           isPopupOpen ? "opacity-50" : "pointer-events-none opacity-0"
//         } bg-gray-500`}
//       ></div>
//             </td>
//           </tr>

//           {/* Add more rows as needed */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

import React, { useState } from "react";
import ToggleSwitch from "./offer/ToggleSwitch";
import Popup from "./Popup";

type Props = {};

const Table = (props: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const Data = [
    {
      type: "Report",
      price: "(0.0/query)",
    },
    {
      type: "Report",
      price: "(0.0/query)",
    },

    // Add more sample data as needed
  ];

  return (
    <div className="mt-[51px] overflow-x-auto bg-white shadow-xl">
      <table className="min-w-full divide-y divide-gray-200 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <thead>
          <tr className="">
            <th className="w-1/6  px-4 py-2">Type</th>
            <th className="w-1/5  px-4 py-2">Your Price</th>
            <th className="w-1/5  px-4 py-2">Status</th>
            <th className="w-1/5  px-4 py-2">Next Online Time</th>
          </tr>
        </thead>
        <tbody className="">
          {Data.map((item, index) => (
            <tr
              key={index}
              className="border-b-[1px] border-[#D9D9D9] bg-white hover:bg-gray-100"
            >
              <td className="w-1/5  px-4 py-2">{item.type}</td>
              <td className="w-1/5  px-4 py-2">{item.price}</td>
              <td className="w-1/5  px-4 py-2">
                <ToggleSwitch className="bg-[#00AF1C]" anyName="bg-[#CF2927]" />
              </td>
              <td className="w-1/5  px-4 py-2">
                <button
                  onClick={togglePopup}
                  className="bg-[#00AF1C] px-1 text-lg text-white md:px-[70px]  lg:py-[14px]"
                >
                  N/A
                </button>
                <Popup
                  isOpen={isPopupOpen}
                  onClose={togglePopup}
                  day1="Today"
                  day2="Tomorrow"
                  day3="Tomorrow"
                  day4="Tomorrow"
                  day5="Tomorrow"
                  day6="Tomorrow"
                  day7="Tomorrow"
                  time1="00:00"
                  time2="00:00"
                  time10="00:00"
                  time3="00:00"
                  time4="00:00"
                  time5="00:00"
                  time6="00:00"
                  time7="00:00"
                  time8="00:00"
                  time9="00:00"
                  time11="00:00"
                  time12="00:00"
                  time13="00:00"
                  time14="00:00"
                />
                <div
                  className={`fixed top-0 left-0 h-screen w-screen transition-opacity ${
                    isPopupOpen ? "opacity-50" : "pointer-events-none opacity-0"
                  } bg-gray-500`}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
