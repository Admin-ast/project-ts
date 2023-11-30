import React, { Key } from "react";
import { Faqs } from "../horoscope/horoscope-sign";
import Section from "../Section";
type Props = {
  faqDetail: Faqs;
};

const Faq = ({ faqDetail }: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] py-[30px] shadow-xl">
      <Section>
        <div className=" ">
          <div className="text-center font-[georgia]">
            <p className="text-[30px] font-bold">{faqDetail.title}</p>
          </div>
          {faqDetail?.faq?.map(
            (item: { ques: string; ans: string }, index: Key) => (
              <div key={index} className="flex flex-col space-y-6 pt-4">
                <div className="space-y-2 text-justify">
                  <p className="text-[22px] ">{item.ques}</p>
                  <p>{item.ans}</p>
                </div>
              </div>
            )
          )}
        </div>
      </Section>
    </div>
  );
};

export default Faq;
