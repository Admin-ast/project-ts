"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/common/Hero";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import KundlimatchingCard from "@/components/shop/kundlimatching/KundlimatchingCard";
import { getFetcher } from "@/service";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/common/Loading";

type Props = {};

const Products = (props: Props) => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams?.get('categories');
      
      useEffect(() => {
          const getProduct = async () => {
            const allproducts = await getFetcher("/products?categories=" + search);
            
            if(allproducts?.status){
              
              setProducts(allproducts?.res);
              setLoading(true);
            }
          }

          getProduct();
      }, []);
      if(loading)
      {
  return (
    <div>
      <Hero text= {products[0]?.category?.name +  " Products" } icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium">
             {products[0]?.category?.name +   " Products" }
          </p>
        </div>
      </Section>
      <KundlimatchingCard  products={products} />
    </div>
  );
}
else {
  return(
    <div className="text-center">
      <p>Loading...</p>
    </div>
  )
}
}
export default Products;
