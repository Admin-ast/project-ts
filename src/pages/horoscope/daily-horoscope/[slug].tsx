import React from "react";
import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";
import { cards } from "@/components/home/Horoscope";
import AboutSign from "@/components/singleHoroscope/AboutSign";
import Hero from "@/components/singleHoroscope/Hero";
import ConnectCard from "@/components/common/ConnectCard";
import SignsCard from "@/components/singleHoroscope/SignsCard";
import Compatibility from "@/components/singleHoroscope/Compatibility";
import Faq from "@/components/common/Faq";

type Props = {
  data: any;
};

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

const HoroscopeDetails = ({ data }: Props) => {
  const router = useRouter();
  // console.log("data", data);
  const activeSign = cards.filter((item) => item.id === router.query.slug);
  const remainingSign = cards.filter((item) => item.id !== router.query.slug);

  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero activeSign={activeSign[0]} />
      <AboutSign
        activeSign={activeSign[0]}
        prediction={data?.data?.prediction}
      />
      <ConnectCard />
      <SignsCard cardDetail={remainingSign} />
      <Compatibility horoscopeType={activeSign[0].name} />
      <Faq faqDetail={faqsDetail} />
    </div>
  );
};

export default HoroscopeDetails;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const zodiacName = context.query.slug;
  const response = await fetch(
    `http://api.astrosevatalk.com/api/v1/horoscope/${zodiacName}`
  );
  const jsonData = await response.json();
  return {
    props: { data: jsonData },
  };
};
