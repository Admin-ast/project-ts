import AppointmentCard from "@/components/appoinments/AppointmentCard";
import ChatCard from "@/components/chat/ChatCard";
import Consultation from "@/components/appoinments/Consultation";
import Hero from "@/components/appoinments/Hero";
import Button from "@/components/common/Button";
import Faq from "@/components/common/Faq";
import { Faqs } from "@/components/horoscope/horoscope-sign";
import Section from "@/components/Section";
import Seo from "@/components/Seo";
import { HomeIcon } from "@heroicons/react/24/solid";
import React, { Key } from "react";
import DetailNavbar from "@/components/talk-to-astrologer/DetailNavbar";
import BestAstrologer from "@/components/talk-to-astrologer/BestAstrologer";
import Review from "@/components/home/Review";
import Services from "@/components/home/Services";
import Head from 'next/head';

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
  expertise:
    "Vedic, Vastu, Face reading,Face reading,Face reading,truncate,truncate",
  experience: 3,
  language: "English, Hindi, Punjabi",
  ratings: 5,
  orders: 2054,
  isPremium: true,
};

function ChatAstrologer({}: Props) {
  return (
   <div>
  <Head>
        <title>
         Chat with astrologers to get instant astrological sewa
        </title>
        <meta
          name="description"
          content="Get instant sewa from our astrology specialists, do free chat with astrologer regarding your astrological doubts and problems. Chat anytime, anywhere hassle free at Astroseva Talk "
          key="desc"
        />
      </Head>
    <>
      <Seo
        metaTitle="Online Chat with Astrologers  24 x 7 Astrology Consultation | Astrosevatalk"
        metaDescription="Find out what the stars have in store for you with astrology predictions online. Get personalized horoscopes and daily forecasts for your zodiac sign from experts to help guide you through life's decisions. Unlock the secrets of the universe with astrology predictions online with Astrosevatalk"
        keywords="astrosevatalk, chat online, Astrology, Astrology today, Astrology in Hindi, Astrology in Tamil, Astrologer, Astrologer today, Astrologer Tamil, Horoscope, Horoscope today, Horoscope daily, Horoscope 2023, Kundli Bhagya, Kundli, Kundli match, Zodiac Signs, match making horoscope, matchmaking marriage, Jyotish, Talk to Astrologer, plam reading, job prediction by date of birth,career prediction by date of birth indian astrology free"
      />
      {/* <Hero
        text="Chat With Astrologer"
        icon="/assets/appointment/chat-hero.png"
      /> */}
      <div className="bg-[url('/assets/horoscope-bg.webp')] ">
        <Section>
          <div className="items-center  justify-between space-x-2 py-[30px] lg:flex">
            <div className="flex">
              <HomeIcon className="h-6 w-6  p-1" />
              <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
                Chat with Astrologer
              </p>
            </div>
            <DetailNavbar bal={10} />
          </div>
        </Section>
      </div>
      <div className="bg-[url('/assets/horoscope-bg.webp')]">
        <Section>
          <div className="py-12 lg:space-y-16">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {astrologersDetails?.map((item, index: Key) => (
                <div key={index}>
                  <ChatCard detail={astrologerDetail} service={"Chat"} />
                </div>
              ))}
            </div>
            <Button
              text="View More"
              className="mx-auto mt-5 bg-gradient-to-b from-[#FF7646] to-[#FF0600] lg:text-[28px]"
            />
          </div>
        </Section>
        <BestAstrologer heading="Find Best Astrologers" />
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
	</div>
  );
}

export default ChatAstrologer;
