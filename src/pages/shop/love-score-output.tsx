import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import Card from "@/components/shop/karmareport/Card";
import LoveScoreOut from "@/components/shop/lovescore/LoveScoreOut";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const LoveScoreOutput = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover">
      <Hero text="Love Score" icon="" />

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
              Chat With astrologer
            </p>
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
              Chat Form
            </p>
          </div>
        </Section>
      </div>
      <LoveScoreOut
        amount={200}
        ffirstName="Rashi"
        fgender="Female"
        fdob="August 30, 1995 "
        ftob="10:03pm"
        fbirthLocation="Panipat"
        fcity="Panipat"
        fstate="Haryana"
        fcountry="India"
        flongitude={29.3909464}
        flatitude={76.3909464}
        mfirstName="Punnet"
        mgender="Male"
        mdob="August 30, 1995 "
        mtob="10:03pm"
        mbirthLocation="Panipat"
        mcity="Panipat"
        mstate="Haryana"
        mcountry="India"
        mlongitude={29.3909464}
        mlatitude={76.3909464}
        subtotal={200}
        total={200}
      />
      <Card title="Recommended Reports For You" />
    </div>
  );
};

export default LoveScoreOutput;
