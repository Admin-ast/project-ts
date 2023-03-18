import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { Key } from "react";
import Button from "../common/Button";
import Section from "../Section";

type Props = {};

type Review = {
  name: string;
  src: string;
  review: string;
};

const reviews: Review[] = [
  {
    name: "Bani Sharma",
    src: "",
    review:
      " Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution.",
  },
  {
    name: "Bani Sharma",
    src: "",
    review:
      "Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution. Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution.",
  },
  {
    name: "Bani Sharma",
    src: "",
    review:
      " Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution.",
  },
];

function Review({}: Props) {
  return (
    <div className="bg-[#FFF7E5] py-[39px]">
      <Section>
        <div className="">
          <div className="mb-[26px]">
            <h2 className="mb-[15px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[48px]">
              Client Reviews
            </h2>
            <h3 className="text-center text-sm font-semibold sm:text-lg lg:text-2xl">
              Hear about us from our customers
            </h3>
          </div>
          <div className="mb-8 space-y-4">
            {reviews.map((item: Review, index: Key) => (
              <div
                key={index}
                className="items-center space-y-4 overflow-hidden rounded-2xl bg-white px-9 py-5 lg:flex lg:items-center lg:gap-y-0 lg:gap-x-8 lg:space-y-0"
              >
                <div className="col-span-12 flex items-center space-x-4 lg:col-span-1 lg:items-start">
                  <div className="h-24 w-24 rounded-full border-[3px] border-black p-0.5">
                    <Image
                      src="/assets/home/review.png"
                      alt={item.name}
                      width={92}
                      height={92}
                      loading={"lazy"}
                    />
                  </div>
                  <div className="space-y-2 lg:hidden">
                    <p className="text-[20px] font-semibold">{item.name}</p>
                    <div className="flex">
                      <StarIcon className="h-5 w-5 text-[#E9B741]" />
                      <StarIcon className="h-5 w-5 text-[#E9B741]" />
                      <StarIcon className="h-5 w-5 text-[#E9B741]" />
                      <StarIcon className="h-5 w-5 text-[#E9B741]" />
                      <StarIcon className="h-5 w-5 text-[#E9B741]" />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 ml-auto gap-y-[8px] lg:col-span-11 lg:w-[99%]">
                  <p className="hidden text-[20px] font-semibold lg:block">
                    {item.name}
                  </p>
                  <p className="text-justify text-base">{item.review}</p>
                </div>
              </div>
            ))}
          </div>
          <Button text="View More" className="mx-auto lg:text-[28px]" />
        </div>
      </Section>
    </div>
  );
}

export default Review;
