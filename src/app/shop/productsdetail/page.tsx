import ProductDetailsCard from "@/components/shop/productDetail/ProductDetailsCard";

import React from "react";

type Props = {
 };

const productsdetail = (props: Props) => {
  return (
    <div>
      <ProductDetailsCard props={props}/>
    </div>
  );
};

export default productsdetail;
