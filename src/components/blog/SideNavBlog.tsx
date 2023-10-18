import React from "react";
import { BiCategory } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Section from "../Section";
import Comp from "../compatibility/love/Comp";
import SideNavFooter from "./SideNavFooter";

function SideNavBlog() {
  const categories = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Tarot",
      url: "/",
    },
    {
      name: "Vastu",
      url: "/",
    },
    {
      name: "Vedic",
      url: "/",
    },
    {
      name: "Kundli",
      url: "/",
    },
    {
      name: "Sports",
      url: "/",
    },
    {
      name: "Transits",
      url: "/",
    },
    {
      name: "Festivals",
      url: "/",
    },
    {
      name: "Business",
      url: "/",
    },
    {
      name: "Gemstones",
      url: "/",
    },
    {
      name: "Numerology",
      url: "/",
    },
    {
      name: "Zodiac Signs",
      url: "/",
    },
    {
      name: "Compatibility",
      url: "/",
    },
    {
      name: "Entertainment",
      url: "/",
    },
    {
      name: "Current Affairs",
      url: "/",
    },
    {
      name: "Daily Horoscope",
      url: "/",
    },
    {
      name: "Mythological Tales",
      url: "/",
    },
  ];
  const trending = [
    {
      title: "April Monthly Horoscope 2023",
      url: "/",
    },
    {
      title: "Why so many breakups in My Horoscope? Know the reason Why?",
      url: "/",
    },
    {
      title: "Why so many breakups in My Horoscope? Know the reason Why?",
      url: "/",
    },
    {
      title: "Why so many breakups in My Horoscope? Know the reason Why?",
      url: "/",
    },
    {
      title: "Why so many breakups in My Horoscope? Know the reason Why?",
      url: "/",
    },
    {
      title: "Why so many breakups in My Horoscope? Know the reason Why?",
      url: "/",
    },
  ];

  return (
    <>
      {/* <Section> */}

      <div className="flex  flex-col gap-2 border-r border-[#D9D9D9]">
        {/* <div className=" border-r border-[#D9D9D9]"> */}
        <div className="flex items-center gap-1">
          <BiCategory size={45} className="" />
          <div>
            <p className="text-2xl font-bold">Categories</p>
            <p className="text-[10px]">Select Topic</p>
          </div>
        </div>
        <hr className=" mr-5 w-[216px] border border-[#D9D9D9]" />
        <div className="flex flex-col gap-2">
          {categories.map((item, index) => (
            <Link key={index} href={item?.url}>
              <p className="text-lg font-medium">{item?.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1 pt-5">
          <AiFillFire size={45} className="" />
          <div>
            <p className="text-2xl font-bold">Trending Now</p>
            <p className="text-[10px]">Trending Stories</p>
          </div>
        </div>
        <hr className=" mr-5 w-[216px] border border-[#D9D9D9]" />
        <div className="mr-6 flex flex-col gap-2">
          {trending.map((item, index) => (
            <Link key={index} href={item?.url}>
              <p className="text-justify font-medium">{item?.title}</p>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 pt-5">
          <GrLanguage size={45} className="" />
          <div>
            <p className="text-2xl font-bold">Languages</p>
            <p className="text-[10px]">Select Language</p>
          </div>
        </div>
        <hr className=" mr-5 w-[216px] border border-[#D9D9D9]" />
        <div className="flex flex-col gap-2">
          <p>ALL LANGUAGES</p>
          <p>HINDI</p>
          <p>ENGLISH</p>
        </div>
        <div className="">
          <SideNavFooter
            headText="Are You Compatible?"
            subText="Choose your and your partner's zodiac sign to check compatibility"
          />
        </div>
      </div>
      {/* </Section> */}
    </>
  );
}

export default SideNavBlog;
