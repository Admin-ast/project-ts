import Section from "@/components/Section";
import Card from "@/components/book-a-pooja/Card";
import Line from "@/components/book-a-pooja/Line";
import Search from "@/components/common/Search";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Head from 'next/head';

type Props = {};

const bookpooja = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
         Get a Wide Range of Online Puja Remedies and Products for Doshas
        </title>
        <meta
          name="description"
          content="Now there's no need to search  pooja shop near me just simply explore a diverse selection of online Puja remedies and products at Astroseva Talk to alleviate Doshas and experience spiritual healing for a blissful journey ahead."
          key="desc"
        />
      </Head>
    
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <div className=" ">
        <Section>
          <div className="flex items-center justify-between space-x-2 py-[30px]">
            <div className="flex">
              <HomeIcon className="h-6 w-6  p-1" />
              <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
                Chat with Astrologer
              </p>
            </div>
            <Search />
          </div>
          
        </Section>
      </div>
      <Section>
        <div className="">
          <Line date={13} month="Nov" />
        </div>
        <div className="mb-10">
          <Card date="13 Nov" />
        </div>
      </Section>
    
    </div>
	</div>
  );
};

export default bookpooja;
