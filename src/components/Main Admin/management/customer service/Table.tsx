// import React, { useState } from "react";
// import { BsThreeDotsVertical } from "react-icons/bs";

// type Props = {};

// const Table = (props: Props) => {
//     const [showOptions, setShowOptions] = useState(false);

//     const toggleOptions = () => {
//       setShowOptions(!showOptions);
//     };

//     const handleEdit = () => {
//       // Implement edit functionality
//     };

//     const handleDelete = () => {
//       // Implement delete functionality
//     };
//   const Data = [
//     {
//         id:1,
//         image:"/assets/admin/Dashboard_image.png",
//       name: "Prerna Sharma",
//       type: "Guest",
//       details: "PrernaSharma@gmail.com",
//       number: "+91-123-456-7890",
//       profesionalinfo: "N/A",
//       joinedDate: "2023-07-28 ",
//       joinedTime: "04:55 AM ",
//       lastUpdatedDate: "2023-07-28 ",
//       lastUpdatedTime: "04:55 AM ",
//     },

//     // Add more sample data as needed
//   ]

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  ">
//         <thead>
//           <tr className="border-b-[1px] border-[#D9D9D9]">
//             <th className="w-1/6   px-4 py-2">Name And Type</th>
//             <th className="w-1/5   px-4 py-2">
//             Details
//             </th>

//             <th className="w-1/5   px-4 py-2">
//               Professional Info
//             </th>
//             <th className="w-1/5   px-4 py-2">
//              Joined
//             </th>
//             <th className="w-1/5   px-4 py-2">
//              Last Updated
//             </th>
//             <th className="w-1/5  px-4 py-2">
//            Action
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {Data.map((item) => (
//             <tr key={item.id} className="bg-white hover:bg-gray-100">
//                 <div className="flex">
//                 <td className="  w-1/4 px-2 py-2">
//                     <img src={item.image} alt="" className="" />

//               </td>
//                 <td className="   py-2">
//                 <div >
//   <div >{item.name}</div>
//   <div >{item.type}</div>
// </div>

//               </td>

//                 </div>

//               <td className="w-1/5  px-4 py-2">
//               <div >
//   <div >{item.details}</div>
//   <div >{item.number}</div>
// </div>

//               </td>
//               <td className="w-1/9  lg:px-20 py-2">
//                 {item.profesionalinfo}
//               </td>
//               <td className="w-1/5  lg:px-16 py-2">
//               <div  >
//   <div >{item.joinedDate}</div>
//   <div >{item.joinedTime}</div>
//   </div>
//               </td>
//               <td className="w-1/5  lg:px-16 py-2">
//               <div  >
//   <div >{item.lastUpdatedDate}</div>
//   <div >{item.lastUpdatedTime}</div>
//   </div>

//               </td>
//               <td>
//               <div className="relative ml-auto flex space-x-2 ">
//           <div onClick={toggleOptions} className="cursor-pointer  text-3xl">
//             <BsThreeDotsVertical />
//           </div>
//           {showOptions && (
//             <div className="absolute right-5 top-8  rounded border border-gray-300 bg-white shadow-lg">
//               <ul className="py-2">
//                 <li
//                   className="cursor-pointer px-4 py-2 hover:bg-gray-100"
//                   onClick={handleEdit}
//                 >
//                   Edit
//                 </li>
//                 <li
//                   className="cursor-pointer px-4 py-2 hover:bg-gray-100"
//                   onClick={handleDelete}
//                 >
//                   Delete
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {};

const Table = (props: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleEdit = () => {
    // Implement edit functionality here
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    // Implement delete functionality here
    console.log("Delete clicked");
  };

  const Data = [
    {
      id: 1,
      image: "/assets/admin/Dashboard_image.png",
      name: "Prerna Sharma",
      type: "Guest",
      details: "PrernaSharma@gmail.com",
      number: "+91-123-456-7890",
      professionalinfo: "N/A",
      joinedDate: "2023-07-28 ",
      joinedTime: "04:55 AM ",
      lastUpdatedDate: "2023-07-28 ",
      lastUpdatedTime: "04:55 AM ",
    },
    // Add more sample data as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <thead>
          <tr className="border-b-[1px] border-[#D9D9D9]">
            <th className="w-1/6 px-4 py-2">Name And Type</th>
            <th className="w-1/5 px-4 py-2">Details</th>
            <th className="w-1/5 px-4 py-2">Professional Info</th>
            <th className="w-1/5 px-4 py-2">Joined</th>
            <th className="w-1/5 px-4 py-2">Last Updated</th>
            <th className="w-1/5 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item) => (
            <tr key={item.id} className="bg-white hover:bg-gray-100">
              <td className="w-1/4 px-2 py-2">
                <div className="flex gap-2">
                  <div className="w-1/4 ">
                    <img src={item.image} alt="" className="" />
                  </div>
                  <div className="w-full">
                    <div>{item.name}</div>
                    <div>{item.type}</div>
                  </div>
                </div>
              </td>
              <td className=" w-1/5 px-2 py-2">
                <div className="w-full">
                  <div>{item.details}</div>
                  <div> {item.number}</div>
                </div>
              </td>
              <td className="w-1/5 py-2 lg:px-16">
                <div className="">{item.professionalinfo}</div>
              </td>

              <td className="w-1/5 py-2 lg:px-16">
                <div>
                  <div>{item.joinedDate}</div>
                  <div>{item.joinedTime}</div>
                </div>
              </td>
              <td className="w-1/5 py-2 lg:px-10">
                <div>
                  <div>{item.lastUpdatedDate}</div>
                  <div>{item.lastUpdatedTime}</div>
                </div>
              </td>
              <td>
                <div className="relative ml-auto flex space-x-2 ">
                  <div
                    onClick={toggleOptions}
                    className="cursor-pointer text-3xl"
                  >
                    <BsThreeDotsVertical />
                  </div>
                  {showOptions && (
                    <div className="absolute right-5 top-8 rounded border border-gray-300 bg-white shadow-lg">
                      <ul className="py-2">
                        <li
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={handleEdit}
                        >
                          Edit
                        </li>
                        <li
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={handleDelete}
                        >
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
