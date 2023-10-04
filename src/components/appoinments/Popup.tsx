// import Image from 'next/image';
// import React from 'react';

// interface CardPopupProps {
//     id:number;
//     src:string;
//     name:string;
//     speciality:any;
//     languages:any;
//     experience:string
//   btn:string;
// }

// const cardholderDetail=[{
//     id:1,
//     src:"/assets/admin/Dashboard_image.png",
//     name:"Anupam",
//     speciality:"Vedic, Vastu, Face reading",
//     languages:"English,Hindi,Punjabi",
//     experience:"3 years",
//   }]
// const CardPopup = ({ btn }: CardPopupProps) => {
//   return (
//     <div className="   z-50 bg-white lg:w-1/4 border-[3px] border-[#DC6563] rounded-[20px]">

//       {cardholderDetail.map((item,index)=>(
// <div key={index} className="flex py-4 px-8">
// <div className="">
//           {/* Insert card holder image here */}
//           <Image
//           src={item.src}
//           alt={item.name}
//           width={74.86}
//            height={74.86}
//           className=" rounded-full" />
//         </div>
//          {/* Right side (information) */}
//          <div className="ml-4">
//           {/* Insert card holder name, speciality, languages, and experience here */}
//           <h2 className="text-lg font-semibold">{item.name}</h2>
//           <p className="">{item.speciality}</p>
//           <p className="">{item.languages}</p>
//           <div className="flex gap-8 mb-4 ">
//           <p className="">Experience: {item.experience}</p>
//           <button className="  bg-[#ca2127] text-white px-2 ">{btn}</button>
//           </div>
//           </div>
// </div>
//       ))}

//           {/* Button */}

//     </div>
//   );
// };

// export default CardPopup;

import Image from "next/image";
import React from "react";

type Props = {
  detail: {
    name: string;
    expertise: string;
    experience: number;
    language: string;
    ratings: number;
    orders: number;
    isPremium: boolean;
  };
  onClose: () => void;
  btn: string;
};

function Popup({ btn, detail, onClose }: Props) {
  const { name, expertise, experience, language, orders, ratings, isPremium } =
    detail;

  return (
    <div className="fixed inset-0 z-50 flex  items-center justify-center ">
      <div className=" flex justify-center bg-white px-4 py-4 shadow-lg">
        <div className="">
          <Image
            src="/assets/admin/Dashboard_image.png"
            alt="astrologer"
            width={74.86}
            height={74.86}
            className=" rounded-full"
          />
        </div>
        <div className=" w-96 rounded-lg p-4 ">
          <p>Name: {name}</p>
          <p>Expertise: {expertise}</p>
          <p>Language: {language}</p>
          <div className="flex justify-between">
            <p>Experience: {experience} years</p>
            <button
              className=" rounded bg-[#CA2127] px-4 py-1 text-white  "
              // onClick={onClose}
            >
              {btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
