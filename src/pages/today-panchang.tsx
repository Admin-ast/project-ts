import AlsoCheck from "@/components/common/AlsoCheck";
import Hero from "@/components/common/Hero";
import TodaysHoroscope from "@/components/common/TodaysHoroscope";
import HoroscopeSign from "@/components/horoscope/horoscope-sign";
import Durmurtham from "@/components/panchang/Durmurtham";
import GetPanchang from "@/components/panchang/GetPanchang";
import Karna from "@/components/panchang/Karna";
import Nakshtra from "@/components/panchang/Nakshtra";
import Panchang from "@/components/panchang/Panchang";
import RahuKaal from "@/components/panchang/RahuKaal";
import Amavsya from "@/components/panchang/significance/Amavsya";
import Asthami from "@/components/panchang/significance/Asthami";
import Chaturdashi from "@/components/panchang/significance/Chaturdashi";
import Chaturthi from "@/components/panchang/significance/Chaturthi";
import Dashmi from "@/components/panchang/significance/Dashmi";
import Ekadashi from "@/components/panchang/significance/Ekadashi";
import Navami from "@/components/panchang/significance/Navami";
import Panchami from "@/components/panchang/significance/Panchami";
import Saptami from "@/components/panchang/significance/Saptami";
import Sashimi from "@/components/panchang/significance/Sashimi";
import Significance from "@/components/panchang/significance/Significance";
import Tithi from "@/components/panchang/Tithi";
import Today from "@/components/panchang/Today";
import Vaar from "@/components/panchang/Vaar";
import Varjyam from "@/components/panchang/Varjyam";
import WhyPanchang from "@/components/panchang/WhyPanchang";
import WhyUse from "@/components/panchang/WhyUse";
import Yoga from "@/components/panchang/Yoga";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Head from 'next/head';

type Props = {};

function TodayPanchang({}: Props) {
  return (
   <div>
  <Head>
        <title>
          {`Today's`} Panchang: Look out Panchang 2024 tithi, purnima night, shubh mahurat at Astroseva Talk 
        </title>
        <meta
          name="description"
          content="Today's Panchang: Look out Panchang 2024 tithi, purnima night, shubh mahurat at Astroseva Talk "
          key="desc"
        />
      </Head>
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="Today Panchang"
        subText="Hindu Panchang"
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Today Panchang
          </p>
        </div>
      </div>
      <Today />
      <GetPanchang />
      {/* <Panchang /> */}
      <WhyUse />
      <Vaar />
      <Tithi />
      <Nakshtra />
      <Yoga />
      <Karna />

      {/* <RahuKaal />
      <Varjyam />
      <Durmurtham />
      <Significance />
      <Chaturthi />
      <Panchami />
      <Sashimi />
      <Saptami />
      <Asthami />
      <Navami />
      <Dashmi />
      <Ekadashi />
      <Chaturdashi />
      <Amavsya />
      <WhyPanchang /> */}
      <AlsoCheck />
      <TodaysHoroscope />
    </div>
	</div>
  );
}

export default TodayPanchang;
