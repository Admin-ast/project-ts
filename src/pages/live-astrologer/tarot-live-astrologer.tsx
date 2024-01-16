import TarotLiveAstrologer from "@/components/live-astro/TarotLiveAstrologer";
import React from "react";

type Props = {};

const TarotLiveAstro = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <TarotLiveAstrologer />
    </div>
  );
};

export default TarotLiveAstro;
