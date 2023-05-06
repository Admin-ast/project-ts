import React from "react";
import Section from "../Section";
import { BiCategory } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

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

const card = [
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    img: "/assets/appointment/live-astro.png",
    text: "What to do if a girl has a mangal dosh and a boy does not?",
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
];

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat py-8 lg:py-[51px]">
      <Section>
        <div className="flex items-start justify-between gap-6">
          <div className="flex w-[350px] flex-col gap-2 border-r border-[#D9D9D9]">
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
          </div>

          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center gap-2">
              <FaSearch />
              <p>Let’s find what you are looking for</p>
            </div>
            <hr className=" mr-5 w-full border border-[#D9D9D9]" />
            <div className="grid grid-cols-3 gap-5 pt-6">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="flex w-[286px] flex-col  rounded-[20px] bg-[#FFF7E5]"
                >
                  <img
                    className="h-[151px] w-full rounded-t-[20px]"
                    src="/assets/appointment/live-astro.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-4 p-3">
                    <p className="text-justify text-lg font-bold">
                      What to do if a girl has a mangal dosh and a boy does not?
                    </p>
                    <div className="flex items-center justify-between text-[12px] text-slate-500">
                      <p>Kasturi Chaudhary</p>
                      <p>March 31,2023</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Blog;
