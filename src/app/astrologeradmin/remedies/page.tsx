"use client";
import Remedies from "@/components/admin/remedies/Remedies";
import { getFetcher } from "@/service";
import React, { useEffect, useState } from "react";

type Props = {};

const remedies = (props: Props) => {
  const[userremedies, setUserremedies] = useState<any>([]);

  useEffect(() => {
      const getremedies = async() => {
          const remedy = await getFetcher("/remedy");

          if(remedy?.status){
            setUserremedies(remedy?.res);
          }
      }

      getremedies();
  },[])

  
  return (
    <div>
      <Remedies remedies={userremedies} />
    </div>
  );
};

export default remedies;
