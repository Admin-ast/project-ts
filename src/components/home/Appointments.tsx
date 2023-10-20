import React, { Key } from "react";
import Link from "next/link";
import Section from "../Section";
import Image from "next/image";

type Props = {};

export type Appointment = {
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
    url: "/chat-with-astrologer/chat-with-astrologer",
  },
  {
    name: "Talk to Astrologer",
    src: "/assets/home/icon-02.png",
    alt: "talk-astrologer",
    url: "/talk-to-astrologer/talk-to-astrologer",
  },
  {
    name: "Live Astrologers",
    src: "/assets/home/icon-03.png",
    alt: "live-astrologer",
    url: "/live-astrologer/live-astrologer",
  },
  {
    name: "Live video chat",
    src: "/assets/home/icon-04.png",
    alt: "videochat-astrologer",
    url: "/live-video-chat",
  },
];

function Appointments({}: Props) {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover py-4 lg:py-[30px]">
      <Section>
        <div className="">
          <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
            Appointments
          </h2>
          <div className="grid grid-cols-2  gap-6 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {appointment?.map((item: Appointment, index: Key) => (
              <Link
                key={index}
                href={item?.url}
                className="mx-auto flex h-[120px] w-[150px] flex-col items-center justify-center space-y-2 rounded-2xl p-4  shadow-xl md:h-[204px] md:w-[300px]"
              >
                <div className="mx-auto h-[50px] w-[50px] md:h-[140px] md:w-[140px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={4195}
                    height={4265}
                    loading={"lazy"}
                  />
                </div>
                <p className="items-center text-center font-[georgia] text-sm font-bold  lg:text-xl">
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
