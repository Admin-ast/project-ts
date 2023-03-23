import Consultation from "@/components/appoinments/Consultation";
import Hero from "@/components/appoinments/Hero";
import LiveCard from "@/components/appoinments/LiveCard";
import Button from "@/components/common/Button";
import Faq from "@/components/common/Faq";
import { Faqs } from "@/components/horoscope/horoscope-sign";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import React, { Key } from "react";

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

const astrologersDetails = [1, 2, 3, 4, 5, 6, 7, 1, 2];
const astrologerDetail = {
  name: "Aakash Shah",
  expertise: "Vedic, Vastu, Face reading",
  experience: 3,
  language: "English, Hindi, Punjabi",
  ratings: 5,
  orders: 2054,
  isPremium: true,
};

function LiveVideoChat({}: Props) {
  return (
    <>
      <Hero text="Live Video Chat" icon="/assets/appointment/live-hero.png" />
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
              Live Video Chat
            </p>
          </div>
        </Section>
      </div>
      <div className="bg-[url('/assets/horoscope-bg.webp')]">
        <Section>
          <div className="py-12 lg:space-y-16">
            <div className="space-y-2 text-justify text-base">
              <p>
                In a new way to interact with astrologers, Astrotalk brings you
                Astrotalk Live, where you can talk to astrologers via live
                sessions and ask them questions for free. Astrotalk Live is a
                new and innovative way to talk to an astrologer face-to-face and
                get your queries answered while enjoying the best of astrology.
                On Astrotalk live, anyone can get guidance from the best
                astrologers in India on questions spanning across topics such as
                marriage, career, love, health and much more.
              </p>
              <p>
                Talking with astrologers through live sessions is one of the
                most popular features of Astrotalk, as no other app provides
                this unique way to consult an astrologer. Apart from just being
                unique, the feature is easy to use and highly interactive.
                Accessing an astrologer on Astrotalk Live is fairly simple, and
                so is getting your queries answered by them. To have the best
                experience of live sessions, it is recommended that you ask YES
                and NO questions to the astrologer. Also, if you like the
                session being delivered by an astrologer, you can even
                contribute to their earnings by the means of donations.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {astrologersDetails?.map((item, index: Key) => (
                <div key={index}>
                  <LiveCard detail={astrologerDetail} />
                </div>
              ))}
            </div>
            <Button text="View More" className="mx-auto lg:text-[28px]" />
          </div>
        </Section>
        <Consultation />
        <Faq faqDetail={faqsDetail} />
      </div>
    </>
  );
}

export default LiveVideoChat;
