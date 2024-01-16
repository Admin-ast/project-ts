

import { useState } from "react";

import Sign from "@/components/compatibility/love/Sign";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import Store from "@/components/planets/Store";

const SelectSign = () => {
  const [yourSign, setYourSign] =useState<string | null>(null);

  const handleSelectYourSign = (selectedSign: string) => {
    setYourSign(selectedSign);
  };
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Compatibility
            </p>
          </div>
        </Section>
      </div>
      <Section>
      <div className="mt-5">
          Find out if you and your love interest or partner are soul mates, best
          friends, or a recipe for disaster. But no fear - even opposites can
          attract. Find out how you fare now.
        </div>
      </Section>
      <Sign headText="Choose Your Sign" onSelect={handleSelectYourSign} />
      <Store/>
    </div>
  );
};

export default SelectSign;
