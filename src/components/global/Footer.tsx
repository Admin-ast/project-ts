import React, { Key, ReactElement } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import Section from "../Section";

type Props = {};

type Corporate = {
  id: number;
  title: string;
  url: string;
};

type ImportantLinks = {
  id: number;
  title: string;
  url: string;
};

type Social = {
  icon: ReactElement;
  url: string;
  label: string;
};

const corporate: Corporate[] = [
  {
    id: 1,
    title: "Refund & Cancellation Policy",
    url: "/corporate/refund",
  },
  {
    id: 2,
    title: "Terms & Conditions",
    url: "/corporate/refund",
  },
  {
    id: 3,
    title: " Privacy Policy",
    url: "/corporate/privacy",
  },
  {
    id: 4,
    title: " About Us",
    url: "/corporate/about",
  },
  {
    id: 5,
    title: "Disclaimer",
    url: "/corporate/disclaimer",
  },
];

const importantLinks: ImportantLinks[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "panchang",
    url: "/panchang",
  },
  {
    id: 3,
    title: "live-astrologer",
    url: "/live-astrologer",
  },
  {
    id: 4,
    title: "ChatAstrologer",
    url: "/chat-astrologer",
  },
  {
    id: 5,
    title: "TalkAstrologer",
    url: "/talk-astrologer",
  },
  {
    id: 6,
    title: "FreeKundli",
    url: "/freekundli",
  },
  {
    id: 7,
    title: "Daily Horoscope",
    url: "/horoscope",
  },
  {
    id: 8,
    title: "Live Video Chat",
    url: "/videochat-astrologer",
  },
  {
    id: 9,
    title: "Aries",
    url: "/horoscopesigns/aries",
  },
  {
    id: 10,
    title: "Free Kundli",
    url: "/kundli/free-kundli",
  },
  {
    id: 11,
    title: "Kundli Matching",
    url: "/kundli/kundli-matching",
  },
  {
    id: 12,
    title: "Shubh Muhurat",
    url: "/muhurat",
  },
  {
    id: 13,
    title: "Namakaran Muhurat",
    url: "/namakaranmuhurat",
  },
];

const social: Social[] = [
  {
    icon: <FaFacebook size={30} />,
    label: "facebook",
    url: "https://www.facebook.com/profile.php?id=100089188385234",
  },
  {
    icon: <FaInstagram size={30} />,
    label: "instagram",
    url: "https://www.instagram.com/astrosevatalk/",
  },
  {
    icon: <FaTwitter size={30} />,
    label: "twitter",
    url: "https://twitter.com/AstrosevaTalk",
  },
  {
    icon: <FaPinterest size={30} />,
    label: "pinterest",
    url: "https://in.pinterest.com/astrosevatalk/",
  },
  {
    icon: <FaLinkedin size={30} />,
    label: "facebook",
    url: "https://www.linkedin.com/in/astrosevatalk/",
  },
];

function Footer({}: Props) {
  return (
    <div className="bg-black py-12 text-white">
      <Section>
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold underline underline-offset-[6px]">
              About AstroSevatalk
            </p>

            <p className="text-justify">
              AstroSevatalk is the best astrology website for online Astrology
              predictions. Talk to Astrologer on call and get answers to all
              your worries by seeing the future life through Astrology Kundli
              Predictions from the best Astrologers from India. Get best future
              predictions related to Marriage, love life, Career or Health over
              call, chat, query or report.{" "}
            </p>
          </div>

          <div className="grid lg:grid-cols-3">
            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Important Links</p>
              <hr className="my-2   w-32 text-white" />

              <ul className="flex flex-col gap-4 ">
                {importantLinks.map((item: ImportantLinks, index: Key) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
                  >
                    <Link href={item?.url}>{item?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Corporate Info</p>
              <hr className="my-2   w-32 text-white" />

              <ul className="flex flex-col gap-4 ">
                {corporate.map((item: Corporate, index: Key) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
                  >
                    <Link href={item?.url}>{item?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Contact Us</p>
              <hr className="my-2   w-32 text-white" />
              <ul className="flex flex-col gap-4 ">
                <li className="">We are available to 24*7 chat support.</li>
                <li className="">Email ID: Support@astrosevatalk.com</li>
              </ul>

              <ul className="grid grid-cols-4 items-center justify-between gap-4 py-4 text-white">
                {social.map((item: Social, index: Key) => (
                  <li key={index} className="cursor-pointer">
                    {" "}
                    <Link href={item?.url} aria-label={item.label}>
                      {item?.icon}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Footer;
