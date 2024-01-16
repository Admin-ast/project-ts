import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Head from 'next/head';

type Props = {};

const gemstonereport = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
         Get astrological suggested Gemstones report with Personalizedastrologer experience at Astroseva Talk
        </title>
        <meta
          name="description"
          content="Explore the profound influence of gemstones on your life. Get a personalized gemstone report at Astroseva Talk for insights into love, career, and well-being. Enhance your journey with the energy of precious stones"
          key="desc"
        />
      </Head>
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="Gemstone Report "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Gemstone Report
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[25px] text-center text-3xl font-bold">
            Unveil Your Gemstone Destiny with Astroseva Talk's Free Reports!{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
           Uncertain about which gemstone aligns perfectly with your life's path? Dive into the fascinating world of gemstones with Astroseva Talk's free gemstone reports and unlock your potential for success, love, and well-being.
          </p>
        </div>
        <div className="mt-[25px] mb-[25px]">
          <p className=" text-3xl font-bold text-center">Why Choose Astroseva Talk?</p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-[25px] font-bold">Personalized Reports </p>
          <p className="mt-[10px] text-[18px]">
            Based on your unique date of birth, our expert astrologers craft a comprehensive report outlining your ideal gemstones.
			</p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-[25px] font-bold">
            Lucky Gemstone Discovery
          </p>
          <p className="mt-[10px] text-[18px]">
           We analyze your planetary alignments and birth chart to reveal the gemstones that can enhance your strengths and mitigate challenges.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-[25px] font-bold">
            Semi-Precious Stone Insights
          </p>
          <p className="mt-[10px] text-[18px]">
            Beyond just precious gems, explore the powerful influences of semi-precious stones and their potential to bring balance and harmony to your life.
			</p>
        </div>
        <div className="mt-[25px]">
          <p className=" text-[25px] font-bold">
            Free & Easy Access
          </p>
          <p className="mt-[10px] text-[18px]">
           Simply enter your date of birth and discover your gemstone destiny – instantly and at no cost!
          </p>
        </div>
        <div className="mt-[25px] mb-[25px]">
          <p className=" text-3xl font-bold text-center">
            What’s In Your Free Gemstone Report?
          </p>
        </div>
        <div className="mt-[25px]">
          <p className=" text-[25px] font-bold">
            Dominant Planets
          </p>
          <p className="mt-[10px] text-[18px]">
          Understand the celestial forces shaping your life and their influence on gemstone selection.
         </p>
        </div>
		<div className="mt-[25px]">
          <p className=" text-[25px] font-bold">
            Auspicious Gemstones
          </p>
          <p className="mt-[10px] text-[18px]">
          Discover the precious and semi-precious stones perfectly aligned with your planetary energies.
         </p>
        </div>
		<div className="mt-[25px]">
          <p className=" text-[25px] font-bold">
            Benefits & Recommendations
          </p>
          <p className="mt-[10px] text-[18px]">
          Learn how each gemstone can positively impact your love life, career, health, and overall well-being.
          </p>
        </div>
		<div className="mt-[25px]">
          <p className=" text-[25px] font-bold">
            Gemstone Selection Tips
          </p>
          <p className="mt-[10px] text-[18px]">
          Gain valuable insights into choosing the right stone based on your budget, color preferences, and desired outcomes.
          </p>
        </div>
		<div className="mt-[25px] pb-[35px]">
          <p className=" text-[25px] font-bold">
            Beyond the Free Report
          </p>
          <p className="mt-[10px] text-[18px]">
          Your free gemstone report is just the beginning! For a deeper understanding, Astroseva Talk offers premium consultations with experienced astrologers who can answer your specific questions and guide you on your gemstone journey.
           </p>
		   <p className="mt-[10px] text-[18px]">
          Ready to unlock the power of gemstones? Get your free gemstone report today and embark on a path of transformation and fulfillment!
		  </p>
        </div>
      </Section>
    </div>
	</div>
  );
};

export default gemstonereport;
