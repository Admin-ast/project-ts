import Section from '@/components/Section'

import { HomeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";
import ApplyCodePopup from './ApplyCodePopup';
type Props = {}

const paymentDetail = (props: Props) => {
  const [showContent, setShowContent] = useState (true);
  const [showPopup, setShowPopup] = useState(false);
  const handleCancelClick = () => {
    setShowContent(!showContent);
  };

  const handleApplyCodeClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
  <div className="bg-[url('/assets/horoscope-bg.webp')]  h-screen">
    <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Payment Details
            </p>
          </div>
        </Section>
      </div>
      <div className="">
        <Section>
            <div className="bg-white shadow-2xl py-2 mt-[30px]">
                <p className="text-[36px] text-center font-bold">Payment Details</p>
            </div>
            <div className="bg-[#ececec] mt-[30px]">
                <div className="flex border-b border-[#A9A9A9] justify-between items-center px-[30px] h-[50px]">
                    <p className="">GST @18%</p>
                    <p className="">Rs 9.00</p>
                </div>
                <div className="flex border-b border-[#A9A9A9] justify-between items-center px-[30px] h-[50px]">
                    <p className="">Recharge Amount</p>
                    <p className="">Rs 50.00</p>
                </div>
                <div className="flex  justify-between items-center px-[30px] h-[50px]">
                    <p className="font-bold">Total Amount</p>
                    <p className="">Rs 59.00</p>
                </div>
               
            </div>
            {/* <div className="bg-[#DC6563] py-1 rounded-[6px] shadow-2xl mt-[30px] flex justify-around items-center">
              <div className="text-[29px] font-bold text-white">%</div>
              <div className="text-center">
                <p className="font-bold text-white">100% Extra</p>
                <p className="font-bold ">Rs 50.00 Cashback after recharge</p>
              </div>
              
              <MdCancel className="text-[29px] text-white "/>
              
            </div> */}

{/* <div className="bg-[#DC6563] py-1 rounded-[6px] shadow-2xl mt-[30px] flex justify-around items-center">
      <div className="text-[29px] font-bold text-white">%</div>
      <div className="text-center">
        {showContent ? (
          <>
            <p className="font-bold text-white">100% Extra</p>
            <p className="font-bold ">Rs 50.00 Cashback after recharge</p>
          </>
        ) : (
          <p className="font-bold text-white">APPLY CODE</p>
        )}
      </div>
      {showContent ? (
        <MdCancel
          className="text-[29px] text-white"
          onClick={handleCancelClick}
        />
      ) : (
        <FaAngleRight
          className="text-[29px] text-white"
          onClick={handleCancelClick}
        />
      )}
    </div> */}

<>
      <div
        className="bg-[#DC6563] py-1 rounded-[6px] shadow-2xl mt-[30px] flex justify-around items-center"
        onClick={showContent ? handleCancelClick : handleApplyCodeClick}
      >
        <div className="text-[29px] font-bold text-white">%</div>
        <div className="text-center">
          {showContent ? (
            <>
              <p className="font-bold text-white">100% Extra</p>
              <p className="font-bold ">Rs 50.00 Cashback after recharge</p>
            </>
          ) : (
            <p className="font-bold text-white">APPLY CODE</p>
          )}
        </div>
        {showContent ? (
          <MdCancel
            className="text-[29px] text-white"
            onClick={handleCancelClick}
          />
        ) : (
          <FaAngleRight
            className="text-[29px] text-white"
            onClick={handleApplyCodeClick}
          />
        )}
      </div>

      {showPopup && (
        <div className="">
          <ApplyCodePopup onClose={handleClosePopup} isOpen={true} onApply={(couponCode) => console.log(`Applying coupon code: ${couponCode}`)} 
          
          />
          {/* <div
          className={`fixed top-0 left-0 h-screen w-screen transition-opacity ${
            isOpen ? "opacity-50" : "pointer-events-none opacity-0"
          } bg-[#808080]`}
        ></div> */}
        </div>
      )}
    
    </>
            <div className="py-[30px]">
                <p className="underline text-center text-[#D12627] font-bold">Apply another coupon</p>
            </div>
            <div className="grid grid-cols-2 gap-[48px]">
            <div className="bg-[#ececec] flex flex-col items-center justify-center h-[78px]">
  <div className="border-[1px] border-[#A9A9A9] rounded-[5px] flex justify-center items-center">
    <Image
      src="/assets/payment/gpay.png"
      alt="Google Pay"
      width={60}
      height={25}
      className=''
    />
  </div>
  <p className="text-center text-[#969696]">UPI</p>
</div>
            <div className="bg-[#ececec] flex flex-col items-center justify-center h-[78px]">
  <div className="border-[1px] border-[#A9A9A9] rounded-[5px] flex justify-center items-center">
    <Image
      src="/assets/payment/gpay.png"
      alt="Google Pay"
      width={60}
      height={25}
      className=''
    />
  </div>
  <p className="text-center text-[#969696]">UPI</p>
</div>
            <div className="bg-[#ececec] flex flex-col items-center justify-center h-[78px]">
  <div className="border-[1px] border-[#A9A9A9] rounded-[5px] flex justify-center items-center">
    <Image
      src="/assets/payment/gpay.png"
      alt="Google Pay"
      width={60}
      height={25}
      className=''
    />
  </div>
  <p className="text-center text-[#969696]">UPI</p>
</div>
            <div className="bg-[#ececec] flex flex-col items-center justify-center h-[78px]">
  <div className="border-[1px] border-[#A9A9A9] rounded-[5px] flex justify-center items-center">
    <Image
      src="/assets/payment/gpay.png"
      alt="Google Pay"
      width={60}
      height={25}
      className=''
    />
  </div>
  <p className="text-center text-[#969696]">UPI</p>
</div>


               
                
            </div>
        </Section>
      </div>
  </div>
  )
}

export default paymentDetail

