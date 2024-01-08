"use client";
import { useEffect, useState } from 'react';
import React from 'react'
import { useCart } from '@/components/shop/context/ShopContext';
import { postFetcher } from '@/service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from '@/components/payment/Payment';


function order() {
  const {address,cartItems, emptyCart} = useCart();
  const [orderplaced,setOrderplaced] = useState(false);
  const [orderdata, setOrderdata] = useState<any>();
  
  

  useEffect(() => {
      let orderItems = [];
      for (let index = 0; index < cartItems.length; index++) {
        const element = {product:cartItems[index].product.id,quantity:cartItems[index].quantity};
        orderItems.push(element);
      }
      
      
      
      let userOrderdata = JSON.stringify({address:address,orderItems:orderItems});
      //console.log(userOrderdata);
      const ordered = async() => {
         const receivedorderdata = await postFetcher('/orders/addorder',userOrderdata);
        //  console.log(receivedorderdata);
         if(receivedorderdata?.status){
        //  console.log(receivedorderdata?.res);
            setOrderdata(receivedorderdata?.res);  
            setOrderplaced(true); 
            emptyCart();
         }

      };
      if(orderItems.length > 0){
      ordered();
      }
      else{
        toast.error("Cart is empty you can not place order");
      }
      
  },[]);
  if(!orderplaced){
    return(
      <div>
        <p className='text-center px-5 py-5'>
        {cartItems.length < 1 ? 'Cart is empty, you can not place order' : ' Redirecting to payment do not refresh page'}
        
        </p>
       </div>
    )
  }
  else{
    console.log("props to payment " + JSON.stringify(orderdata));
    return(
      <div>
        <Payment _id={orderdata?._id} totalPrice={orderdata?.totalPrice} name={orderdata?.name} email={orderdata?.email} phone={orderdata?.phone}></Payment>
      </div>
    )
  }

}

export default order