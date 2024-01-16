import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import Blog from "@/components/blog/Blog";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Head from 'next/head';

type Props = {};

const blog = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
         Looking for some insightful astrology blogs? Check out Astroseva Talk's enlightening blogs. 
        </title>
        <meta
          name="description"
          content="Explore a collection of fascinating astrology blogs on Astroseva Talk. Learn more about the captivating realm of astrology and gain valuable cosmic insights into its mystical wonders."
          key="desc"
        />
      </Head>
    <div>
      {" "}
      {/* <Hero text="Blog" icon="" /> */}
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Blog
            </p>
          </div>
        </Section>
      </div>
      <Blog count="12,120" />
    </div>
	</div>
  );
};

export default blog;
