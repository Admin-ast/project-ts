import React from "react";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import ZodicSign from "@/components/zodic/ZodicSign";
import Head from 'next/head';

type Props = {};

const zodicsign = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
          Dive into zodiac signs' character traits in detail
        </title>
        <meta
          name="description"
          content="Find out about the unique personality traits of each zodiac sign and explore your destiny with Astroseva Talk's detailed astrology predictions.  Let's discover your zodiac compatibility and destiny!"
          key="desc"
        />
      </Head>
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero icon="" text="Zodiac signs" subText="" />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Zodiac signs
          </p>
        </div>
      </div>
      <ZodicSign />
    </div>
	</div>
  );
};

export default zodicsign;
