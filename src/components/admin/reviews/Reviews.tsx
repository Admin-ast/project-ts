import React, { useState } from "react";
import Sidebar from "../Sidebar";
import ReviewCard from "./ReviewCard";
import DetailBox from "./DetailBox";

import { IoIosStar } from "react-icons/io";

type Props = {};

const Reviews = (props: Props) => {
  const [allReview, setAllReview] = useState(false);
  const [myReview, setMyReview] = useState(false);
  const toggleReview = () => {
    setAllReview((prev) => !prev);
  };
  const toggleMyReview = () => {
    setMyReview((prev) => !prev);
  };
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
        <div className=" px-10 lg:w-3/4">
          <div className="mt-[45px] grid items-center  gap-[81px] md:flex lg:flex">
            {" "}
            <button
              onClick={toggleReview}
              className="w-56 rounded-[6px] border-[1px] border-red-700 py-2 lg:px-5"
            >
              Show all reviews
            </button>
            {allReview && (
              <div className="absolute left-[420px] mt-[285px] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                {/* Your options content goes here */}
                <div
                  className="py-1 "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className=" flex items-center px-4 py-2 text-[30px] font-bold text-black"
                    role="menuitem"
                    tabIndex={-1}
                    id="options-menu-0"
                  >
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <p className="whitespace-nowrap text-[12px]">
                      ( 5 star review)
                    </p>
                  </a>

                  <a
                    href="#"
                    className=" flex items-center px-4 py-2 text-[30px] font-bold text-black"
                    role="menuitem"
                    tabIndex={-1}
                    id="options-menu-0"
                  >
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar className="text-[#D9D9D9]" />
                    <p className="whitespace-nowrap text-[12px]">
                      ( 4 star review)
                    </p>
                  </a>
                  <a
                    href="#"
                    className=" flex items-center px-4 py-2 text-[30px] font-bold text-[#D9D9D9]"
                    role="menuitem"
                    tabIndex={-1}
                    id="options-menu-0"
                  >
                    <IoIosStar className="text-black" />
                    <IoIosStar className="text-black" />
                    <IoIosStar className="text-black" />
                    <IoIosStar />
                    <IoIosStar className="text-[#D9D9D9]" />
                    <p className="whitespace-nowrap text-[12px] text-black">
                      ( 3 star review)
                    </p>
                  </a>
                  <a
                    href="#"
                    className=" flex items-center px-4 py-2 text-[30px] font-bold text-[#D9D9D9] "
                    role="menuitem"
                    tabIndex={-1}
                    id="options-menu-0"
                  >
                    <IoIosStar className="text-black" />
                    <IoIosStar className="text-black" />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar className="text-[#D9D9D9]" />
                    <p className="whitespace-nowrap text-[12px] text-black">
                      ( 2 star review)
                    </p>
                  </a>
                  <a
                    href="#"
                    className=" flex items-center px-4 py-2 text-[30px] font-bold text-[#D9D9D9]"
                    role="menuitem"
                    tabIndex={-1}
                    id="options-menu-0"
                  >
                    <IoIosStar className="text-black" />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar className="text-[#D9D9D9]" />
                    <p className="whitespace-nowrap text-[12px] text-black">
                      ( 1 star review)
                    </p>
                  </a>
                </div>
              </div>
            )}
            <div className="flex items-center justify-center">
              <p className=" rounded-[43px] bg-[#DC6563] py-2 text-center text-xl font-bold text-white md:px-[50px] lg:px-[50px] ">
                MY REVIEWS
              </p>
            </div>
            <button
              onClick={toggleMyReview}
              className="w-56 rounded-[6px] border-[1px] border-red-700 py-2 lg:px-5"
            >
              My Reviews
            </button>
            {myReview && (
              <div className="absolute right-[270px] mt-[90px] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                {/* Your options content goes here */}
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm "
                    role="menuitem"
                    tabIndex={-1}
                    id="options-menu-0"
                  >
                    Pinned reviews
                  </a>
                </div>
              </div>
            )}
          </div>
          <DetailBox
            nums={23}
            missNums={10}
            useNums={33 / 60}
            note=" System gives you maximum 60 flags (inclusive the count of missed call & chat) for your review every month. Used balance will get reset every 1st day of the month"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
            <ReviewCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="CALL"
              date="Jul 25,2023"
              desc=""
              text="Reply to this review"
            />
            <ReviewCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="CALL"
              date="Jul 25,2023"
              desc="thank you so much mam. i got clarity on this your prediction is true and good sorry balance got over"
              text="Reply to this review"
            />
            <ReviewCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="CALL"
              date="Jul 25,2023"
              desc=""
              text="Reply to this review"
            />
            <ReviewCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="CALL"
              date="Jul 25,2023"
              desc=""
              text="Reply to this review"
            />
            <ReviewCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="CALL"
              date="Jul 25,2023"
              desc=""
              text="Reply to this review"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
