import React from "react";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

const card = [
  {
    img: "/assets/shop/onlinepuja/Grahan Dosh Puja.svg",
    name: "896",
    para: "Grahan Dosh Puja",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja/Guru Chandal Dosh Puja.svg",
    name: "896",
    para: "Guru Chandal Dosh Puja",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja/Kaal Sarp Dosh Puja.svg",
    name: "896",
    para: "Kaal Sarp Dosh Puja",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja/Ketu Grah Puja.svg",
    name: "896",
    para: "Ketu Grah Puja",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja/Mangal Puja.svg",
    name: "896",
    para: "Mangal Puja",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja/Online Puja Consultancy.svg",
    name: "896",
    para: "Online Puja Consultancy",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja/Rahu Puja.svg",
    name: "896",
    para: "Rahu Puja",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja/Black Magic & Evil Eye  Effect Removal Puja.svg",
    name: "896",
    para: "Black Magic & Evil Eye  Effect Removal Puja",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja/Rudrabhishek Puja.svg",
    name: "896",
    para: "Rudrabhishek Puja",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja/Satyanarayan Puja.svg",
    name: "896",
    para: "Satyanarayan Puja",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja/Shani Puja.svg",
    name: "896",
    para: "Shani Puja",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja/Special Puja For Relationships.svg",
    name: "896",
    para: "Special Puja For Relationships",
    url: "",
  },
];
type Props = {};

const OnlinepoojaCard = (props: Props) => {
  return (
    <div className=" py-8 ">
      <Section>
        <div>
          <div></div>
          <div>
            <div className="grid gap-4  md:grid-cols-2 md:gap-6 lg:grid-cols-3 ">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-8 rounded-xl bg-white p-2 shadow-xl"
                >
                  <div className="my-auto mx-auto rounded-[15px] border-2 border-[#DC6563]">
                    <Link href={item?.url}>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={200}
                        height={170}
                        className=" px-[5px] pt-[5px] "
                      />
                      <p className="rounded-b-[12px] bg-[#DC6563] text-center font-bold text-white">
                        Rs.{item?.name}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="py-4 font-bold">{item?.para}</p>
                    <div className="  ml-24  flex justify-end">
                      <button className="rounded-md  bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-6 py-2 font-bold text-white hover:bg-[#F9B800]">
                        BUY
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default OnlinepoojaCard;
