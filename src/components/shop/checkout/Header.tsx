import Section from "@/components/Section";
import React from "react";

type Props = {
  text: string;
  btn: string;
};

const Header = ({ text, btn }: Props) => {
  return (
    <div className="">
      <Section>
        <div className="mt-[23px] justify-between rounded-[10px] bg-[#DC6563] px-8 py-2 font-[Georgia] md:flex lg:flex">
          <p className="text-[32px] font-bold text-white">{text}</p>
          <div className="flex items-center justify-center rounded-[10px] border-[1px] border-white px-4">
            <button className="text-white">{btn}</button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Header;
