import { Button, Textarea } from "@/components/forms";
import Link from "next/link";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { RiArrowUpSLine } from "react-icons/ri";

type Props = {};

const AddNewForm = (props: Props) => {
  return (
    <div className="">
      <label className="font-bold">Add New Product</label>
      <div className="mt-2 w-full rounded-[5px] border-[1px] border-[#A9A9A9] py-2 ">
        <input type="text" />
      </div>

      <div className="mt-2 border-[1px] border-[#A9A9A9]">
        <div className="py-2 px-2">
          <p className="">Product Description</p>
        </div>
        <div className="border-b-[1px] border-[#A9A9A9]"></div>
        <div className="flex md:gap-2 lg:gap-2 ">
          <Button
            btnText="Add Media"
            className="rounded-[2px] border-[1px] border-[#DC6563]"
          />
          <Button
            btnText="Testimonials"
            className="rounded-[2px] border-[1px] border-[#DC6563]"
          />
          <Button
            btnText="Formidable"
            className="rounded-[2px] border-[1px] border-[#DC6563]"
          />
        </div>
        <div className="px-2">
          <Textarea />
        </div>
      </div>
      <div className="mt-2 border-[1px] border-[#A9A9A9]">
        <div className="py-2 px-2">
          <p className="font-bold">Product </p>
        </div>
        <div className="border-b-[1px] border-[#A9A9A9]"></div>
        <div className="flex gap-2 ">
          <p
            className="font-[
Roboto] px-2 text-base"
          >
            Product Short Description Inside Loop
          </p>
        </div>
        <div className="px-2">
          <Textarea />
        </div>
        <div className="mt-2 border-[1px] border-[#A9A9A9]"></div>
        <div className="mt-2 px-2">
          <p className="text-base  font-bold">Custom Price Value</p>
          <div className="mt-2 w-full rounded-[5px] border-[1px] border-[#A9A9A9] py-2 ">
            <input type="text" />
          </div>
        </div>
        <div className="mt-2 border-[1px] border-[#A9A9A9]"></div>
        <div className="mt-2 px-2">
          <p className="text-base  font-bold">Where To Display</p>
          <div className="mt-2 mb-2 w-full rounded-[5px] border-[1px] border-[#A9A9A9] py-2 ">
            <input
              type="text"
              placeholder="Special Page"
              className="placeholder:px-2 placeholder:text-black"
            />
          </div>
        </div>
      </div>

      <div className=" mt-10 rounded-[5px] border-[1px] border-[#A9A9A9]  ">
        <div className="flex justify-between p-2">
          <div className="">
            {" "}
            <p className="text-base  font-bold ">Slug</p>
          </div>
          <div className="flex gap-2 text-[23px]">
            <RiArrowUpSLine />
            <GoChevronDown />
            <BsFillCaretDownFill />
          </div>
        </div>

        <div className="mt-2 border-[1px] border-[#A9A9A9] "></div>
        <div className=" mt-2 mb-4  w-1/2 rounded-[5px] border-[1px] border-[#A9A9A9] py-2 ">
          <input type="text" className="" />
        </div>
      </div>

      <div className=" mt-10 rounded-[5px] border-[1px] border-[#A9A9A9]  ">
        <div className="flex justify-between p-2">
          <div className="gap-4 md:flex lg:flex">
            <p className="text-base  font-bold ">Product Data</p>
            <select className="border-[1px] border-[#A9A9A9] px-5">
              <option value="">Simple Product</option>
            </select>
            <label>Virtual:</label>
            <input type="checkbox" name="" id="" />
            <label>Downloadable:</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="flex gap-2 text-[23px]">
            <RiArrowUpSLine />
            <GoChevronDown />
            <BsFillCaretDownFill />
          </div>
        </div>

        <div className="mt-2 border-[1px] border-[#A9A9A9] "></div>
        <div className=" mb-4 border-[1px]   border-[#A9A9A9]  py-2   md:flex lg:flex">
          <div className="bg-[#F5F5F5] md:w-1/3 lg:w-1/3 ">
            <ul>
              <Link href="/">
                <li className="px-4 font-bold hover:bg-[#D9D9D9] ">General</li>
              </Link>
              <div className="mt-2 border-[1px] border-[#A9A9A9] "></div>
              <Link href="/">
                <li className="px-4 font-bold hover:bg-[#D9D9D9] ">
                  Inventory
                </li>
              </Link>
              <div className="mt-2 border-[1px] border-[#A9A9A9] "></div>
              <Link href="/">
                <li className="px-4 font-bold hover:bg-[#D9D9D9] ">
                  Inventory
                </li>
              </Link>
              <div className="mt-2 border-[1px] border-[#A9A9A9] "></div>
              <Link href="/">
                <li className="px-4 font-bold hover:bg-[#D9D9D9] ">
                  Inventory
                </li>
              </Link>
              <div className="mt-2 border-[1px] border-[#A9A9A9] "></div>
              <Link href="/">
                <li className="px-4 font-bold hover:bg-[#D9D9D9] ">
                  Inventory
                </li>
              </Link>
              <div className="mt-2 border-[1px] border-[#A9A9A9] "></div>
              <Link href="/">
                <li className="px-4 font-bold hover:bg-[#D9D9D9] ">
                  Inventory
                </li>
              </Link>
              <div className="mt-2 border-[1px] border-[#A9A9A9] "></div>
              <Link href="/">
                <li className="px-4 font-bold hover:bg-[#D9D9D9] ">
                  Inventory
                </li>
              </Link>
            </ul>
          </div>

          <div className="w-2/3 px-5 ">
            <div className="mt-5 flex  gap-2">
              <label className="text-[14px]">Regular Price</label>
              <input
                type="text"
                className="rounded-[2px] border-[1px] border-[#A9A9A9]"
              />
            </div>
            <div className="mt-5 flex  gap-2">
              <label className="text-[14px]">Regular Price</label>
              <input
                type="text"
                className="rounded-[2px] border-[1px] border-[#A9A9A9]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 rounded-[5px] border-[1px] border-[#A9A9A9]  ">
        <div className="flex justify-between p-2">
          <div className="">
            {" "}
            <p className="text-base  font-bold ">Yost SEO</p>
          </div>
          <div className="flex gap-2 text-[23px]">
            <RiArrowUpSLine />
            <GoChevronDown />
            <BsFillCaretDownFill />
          </div>
        </div>
      </div>

      <div className="mt-10 border-[1px] border-[#A9A9A9]">
        <div className="py-2 px-2">
          <p className="font-[Roboto] text-base">Product Short Description</p>
        </div>
        <div className="border-b-[1px] border-[#A9A9A9]"></div>
        <div className="flex lg:gap-2 ">
          <Button
            btnText="Add Media"
            className="rounded-[2px] border-[1px] border-[#DC6563]"
          />
          <Button
            btnText="Testimonials"
            className="rounded-[2px] border-[1px] border-[#DC6563]"
          />
          <Button
            btnText="Formidable"
            className="rounded-[2px] border-[1px] border-[#DC6563]"
          />
        </div>
        <div className="px-2">
          <Textarea />
        </div>
      </div>
    </div>
  );
};

export default AddNewForm;
