import React from "react";
import Link from "next/link";
import Section from "../Section";

type Props = {};

const ConnectCard = (props: Props) => {
  return (
    <div className="bg-[url('/assets/cloud-bg.webp')] bg-cover py-8 lg:py-[35px]">
      <Section>
        <div>
          <div className="flex flex-col items-center py-6 text-3xl font-bold text-white">
            <p>Connect With an Astrologer on Call or Chat </p>
            <p>for more detailed Predictions</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-6 sm:flex-row">
            <Link href="/talk-astrologer">
              <button className=" h-[61px] w-[317px] rounded-[20px] bg-[#D3B160] py-2 px-5 text-[24px] font-semibold text-black">
                Talk To Astrologer
              </button>
            </Link>
            <Link href="/chat-astrologer">
              <button className=" h-[61px] w-[317px] rounded-[20px] bg-[#D3B160] py-2 px-5 text-[24px] font-semibold text-black">
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
