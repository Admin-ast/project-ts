"use client";
import React from "react";



const ImageDrawer = (props: any) => {

  return (
    <div className="mt-[40px] grid h-full grid-rows-2 lg:w-1/2">
      <div className=" ">
        <img
          src={props?.image?.image}
          alt=""
          className="mb-2  w-full hover:scale-110"
        />
      </div>
      
      
    </div>
  );
};

export default ImageDrawer;
