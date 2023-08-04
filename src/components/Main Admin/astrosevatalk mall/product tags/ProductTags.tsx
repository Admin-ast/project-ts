import React from "react";
import Sidebar from "../../dashboard/Sidebar";
import Form from "./Form";
import Table from "./Table";
import Btns from "./Btns";

type Props = {};

const ProductTags = (props: Props) => {
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
            <div className="justify-between lg:flex">
              <div className="mt-20">
                <p className="text-[20px] font-bold ">Product Tags</p>
              </div>
              <div className="mt-20 gap-2 lg:mr-28 lg:flex">
                <input
                  type="text"
                  className="rounded-[5px] border-[1px] border-[#A9A9A9]"
                />
                <button className="rounded-[5px] border-[1px] border-[#DC6563] px-2 text-[16px] text-[#DC6563]">
                  Search Tags
                </button>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-[16px] font-bold ">Add New Tags</p>
            </div>

            <div className="gap-5  lg:flex">
              <Form />

              <Table
                name="Select Consultation
Session"
                count={0}
                slug="Consultation_session"
                desc=""
              />
            </div>
            <div className="mt-[-40px] flex justify-center lg:ml-10">
              <Btns className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTags;
