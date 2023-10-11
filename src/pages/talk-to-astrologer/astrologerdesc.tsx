import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import Review from "@/components/home/Review";
import AstrologerDesc from "@/components/talk-to-astrologer/AstrologerDesc";
import Rating from "@/components/talk-to-astrologer/Rating";
import SimilarConsultants from "@/components/talk-to-astrologer/SimilarConsultants";
import React from "react";

type Props = {};

const astrologerdesc = (props: Props) => {
  return (
    <div>
      <Hero text="Talk To Astrologer" icon="" />
      <AstrologerDesc waitTime="10 min" />
      <Section>
        <div className="mt-[35px] gap-[18px] lg:flex">
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
