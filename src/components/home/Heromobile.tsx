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
    name: "Live Video Talk",
    src: "/assets/home/hero-icon-04.webp",
    alt: "test",
    url: "/live-video-chat",
  },
  {
    name: "Astroseva Shop",
    src: "/assets/home/mall.png",
    alt: "test",
    url: "/shop/shop",
  },
];

function Heromobile({}: Props) {
  return (
    <div className="bg-black  mob ">
      <Section>
        <div className="px-2">
          <div className="grid grid-cols-4 items-center justify-center gap-[5px] py-5 md:flex md:gap-[21px] lg:flex lg:gap-[21px]">
            {appointment?.map((item: Appointment, index: Key) => (
              <div
                key={index}
                className="mx-auto flex  flex-col items-center justify-center rounded-2xl   shadow-xl  md:w-[235px]  md:p-4 lg:h-[130px] lg:w-[275px]"
              >
                <Link href={item?.url} className="">
                  <div className="flex items-center justify-center  ">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={60}
                      height={100}
                      loading={"eager"}
                    />
                  </div>
                  <p className="flex items-center justify-center text-white text-center font-[georgia] text-[13px] md:text-[12px]">
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

export default Heromobile;
