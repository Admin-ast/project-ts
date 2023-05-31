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
    const result = card.filter((item) => item?.id == blogdesc);
    setBlogde(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat ">
        <Hero text="Blog" icon="" />
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
              Blog
            </p>
          </div>
        </Section>
        <Section>
          <div className="grid grid-cols-1 items-start justify-between gap-6 pt-8 md:flex lg:flex">
            <SideNavBlog />
            <div className="">
              <Section>
                {blogde?.map((item: any, index: any) => (
                  <div key={index} className="px-3 md:px-10">
                    <div className=" text-[32px] font-bold">{item.text}</div>
                    <img
                      className=" auto mx-auto my-7 rounded-[20px] object-cover object-top md:h-[342px] md:w-[514px]"
                      src={item.img}
                      alt=""
                    />
                    <div className="my-2 text-justify">{item.para}</div>
                    {/* <div className=" text-[22px] font-semibold">{item.text2}</div>
                    <div className="my-2 text-justify">{item.para2}</div> */}
                    {item.para?.map((item: any, index: any) => {
                      return (
                        <div key={index} className="my-2 text-justify">
                          {item}
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

        {/* 
          <div className="grid grid-cols-1    pt-8 md:flex lg:flex">
         
       
        <div className="">
        
         <SideNavBlog />
          
              </div>
      
          
             
            
            <div className="w-full">
             

            
               <Section>
               {blogde?.map((item,index)=>(
                <div key={index} className="px-3 md:px-10">
                
                  <div className=" text-[32px] font-bold">
                    {item.text}
                  </div>
                  <img
                    className=" auto mx-auto  rounded-[20px] object-cover object-top md:h-[342px] md:w-[514px]"
                    src={item.img}
                    alt=""
                  />
                  <div className="my-2 text-justify">{item.para}</div>
                
                </div>
                  ))}
                
              </Section>  
              
              <BlogStatic />
            </div>
            
          </div> */}
      </div>
    </>
  );
};

export default BlogDesc;
