import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import Review from "@/components/home/Review";
import AstrologerDesc from "@/components/talk-to-astrologer/AstrologerDesc";
import Rating from "@/components/talk-to-astrologer/Rating";
import SimilarConsultants from "@/components/talk-to-astrologer/SimilarConsultants";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const astrologerdesc = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero text="Talk To Astrologer" icon="" />
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
              Talk To Astrologer
            </p>
          </div>
        </Section>
      </div>
      <AstrologerDesc waitTime="10 min" />
      <Section>
        <div className="mt-[35px]  gap-[18px] lg:flex">
          <Rating />
          <SimilarConsultants />
        </div>
      </Section>

      <div className="mt-[69px]">
        <Review />
      </div>
    </div>
  );
};

export default astrologerdesc;
