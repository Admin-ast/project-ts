"use client";
import ProductDetailsCard from "@/components/shop/productDetail/ProductDetailsCard";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getFetcher } from "@/service";
import Loading from "@/components/common/Loading";

type Props = {};

const productsdetail = (props: Props) => {
  const searchParams = useSearchParams();
  const id = searchParams?.get('id');
  const [product, setProduct] = useState<any>({});
  const [page, setPage] = useState(false);

  useEffect(() => {
    
    const getProduct = async () => {
      const allproduct = await getFetcher("/products/getproduct/" + id);
      
      if(allproduct?.status){
        
        setProduct(allproduct?.res);
        setPage(true);
      }
    else{
      let product = { id:'123', 'name':'product', image:'123.jpg', price:'1235', category:'product'};
      setProduct(product);
      setPage(true);
    }
    }

    getProduct();
}, []);
  if(page) { 
  return (
    <div>
      
      <ProductDetailsCard props = {product} />
    </div>
  )
  }
  else {
  return (
    <div className="text-center">
      <Loading></Loading>
    </div>
  );
  
}
};
export default productsdetail;
