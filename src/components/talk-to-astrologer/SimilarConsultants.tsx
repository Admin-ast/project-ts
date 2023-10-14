import React from "react";
import SimilarConsultantsCard from "./SimilarConsultantsCard";
import Section from "../Section";

type Props = {};

const SimilarConsultants = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="rounded-[15px] border-[1px] border-[#DC6563] py-4 ">
        <p
          className="mt-[30px] text-center font-[Georgia]
         text-[36px] font-bold"
        >
          Check Similar Consultants
        </p>
        <div className="mt-[25px] gap-[24px] py-5 px-16  md:flex lg:flex">
          <SimilarConsultantsCard name="Devarshi" spec="Taryot" />
          <SimilarConsultantsCard name="Devarshi" spec="Taryot" />
          <SimilarConsultantsCard name="Devarshi" spec="Taryot" />
        </div>
      </div>
    </div>
  );
};

export default SimilarConsultants;
