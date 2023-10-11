import Image from "next/image";
import React from "react";

type Props = {};

const AstroCard = (props: Props) => {
  return (
    <div className="  flex items-center justify-center">
      <Image
        src="/assets/appointment/live-astro.png"
        alt="astrologer"
        width={169}
        height={208}
        loading={"lazy"}
      />
    </div>
  );
};

export default AstroCard;
