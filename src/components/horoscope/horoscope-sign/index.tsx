import React from "react";
import { useRouter } from "next/router";
import { cards } from "@/components/home/Horoscope";
import AboutSign from "@/components/horoscope/horoscope-sign/AboutSign";
import Hero from "./Hero";
import ConnectCard from "@/components/common/ConnectCard";
import SignsCard from "./SignsCard";
import Compatibility from "./Compatibility";
import Faq from "@/components/common/Faq";

type Props = {
  data: any;
  slug: string;
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

const HoroscopeSign = ({ data, slug }: Props) => {
  const activeSign = cards.filter((item) => item.id === slug);
  const remainingSign = cards.filter((item) => item.id !== slug);

  return (
    <div className="">
      <Hero activeSign={activeSign[0]} />
      <AboutSign
        activeSign={activeSign[0]}
        prediction={data?.data?.prediction}
      />
      <ConnectCard />
      {/* <SignsCard cardDetail={remainingSign} /> */}
      <SignsCard />
      <Compatibility horoscopeType={activeSign[0].name} />
      <Faq faqDetail={faqsDetail} />
    </div>
  );
};

export default HoroscopeSign;
