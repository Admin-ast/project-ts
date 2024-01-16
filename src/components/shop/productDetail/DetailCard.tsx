"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineHeart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";
import setDate from "date-fns/setDate";
import { postFetcher } from "@/service";
import { useCart } from "../context/ShopContext";
import { toast } from "react-toastify";


const DetailCard = (props: any) => {
  
  const [quantity, setQunatity] = useState(1);
  const price = props?.props?.price;
  const priceid = props?.props?.id;
  const productname = props?.props?.name;
  const image = props?.props?.image;
  const [totalPrice, setTotalPrice] = useState(price);
  const [baseprice, setBaseprice] = useState(price);
  const [id, setId] = useState(priceid);
  const [name, setName] = useState(productname);
  const [img, setImg] = useState(image);



  //setId(props.props.id);
  const product = props?.props;
  const { addToCart } = useCart();

  const handleInc = () => {
    
    setQunatity(quantity + 1);
    setTotalPrice((quantity +1) * price);
    
  };
  const handleDec = () => {
    
    setQunatity(quantity - 1);
    setTotalPrice((quantity - 1) * price);
    
  };

  const handleAddtocart = (product: {}) => {
        console.log(quantity);
        /* const addtocart = async () => {
           const body = [{
               product: id,
               quantity: quantity
            }]
            const cart = await postFetcher("/cart/addtocart", JSON.stringify(body));
            console.log(cart);string
        } */
        
       // addtocart();
       let addtocartproduct = { id:id, title:name, image:image, price:baseprice, description:'',category:'',quantity:quantity};
       addToCart(addtocartproduct);
       toast.success('Product Successfully Added to Cart');
        console.log('addtocart');
  }
  return (
    <div className="mt-[40px] px-[25px]">
      <p className="mb-2 text-3xl font-bold md:text-2xl lg:text-3xl">
        {props?.props?.name}
      </p>

      <div className="mb-4 flex items-center gap-5">
        {props?.props?.hasOwnProperty('sale_price') ? (
          <div>
        <span className="text-3xl text-[#c0c0c0] line-through">₹ 600</span>
        <span className="text-3xl font-bold text-[#eea112]">₹ 393</span>
        <span className="">You save:₹ 247 (35%)</span>
        </div>
        ) : (<span className="text-3xl font-bold text-[#eea112]">₹ {props?.props?.price}</span>) }
      </div>
      

      <div className="mt-4 flex gap-1">
        <span className="text-xl">
          <AiOutlineCheck />
        </span>
        <p className="">In stock (can be back orederd)</p>
      </div>
      <div className="mt-10">
                
        <p className="border-top mt-4 border-[1px] "></p>

        <div className="mt-5">
          <p className="">Final total</p>
          <p className="text-xl font-bold text-[#949494]">₹ {totalPrice === undefined ? props?.props?.price : totalPrice} </p>
          <div className="mt-5 grid gap-5 lg:flex">
            <div className=" flex w-[40%] rounded-[15px] border-[1px] md:w-[40%] lg:w-[35%]">
              <button
                disabled={quantity === 1}
                onClick={handleDec}
                className="  border-1 border-r px-2 py-2 text-black hover:bg-teal-900"
              >
                -
              </button>
              <p className="border-1 border-r px-2 py-2 text-black">
                {quantity}
              </p>
              <button
                onClick={handleInc}
                className="border-1 border-r px-2 py-2 text-black hover:bg-teal-900"
              >
                +
              </button>
            </div>
            <div className="rounded-[5px] bg-teal-900">
              <button onClick={handleAddtocart} className="px-5 py-3 text-center text-white">
                ADD TO CART
              </button>
            </div>
          </div>
          
          <p className="mt-4 border-[1px] border-b "></p>
          <div className="mt-5">
            <div className="flex gap-2">
              <p className="">SKU:</p>
              <p className="text-[#C0C0C0]">{props?.props?.sku_id}</p>
            </div>
            <div className="mt-2 flex gap-2">
              <p className="">Category:</p>
              <p className="text-[#C0C0C0]">{props?.props?.category.name}</p>
            </div>
            <p >
        Short description : 
      {props?.props?.short_description} </p>
            <div className="mt-2 flex gap-3 py-3">
              <p className="">Share:</p>
              <Link href= {"https://facebook.com/sharer/sharer.php?u=https://astrosevatalk.com/shop/shop/product?id=" + props?.props?._id}>
                <span className="text-blue-700">
                  {" "}
                  <FaFacebookF />
                </span>
              </Link>
              <Link href= {"https://twitter.com/intent/tweet?url=https://astrosevatalk.com/shop/shop/product?id=" + props?.props?._id}>
                <span className="text-blue-700">
                  {" "}
                  <FaTwitter />
                </span>
              </Link>
              <Link href= {"https://plus.google.com/share?url=https://astrosevatalk.com/shop/shop/product?id=" + props?.props?._id}>
                <span className="text-red-700">
                  {" "}
                  <GrMail />
                </span>
              </Link>
              <Link href={"http://pinterest.com/pin/create/button/?url=https://astrosevatalk.com/shop/shop/product?id=" + props?.props?._id + "&media=" + props?.props?.image + "&description=" + props?.props?.short_description + "class='pin-it-button' count-layout='horizontal'"}>
                <span className="text-red-700">
                  {" "}
                  <FaPinterest />
                </span>
              </Link>
              <Link href={"https://linkedin.com/shareArticle?url=https://astrosevatalk.com/shop/shop/product?id=" + props?.props?._id}>
                <span className="text-blue-700">
                  {" "}
                  <FaLinkedinIn />
                </span>
              </Link>
              <Link href={"https://web.whatsapp.com/send?text=https://astrosevatalk.com/shop/shop/product?id=" + props?.props?._id } target="blank">
                <span className="text-green-700">
                  {" "}
                  <FaWhatsapp />
                </span>
              </Link>
              <Link href={"https://telegram.me/share/url?url=https://astrosevatalk.com/shop/shop/product?id=" + props?.props?._id + "&text=" + props?.props?.name}>
                <span className="text-blue-700">
                  {" "}
                  <SiTelegram />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
      
    </div>
  );
};

export default DetailCard;
