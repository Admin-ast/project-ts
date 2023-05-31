import { useRouter } from "next/router";
import React, { Key } from "react";
// import AppointmentsHero from "./AppoinmentsHero";
import Link from "next/link";
type Props = {};
type Links = {
  name: string;
  url: string;
};

const links: Links[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Chat With Astrologer",
    url: "/chat-with-astrologer",
  },
  {
    name: "Talk To Astrologer",
    url: "/talk-to-astrologer",
  },
  {
    name: "Live Astrologer",
    url: "/live-astrologer",
  },
  {
    name: "Daily Horoscope",
    url: "/horoscope/daily-horoscope",
  },
  {
    name: "Live Video Chat",
    url: "/live-video-chat",
  },
  {
    name: "Free Kundli",
    url: "/free-kundli",
  },
  {
    name: "Kundli Matching",
    url: "/kundli-matching",
  },
  {
    name: "Panchang",
    url: "/today-panchang",
  },
  // {
  //   name: "Shubh Muhurat",
  //   url: "/muhurat",
  // },
  {
    name: "Compatibility",
    url: "/compatibility",
  },
  {
    name: "Astro store-Shop",
    url: "/shop/shop",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];
function NavMobileData() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start gap-2 px-2 ">
      {links.map((item: Links, index: Key) => (
        <Link key={index} href={item?.url}>
          <p
            className={`cursor-pointer text-[20px] font-bold text-[black] ${
              router.pathname === item.url
                ? "underline decoration-[#B62022] underline-offset-8"
                : ""
            }`}
          >
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default NavMobileData;
