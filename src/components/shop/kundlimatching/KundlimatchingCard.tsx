import React, { Key } from "react";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

const card = [
  {
    img: "/assets/shop/puja/15 Ratti Amethyst.svg",
    name: "896",
    url: "",
  },
];

type Props = {
  products:any
};

const KundlimatchingCard = ({products}: Props) => {
  return (
    <div className=" bg-cover bg-repeat py-8 ">
      <Section>
        <div>
          <div></div>
          <div>
            <div className="grid gap-4  md:grid-cols-2 md:gap-6 lg:grid-cols-3 ">
              {products.map((item:any, index:Key) => (
                  <Link href={"/shop/shop/product?id=" + item?._id} className="">
                <div
                  key={index}
                  className="flex gap-8 rounded-xl bg-white p-2 shadow-xl"
                >
                 
                  <div className="mx-auto my-auto rounded-[15px] border-2 border-[#DC6563]">
                     <img
                        src={item.image}
                        alt={item.name}
                        width={150}
                        height={170}
                        className=" px-[5px] pt-[5px] "
                      />
                      <p className="rounded-b-[12px] bg-[#DC6563] text-center font-bold text-white">
                        Rs.{item?.price}
                      </p>
                    
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="py-4 font-bold">{item?.name}</p>
                    <div className="  ml-24  flex justify-end">
                      <button className="rounded-md  bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-6 py-2 font-bold text-white hover:bg-[#F9B800]">
                        BUY
                      </button>
                    </div>
                  </div>
                  
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default KundlimatchingCard;
