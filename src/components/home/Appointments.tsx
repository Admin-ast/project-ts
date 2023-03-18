import React, { Key } from "react";
import Link from "next/link";
import Section from "../Section";
import Image from "next/image";

type Props = {};

type Appointment = {
  name: string;
  src: string;
  alt: string;
  url: string;
};

const appointment: Appointment[] = [
  {
    name: "Chat with Astrologer",
    src: "/assets/home/icon-01.png",
    alt: "chat-astrologer",
    url: "/chat-astrologer",
  },
  {
    name: "Talk to Astrologer",
    src: "/assets/home/icon-02.png",
    alt: "talk-astrologer",
    url: "/talk-astrologer",
  },
  {
    name: "Live Astrologers",
    src: "/assets/home/icon-03.png",
    alt: "live-astrologer",
    url: "/live-astrologer",
  },
  {
    name: "Live video chat",
    src: "/assets/home/icon-04.png",
    alt: "videochat-astrologer",
    url: "/videochat-astrologer",
  },
];

function Appointments({}: Props) {
  return (
    <div className="bg-[url('/assets/home/horoscope-bg.svg')] bg-cover py-8 lg:py-[46px]">
      <Section>
        <div className="">
          <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
            Appointments
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {appointment?.map((item: Appointment, index: Key) => (
              <Link
                key={index}
                href={item?.url}
                className="flex h-[204px] w-[300px] flex-col mx-auto items-center justify-center space-y-2 rounded-2xl border-[3px] border-[#D3B160] bg-black p-4"
              >
                <div className="w-[140px] h-[140px] mx-auto">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={4195}
                    height={4265}
                    loading={"lazy"}
                  />
                </div>
                <p className="items-center text-center font-[georgia] text-sm font-[700]  text-[#D3B160] lg:text-[14px]">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Appointments;
