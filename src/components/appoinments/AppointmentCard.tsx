import { StarIcon } from "@heroicons/react/24/solid";
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
    isPremium: Boolean;
  };
  service: string;
};

function AppointmentCard({ detail, service }: Props) {
  const { name, expertise, experience, language, orders, ratings, isPremium } =
    detail;
  return (
    <div className="relative flex justify-evenly space-x-4 overflow-hidden rounded-xl border-4 border-[#F2CB6E] bg-black p-4">
      {isPremium && (
        <div className="absolute left-[42%] top-6 w-full rotate-45 bg-[#F3CC6E] py-[2px] text-center">
          <p className="text-xs font-semibold">Top Choice</p>
        </div>
      )}
      <div className="flex flex-col items-center justify-center space-y-2">
        {" "}
        <div className="rounded-full bg-[#D3B160] p-1">
          <div className="rounded-full bg-[#FEE8A0] p-1">
            <Image
              src="/assets/home/review.png"
              alt="astrologer"
              width={92}
              height={92}
              loading={"lazy"}
            />
          </div>
        </div>
        <div className="flex">
          <StarIcon className="h-5 w-5 text-[#CDB06F]" />
          <StarIcon className="h-5 w-5 text-[#CDB06F]" />
          <StarIcon className="h-5 w-5 text-[#CDB06F]" />
          <StarIcon className="h-5 w-5 text-[#CDB06F]" />
          <StarIcon className="h-5 w-5 text-[#CDB06F]" />
        </div>
        <p className="text-xs font-medium text-white">{orders} orders</p>
      </div>
      <div className="space-y-3">
        <p className="font-[georgia] text-[22px] font-semibold text-[#C6A65A]">
          {name}
        </p>
        <div className="space-y-2">
          <p className="text-base text-[#FFF9EA]">{expertise}</p>
          <p className="text-xs text-[#FFF9EA]">{language}</p>
          <p className="text-xs text-[#FFF9EA]">
            Experience: {experience} years
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-[#CDB06F]">Free</p>
          <button className="rounded-lg bg-gradient-to-b from-[#EED387] to-[#F9B800] py-1 px-4 text-base font-semibold text-black">
            {service}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCard;
