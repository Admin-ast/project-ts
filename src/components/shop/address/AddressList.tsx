"use client";
import React, { useEffect, useState } from 'react'
import '../../../../public/assets/style.css';
import { Button } from '@/components/forms';
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/shop/context/ShopContext';

function AddressList(props:any) {
  const {push} = useRouter();
  console.log(props.selectedOption);
  const {address, setAddress} = useCart();
  const handleClick = () => {
    
     push('/shop/order');
  }
  const addaddress = (id:string) => {
        setAddress(id);
  }

  setAddress(props.address[0]?._id);
  return (
    <div>
      <div className="grid sm:grid-cols-1 gap-6">
      {props.address.map((prop:any) => (
        
        <label key = {prop?._id} htmlFor="plan-hobby" className= "relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer " onClick={() => addaddress(prop?._id)}>
          
          <span className="font-semibold text-gray-500 leading-tight uppercase mb-3"></span>
          <span className="font-bold text-gray-900">
            <span className="text-4xl">Name : {prop?.name}</span>
            </span>
            <span className="">Phone No. : {prop?.mobileno}</span>
            <span> Email Id : {prop?.email} </span>
            <span>Locality : {prop?.locality}</span>
            <span>City : {prop?.city}</span>
            <span>State : {prop?.state}</span>
            <span>Country : {prop?.country} </span>
            <span>Landmark : {prop?.landmark}</span>
            <span>Postal Code : {prop?.pincode}</span>
          <input type="radio" name="plan" id="plan-hobby" value={prop?._id} className="absolute h-0 w-0 appearance-none " checked={props.selectedOption === prop?._id} onChange={props.handleChange}/>
          <span aria-hidden="true" className="absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
            <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-green-600">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </span>
        </label>        
      ))}
    <br />
    </div>
    <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 cursor-pointer rounded  text-center" onClick={handleClick}>Deliver To This Address</p>
  </div>
    
  )
}

export default AddressList