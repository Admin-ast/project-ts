import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  speciality: string;
  language: string;
  experience: string;
  rate: string;
};

const AstrologerDetails = ({
  name,
  speciality,
  language,
  experience,
  rate,
}: Props) => {
  return (
    <div className="lg:w-1/3">
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
        <button className="mt-[58px] h-[38px] rounded-lg bg-[#CA2127] py-1 px-4 text-base font-semibold text-white">
          {rate}
        </button>
      </div>
    </div>
  );
};

export default AstrologerDetails;
