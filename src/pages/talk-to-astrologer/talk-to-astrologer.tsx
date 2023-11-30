import AppointmentCard from "@/components/appoinments/AppointmentCard";

import Consultation from "@/components/appoinments/Consultation";
import Hero from "@/components/appoinments/Hero";
import Button from "@/components/common/Button";
import Faq from "@/components/common/Faq";
import { Faqs } from "@/components/horoscope/horoscope-sign";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import React, { Key } from "react";
import DetailNavbar from "@/components/talk-to-astrologer/DetailNavbar";
import Calling from "@/components/talk-to-astrologer/Calling";
import SkillDetail from "@/components/Signup/SkillDetail";
import BestAstrologer from "@/components/talk-to-astrologer/BestAstrologer";
import Review from "@/components/home/Review";
import Services from "@/components/talk-to-astrologer/Services";

type Props = {};

const faqsDetail: Faqs = {
  title: "Chat With Astrologer - FAQs",
  faq: [
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
  ],
};

const astrologersDetails = [
  1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7,
];
const astrologerDetail = {
  name: "Aakash Shah",
  expertise: "Vedic, Vastu, Face reading",
  experience: 3,
  language: "English, Hindi, Punjabi",
  ratings: 5,
  orders: 2054,
  isPremium: true,
};

function TalkAstrologer({}: Props) {
  return (
    <>
      {/* <Hero text="Talk To Astrologer" icon="" /> */}
      <div className="bg-[url('/assets/horoscope-bg.webp')] ">
        <Section>
          <div className="flex items-center justify-between space-x-2 py-[30px]">
            <div className="flex">
              <HomeIcon className="h-6 w-6  p-1" />
              <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
                Talk To Astrologer
              </p>
            </div>
            <DetailNavbar bal={10} />
          </div>
        </Section>
      </div>
      <div className="bg-[url('/assets/horoscope-bg.webp')]">
        <Section>
          <div className="py-12 lg:space-y-16">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {astrologersDetails?.map((item, index: Key) => (
                <div key={index}>
                  <AppointmentCard detail={astrologerDetail} service={"Talk"} />
                </div>
              ))}
            </div>
            <Button
              text="View More"
              className="mx-auto bg-gradient-to-b from-[#FF7646] to-[#FF0600] font-bold lg:text-[24px]"
            />
          </div>
        </Section>
        <BestAstrologer heading="Find Best Astrologers" />
        {/*  */}
        <div className="">
          <Review />
        </div>
        <div className="">
          <Services head="Complementary Astrology Serveries" />
        </div>
        <div className="">
          <Consultation />
        </div>
        <Faq faqDetail={faqsDetail} />
      </div>
    </>
  );
}

export default TalkAstrologer;
