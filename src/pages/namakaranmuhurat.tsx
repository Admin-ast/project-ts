import React from "react";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import About from "@/components/muhurat/Namakaran/About";
import MuhuratDate from "@/components/muhurat/Namakaran/MuhuratDate";
import Note from "@/components/muhurat/Namakaran/Note";
import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import Faq from "@/components/common/Faq";
import { Faqs } from "@/components/horoscope/horoscope-sign";
import AlsoCheck from "@/components/common/AlsoCheck";
import TodaysHoroscope from "@/components/common/TodaysHoroscope";

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
const Muhurat = (props: Props) => {
  return (
    <div>
      <Hero text="Namakaran Muhurat" icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Namakaran Muhurat
          </p>
        </div>
      </Section>
      <About />
      <MuhuratDate />
      <Note />
      <Faq faqDetail={faqsDetail} />
      <AlsoCheck />
      <TodaysHoroscope />
    </div>
  );
};

export default Muhurat;
