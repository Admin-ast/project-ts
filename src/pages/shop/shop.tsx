import Hero from "@/components/common/Hero";
import React from "react";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import Card from "@/components/shop/Card";
import Head from 'next/head';

type Props = {};

const shop = (props: Props) => {
  return (
  <div>
  <Head>
        <title>
         Explore and Shop the Best Online Astrology Products and Services
        </title>
        <meta
          name="description"
          content="Tap into your cosmic potential with top-notch astrology products and services available online. Explore, shop, and embrace your destiny like never before at Astroseva Talk"
          key="desc"
        />
      </Head>
    <div>
      {/* <Hero text="Shop" icon="/assets/shop/shop head.png" /> */}

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563]  p-1 px-4 text-[10px] font-medium text-white">
              Astroseva Shop
            </p>
          </div>
        </Section>
      </div>
      <div className="px-8">
        <Card />
      </div>
    </div>
	</div>
  );
};

export default shop;
