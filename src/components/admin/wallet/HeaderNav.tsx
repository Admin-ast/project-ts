import React, { useState } from "react";

type Props = {};

const HeaderNav = (props: Props) => {
  const links = [
    "Available Balance",
    "PG Charge: Rs 11 INR",
    "Sub Total TSD: Rs 45 INR",
    "TSD: Rs 45 INR",
    "Payable Amount: RS 41:00",
    "Today",
  ];

  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link: string) => {
    setActiveLink(link === activeLink ? "" : link);
  };
  return (
    <div className=" font-bold md:flex lg:flex ">
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => handleClick(link)}
          className={`relative w-full p-4  text-left ${
            activeLink === link ? "bg-gray-200" : "bg-white"
          }`}
        >
          <span
            className={`${
              activeLink === link
                ? "cursor-default text-base text-blue-600"
                : "cursor-pointer text-base text-black"
            }`}
          >
            {link}
          </span>
          {activeLink === link && (
            <div className="mt-2 border bg-gray-100 p-4">{link}</div>
          )}

          <span
            className={`absolute left-0 right-0 bottom-0 h-1 ${
              activeLink === link
                ? "bg-black opacity-100"
                : "bg-transparent opacity-0"
            } transition-opacity`}
          />
        </button>
      ))}
    </div>
  );
};

export default HeaderNav;
