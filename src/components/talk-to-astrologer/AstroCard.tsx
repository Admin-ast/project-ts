import Image from "next/image";
import React from "react";

type Props = {};

const AstroCard = (props: Props) => {
  return (
    <div className=" relative flex items-center justify-center">
      <Image
        src="/assets/appointment/live-astro.png"
        alt="astrologer"
        width={169}
        height={208}
        loading={"lazy"}
      />
      <div className="absolute bottom-[400px] left-[80px] flex h-[31px] w-[60px] items-center justify-center gap-2 rounded-[40px] bg-[#DC6563] md:left-[280px] lg:left-[220px]">
        <p className="text-white">Live</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle cx="6" cy="6" r="6" fill="#8A1316" />
        </svg>
      </div>
      <a href=""></a>
    </div>
  );
};

export default AstroCard;
