import React from "react";
import { ImCross } from "react-icons/im";

type Props = {};
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
}
const SuggestRemedyAdd = ({ isOpen, onClose, heading }: PopupProps) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center transition-opacity ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative rounded-lg bg-white  p-4 shadow-md md:w-3/4 lg:w-1/2">
        <button
          className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={onClose}
        ></button>
        <div className="">
          <div className="relative flex items-center justify-center font-[Georgia] text-[30px] font-bold">
            <p className="">{heading}</p>
          </div>
          <div className="absolute right-4 top-5">
            <ImCross
              onClick={onClose}
              className="w-6 cursor-pointer font-bold  "
            />
          </div>
          <div className="mt-10 text-justify">
            <p className="text-[20px]">Remedy Type</p>
            <div className="mt-[15px] flex gap-[48px]">
              <button className="w-1/2 rounded-[10px] bg-[#00AF1C] py-2 text-[20px] font-bold text-white">
                Paid Remedy
              </button>
              <button className="w-1/2 rounded-[10px] bg-[#D9D9D9] py-2 text-[20px] font-bold text-white">
                Free Remedy
              </button>
            </div>
          </div>
          <div className="mt-10 text-justify">
            <p className="text-[20px]">Remedy From</p>
            <div className="mt-[15px] flex gap-[48px]">
              <button className="w-1/2 rounded-[10px] bg-[#00AF1C] py-2 text-[20px] font-bold text-white">
                Search from AstrosevaMall
              </button>
              <button className="w-1/2 rounded-[10px] bg-[#D9D9D9] py-2 text-[20px] font-bold text-white">
                Create your own
              </button>
            </div>
          </div>
          <div className="mt-[200px] py-[30px]">
            <button
              className="w-1/2 cursor-pointer rounded-[10px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] py-2  text-white"
              onClick={onClose}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestRemedyAdd;
