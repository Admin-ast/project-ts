"use client";
import { getFetcher, postFetcher } from '@/service';
import React from 'react'
import { useEffect , useState } from 'react';

function orderlist() {
    const [orders,setorders] = useState([]);

    useEffect(() => {
    //  console.log('ok');
        const orderlist = async() => {
            const orders = await getFetcher('/orders/userorders');
            if(orders?.status){
            //    console.log(orders?.res);
                setorders(orders?.res);
            }
        };
        orderlist();
    },[]);
  return (
    <div>orderlist</div>
  )
}

export default orderlist