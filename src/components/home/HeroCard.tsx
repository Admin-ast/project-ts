import React, { Key } from "react";
import Link from "next/link";
import Section from "../Section";
import { Appointment } from "./Appointments";
import Image from "next/image";

type Props = {};

const appointment: Appointment[] = [
  {
    name: "Chat with Astrologer",
    src: "/assets/home/hero-icon-01.webp",
    alt: "test",
    url: "/chat-with-astrologer/chat-with-astrologer",
  },
  {
    name: "Talk to Astrologer",
    src: "/assets/home/hero-icon-02.webp",
    alt: "test",
    url: "/talk-to-astrologer/talk-to-astrologer",
  },
  {
    name: "Live video chat",
    src: "/assets/home/hero-icon-04.webp",
    alt: "test",
    url: "/live-video-chat",
  },
  {
    name: "Live Astrologers",
    src: "/assets/home/hero-icon-03.webp",
    alt: "test",
    url: "/live-astrologer/live-astrologer",
  },
];

function HeroCard({}: Props) {
  return (
    <div className="bg-black   py-2 md:py-8">
      <Section>
        <div className="">
          <div className="grid    grid-cols-4 gap-2 md:gap-6">
            {appointment?.map((item: Appointment, index: Key) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2 rounded-2xl  bg-white shadow-xl  md:p-4  lg:h-[130px]  lg:w-[225px]"
              >
                <Link href={item?.url} className="">
                  <div className="mx-auto h-[30px]   w-[30px] sm:h-[100px] sm:w-[79px] ">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={4195}
                      height={4265}
                      loading={"eager"}
                    />
                  </div>
                  <p className="items-center text-center font-[georgia] text-[12px] font-[700]   md:text-sm lg:text-[14px]">
                    {item.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default HeroCard;
