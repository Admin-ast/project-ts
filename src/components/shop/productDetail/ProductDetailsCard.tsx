import React, { useState } from "react";
import Section from "../../Section";
import { AiOutlineCheck, AiOutlineHeart } from "react-icons/ai";
import Footer from "./Footer";
import Link from "next/link";
import ImageDrawer from "./ImageDrawer";
import DetailCard from "./DetailCard";

type Props = {};

const ProductDetailsCard = (props: Props) => {
  return (
    <div className="">
      <Section>
        <div className=" gap-[50px]  md:flex lg:flex">
          <ImageDrawer />
          <DetailCard />
        </div>
        <div className="">
          <Footer />
        </div>
      </Section>
    </div>
  );
};

export default ProductDetailsCard;

// src/components/ProductDetail.js
