import React from "react";
import Section from "../Section";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { card } from "../../../utils/list";
import SideNavBlog from "./SideNavBlog";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat py-8 lg:py-[51px]">
      <Section>
        <div className="flex items-start justify-between gap-6">
          <SideNavBlog />

          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center gap-2">
              <FaSearch />
              <p>Let’s find what you are looking for</p>
            </div>
            <hr className=" mr-5 w-full border border-[#D9D9D9]" />
            <div className="grid grid-cols-3 gap-5 pt-6">
              {card.map((item, index) => (
                <Link
                  key={index}
                  href={`/blog/${item?.id}`}
                  className="flex w-[286px] flex-col  rounded-[20px] bg-[#FFF7E5]"
                >
                  <img
                    className="h-[151px] w-full rounded-t-[20px] object-cover object-top"
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Blog;
