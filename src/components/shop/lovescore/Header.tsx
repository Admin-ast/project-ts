import Section from "@/components/Section";
import React from "react";

type Props = {
  title: string;
  text: string;
  rs: any;
};

const Header = ({ title, text, rs }: Props) => {
  return (
    <div className="">
      <Section>
        <div className="mt-[35px]">
          <p className="text-center font-[Georgia] text-[32px] font-bold">
            {title}
          </p>
          <p className="mt-[35px] text-justify text-base">{text}</p>
          <p className="mt-5 text-center font-bold">{rs}</p>
        </div>
      </Section>
    </div>
  );
};

export default Header;
