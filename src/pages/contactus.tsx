import React from "react";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import ContactForm from "@/components/ContactForm";

type Props = {};

const contactforms = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero icon="" text="Customer care" subText="" />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Contact us
          </p>
        </div>
      </div>
      <div>
        <p className=" mt-[25px] text-center text-[34px] font-bold">
          Get in touch with us
        </p>
        <p className=" text-center  text-[20px] ">
          {" "}
          If you have any further questions or quarries please do not hesitate
          to get in touch.
        </p>
      </div>
      <div className="mx-auto mt-[25px] mb-[25px] px-4 lg:max-w-7xl"></div>
      <div className="container justify-between md:flex lg:flex ">
        <div className="column">
          <div className="mt-[25px]">
            <p className=" text-[20px] font-bold">Address</p>
            <p className="mt-[10px] text-[16px]"></p>
            <p className=" mt-[20px]font-bold text-[20px]">Email address</p>
            <p className="mt-[10px] text-[16px]">Support@astrosevatalk.com</p>
            <p className=" mt-[20px] text-[20px] font-bold">Customer Support</p>
            <p className="mt-[10px] text-[16px]">
              We are available 24x7, click to start chat
            </p>
          </div>
        </div>
        <div className="column">
          <ContactForm text="" className="" />
        </div>
        <style jsx>{`
          .column {
            flex: 1;
            margin: 0 10px;
            padding: 20px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default contactforms;
