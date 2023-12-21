"use client";
import Offer from "@/components/admin/offer/Offer";
import { getFetcher } from "@/service";
import React, { useEffect, useState } from "react";

type Props = {};

const offer = (props: Props) => {
  const[offers,setOffers] = useState<any>([]);
  const[activatedoffers,setActivatedoffers] = useState<any>([]);

  useEffect(() => {
    const getoffers = async() => {
      const offer = await getFetcher("/offer/all");
      
      if(offer?.status){

        setOffers(offer?.res);
        setActivatedoffers(offer?.activatedoffers);
      //  console.log(offer?.res);
      }
    }
    getoffers();
  },[])
  return (
    <div>
      <Offer offers={offers} activatedoffers={activatedoffers} />
    </div>
  );
};

export default offer;
