"use client";
import React, { useEffect, useState } from "react";
import Section from "../Section";
import Link from "next/link";
import { getFetcher, postFetcher } from "@/service";
import Image from 'next/image';
import Search from "../common/Search";

const card = [
  {
    img: "/assets/shop/lovescore.svg",
    name: "Love Score",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja.svg",
    name: "Online Puja",
    url: "/shop/online-puja",
  },
  {
    img: "/assets/shop/kundlimatching.svg",
    name: "Kundli Matching",
    url: "/shop/kundli-matchingproduct",
  },
  {
    img: "/assets/shop/gemstone.svg",
    name: "Gemstone",
    url: "/shop/gemstone",
  },
  {
    img: "/assets/shop/carreereport.svg",
    name: "Career Report",
    url: "",
  },
  {
    img: "/assets/shop/kawach.svg",
    name: "Kawach",
    url: "/shop/kawach",
  },
  {
    img: "/assets/shop/spell.svg",
    name: "Spell",
    url: "/shop/love-spell",
  },
  {
    img: "/assets/shop/healingoil.svg",
    name: "Healing Oil",
    url: "/shop/healing",
  },
  {
    img: "/assets/shop/evileye.svg",
    name: "Evil Eye",
    url: "/shop/evil-eye",
  },
  {
    img: "/assets/shop/karmareport.svg",
    name: "Karma Report",
    url: "/shop/karma",
  },
  {
    img: "/assets/shop/cosmic.svg",
    name: "Cosmic Integration",
    url: "/shop/cosmic-integration",
  },
  {
    img: "/assets/shop/thete.svg",
    name: "Theta Healing",
    url: "/shop/theta-healing",
  },
  {
    img: "/assets/shop/puja.svg",
    name: "Puja",
    url: "/shop/puja-product",
  },
  {
    img: "/assets/shop/gemconsultion.svg",
    name: "Gem Consultation",
    url: "",
  },
  {
    img: "/assets/shop/palamistry.svg",
    name: "Palmistry",
    url: "/shop/palamistry",
  },
  {
    img: "/assets/shop/lovescore.svg",
    name: "Face Reading",
    url: "/shop/facereading",
  },
];

type Props = {};

const Card = (props: Props) => {
  const [categories, setCategories] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    
       
  const shopResponse = async () => {
    const allCategories = await getFetcher("/categories");
    
    if(allCategories?.status){
      setCategories(allCategories?.res);
      setIsLoading(false);
    }
    
  }  
  
  
  shopResponse();
 
  
  
}, []);
  if(!isLoading){
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat  py-[30px]">
      <Section>
      <div>
          <div>
            <p className=" text-center text-[36px] font-bold">Astroseva Shop</p>
            <p className=" text-center text-[30px] font-semibold">
              Shop Best Online Astrology Products And Services
            </p>
          </div>
          <div className="flex justify-end py-[30px]">
            <Search />
          </div>
          <div>
            <div className=" mt-[30px] grid  gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
              {categories.map((item:any, index:any) => (
                <Link
                  key={index}
                  href={"/shop/shop/products?categories=" + item._id}
                  className=" rounded-[10px]  border-2 border-[#DC6563]"
                >
                  <div className=" relative ">
                    <img
                      className="h-[281px] w-full rounded-[10px] object-cover py-[5px] px-[5px]"
                      src={item?.image}
                      alt=""
                    />
                    <button className="absolute bottom-[0px] w-full rounded-t-[10px] rounded-b-[7px] bg-[#DC6563]  px-[4px] py-3 text-center text-2xl font-medium text-white">
                      {item?.name}
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </Section>
    </div>
  );
              }
              else{
                return (
                  <div className="text-center content-center flex w-full items-center py-3">
                    <Image 
                    src="/assets/img/loading.gif"
                    width={50}
                    height={50}
                    alt="Loading.."
                    className="text-center mx-auto"
                    >

                    </Image>
                  </div>
                )
              }
};

export default Card;
