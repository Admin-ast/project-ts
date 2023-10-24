import { monthsInYear } from "date-fns/esm/fp";
import React from "react";
import Section from "../Section";

type Props = {
  amount: number;
};
const amountCard = [
  {
    money: 50,
    extra: 25,
  },
  {
    money: 50,
    extra: 25,
  },
  {
    money: 50,
    extra: 25,
  },
  {
    money: 50,
    extra: 25,
  },
  {
    money: 50,
    extra: 25,
  },
  {
    money: 50,
    extra: 25,
  },
];
const Money = ({ amount }: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <p className="text-center font-[Georgia] text-[36px] font-bold">
        Add Money to Wallet
      </p>
      <p className="text-center font-[Roboto] text-[22px] font-bold text-[#A9A9A9]">
        Available Balance
      </p>
      <p className="text-center font-[Roboto] text-[30px] font-bold">
        Rs {amount}
      </p>
      <Section>
        <div className="mt-[25px] grid gap-[34px]  px-10 md:grid-cols-2 lg:grid-cols-5 ">
          {amountCard.map((item, index) => (
            <div key={index} className="">
              <div className="h-[117px]  rounded-[15px] border-[1px] border-[#DC6563] shadow-xl">
                <p className="flex items-center justify-center font-[Roboto] text-[30px] font-bold">
                  RS {item.money}
                </p>
                <div className="mt-[32px] h-[38px]  rounded-b-[15px] bg-[#DC6563]">
                  <p className="text-center text-[20px] text-white ">
                    Rs {item.extra} Extra
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Money;
