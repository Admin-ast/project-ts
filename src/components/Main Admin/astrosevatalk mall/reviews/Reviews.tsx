import React from "react";
import Header from "./Header";
import Sidebar from "../../dashboard/Sidebar";
import ReviewNav from "./ReviewNav";
import Table from "./Table";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <div>
      <div
        className="h-[78px]
   w-full bg-[#d12627cc]"
      ></div>

      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>

        <div className="min-h-screen px-10 lg:w-3/4">
          <div className="font-[Roboto]">
            <div className="mt-20">
              <p className="text-[20px] font-bold ">Reviews</p>
            </div>
            <div className="mt-10">
              <Header aquant={0} pquant={0} apquant={0} squant={0} tquant={0} />
            </div>
            <div className="">
              <ReviewNav />
            </div>
            <div className="py-2">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
