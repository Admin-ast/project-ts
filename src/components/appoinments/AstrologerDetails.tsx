import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  speciality: string;
  language: string;
  experience: string;
  rate: string;
  className: string;
};

const AstrologerDetails = ({
  name,
  speciality,
  language,
  experience,
  rate,
  className,
}: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] ">
      <div className="flex items-center justify-center">
        <div className="mt-[53px]">
          <Image
            src="/assets/admin/Dashboard_image.png"
            alt="astrologer image"
            width={168}
            height={182}
          />
          <p className="mt-[22px] text-center text-[32px] font-bold">{name}</p>
        </div>
      </div>
      <div className="mt-[51px] text-center text-[22px]">
        <p className="">{speciality}</p>
        <p className="">{language}</p>
        <p className="">Experience:{experience}</p>
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-[58px] h-[38px] rounded-lg bg-gradient-to-b from-[#FF7646] to-[#FF0600] py-1 px-4 text-[22px] font-semibold text-white">
          {rate}
        </button>
      </div>
    </div>
  );
};

export default AstrologerDetails;
