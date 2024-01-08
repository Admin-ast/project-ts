import { monthsInYear } from "date-fns/esm/fp";
import React, { useEffect, useState } from "react";
import Section from "../Section";
import Payment from "../payment/Payment";
import { number } from "yup";
import { useRouter } from "next/navigation";
import  Addwallet  from "../wallet/addwallet";

type Props = {
  amount: number;
};
const amountCard = [
  {
    money: 50,
    extra: 25,
  },
  {
    money: 100,
    extra: 50,
  },
  {
    money: 150,
    extra: 75,
  },
  {
    money: 200,
    extra: 100,
  },
  {
    money: 300,
    extra: 150,
  },
  {
    money: 400,
    extra: 200,
  },
  {
    money: 500,
    extra: 250,
  },
  {
    money: 1000,
    extra: 500,
  },
  {
    money: 2000,
    extra: 1000,
  },{
    money: 3000,
    extra: 1500,
  },
];

const Money = ({ amount }: Props) => {
  const [selected,setSelected] = useState(0);
  const [rechargeamount,setRecahrgeamount] = useState(0);
  const [balance, setBalance] = useState<any>('0');
  const { push } = useRouter();
//console.log(amount);
const handleClick = (index:number, money:number,extra:number) =>{
      console.log("index " + index + " money  " + money + " exra " + extra);
      const total = money + extra;
      setRecahrgeamount(0);
      setRecahrgeamount(money);
      console.log(rechargeamount);
}


useEffect(() => {
  console.log(rechargeamount);
  if(rechargeamount > 0){
    setSelected(1);
  }
  
  if(window.localStorage.getItem('walletbalance')){
    setBalance(window.localStorage.getItem('walletbalance'));
  }
 
  
},[rechargeamount])
  if(selected === 0){
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <p className="text-center font-[Georgia] text-[36px] font-bold">
        Add Money to Wallet
      </p>
      <p className="text-center font-[Roboto] text-[22px] font-bold text-[#A9A9A9]">
        Available Balance
      </p>
      <p className="text-center font-[Roboto] text-[30px] font-bold">
      ₹ {balance}
      </p>
      <Section>
        <div className="mt-[25px] grid gap-[34px]  px-10 md:grid-cols-2 lg:grid-cols-5  ">
          {amountCard.map((item, index) => (
            <div key={index} className="cursor-pointer hover:border-blue-500" onClick={() => setRecahrgeamount(item?.money)}>
              <div className="h-[117px]  rounded-[15px] border-[1px] border-[#DC6563] shadow-xl hover:border-blue-500">
                <p className="flex items-center justify-center font-[Roboto] text-[30px] font-bold">
                ₹ {item.money}
                </p>
                <div className="mt-[32px] h-[38px]  rounded-b-[15px] bg-[#DC6563]">
                  <p className="text-center text-[20px] text-white ">
                  ₹ {item.extra} Extra
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
          }
          else{
            return (
              <div>
                  <Addwallet _id="123" totalPrice={rechargeamount} name="123" email="12323@gmail.com" phone="+919351311436" ></Addwallet>
                </div>
            )
          }
};

export default Money;
