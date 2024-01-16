"use client";
import { postFetcher } from '@/service';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

type props = {
    _id:string,
    totalPrice:number,
    name:string,
    email:string,
    phone:string
}
function Payment({_id,totalPrice,name,email,phone} : props) {
    const [orderid,setorderId] = useState<any>(_id);
    const [price,setPrice] = useState<any>(totalPrice * 100);
    const [buyername,setBuyername] = useState<any>(name);
    const [buyeremail,setBuyeremail] = useState<any>(email);
    const [buyerphone, setBuyerphone] = useState<any>(phone);
    const [success, setSuccess] = useState(false);
console.log(price);
    function loadScript(src:any) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
}

async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // creating a new order
    const orderdate = JSON.stringify({"amount":price,"id":orderid});
    const result = await postFetcher("/payment/orderCreate",orderdate);

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }
    else{

    // Getting the order details back
    const amount = price.toString();
    const id = result?.id;
    const currency = result?.currency;

        console.log(amount);
    const options = {
        key: "rzp_test_Y81lgGVvMPXqww", // Enter the Key ID generated from the Dashboard
        amount: amount,
        currency: currency,
        name: "Astrosevatalk",
        description: "Payment for Shopping",
        image: "/assets/mainlogo.png",
        order_id: id,       
        handler: async function (response:any) {
            const data = {
                orderCreationId: id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                order_id:orderid
            };
                const send = JSON.stringify(data);
            const result = await postFetcher("/payment/success", send);
            
            if(result.status){
                toast.success(result?.message);
                setSuccess(true);
            }

        },
        prefill: {
            name: buyername,
            email: buyeremail,
            contact: buyerphone,
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
}
}
    if(success === false){
        displayRazorpay();

    }
    else{
        return (
            <div>
                <h1 className='text-center py[250px]'>Thank you for shopping</h1>

                <p className='text-center py[250px]'> Order Completed</p>
            </div>
        )
    }
}

export default Payment