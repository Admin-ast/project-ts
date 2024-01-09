

import Image from "next/image";
import Link from "next/link";
import React, { Key, useState } from "react";

import { Button } from "@/components/forms";
import Section from "../Section";

type Props = {
  headText: string;
  subText: string;
};

type State = {
  selectedSign1: string | null;
  selectedSign2: string | null;
};

const cardDetails = [
  {
    name: "Taurus",
    img: "/assets/kundli/taurus.png",
    link: "",
    person: "Your Sign",
  },
  {
    name: "Virgo",
    img: "/assets/kundli/virgo.png",
    link: "",
    person: "Your Partner's Sign",
  },
];

const SideNavFooter = ({ headText, subText }: Props) => {
  const [state, setState] = useState<State>({
    selectedSign1: null,
    selectedSign2: null,
  });

  const handleSignChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState((prevState) => ({
      ...prevState,
      selectedSign1: event.target.value,
    }));
  };

  const handleSignChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState((prevState) => ({
      ...prevState,
      selectedSign2: event.target.value,
    }));
  };

  return (
    <div className="lg:pr-[10%]">
      <div className="rounded-[10px] border-[2px] border-[#DC6563] py-4 ">
        <p className="text-center text-[24px] font-bold">{headText}</p>
        <p className="mt-[5px] text-center text-[14px]">{subText}</p>

        <div className=" flex items-center  justify-center">
          {cardDetails.map((item: any, index: Key) => (
            <div
              key={index}
              className="flex flex-col rounded-[10px] p-4 text-center"
            >
              <label className="mb-2 text-[13px] font-bold">
                {item.person}
              </label>
              <div className="rounded-[10px] border-2 border-[#DC6563]">
                <Link href={item.link} className="mb-2 flex justify-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={55}
                    height={55}
                    loading={"lazy"}
                  />
                </Link>
                <div className="flex">
                  <select
                    value={state.selectedSign1 || ""}
                    onChange={handleSignChange1}
                    className="rounded-[5px] border-[2px] bg-[#DC6563] px-4 py-2 text-[10px] font-semibold text-white"
                  >
                    <option value="" disabled>
                      Select a Sign
                    </option>
                    {cardDetails.map((sign) => (
                      <option key={sign.name} value={sign.name}>
                        {sign.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[23px] flex items-center justify-center">
          <button className="rounded-[5px] bg-gradient-to-b from-[#fb7038] to-[#ff0600] px-4 py-2 text-[10px] font-semibold text-white">
            Check Your Love Compatibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavFooter;
