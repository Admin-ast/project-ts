"use client";
import React, { useState } from "react";
import Section from "../../Section";
import { AiOutlineCheck, AiOutlineHeart } from "react-icons/ai";
import Footer from "./Footer";
import Link from "next/link";
import ImageDrawer from "./ImageDrawer";
import DetailCard from "./DetailCard";


const ProductDetailsCard = (props:any) => {

  return (
    <div className="">
      <Section>
        <div className=" gap-[50px]  md:flex lg:flex">
          <ImageDrawer image = {props?.props}   />
          <DetailCard  props =   {props?.props}/>
        </div>
        <div className="">
          <Footer props = {props?.props} />
        </div>
      </Section>
    </div>
  );
};

export default ProductDetailsCard;

// src/components/ProductDetail.js
