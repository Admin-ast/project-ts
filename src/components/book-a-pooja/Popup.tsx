import Image from 'next/image';
import React, { useState } from 'react'
import { ImCross } from 'react-icons/im';
import { FaCircleCheck } from "react-icons/fa6";
import CustomCheckbox from './CustomCheckbox';

type Props = {
    isOpen:boolean;
    onClose:()=>void;
    heading:string;
    name:string;
    date:string;
    time:string;
    price1:number;
    indcontent:string;
    price2:number;
    offcontent:string;
    price3:number;
    famcontent:string;
    amount:number;
}

const Popup = ({isOpen,onClose,heading,name,date,time,price1,indcontent,price2,offcontent,price3,famcontent,amount}: Props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  return (
    <div className={`fixed top-[80px]  left-20 z-50 flex h-screen w-screen items-center justify-center transition-opacity ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}>
        <div className="bg-white shadow-2xl rounded-[10px] w-[30%] relative px-[20px]">
        <div className="flex justify-center items-center ">
        <div className="absolute">
        <Image
    src="/assets/home/review.png"
    alt="customer"
    width={120}
    height={120}
    className=' '
    />
        </div>
   
        </div>
       <div className="px-4 py-4"> <ImCross onClick={onClose} className="float-right "/></div>
        <div className="">
            <p className="text-center mt-[25px]">{name}</p>
            <p className="text-[20px] text-center font-bold mt-2">{heading}</p>
            <p className="text-center font-bold">{date} <span className="font-normal">{time}</span></p>
        </div>
        <div className="mt-[20px]">
            <p className="font-bold">Individual pooja <span className="font-normal">@ ₹ {price1}</span></p>
        <div className="flex justify-between">
        <p className="">{indcontent}</p>
        <FaCircleCheck className="text-[28px] text-[#00af1c]"/>
        </div>
       <div className="border-b border-[#D9D9D9] py-[5px]"></div>
        </div>
        <div className="mt-[20px]">
            <p className="font-bold">Offer Dakshana <span className="font-normal">@ ₹ {price2}</span></p>
        <div className="flex justify-between">
        <p className="">{indcontent}</p>
        <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
        </div>
       <div className="border-b border-[#D9D9D9] py-[5px]"></div>
        </div>
        <div className="mt-[20px]">
            <p className="font-bold">Offer Dakshana <span className="font-normal">@ ₹ {price2}</span></p>
        <div className="flex justify-between">
        <p className="">{indcontent}</p>
        <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
        </div>
       
        </div>
        <div className="flex  py-[20px]  items-center">
            <button className="bg-gradient-to-b px-4 text-start w-full rounded-[10px] from-[#fb7038] to-[#FF0600] text-white font-semibold  py-2">
            Total Amount: Rs {amount}
            <span className='float-right'>Confirm</span>
            </button>
        </div>
        </div>
      </div>
  )
}

export default Popup