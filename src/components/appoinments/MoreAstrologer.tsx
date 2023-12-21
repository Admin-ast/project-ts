"use client";
import React, { Key } from "react";
import AppointmentCard from "./AppointmentCard";
import { useState } from "react";

type Props = {};
const astrologersDetails = [
  1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7,
];
const astrologerDetail = {
  _id:"123",
    name: "Anupam",
    callCharges:50,
    image:"",
    expertise: "Vedic, Vastu, Face reading",
    chatStatus:"Online",
    callStatus:"Online",
    chatWaitTime:30,
    callWaitTime:30,
    experience:5,     
    ratings: 5,
    orders: 5,
    isPremium: true,
    chatCharges:0,
    skillDetails:{
      allSkills:"any",
      languages:"English, Hindi, Punjabi",
      dob:"string",
      experience:"string",
      gender:"string",
      hours:50}

};

const MoreAstrologer = (props: Props) => {
  const [userbalance,setUserbalance] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [chatcharges, setChatcharges] = useState(0);
  const [astrologername, setAstrologername] = useState('');

  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] px-4 lg:w-1/3">
      <p className="text-center text-[32px] font-bold">More Astrologers</p>
      <div className="mt-[25px] grid grid-cols-1 gap-6 lg:grid-cols-1">
        {astrologersDetails?.map((item, index: Key) => (
          <div key={index}>
            <AppointmentCard detail={astrologerDetail} service={"Talk"} userbalance={userbalance} astrologername = {setAstrologername} charges = {setChatcharges} showmodal={setShowModal}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreAstrologer;
