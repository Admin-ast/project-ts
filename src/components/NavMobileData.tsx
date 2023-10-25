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
    name: "Talk To Astrologer",
    url: "/talk-to-astrologer/talk-to-astrologer",
  },
  {
    name: "Chat With Astrologer",
    url: "/chat-with-astrologer/chat-with-astrologer",
  },
  {
    name: "AstrosevaTalk +",
    url: "/astrosevatalk",
  },
  {
    name: "Zodiac sign",
    url: "/zodic-sign",
  },
  {
    name: "Astro store-Shop",
    url: "/shop/shop",
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
    name: "Live Astrologer",
    url: "live-astrologer/live-astrologer",
  },
  {
    name: "Daily Horoscope",
    url: "/horoscope/daily",
  },
  // {
  //   name: "Live Video Chat",
  //   url: "/live-video-chat",
  // },

  {
    name: "Shubh Muhurat",
    url: "/muhurat",
  },
  // {
  //   name: "Compatibility",
  //   url: "/compatibility",
  // },
  {
    name: "Book A Pooja",
    url: "/shop/online-puja",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];
function NavMobileData() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start gap-2  px-2">
      {links.map((item: Links, index: Key) => (
        <Link key={index} href={item?.url}>
          <p
            className={`cursor-pointer text-[16px] font-bold text-[black] ${
              router.pathname === item.url
                ? "underline decoration-[#DC6563] underline-offset-8"
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
