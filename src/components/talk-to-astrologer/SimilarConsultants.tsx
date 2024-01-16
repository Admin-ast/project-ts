import React from "react";
import SimilarConsultantsCard from "./SimilarConsultantsCard";
import Section from "../Section";
import Link from "next/link";

type Props = {
  similarconsultants:any
};

const SimilarConsultants = ({similarconsultants}: Props) => {
  return (
    <div className="bg-white">
      <div className="rounded-[15px] border-[1px] border-[#DC6563] py-4 ">
        <p
          className="mt-[30px] text-center font-[Georgia]
         text-[36px] font-bold"
        >
          Check Similar Consultants
        </p>
        <div className="mt-[25px] grid justify-center gap-[24px] py-5 px-5  md:flex lg:flex">
          {similarconsultants?.map((consultant:any) =>
          <Link href={"/astrologer/" + consultant?._id}> 
          <SimilarConsultantsCard name={consultant?.name} image={consultant?.image}  spec={consultant?.skillDetails?.allSkills[0]?.value} />
          </Link>
          )}
          
          
        </div>
      </div>
    </div>
  );
};

export default SimilarConsultants;
