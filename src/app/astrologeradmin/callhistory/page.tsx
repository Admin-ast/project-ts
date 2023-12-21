"use client";
import CallingHistory from "@/components/admin/orderhistory/CallingHistory";
import { getFetcher } from "@/service";
import React, { useState } from "react";
import { useEffect } from "react";
type Props = {};

const callhistory = (props: Props) => {
  const[calls,setCalls] = useState<any>([]);
  const[usercalls,setusercalls] = useState(false);

  useEffect(() => {
      const getcalls = async() => {
        const allcalls = await getFetcher("/call/astrologer");
        
        if(allcalls?.status){
          setCalls(allcalls?.res);
          setusercalls(true);
        }
      }

      getcalls();
  },[])
  if(!usercalls){
    return(
      <div>
       <p className="text-center py-3"> No Calls Available </p>
        </div>
    )
  }
  else{
  return (
    <div>
      <CallingHistory getusercalls={calls} />
    </div>
  );
  }
};

export default callhistory;
