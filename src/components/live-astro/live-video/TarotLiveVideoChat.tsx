import Section from "@/components/Section";
import Consultation from "@/components/appoinments/Consultation";
import Hero from "@/components/appoinments/Hero";
import Faq from "@/components/common/Faq";
import { Faqs } from "@/components/horoscope/horoscope-sign";
import { HomeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

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

const TarotLiveVideoChat = (props: Props) => {
  return (
    <>
      <Hero
        text="Tarot- Live Video Chat Astrologers"
        icon="/assets/appointment/live-hero.png"
      />
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
              Live Astrologer
            </p>
          </div>
        </Section>
      </div>
      <Section>
        <div className="mt-[115px] grid items-center justify-center gap-[20px] md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Image
              src={"/assets/appointment/live-astro.png"}
              alt={"chat-icon"}
              width={300}
              height={370}
              loading={"lazy"}
              className="h-full w-full object-contain"
            />
            <div className="absolute bottom-[320px] left-[15px] flex h-[31px] w-[70px] items-center justify-center gap-2 rounded-[40px] bg-[#DC6563]">
              <p className="text-white">Live</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#8A1316" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <Image
              src={"/assets/appointment/live-astro.png"}
              alt={"chat-icon"}
              width={300}
              height={370}
              loading={"lazy"}
              className="h-full w-full object-contain"
            />
            <div className="absolute bottom-[320px] left-[15px] flex h-[31px] w-[70px] items-center justify-center gap-2 rounded-[40px] bg-[#DC6563]">
              <p className="text-white">Live</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#8A1316" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <Image
              src={"/assets/appointment/live-astro.png"}
              alt={"chat-icon"}
              width={300}
              height={370}
              loading={"lazy"}
              className="h-full w-full object-contain"
            />
            <div className="absolute bottom-[320px] left-[15px] flex h-[31px] w-[70px] items-center justify-center gap-2 rounded-[40px] bg-[#DC6563]">
              <p className="text-white">Live</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#8A1316" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <Image
              src={"/assets/appointment/live-astro.png"}
              alt={"chat-icon"}
              width={300}
              height={370}
              loading={"lazy"}
              className="h-full w-full object-contain"
            />
            <div className="absolute bottom-[320px] left-[15px] flex h-[31px] w-[70px] items-center justify-center gap-2 rounded-[40px] bg-[#DC6563]">
              <p className="text-white">Live</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#8A1316" />
              </svg>
            </div>
          </div>
        </div>
      </Section>
      <Consultation />
      <Faq faqDetail={faqsDetail} />
    </>
  );
};

export default TarotLiveVideoChat;
