import React from "react";
import Link from "next/link";
import Section from "../Section";

type Props = {};

const ConnectCard = (props: Props) => {
  return (
    <div className="bg-[url('/assets/home/cloud.png')] bg-cover py-8 lg:py-[35px]">
      <Section>
        <div>
          <div className="flex flex-col items-center py-6 text-center text-xl font-medium lg:text-3xl lg:font-bold">
            <p>
              Connect With an Astrologer on Call or Chat
              <br className="hidden lg:block" /> for more detailed Predictions
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-6 sm:flex-row">
            <Link href="/talk-to-astrologer/talk-to-astrologer">
              <button className=" h-[61px] w-[317px] rounded-[20px] bg-[#CA2127] py-2 px-5 text-[24px] font-semibold text-white">
                Talk To Astrologer
              </button>
            </Link>
            <Link href="/caht-with-astrologer/chat-with-astrologer">
              <button className=" h-[61px] w-[317px] rounded-[20px] bg-[#CA2127] py-2 px-5 text-[24px] font-semibold text-white">
                Chat With Astrologer
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ConnectCard;
