import React from "react";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import Hero from "@/components/chineshoroscope/Hero";
import ChoseSign from "@/components/chineshoroscope/ChoseSign";
import AnimalSign from "@/components/chineshoroscope/AnimalSign";
import Head from 'next/head';

type Props = {};

const chineshoroscope = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
         Get to know your chinese horoscope by zodiac sign | Astroseva Talk
        </title>
        <meta
          name="description"
          content="Want to know which animal you're as per the Chinese calendar? Explore the Chinese horoscope at Astroseva Talk and get your astrological insights for free"
          key="desc"
        />
      </Head>
    <div>
      <Hero />

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Daily Chinese Horoscope
            </p>
          </div>
        </Section>
      </div>
      <ChoseSign />
      <AnimalSign />
    </div>
	</div>
  );
};

export default chineshoroscope;
