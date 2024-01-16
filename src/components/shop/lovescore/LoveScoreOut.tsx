import Section from "@/components/Section";
import React from "react";

type Props = {
  amount: number;
  ffirstName: string;
  fgender: string;
  fdob: string;
  ftob: string;
  fbirthLocation: string;
  fcity: string;
  fstate: string;
  fcountry: string;
  flatitude: number;
  flongitude: number;
  mfirstName: string;
  mgender: string;
  mdob: string;
  mtob: string;
  mbirthLocation: string;
  mcity: string;
  mstate: string;
  mcountry: string;
  mlatitude: number;
  mlongitude: number;
  subtotal: number;
  total: number;
};

const LoveScoreOut = ({
  amount,
  ffirstName,
  fgender,
  fdob,
  ftob,
  fbirthLocation,
  fcity,
  fstate,
  fcountry,
  flatitude,
  flongitude,
  mfirstName,
  mgender,
  mdob,
  mtob,
  mbirthLocation,
  mcity,
  mstate,
  mcountry,
  mlatitude,
  mlongitude,
  subtotal,
  total,
}: Props) => {
  return (
    <div className="">
      <Section>
        <div className="mt-[23px] justify-between rounded-[10px] bg-[#DC6563] px-8 py-2 font-[Georgia] md:flex lg:flex">
          <p className="text-[32px] font-bold text-white">
            Love Score Has Been Added To Your Cart
          </p>
          <div className="flex items-center justify-center rounded-[10px] border-[1px] border-white px-4">
            <button className="text-white">Continue Shopping</button>
          </div>
        </div>
        <div className="relative items-center justify-center lg:flex">
          <div className="mt-[35px] grid-cols-2 rounded-[20px] border-[2px] border-[#D9D9D9] px-8 md:grid lg:grid lg:px-[57px] ">
            <div className="mt-[53px] font-[Roboto] font-[500]">
              <p className="mt-[24px]">First Name : {ffirstName}</p>
              <p className="mt-[24px]">Gender : {fgender}</p>
              <p className="mt-[24px]">Date Of Birth : {fdob}</p>
              <p className="mt-[24px]">Time Of Birth : {ftob}</p>
              <p className="mt-[24px]">Birth Location : {fbirthLocation}</p>
              <p className="mt-[24px]">City : {fcity}</p>
              <p className="mt-[24px]">State : {fstate}</p>
              <p className="mt-[24px]">Country : {fcountry}</p>
              <p className="mt-[24px]">Latitude : {flatitude}</p>
              <p className="mt-[24px]">Longitude : {flongitude}</p>
            </div>
            <div className="mt-[53px] font-[Roboto] font-[500] lg:px-16">
              <p className="mt-[24px]">First Name : {mfirstName}</p>
              <p className="mt-[24px]">Gender : {mgender}</p>
              <p className="mt-[24px]">Date Of Birth : {mdob}</p>
              <p className="mt-[24px]">Time Of Birth : {mtob}</p>
              <p className="mt-[24px]">Birth Location : {mbirthLocation}</p>
              <p className="mt-[24px]">City : {mcity}</p>
              <p className="mt-[24px]">State : {mstate}</p>
              <p className="mt-[24px]">Country : {mcountry}</p>
              <p className="mt-[24px]">Latitude : {mlatitude}</p>
              <p className="mt-[24px]">Longitude : {mlongitude}</p>
            </div>

            <div className="  relative mb-[200px] ">
              <div className="absolute top-[50px] left-[20px] md:left-[200px] lg:left-[180px]">
                <p className="text-center">SubTotal : {subtotal}</p>
                <p className="text-center">Total : {total}</p>
                <button className="whitespace-nowrap rounded-[10px] bg-gradient-to-b from-[#fb7038] to-[#df625b] px-4 py-2 text-center text-white">
                  Proceed To Checkout
                </button>
              </div>
            </div>

            <div className="absolute top-[16px] right-[16px] md:top-[16px] md:right-[40px] lg:top-[46px] lg:right-[300px]">
              <p className=" ">Rs: {amount}</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LoveScoreOut;
