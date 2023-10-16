import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import Section from "../Section";

type Props = {
  cardDetails: any;
};

const Store = ({ cardDetails }: Props) => {
  return (
    <div className="space-y-6 bg-white py-3 shadow-xl lg:py-[30px]">
      <div className=" text-center font-bold">Store</div>
      <div className="text-center text-[36px] font-bold">
        Recommended Reports For You
      </div>
      <div className="mb-[42px] flex flex-wrap justify-center gap-5 ">
        {cardDetails.map((item: any, index: Key) => (
          <Link
            href={item.link}
            key={index}
            className=" flex w-[90%] max-w-[400px] flex-col justify-end rounded-b-[20px]  rounded-t-3xl border-[3px] border-[#DC6563]  md:w-[300px]"
          >
            <div className="h-full w-full">
              <Image
                unoptimized
                src={item.img}
                alt="Picture of the author"
                width={300}
                height={305}
              />
            </div>
            <p className="rounded-[10px] bg-[#Dc6563] py-[11px]  text-center text-[white] lg:text-[22px]">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Store;
