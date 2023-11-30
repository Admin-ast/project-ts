import React, { useState } from "react";
import { BsToggle2Off, BsToggleOn } from "react-icons/bs";
import Section from "../Section";
import ToggleSwitch from "./offer/ToggleSwitch";
import Popup from "./admin/Popup";
import Link from "next/link";

// type Props = {
//     title:string,
//     charges:string,
//     deliver:string,
//     users:string,
//     user:string,
//     para:any,

// }

const Card = ({ title, charges, deliver, users, user, para }: any) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPolicyPopupOpen, setIsPolicyPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const togglePolicyPopup = () => {
    setIsPolicyPopupOpen(!isPolicyPopupOpen);
  };

  const card1 = [
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
  const card2 = [
    {
      title: "Provide fixed sessions at discount.",
    },
  ];

  const card3 = [
    {
      title: "Training Videos",
      charges: "To watch training videos click here.",
    },
  ];
  const card4 = [
    {
      title: "Important Policies:",
      charges: "1. Never be rude to any customer",
      deliver: "2. Never share your personal details with any customer",
    },
  ];

  const card5 = [
    {
      title: "Check Your Performance",
      charges:
        "Look into your daily ratings, earning and performance on Astrotalk",
    },
  ];
  const card6 = [
    {
      title: "Notice Board",
      charges: "Dear Astrologers",
      deliver: "Following the incredible success of our PO@Foreign feature, we",
    },
  ];
  return (
    <div className=" grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3 ">
      <div className="">
        {card1.map((item, index) => (
          <div
            key={index}
            className="   rounded-[15px]   bg-gradient-to-r from-[#faf0d9] to-[#ebdcb6] p-[10px]"
          >
            <p className="text-base font-bold  ">{item?.title}</p>
            <p className="text-xs   ">{item?.charges}</p>
            <p className="text-xs  ">{item?.deliver}</p>
            <p className="text-bold text-base font-bold ">{item?.users}</p>
            <div className="flex justify-between">
              {/* <div className=""></div> */}
              <p className="text-bold text-base font-bold ">{item?.user}</p>
              {/* <BsToggleOn className="text-[30px] text-[#CF2927]" /> */}
              <ToggleSwitch className=" bg-[#00AF1C]" anyName="bg-[#CF2927]" />
            </div>

            <p className="text-xs   ">{item?.line1}</p>
            <p className="text-xs  ">{item?.line2}</p>
          </div>
        ))}
      </div>

      <div className="">
        {card2.map((items, index) => (
          <div
            key={index}
            className="rounded-[15px]    bg-gradient-to-r from-[#ffb4ab] to-[#fef8bf] p-[10px]"
          >
            <p className="font-bold">{items.title}</p>
            <div className="mt-[85px] flex justify-between">
              <ToggleSwitch className="bg-[#00AF1C]" anyName="bg-[#CF2927]" />
              <button className="bg-white px-2 text-[12px] font-bold hover:bg-[#DC6563]">
                View Discount
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        {card3.map((items, index) => (
          <div
            key={index}
            className="rounded-[15px]    bg-gradient-to-r from-[#ffb4ab] to-[#fef8bf] p-[10px]"
          >
            <p className="font-bold">{items.title}</p>
            <p className="text-[12px]">{items.charges}</p>

            <button className="mt-[62px] bg-white px-2 text-[12px] font-bold hover:bg-[#DC6563]">
              Click Here
            </button>
          </div>
        ))}
      </div>
      <div className="">
        {card4.map((items, index) => (
          <div
            key={index}
            className="rounded-[15px]    bg-gradient-to-r from-[#febf5f] to-[#fae9d0] p-[10px]"
          >
            <p className="font-bold">{items.title}</p>
            <p className="text-[12px]">{items.charges}</p>
            <p className="text-[12px]">{items.deliver}</p>
            <div className="mt-[49px] flex justify-between">
              <button
                onClick={togglePolicyPopup}
                className="bg-white px-2 text-[12px] font-bold hover:bg-[#DC6563]"
              >
                Show More
              </button>
              <Popup
                heading="Important Policies"
                isOpen={isPolicyPopupOpen}
                onClose={togglePolicyPopup}
              />
              <div
                className={`fixed top-0 left-0 h-screen w-screen transition-opacity ${
                  isPopupOpen ? "opacity-50" : "pointer-events-none opacity-0"
                } bg-[#808080]`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        {card5.map((items, index) => (
          <div
            key={index}
            className="rounded-[15px]    bg-gradient-to-r from-[#f4d497] to-[#fdb789] p-[10px]"
          >
            <p className="font-bold">{items.title}</p>
            <p className="text-[12px]">{items.charges}</p>

            <div className="mt-[52px] flex justify-between">
              <Link href="/astrologeradmin/performance-dashboard">
                <button className="bg-white px-2 text-[12px] font-bold hover:bg-[#DC6563]">
                  Show More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        {card6.map((items, index) => (
          <div
            key={index}
            className="rounded-[15px]    bg-gradient-to-r from-[#ff8581] to-[#fbdebf] p-[10px]"
          >
            <p className="font-bold">{items.title}</p>
            <p className="text-[12px]">{items.charges}</p>
            <p className="text-[12px]">{items.deliver}</p>
            <div className="mt-[32px] flex justify-between">
              <button
                onClick={togglePopup}
                className="bg-white px-2 text-[12px] font-bold hover:bg-[#DC6563]"
              >
                Show More
              </button>
              <Popup
                heading="Notice Board"
                isOpen={isPopupOpen}
                onClose={togglePopup}
              />
              <div
                className={`fixed top-0 left-0 h-screen w-screen transition-opacity ${
                  isPopupOpen ? "opacity-50" : "pointer-events-none opacity-0"
                } bg-gray-500`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
