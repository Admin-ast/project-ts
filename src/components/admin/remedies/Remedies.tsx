import React, { Key } from "react";
import HistoryCard from "../HistoryCard";
import Sidebar from "../Sidebar";
import RemediesCard from "./RemediesCard";

type Props = {
  remedies:any
};

const Remedies = ({remedies}: Props) => {
  return (
    <div className="">
      <div
        className="h-[78px]
     w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="mt-[45px] text-center lg:w-3/4">
          {" "}
          <span className="mt-[45px]  rounded-[43px] bg-[#CF2927] px-16 py-4 text-xl font-bold text-white">
            SUGGESTED REMEDIES
          </span>
          <div className="mt-[30px] grid gap-[45px] md:grid-cols-2 lg:grid-cols-3 ">
            {remedies.map((remedy:any, index:Key) => (

            
            <RemediesCard
              categoryName={remedy?.category?.name}
              productName={remedy?.product?.name}
              name={remedy?.user?.name}
              performedBy={remedy?.performedBy}
              date={remedy?.remedyDate.slice(0,10)}
              time={remedy?.remedyDate.slice(11,19)}
              price="Rs 1000"
              type={remedy?.type}
              status={remedy?.status}
              description={remedy?.description}
              productNum={1292}
              btn1="Suggest Next Remedy"
            />
            ))}
                   
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remedies;
