import Section from "@/components/Section";
import React from "react";
import ChooseSign from "./ChooseYourSign";

type Props = {
  title: string;
  text: string;
};

const LoveCompatibilityCard = ({ title, text }: Props) => {
  return (
    <div className="">
      <Section>
        <p className="text-center font-[Georgia] text-[36px] font-bold">
          {title}
        </p>
        <div className="mt-5">{text}</div>
        <ChooseSign headText="Choose Your Sign" />
      </Section>
    </div>
  );
};

export default LoveCompatibilityCard;
