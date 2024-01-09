import Link from "next/link";
import React from "react";
import { AiFillFire } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import SideNavFooter from "./SideNavFooter";
import FooterSideNav from "./FooterSideNav";
import TodayPanchng from "../panchang/TodayPanchng";

type Props = {};

const DynamicSideNavBlog = (props: Props) => {
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
      title: "I was aware of my agressiveness",
      url: "/blog/i_was_aware_of_my_agressiveness",
    },
    {
      title:
        "Do I posses the authority to successfully resolve ongoing business negotiations",
      url: "/blog/do_i_posses_the_authority_to_successfully_resolve_ongoing_business_negotiations",
    },
    {
      title: "Free 5 minutes Astrology",
      url: "/blog/free_5_minutes_astrology",
    },
    {
      title: "Astrological Remedies to get rid of your problems in life",
      url: "/blog/astrological_remedies_to_get_rid_your_problems_in_life",
    },
    {
      title: "Astrology for Mental Health",
      url: "/blog/astrology_for_mental_health",
    },
    {
      title: "Astrological Guidance for Students",
      url: "/blog/astrological_guidance_for_students",
    },
  ];

  return (
    <div className="h-full border-l border-[#D9D9D9] px-[30px]">
      {/* <Section> */}
      <div className="flex items-center gap-1">
        <AiFillFire size={45} className="" />
        <div>
          <p className="text-2xl ">Trending Now</p>
          <p className="text-[10px]">Trending Stories</p>
        </div>
      </div>
      <hr className=" mr-5 mt-[10px] border border-[#D9D9D9] lg:w-[250px]" />
      <div className="mr-6 flex flex-col gap-2 py-5 lg:w-[268px]">
        {trending.map((item, index) => (
          <Link key={index} href={item?.url}>
            <p className="trending text-justify py-[5px]">{item?.title}</p>
          </Link>
        ))}
      </div>
      <div className="mt-[40px] flex items-center gap-1">
        <AiFillFire size={45} className="" />
        <div>
          <p className="text-2xl ">Recent Blog</p>
          <p className="text-[10px]">Recent Stories</p>
        </div>
      </div>
      <hr className=" mr-5 mt-[10px] border border-[#D9D9D9] lg:w-[250px]" />
      <div className="mr-6 flex flex-col gap-2 py-5 lg:w-[268px]">
        {trending.map((item, index) => (
          <Link key={index} href={item?.url}>
            <p className="trending text-justify py-[5px]">{item?.title}</p>
          </Link>
        ))}
      </div>
      <div className="mt-[40px] flex items-center gap-1">
        <AiFillFire size={45} className="" />
        <div>
          <p className="text-2xl ">Related Blog</p>
          <p className="text-[10px]">Related Stories</p>
        </div>
      </div>
      <hr className=" mr-5 mt-[10px] border border-[#D9D9D9] lg:w-[250px]" />
      <div className="mr-6 flex flex-col gap-2 py-5 lg:w-[268px]">
        {trending.map((item, index) => (
          <Link key={index} href={item?.url}>
            <p className="trending text-justify py-[5px]">{item?.title}</p>
          </Link>
        ))}
      </div>
      <div className="flex  flex-col gap-2 ">
        {/* <div className=" border-r border-[#D9D9D9]"> */}
        <div className="flex items-center gap-1">
          <BiCategory size={45} className="" />
          <div>
            <p className="text-2xl ">Categories</p>
            <p className="text-[10px]">Select Topic</p>
          </div>
        </div>
        <hr className=" mr-5 border border-[#D9D9D9] lg:w-[250px]" />
        <div className="flex flex-col gap-2 lg:w-[268px]">
          {categories.map((item, index) => (
            <Link key={index} href={item?.url}>
              <p className="text-lg ">{item?.name}</p>
            </Link>
          ))}
        </div>
        <div className="mt-[20px] lg:w-[268px]">
          <TodayPanchng />
        </div>
        <div className="mt-[20px] lg:w-[280px]">
          {/* <SideNavFooter
            headText="Are You Compatible?"
            subText="Choose your and your partner's zodiac sign to check compatibility"
          /> */}
          <FooterSideNav
            headText="Are You Compatible?"
            subText="Choose your and your partner's zodiac sign to check compatibility"
          />
        </div>
      </div>
      {/* </Section> */}
    </div>
  );
};

export default DynamicSideNavBlog;
