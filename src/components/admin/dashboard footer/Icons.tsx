"use client";
import React, { useEffect, useState }  from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaToggleOn } from "react-icons/fa";
import Toggler from "../Toggler";
import { getFetcher } from "@/service";
  
type Props = {};

const Icons = (props: Props) => { 
  const[getboost,setGetboost] = useState<any>([]);
  const[isLoading,setisLoading] = useState<any>(false);

  useEffect(() => {
      const boost = async() =>{ 
          const getboostericons = await getFetcher('/astrologer/getautoboost');
          
          if(getboostericons?.status){
            
            setGetboost(getboostericons?.res);
            
            setisLoading(true);
          }
      }
      boost();
  },[]);
  if(isLoading){
  return (
    <div className="rounded-[5px] border-[1px] border-[#D9D9D9] shadow-xl ">
      <div className="flex items-center justify-center gap-4  py-4">
        <p className="rounded-[5px] bg-[#CA2127] py-1 px-10 text-base font-bold text-white">
          Auto boost your profile
        </p>
        <AiFillInfoCircle className="text-[30px]" />
      </div>
      <div className="flex items-center justify-between px-5 py-2">
        <div className="flex items-center gap-5">
          <img src="/assets/admin/call.png" alt="" />
          <p className="">Call</p>
        </div>

        <Toggler label="call" toggled={getboost[0]} />
      </div>
      <div className="border-b-[1px] border-[#D9D9D9]"></div>
      <div className="flex items-center justify-between px-5 py-2">
        <div className="flex items-center gap-5">
          <img src="/assets/admin/chat.png" alt="" />
          <p className="">Chat</p>
        </div>

        <Toggler label="chat" toggled={getboost[1]} />
      </div>
      <div className="border-b-[1px] border-[#D9D9D9]"></div>
      <div className="flex items-center justify-between px-5 py-2">
        <div className="flex items-center gap-5">
          <img src="/assets/admin/report.png" alt="" />
          <p className="report">Report</p>
        </div>

        <Toggler label="report" toggled={getboost[2]} />
      </div>
      <div className="border-b-[1px] border-[#D9D9D9]"></div>
    </div>
  );
  }
  else{
    return(
      <div>
        Loading...
      </div>
    )
  }
  
};

export default Icons;
