import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import CareerReportCard from "@/components/shop/career/CareerReportCard";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

type Props = {};

const CareerReport = (props: Props) => {
  return (
    <div className="">
      <Hero text="Career Report" icon="" />

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Career Report
            </p>
          </div>
        </Section>
      </div>
      <CareerReportCard />
    </div>
  );
};

export default CareerReport;