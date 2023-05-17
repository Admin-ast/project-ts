import React from "react";
import Section from "../Section";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const appointment = [
  {
    name: "Chat with Astrologer",
    src: "/assets/home/icon-01.webp",
    alt: "chat-astrologer",
    url: "/chat-astrologer",
  },
  {
    name: "Talk to Astrologer",
    src: "/assets/home/icon-02.webp",
    alt: "talk-astrologer",
    url: "/talk-astrologer",
  },
];

const AstrosevatalkPromisses = (props: Props) => {
  return (
    <div className="bg-[#FFF7E5] py-8 lg:py-[51px]">
      <Section>
        <div className="flex flex-col gap-5 text-justify">
          <p className="text-center text-[32px]">AstroSevaTalk Promises</p>
          <p>
            AstroMall is a one - stop shop for all your astrological needs.Apart
            from providing you the most genuine and lab - certified
            products(like Gemstones, Kavach, Yantras, etc.), AstroMall also
            assures excellence in providing services like Reiki healing, Past
            life regression, Consultation, etc.All these products and services
            on AstroMall comes with the promise of genuineness and are attuned
            and energised to your personal needs.If you have any queries about
            any of our products or services, you can simply reach out to our
            customer care executives.
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-6 ">
            {appointment?.map((item, index) => (
              <Link
                key={index}
                href={item?.url}
                className="flex  h-[130px] w-[190px] flex-col items-center justify-center space-y-2 rounded-2xl border-[3px] border-[#D3B160] bg-black p-4"
              >
                <div className="mx-auto h-[80px] w-[81px] sm:h-[93px] sm:w-[91px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={4195}
                    height={4265}
                    loading={"lazy"}
                  />
                </div>
                <p className="items-center text-center font-[georgia] text-sm text-[14px]  font-[700] text-[#D3B160]">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AstrosevatalkPromisses;
