/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { card } from "../../../utils/list";
import { useRouter } from "next/router";
import Section from "@/components/Section";
import SideNavBlog from "@/components/blog/SideNavBlog";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Blog from "@/components/blog/Blog";
import Hero from "@/components/appoinments/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import BlogStatic from "@/components/blog/BlogStatic";

type Props = {};

const BlogDesc = (props: Props) => {
  const [blogde, setBlogde] = useState<any>([]);
  const router = useRouter();
  const { blogdesc }: any = router.query;

  useEffect(() => {
    if (router.query && router.query.blogdesc) {
      const result = card.filter((item) => item?.id == blogdesc);
      setBlogde(result);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);
  const findAndReplaceKeywordsInString = (keywordLinks: any, string: any) => {
    if (!keywordLinks || !string) {
      return string || "";
    }
    keywordLinks &&
      keywordLinks.forEach(({ key, link }: any) => {
        console.log(key, link);
        const regex = new RegExp(`\\b${key}\\b`, "gi");
        string = string.replace(
          regex,
          `<a class="text-[blue]" href="${link}" target="_blank" rel="noopener noreferrer">${key}</a>`
        );
      });
    return <div dangerouslySetInnerHTML={{ __html: string }} />;
  };

  return (
    <>
      <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat ">
        <Hero text="Blog" icon="" />
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
              Blog
            </p>
          </div>
        </Section>
        <Section>
          <div className=" gap-6 pt-8 md:flex lg:flex">
            <SideNavBlog />
            <div className="">
              <Section>
                {blogde?.map((item: any, index: any) => (
                  // console.log(item)
                  <div key={index} className="px-3 md:px-10">
                    <div className=" text-[32px] font-bold">{item.text}</div>
                    <img
                      className=" auto mx-auto my-7 rounded-[20px] object-cover object-top md:h-[342px] md:w-[514px]"
                      src={item.img}
                      alt=""
                    />
                    {item.para?.map((itemTwo: any, index: any) => {
                      return (
                        <div key={index} className="my-2 text-justify ">
                          <div className="text-[22px] font-bold">
                            {findAndReplaceKeywordsInString(
                              item.keywords,
                              itemTwo.title
                            )}
                          </div>
                          <div className="">
                            <span className="font-bold">{itemTwo.head}</span>
                            {findAndReplaceKeywordsInString(
                              item.keywords,
                              itemTwo.para
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </Section>
              <BlogStatic />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default BlogDesc;
