import Link from "next/link";
import React from "react";
import { AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { Input } from "../forms";
import Section from "../Section";
import Filter from "./Filter";

import FilterOptions from "./FilterOptions";
import SortBy from "./SortBy";

type Props = {
  bal: number;
};

const DetailNavbar = ({ bal }: Props) => {
  return (
    <Section>
      <div className="grid items-center justify-end  gap-[13px]  md:flex lg:flex ">
        <p className="py-2">Available Balance:Rs{bal}</p>
        <Link href="/talk-to-astrologer/price">
          <div className="rounded-[5px] border-[1px] border-[#00AF1C] px-2 py-3">
            <p className="text-[#00AF1C]">Recharge</p>
          </div>
        </Link>
        <div className="flex items-center gap-2 rounded-[5px] border-[1px] border-[#D9D9D9] px-2 py-1 ">
          <Filter />
        </div>
        <div className="flex items-center gap-2 rounded-[5px] border-[1px] border-[#D9D9D9]  px-2 py-1 ">
          <SortBy />
        </div>
        <div className="flex items-center gap-2 rounded-[5px] border-[1px] border-[#D9D9D9] px-2 py-3 ">
          <input className="text-[#D9D9D9] " placeholder="Search name" />
          <AiOutlineSearch className="text-[#D9D9D9]" />
        </div>
      </div>
    </Section>
  );
};

export default DetailNavbar;
