import Section from "@/components/Section";
import Link from "next/link";
import React from "react";
import Cart from "../karmareport/Cart";
import Image from "next/image";
import PaymentForm from "./PaymentForm";

type Props = {};

const CheckoutCard = (props: Props) => {
  return (
    <div className="">
      <Cart />
      <Section>
        <div className="">
          <Link href="/">
            <div className="flex items-center justify-center gap-2 font-[Georgia] text-[22px]">
              <p className="text-center  font-bold">Returning Customer? </p>
              <p className="">Click Here To Login</p>{" "}
            </div>
          </Link>
        </div>
        <div className="justify-center gap-[51px] rounded-[20px] border-[2px]  border-[#D9D9D9] md:flex lg:flex ">
          <div className="mt-[48px] px-16">
            <p className="font-bold">Payment Method</p>
            <div className="mt-[25px] flex h-[47px] w-[92px] items-center justify-center rounded-[10px] border-[1px] border-[#D9D9D9]">
              <Image
                src="/assets/shop/gpay.png"
                alt="visa"
                width={80}
                height={33}
              />
            </div>
            <div className="mt-[25px] flex h-[47px] w-[92px] items-center justify-center rounded-[10px] bg-[#D9D9D9]">
              <Image
                src="/assets/shop/visa.png"
                alt="visa"
                width={80}
                height={33}
              />
            </div>
          </div>
          <PaymentForm />
          {/* <div className="">
 
<div className="">
   
</div>
            </div> */}
        </div>
      </Section>
    </div>
  );
};

export default CheckoutCard;
