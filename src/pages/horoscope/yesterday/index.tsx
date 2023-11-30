import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HomeIcon } from "@heroicons/react/24/solid";
import Section from "@/components/Section";
import { postFetcher } from "@/service";
import { useRouter } from "next/router";
import Hero from "@/components/common/Hero";
import AlsoCheck from "@/components/common/AlsoCheck";

const Card = dynamic(
  () => import("@/components/horoscope/horoscope-type/Card")
);
const Faq = dynamic(() => import("@/components/common/Faq"));
const AboutHoroscope = dynamic(
  () => import("@/components/horoscope/horoscope-type/AboutHoroscope")
);
const Check = dynamic(
  () => import("@/components/horoscope/horoscope-type/Check")
);

type Props = {};

export type Faqs = {
  title: string;
  faq: {
    ques: string;
    ans: string;
  }[];
};

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

const Index = (props: Props) => {
  const [horos, setHoros] = useState<any>({});
  const router = useRouter();
  useEffect(() => {
    const horos = async () => {
      const result = await postFetcher(
        "/horoscope/combined?type=daily&day=previous",
        ""
      );
      if (result?.res) {
        console.log(result.res);
        setHoros(result.res);
      }
    };
    horos();
  }, []);

  return (
    <div>
      <div className="bg-[url('/assets/horoscope-bg.webp')] ">
        <div className="bg-[#F5F5F5] py-1">
          <Section>
            <div className="flex items-center space-x-2">
              <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
              <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
                Horoscope
              </p>
            </div>
          </Section>
        </div>
        <div className="py-[30px]">
          <p className="text-center text-[30px] font-bold ">
            Yestarday Horoscope
          </p>
        </div>
        <Card type="yesterday" horos={horos} predictionArray={false} />
        <AboutHoroscope />
        <AlsoCheck />
        <Faq faqDetail={faqsDetail} />
      </div>
    </div>
  );
};

export default Index;
