import Link from "next/link";
import React from "react";
import { AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { Input } from "../forms";
import Section from "../Section";

type Props = {
  bal: number;
};

const DetailNavbar = ({ bal }: Props) => {
  return (
    <Section>
      <div className="justify-center  gap-[13px]  lg:flex  ">
        <p className="py-2">Available Balance:Rs{bal}</p>
        <Link href="">
          <div className="rounded-[5px] border-[1px] border-[#00AF1C] px-2 py-2">
            <p className="text-[#00AF1C]">Recharge</p>
          </div>
        </Link>
        <div className="flex items-center gap-2 rounded-[5px] border-[1px] border-[#D9D9D9] px-2 py-2 ">
          <p className="text-[#D9D9D9]">Filter</p>
          <FaFilter className="text-[#D9D9D9]" />
        </div>
        <div className="flex items-center gap-2 rounded-[5px] border-[1px] border-[#D9D9D9] px-2 py-2 ">
          <p className="text-[#D9D9D9]">Sort by</p>
          <AiOutlineBars className="text-[#D9D9D9]" />
        </div>
        <div className="flex items-center gap-2 rounded-[5px] border-[1px] border-[#D9D9D9] px-2 py-2 ">
          <input className="text-[#D9D9D9] " placeholder="Search name" />
          <AiOutlineSearch className="text-[#D9D9D9]" />
        </div>
      </div>
    </Section>
  );
};

export default DetailNavbar;
