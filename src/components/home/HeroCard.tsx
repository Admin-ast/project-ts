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
    url: "/chat-astrologer",
  },
  {
    name: "Talk to Astrologer",
    src: "/assets/home/hero-icon-02.webp",
    alt: "test",
    url: "/talk-astrologer",
  },
  {
    name: "Live Astrologers",
    src: "/assets/home/hero-icon-03.webp",
    alt: "test",
    url: "/live-astrologer",
  },
  {
    name: "Live video chat",
    src: "/assets/home/hero-icon-04.webp",
    alt: "test",
    url: "/videochat-astrologer",
  },
];

function HeroCard({}: Props) {
  return (
    <div className="py-8">
      <Section>
        <div className="">
          <div className="grid  gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {appointment?.map((item: Appointment, index: Key) => (
              <Link
                key={index}
                href={item?.url}
                className="flex h-[204px] w-[190px] flex-col items-center justify-center space-y-2 rounded-2xl  bg-white/5  p-4"
              >
                <div className="mx-auto h-[140px] w-[140px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={4195}
                    height={4265}
                    loading={"eager"}
                  />
                </div>
                <p className="items-center text-center font-[georgia] text-sm font-[700]  text-white lg:text-[14px]">
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

export default HeroCard;
