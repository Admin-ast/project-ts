import Button from "@/components/common/Button";
import React from "react";

type Props = {
  onClose: () => void;
};

const ImportantContactCard = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50  ">
      <div className="rounded-xl  bg-white shadow-lg  ">
        <div className="flex items-center justify-center gap-10 rounded-t-md bg-[#DC6563] py-5">
          <p className="text-center  text-xl font-bold text-white">
            Important Numbers
          </p>

          <button
            onClick={onClose}
            className="text-end font-bold text-white text-[20x] hover:text-gray-800 focus:outline-none"
          >
            X
          </button>
        </div>
        <div className="bg-[#dc656380] px-5">
          <p className="text-justify text-base">
            You will get call and chat alerts from these numbers. Save these
            numbers to avoid <br />
            any confusion
          </p>
        </div>

        <div className="py-1 px-4 ">
          <p className="text-[20px] font-bold">AstrosevaTalk Call</p>

          <div className="grid lg:grid-cols-5">
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
          </div>
          <div className="mt-2 border-b-[1px] border-[#D9D9D9]"></div>
        </div>

        <div className=" px-4 ">
          <p className="text-[20px] font-bold">AstrosevaTalk Chat Alert</p>

          <div className="grid lg:grid-cols-5">
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
          </div>
          <div className="mt-2 border-b-[1px] border-[#D9D9D9]"></div>
        </div>

        <div className=" px-4 ">
          <p className="text-[20px] font-bold">AstrosevaTalk Admin Support</p>

          <div className="grid lg:grid-cols-5">
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
            <p className="">
              <span className="">+91</span> 1234567890,
            </p>
          </div>
          <div className="mt-2 border-b-[1px] border-[#D9D9D9]"></div>
        </div>
      </div>
    </div>
  );
};

export default ImportantContactCard;
