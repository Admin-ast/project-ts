import React, { Key, ReactElement } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
  FaYoutube,
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
    url: "/corporate-info/refund",
  },
  {
    id: 2,
    title: "Terms & Conditions",
    url: "/corporate-info/refund",
  },
  {
    id: 3,
    title: " Privacy Policy",
    url: "/corporate-info/privacy",
  },
  {
    id: 4,
    title: " About Us",
    url: "/corporate-info/about",
  },
  {
    id: 5,
    title: "Disclaimer",
    url: "/corporate-info/disclaimer",
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
    url: "/today-panchang",
  },
  {
    id: 3,
    title: "Live Astrologer",
    url: "/live-astrologer",
  },
  {
    id: 4,
    title: "Chat With Astrologer",
    url: "/chat-with-astrologer",
  },
  {
    id: 5,
    title: "Talk With Astrologer",
    url: "/talk-with-astrologer",
  },
  {
    id: 6,
    title: "Astrologer Signup",
    url: "/signup",
  },
  {
    id: 7,
    title: "FreeKundli",
    url: "/free-kundli",
  },
  {
    id: 8,
    title: "Daily Horoscope",
    url: "/horoscope/daily-horoscope",
  },
  {
    id: 9,
    title: "Live Video Chat",
    url: "/live-video-chat",
  },
  // {
  //   id: 9,
  //   title: "Aries",
  //   url: "/horoscopesigns/aries",
  // },
  {
    id: 10,
    title: "Free Kundli",
    url: "/free-kundli",
  },
  {
    id: 11,
    title: "Kundli Matching",
    url: "/kundli-matching",
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
  {
    id: 14,
    title: "Zodiac signs",
    url: "/zodic-sign",
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
    url: "https://www.linkedin.com/company/astro-seva-talk/",
  },
  {
    icon: <FaYoutube size={30} />,
    label: "youtube",
    url: "https://www.youtube.com/@astrosevatalk",
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
                    <Link
                      href={item?.url}
                      aria-label={item.label}
                      target="_blank"
                    >
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
