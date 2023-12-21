"use client";
import LiveEvents from "@/components/admin/live events/LiveEvents";
import { getFetcher } from "@/service";
import React, { useEffect, useState } from "react";

type Props = {};

const liveevents = (props: Props) => {
  const[livevents, setLivevents] = useState<any>([]);


  useEffect(() => {
      const getlivevents = async() => {
        const ev = await getFetcher("/livevents");
        if(ev?.status){
          setLivevents(ev?.res);
        }
      }

      getlivevents();
  },[]);
  return (
    <div>
      <LiveEvents liveevents={livevents} />
    </div>
  );
};

export default liveevents;
