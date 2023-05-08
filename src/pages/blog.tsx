import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import Blog from "@/components/blog/Blog";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const blog = (props: Props) => {
  return (
    <div>
      {" "}
      <Hero text="Blog" icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">Blog</p>
        </div>
      </Section>
      <Blog />
    </div>
  );
};

export default blog;
