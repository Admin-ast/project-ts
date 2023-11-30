import React from "react";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import About from "@/components/muhurat/About";
import ImportenceofMuhurat from "@/components/muhurat/ImportenceofMuhurat";
import Diffrentmuhurat from "@/components/muhurat/Diffrentmuhurat";
import MustknowFactor from "@/components/muhurat/MustknowFactor";
import Yoga from "@/components/muhurat/Yoga";
import TithiPakshaNashtra from "@/components/muhurat/TithiPakshaNashtra";
import Karana from "@/components/muhurat/Karana";
import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import Faq from "@/components/common/Faq";
import { Faqs } from "@/components/horoscope/horoscope-sign";
import AlsoCheck from "@/components/common/AlsoCheck";
import TodaysHoroscope from "@/components/common/TodaysHoroscope";

type Props = {};
const faqsDetail: Faqs = {
  title: "FAQs",
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
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      {/* <Hero text="Shubh Muhurat" icon="/assets/muhurat/muhurat.png" /> */}
      <div className="bg-[#F5F5F5] py-1">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              {" "}
              Shubh Muhurat
            </p>
          </div>
        </Section>
      </div>

      <About />
      <ImportenceofMuhurat />
      <Diffrentmuhurat />
      <MustknowFactor />
      <TithiPakshaNashtra />
      <Yoga />
      <Karana />
      <Faq faqDetail={faqsDetail} />
      <AlsoCheck />
      <TodaysHoroscope />
    </div>
  );
};

export default Muhurat;
