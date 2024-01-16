import { Button } from "@/components/forms";
import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { RiArrowUpSLine } from "react-icons/ri";
import Publish from "./Publish";
import ProductCategories from "./ProductCategories";
import ProductTags from "./ProductTags";
import ProductImage from "./ProductImage";
import ProductGallery from "./ProductGallery";

type Props = {};

const AddNewSidebar = (props: Props) => {
  return (
    <div className="">
      <div className="">
        <Publish
          draft="Darft"
          visibility="Public"
          publish="Immediately"
          seo="Not available"
          readability="Not available"
          catalog="Shop and Search  Results 
"
        />
        <ProductCategories />
        <ProductTags />
        <ProductImage />
        <ProductGallery />
      </div>
    </div>
  );
};

export default AddNewSidebar;
