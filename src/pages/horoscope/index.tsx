import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/horoscope/Hero"));

type Props = {};

const Horoscope = (props: Props) => {
  return (
    <div>
      <Hero />
      <div className="bg-[url('/assets/horoscope-bg.webp')] pb-6"></div>
    </div>
  );
};

export default Horoscope;
