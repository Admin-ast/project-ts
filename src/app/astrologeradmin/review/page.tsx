"use client";
import Reviews from "@/components/admin/reviews/Reviews";
import { getFetcher } from "@/service";
import React, {useState} from "react";
import { useEffect } from "react";

type Props = {};

const review = (props: Props) => {
  const[reviews,setReviews] = useState<any>([]);

  useEffect(() => {
    const getreviews = async() => {
        const review =  await getFetcher("/review/getreviews");
        
        if(review?.status){
          setReviews(review?.res);
        }
    }
    getreviews(); 
  },[]);
  return (
    <div>
      <Reviews  userreviews={reviews} />
    </div>
  );
};

export default review;
