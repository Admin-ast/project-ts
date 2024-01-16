import React from "react";

type Props = {
  date: number;
  month: string;
};

const Line = ({ date, month }: Props) => {
  return (
    <div className="flex ">
      <div className="flex items-center ">
        <div className="relative ">
          <img src="/assets/book-a-pooja/Circle.svg" alt="" className="" />
          <div className="absolute top-[5px]   md:left-[2px] md:text-[12px] lg:left-[4px] lg:text-base ">
            <p className="">{date}</p>
            <p className="">{month}</p>
          </div>
        </div>
        <div className="px-1">
          <img src="/assets/book-a-pooja/Line.png" alt="" className="" />
        </div>
      </div>
      <div className="flex items-center ">
        <div className="relative ">
          <img src="/assets/book-a-pooja/Circle.svg" alt="" className="" />
          <div className="absolute top-[5px]   md:left-[2px] md:text-[12px] lg:left-[4px] lg:text-base ">
            <p className="">{date}</p>
            <p className="">{month}</p>
          </div>
        </div>
        <div className="px-1">
          <img src="/assets/book-a-pooja/Line.png" alt="" className="" />
        </div>
      </div>
      <div className="flex items-center ">
        <div className="relative ">
          <img src="/assets/book-a-pooja/Circle.svg" alt="" className="" />
          <div className="absolute top-[5px]   md:left-[2px] md:text-[12px] lg:left-[4px] lg:text-base ">
            <p className="">{date}</p>
            <p className="">{month}</p>
          </div>
        </div>
        <div className="px-1">
          <img src="/assets/book-a-pooja/Line.png" alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Line;
