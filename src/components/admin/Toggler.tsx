"use client";
import { getFetcher, postFetcher } from "@/service";
import React, { useState, useEffect } from "react";

type Props = {
  label: string;
  toggled:boolean;
};

const Toggler = ({ label,toggled }: Props) => {
  const [isToggled, setIsToggled] = useState(toggled);
  const [getBoost, setGetBoost] = useState<any>([]);
  const Toggle = (boost:String) => {
   
    setIsToggled((prev) => !prev);
    console.log(boost,isToggled);
    let booster = true;
    if(isToggled){
        booster = false;
    }

     if(boost === "call"){
      const getbooster = {autoBoost:{"call":booster}};

    boosting(getbooster);
     }
     if(boost === "chat"){
      const getbooster = {autoBoost:{"chat":booster}}

      boosting(getbooster);
     }
     if(boost  === "report"){
      const getbooster = {autoBoost:{"report":booster}}

    boosting(getbooster);
     }
    
    
  };
  
  const boosting = async(booster:{}) => {
        const sending = JSON.stringify(booster);
      const getresult = await postFetcher('/astrologer/autoBoost',sending);
      if(getresult?.status){
        console.log(getresult?.message);
      }

  }

  useEffect(() => {
     const getautoboost = async() => {
        const autoboost = await getFetcher('/astrologer/getautoboost');
        if(autoboost?.status){
          setGetBoost(autoboost?.res);
        }
     }
     
     getautoboost();
  },[])
  return (
    <div className="flex items-center">
      <label className="mr-2">{label}</label>
      <div
        onClick={() => Toggle(label)}
        className={`${
          isToggled ? "bg-green-500" : "bg-gray-300"
        } h-6 w-12 cursor-pointer rounded-full`}
      >
        <div
          className={`${
            isToggled ? "translate-x-6 transform" : "translate-x-0 transform"
          } h-6 w-6 rounded-full bg-white shadow-md`}
        ></div>
      </div>
    </div>
  );
};

export default Toggler;
