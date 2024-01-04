import React from "react";
import Section from "../Section";
import Image from "next/image";

import { FaCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Solution from "./Solution";
import Story from "./Story";
import Report from "./Report";
import { Faqs } from "../horoscope/horoscope-sign";
import Faq from "../common/Faq";
import Services from "../home/Services";
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
const YearBook = (props: Props) => {
  return (
    <div className="mt-[20px] pb-[30px]">
      <p className="text-center text-[48px] font-bold ">
        AstrosevaTalk Year Book
      </p>
      <Section>
        <div className="my-auto mx-auto gap-[4%] md:flex lg:flex">
          <div className="h-full lg:w-[73%]">
            <div className="mt-[20px]  rounded-[4px]   bg-white px-[20px] shadow-xl  md:flex lg:flex lg:gap-[20px] ">
              <div className="md:w-1/2 lg:w-1/2">
                <div className="h-full">
                  <p className="mt-[15px] py-2 text-center text-[24px] font-bold ">
                    AstrosevaTalk Year Book
                  </p>

                  <div className="mt-[40px] flex items-center justify-center">
                    <Image
                      src="/assets/yearbook/yearbook.png"
                      alt="yearbook"
                      width={185}
                      height={243}
                      className="  "
                    />
                  </div>
                  <div className="flex items-center justify-center py-[30px]">
                    <button className="rounded-[5px] bg-gradient-to-b from-[#fb7038] to-[#FF0600]  px-4 text-[24px] font-semibold text-white">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/2 py-[30px]">
                <div className="flex gap-[4px] ">
                  <FaCircle className="mt-[3px] text-[#d32e27]" />
                  <div className="">
                    <p className="font-bold">
                      Astrological Predictions for One Year
                    </p>
                    <p className="w-full">
                      Find out how your education, job, business, career, family
                      or married life will be in upcoming 12 months
                    </p>
                  </div>
                </div>
                <div className="mt-[20px] flex gap-[4px] ">
                  <FaCircle className="mt-[3px] text-[#d32e27]" />
                  <div className="">
                    <p className="font-bold">
                      Astrological Predictions for One Year
                    </p>
                    <p className="w-full">
                      Find out how your education, job, business, career, family
                      or married life will be in upcoming 12 months
                    </p>
                  </div>
                </div>
                <div className="mt-[20px] flex gap-[4px]">
                  <FaCircle className="mt-[3px] text-[#d32e27]" />
                  <div className="">
                    <p className="font-bold">
                      Astrological Predictions for One Year
                    </p>
                    <p className="w-full">
                      Find out how your education, job, business, career, family
                      or married life will be in upcoming 12 months
                    </p>
                  </div>
                </div>
                <div className="mt-[20px] flex gap-[4px]">
                  <FaCircle className="mt-[3px] text-[#d32e27]" />
                  <div className="">
                    <p className="font-bold">
                      Astrological Predictions for One Year
                    </p>
                    <p className="w-full">
                      Find out how your education, job, business, career, family
                      or married life will be in upcoming 12 months
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Solution />
            <Story />
          </div>
          {/* -----------------2nd div sidebar------------------------------- */}
          <div className="mt-[20px] lg:w-[23%]">
            <Sidebar />
          </div>
        </div>
        <div className="">
          <Report />
          <Faq faqDetail={faqsDetail} />
          <Services head="Complementary Astrology Serveries" />
        </div>
      </Section>
    </div>
  );
};

export default YearBook;
