import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {
  date: string;
};
const cardItems = [
  {
    id: 1,
    img: "/assets/book-a-pooja/saras.png",
    name: "Mahalaxmi Arti",
    desc: "Attract Wealth, Achieve Success in career and Business!",
  },
  {
    id: 2,
    img: "/assets/book-a-pooja/lakshmi.png",
    name: "Mahalaxmi Arti",
    desc: "Attract Wealth, Achieve Success in career and Business!",
  },
  {
    id: 3,
    img: "/assets/book-a-pooja/durga.png",
    name: "Mahalaxmi Arti",
    desc: "Attract Wealth, Achieve Success in career and Business!",
  },
  {
    id: 4,
    img: "/assets/book-a-pooja/kaali.png",
    name: "Mahalaxmi Arti",
    desc: "Attract Wealth, Achieve Success in career and Business!",
  },
  {
    id: 5,
    img: "/assets/book-a-pooja/devi.png",
    name: "Mahalaxmi Arti",
    desc: "Attract Wealth, Achieve Success in career and Business!",
  },
  {
    id: 6,
    img: "/assets/book-a-pooja/maha-arti3.png",
    name: "Mahalaxmi Arti",
    desc: "Attract Wealth, Achieve Success in career and Business!",
  },
];

const Card = ({ date }: Props) => {
  
  return (
    <div className="mt-[72px] grid gap-[30px] md:grid-cols-3 lg:grid-cols-4">
      {cardItems.map((item, index) => (
        <Link href="/book-a-pooja/book-a-pooja">
        <div
          key={index}
          className=" mx-auto rounded-[15px] border-[3px] border-[#DC6563]"
        >
          
          <div className="relative">
            <Image
              src={item.img}
              alt={item.name}
              width={261}
              height={227}
              className="rounded-[15px]"
            />

            <div className="absolute bottom-[0px]  w-full">
              <div className="mx-auto bg-[#00000082] bg-opacity-50  px-2 font-[Roboto] text-white">
                <p className="text-[22px]">{item.name}</p>
                <p className="text-[12px]">{item.desc}</p>
              </div>
              <div className="flex justify-between rounded-b-[10px] bg-[#DC6563] px-2 py-1 text-white">
                <p className="">{date}</p>
                <div className="flex  items-center ">
                  <button>Book Now</button>
                  <IoIosArrowRoundForward className="text-[24px] font-bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
