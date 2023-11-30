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
      {/* <Hero text="Blog" icon="" /> */}
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Blog
            </p>
          </div>
        </Section>
      </div>
      <Blog />
    </div>
  );
};

export default blog;
