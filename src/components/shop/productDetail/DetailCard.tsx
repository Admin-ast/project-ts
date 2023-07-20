import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineHeart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";
type Props = {};

const DetailCard = (props: Props) => {
  const [quantity, setQunatity] = useState(1);

  const handleInc = () => {
    setQunatity(quantity + 1);
  };
  const handleDec = () => {
    setQunatity(quantity - 1);
  };
  return (
    <div className="mt-[40px] px-[25px]">
      <p className="mb-2 text-3xl font-bold md:text-2xl lg:text-3xl">
        Black Tourmaline Healing Crystal Palm Stone
      </p>

      <div className="mb-4 flex items-center gap-5">
        <span className="text-3xl text-[#c0c0c0] line-through">₹ 600</span>
        <span className="text-3xl font-bold text-[#eea112]">₹ 393</span>
      </div>
      <span className="">You save:₹ 247 (35%)</span>
      <div className="mt-4 flex gap-1">
        <span className="text-xl">
          <AiOutlineCheck />
        </span>
        <p className="">In stock(can be backoredrd)</p>
      </div>
      <div className="mt-10">
        <p className="text-xl">Pre Activated</p>
        <p className="border-top mt-4 border-2 border-[#949494]"></p>
        <div className="mt-4 flex gap-5">
          <p className="text-xl font-bold">Charged and Activated</p>
          <p className="text-base">₹ 99</p>
        </div>
        <p className="border-top mt-4 border-[1px] "></p>

        <div className="mt-5">
          <p className="">Final total</p>
          <p className="text-xl font-bold text-[#949494]">₹ 492</p>
          <div className="mt-5 grid gap-5 lg:flex">
            <div className=" flex w-[40%] rounded-[15px] border-[1px] md:w-[40%] lg:w-[15%]">
              <button
                disabled={quantity === 1}
                onClick={handleDec}
                className="  border-1 border-r px-3 py-2 text-black hover:bg-teal-900"
              >
                -
              </button>
              <p className="border-1 border-r px-3 py-2 text-black">
                {quantity}
              </p>
              <button
                onClick={handleInc}
                className="px-3 py-2 text-black hover:bg-teal-900"
              >
                +
              </button>
            </div>
            <div className="rounded-[5px] bg-teal-900">
              <button className="px-5 py-3 text-center text-white">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="mt-5 flex gap-10">
            <div className="flex gap-2">
              <span className="text-xl">
                <IoIosGitCompare />
              </span>
              <Link href="/">Compare</Link>
            </div>

            <div className="flex">
              <span className="text-xl">
                <AiOutlineHeart />
              </span>
              <Link href="/">ADD TO WISHLIST</Link>
            </div>
          </div>
          <p className="mt-4 border-[1px] border-b "></p>
          <div className="mt-5">
            <div className="flex gap-2">
              <p className="">SKU:</p>
              <p className="text-[#C0C0C0]">12345</p>
            </div>
            <div className="mt-2 flex gap-2">
              <p className="">Category:</p>
              <p className="text-[#C0C0C0]">Palm Stone</p>
            </div>
            <div className="mt-2 flex gap-2">
              <p className="">Tag:</p>
              <p className="text-[#C0C0C0]">Black Tourmaline</p>
            </div>
            <div className="mt-2 flex gap-3">
              <p className="">Share:</p>
              <Link href="/">
                <span className="text-blue-700">
                  {" "}
                  <FaFacebookF />
                </span>
              </Link>
              <Link href="/">
                <span className="text-blue-700">
                  {" "}
                  <FaTwitter />
                </span>
              </Link>
              <Link href="/">
                <span className="text-red-700">
                  {" "}
                  <GrMail />
                </span>
              </Link>
              <Link href="/">
                <span className="text-red-700">
                  {" "}
                  <FaPinterest />
                </span>
              </Link>
              <Link href="/">
                <span className="text-blue-700">
                  {" "}
                  <FaLinkedinIn />
                </span>
              </Link>
              <Link href="/">
                <span className="text-green-700">
                  {" "}
                  <FaWhatsapp />
                </span>
              </Link>
              <Link href="/">
                <span className="text-blue-700">
                  {" "}
                  <SiTelegram />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
      {/* Replace the following with your product data */}
    </div>
  );
};

export default DetailCard;
