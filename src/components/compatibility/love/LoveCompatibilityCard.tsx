
import Section from "@/components/Section";
import React from "react";

import { useRouter } from "next/router";


type Props = {
  title: string;
  text: string;
};

const LoveCompatibilityCard = ({ title, text }: Props) => {
  const router = useRouter();

  const handleChoosePartner = () => {
    // Assuming you have a route like /compatibility/love/choose-partner
    router.push("/compatibility/love/desc-comparision");
  };

  return (
    <div className="">
      <Section>
       

<div className="">
      <Section>
        <p className="text-center font-[Georgia] text-[36px] font-bold">
         {title}
        </p>
        <div className="mt-5">{text}</div>
       <div className="">
      
       </div>
      </Section>
    </div>
      </Section>
    </div>
  );
};

export default LoveCompatibilityCard;
