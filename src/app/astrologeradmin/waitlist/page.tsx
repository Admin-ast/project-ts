"use client";
import WaitList from "@/components/admin/WaitList";
import { getFetcher } from "@/service";
import React, { useState } from "react";
import { useEffect } from "react";

type Props = {};

const waitlist = (props: Props) => {
  const[waiting, setWaiting] = useState<any>([]);

  useEffect(() => {
      const getwaiting = async() => {
          const all = await getFetcher("/call/astrologer/waiting");
          if(all?.status){
            setWaiting(all?.res);
          //  console.log(all?.res);
          }
      }

      getwaiting();
  },[])

  return (
    <div>
      <WaitList calls={waiting} />
    </div>
  );
};

export default waitlist;
