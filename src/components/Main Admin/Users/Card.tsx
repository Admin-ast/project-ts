import Image from "next/image";
import React, { useState } from "react";


type Props = {
 
  name: string;
  review: string;

  
  orderDate: string;
  orderTime: string;
  duration: string;
  calltype: string;
  rate: string;
  status: string;
  deduction:number;
  btn1: string;
 
  copy: string;
};

const Card = ({
  
  name,
 
 calltype,
  deduction,
  
  copy,
  orderDate,
  orderTime,
  duration,
  rate,
  status,
  review,
  btn1,
 
}: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="rounded-[15px] bg-white shadow-2xl flex  border-b-[7px]  border-b-[#DC6563]">
      <div className="px-5 py-5 ">
        <div className="flex justify-between">
          <p className="font-bold">
            Name: <span>{`${name}`}</span>
          </p>
         
        </div>
        <div className="">
        <div className="flex gap-2">
          
          <p className=" ">{`${orderDate}`}</p>
          <p className=" ">{`${orderTime}`}</p>
        </div>
        
        <div className="flex">
          <p className="font-bold"> </p>
          <span className="text-green-700">{`${status}`}</span>
        </div>
        <div className="flex">
          <p className="font-bold">Call type: </p>
          <span>{`${calltype}`}</span>
        </div>
        <div className="flex">
          <p className="font-bold">Rate: </p>
          <span>{`${rate}`}</span>
        </div>
        <div className="flex">
          <p className="font-bold">Duration: </p>
          <span>{`${duration}`}</span>
        </div>
        <div className="flex">
          <p className="font-bold">Deduction: </p>
          <span> Rs{`${duration}`}</span>
        </div>
        <div className="flex">
          <p className="font-bold">Review: </p>
          <span> {`${review}`}</span>
        </div>
       
        
        <div className="flex mt-[20px]">
          <button
            onClick={togglePopup}
            className=" rounded-[10px] border-[1px] border-[#FF0600]  px-5 py-2  font-semibold"
          >
            {btn1}
          </button>
          
         
        </div>

       
      </div>
    </div>
    <div className="">
        <p className="text-[#CA2127]">Help</p>
        <Image
    src="/assets/yearbook/Customer.svg"
    alt="customer"
    width={42}
    height={42}
    className=' rounded-[100%] mt-[14px]'
    />
    <button className="border-[1px] mt-[13px] rounded-[3px] px-2 border-[#DC6563]">Chat</button>
    </div>
    </div>
  );
};

export default Card;
