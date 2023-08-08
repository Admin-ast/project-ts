import React from "react";
import { BsToggle2Off, BsToggleOn } from "react-icons/bs";
import Section from "../Section";

// type Props = {
//     title:string,
//     charges:string,
//     deliver:string,
//     users:string,
//     user:string,
//     para:any,

// }

const Card = ({ title, charges, deliver, users, user, para }: any) => {
  const cardItems = [
    {
      title: "Special offer to attract new users!",
      charges: "AstroSevaTalk charges Rs 5 per min for users.",
      deliver: "You get Rs 0.5 per min",
      users: "PO@0- Free Users",
      user: "PO@0- Free Users",
      line1: "Po limit gets reset at 6am IST. We calculate number of",

      line2: " PO sessions from 6am to 5:59am",
    },
    {
      title: "Special offer to attract new users!",
      charges: "AstroSevaTalk charges Rs 5 per min for users.",
      deliver: "You get Rs 0.5 per min",
      users: "PO@0- Free Users",
      user: "PO@0- Free Users",
      line1: "Po limit gets reset at 6am IST. We calculate number of",

      line2: " PO sessions from 6am to 5:59am",
    },
    {
      title: "Special offer to attract new users!",
      charges: "AstroSevaTalk charges Rs 5 per min for users.",
      deliver: "You get Rs 0.5 per min",
      users: "PO@0- Free Users",
      user: "PO@0- Free Users",
      line1: "Po limit gets reset at 6am IST. We calculate number of",

      line2: " PO sessions from 6am to 5:59am",
    },
    {
      title: "Special offer to attract new users!",
      charges: "AstroSevaTalk charges Rs 5 per min for users.",
      deliver: "You get Rs 0.5 per min",
      users: "PO@0- Free Users",
      user: "PO@0- Free Users",
      line1: "Po limit gets reset at 6am IST. We calculate number of",

      line2: " PO sessions from 6am to 5:59am",
    },
    {
      title: "Special offer to attract new users!",
      charges: "AstroSevaTalk charges Rs 5 per min for users.",
      deliver: "You get Rs 0.5 per min",
      users: "PO@0- Free Users",
      user: "PO@0- Free Users",
      line1: "Po limit gets reset at 6am IST. We calculate number of",

      line2: " PO sessions from 6am to 5:59am",
    },
    {
      title: "Special offer to attract new users!",
      charges: "AstroSevaTalk charges Rs 5 per min for users.",
      deliver: "You get Rs 0.5 per min",
      users: "PO@0- Free Users",
      user: "PO@0- Free Users",
      line1: "Po limit gets reset at 6am IST. We calculate number of",

      line2: " PO sessions from 6am to 5:59am",
    },
  ];

  return (
    <div className=" grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3">
      {cardItems.map((item, index) => (
        <div
          key={index}
          className="`${className}` rounded-[15px]  bg-[#B4871DF0] bg-gradient-to-r from-blue-500 to-green-500 p-[10px]"
        >
          <p className="text-bold text-base text-white ">{item?.title}</p>
          <p className="text-xs  text-white ">{item?.charges}</p>
          <p className="text-xs  text-white ">{item?.deliver}</p>
          <p className="text-bold text-base text-white ">{item?.users}</p>
          <div className="flex justify-between">
            {/* <div className=""></div> */}
            <p className="text-bold text-base text-white ">{item?.user}</p>
            <BsToggleOn className="text-[30px] text-[#CF2927]" />
          </div>

          <p className="text-xs  text-white ">{item?.line1}</p>
          <p className="text-xs  text-white ">{item?.line2}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
