import React from "react";
import Sidebar from "../../dashboard/Sidebar";
import Link from "next/link";
import CommonBtns from "../../CommonBtns";
import Btns from "../Btns";
import { Input } from "@/components/forms";
import AddNewForm from "./AddNewForm";
import AddNewSidebar from "./AddNewSidebar";

type Props = {};

const AddNew = (props: Props) => {
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

        <div className=" lg:w-3/4">
          <div className="flex gap-2">
            <div className="  md:flex lg:flex">
              <div className="mt-16 items-center   md:flex lg:flex">
                <p className="text-[20px] font-bold">AstrosevaTalk Mall</p>
              </div>

              <div className="grid grid-rows-1  md:flex lg:flex ">
                <Link
                  href="/admin/astrosevatalkmall/allproducts"
                  className=" mt-2 rounded-[10px] border-[1px] border-[#DA6468] py-2 text-center font-bold hover:bg-[#DA6468] md:mt-16 md:px-5 lg:mt-16 lg:px-10"
                >
                  All
                </Link>
                <div className="mt-[65px] grid grid-rows-2  md:flex lg:flex">
                  <Link href="/admin/astrosevatalkmall/addnew">
                    {" "}
                    <button
                      className={` rounded-[5px] border-[1px] border-[#da6468] py-2 font-bold hover:bg-[#da6468] lg:px-10 `}
                    >
                      Add New
                    </button>
                  </Link>
                  <button
                    className={` rounded-[5px] border-[1px] border-[#da6468] py-2 font-bold hover:bg-[#da6468] lg:px-10  `}
                  >
                    Bulk Delete
                  </button>
                </div>
                <Btns />
              </div>
            </div>
          </div>

          <div className="gap-[1px] lg:flex">
            <div className="mt-16 lg:w-2/3">
              <AddNewForm />
            </div>
            <div className="mt-10 lg:w-1/3">
              <AddNewSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
