import { Button } from "@/components/forms";
import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { RiArrowUpSLine } from "react-icons/ri";

type Props = {
  draft: string;
  visibility: string;
  publish: string;
  seo: string;
  readability: string;
  catalog: string;
};

const Publish = ({
  draft,
  visibility,
  publish,
  seo,
  readability,
  catalog,
}: Props) => {
  return (
    <div className="">
      <div className="rounded-[5px] border-[1px]  border-[#A9A9A9] ">
        <div className="flex justify-between">
          <p className="px-2 font-bold">Publish</p>

          <div className="flex gap-2 text-[23px] ">
            <RiArrowUpSLine />
            <GoChevronDown />
            <BsFillCaretDownFill />
          </div>
        </div>
        <div className="border-b-[1px] border-[#A9A9A9] "></div>
        <div className="mt-2 flex justify-between px-2">
          <button className="border-[1px] border-[#DC6563] px-5 text-base text-[#DC6563]">
            Save Draft
          </button>
          <button className="border-[1px] border-[#DC6563] px-5 text-base text-[#DC6563]">
            Preview
          </button>
        </div>
        <div className="py-2 px-5 font-semibold">
          <div className="flex gap-1 text-base">
            <p className="">Status:</p>
            <p className="">{`${draft}`}</p>
            <button className="text-[#DC6563] underline">Edit</button>
          </div>
          <div className="mt-2 flex gap-1 text-base">
            <p className="">Visibility:</p>
            <p className="">{`${visibility}`}</p>
            <button className="text-[#DC6563] underline">Edit</button>
          </div>
          <div className="mt-2 flex gap-1 text-base">
            <p className="">Publish:</p>
            <p className="">{`${publish}`}</p>
            <button className="text-[#DC6563] underline">Edit</button>
          </div>
          <div className="mt-2 flex gap-1 text-base">
            <p className="text-[#DC6563] underline">SEO:</p>
            <p className="">{`${seo}`}</p>
            <button className="text-[#DC6563] underline">Edit</button>
          </div>
          <div className="mt-2 flex gap-1 text-base">
            <p className="text-[#DC6563] underline">Readability:</p>
            <p className="">{`${readability}`}</p>
            <button className="text-[#DC6563] underline">Edit</button>
          </div>
          <div className=" mt-2 text-base">
            <p className="">
              Catalog Visible: <span className="">{`${catalog}`}</span>
            </p>

            <button className="text-[#DC6563] underline">Edit</button>
          </div>
          <div className=" mt-2 text-base">
            <p className=" text-[#DC6563]">Duplicate This</p>
            <input
              type="text"
              className="rounded-[4px] border-[1px] border-[#A9A9A9]"
            />
          </div>
        </div>
        <div className="mt-2 flex justify-between bg-[#D9D9D980] p-2 text-base">
          <p className="text-[#3E5DAB] underline">Copy a new draft</p>

          <button className=" mt-10 bg-[#DC6563] px-4 text-white ">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
