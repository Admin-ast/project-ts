import React, { Key } from "react";
import AppointmentCard from "../appoinments/AppointmentCard";
import AstroCard from "./AstroCard";

type Props = {};
const astrologersDetails = [
  1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7,
];
const astrologerDetail = {
  name: "Anupam",
  expertise: "Vedic, Vastu, Face reading",
  experience: 3,
  language: "English, Hindi, Punjabi",
  ratings: 5,
  orders: 2054,
  isPremium: true,
};

const MoreAstro = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] px-4 lg:w-1/3">
      <p className="text-center text-[32px] font-bold">More Astrologers</p>
      <div className="mt-[25px] grid grid-cols-1 gap-6 lg:grid-cols-1">
        {astrologersDetails?.map((item, index: Key) => (
          <div key={index}>
            <AstroCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreAstro;
