'use client';
import { getFetcher, postFetcher } from "@/service";
import { useState, useEffect } from "react"
import React from 'react'
import LoginModal from "@/components/LoginModal";
import { useCart } from '@/components/shop/context/ShopContext';
import { useRouter } from 'next/navigation';
import  '../../../../public/assets/style.css';
import AddressList from "@/components/shop/address/AddressList";
import Loading from "@/components/common/Loading";

function page() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasAddress, setHasAddress] = useState(false);
  const { isOpen, setIsOpen, isLogged, setIsLogged, address, setAddress  } = useCart();
  const [selectedOption, setSelectedOption] = useState('option1');
  const handleChange = (event:any) => {
    setSelectedOption(event.target.value);
    setAddress(selectedOption);
  //  console.log("selected", selectedOption);
  }
  const {push} = useRouter();
  useEffect(() => {
        const address = async () => {
          const useraddress = await postFetcher("/address/get","");
        //  console.log(useraddress);
          if(useraddress?.status){
            setData(useraddress?.res);
            setSelectedOption(useraddress?.res[0]._id);
            setLoading(false);
            setHasAddress(true);
          //  console.log(useraddress);
          }
          else{
            if(useraddress?.message == "Login"){
               setIsOpen(true); 
            }
            else{
              push('/shop/address');
            }
            setLoading(false);
            setHasAddress(false);
          }
        }
        if(isLogged){
          address();
        }

        address();
        
  }, [isLogged]);
  if(loading){
    return ( <div className="text-center">
        <p>Loading...</p>
    </div>
    )
  }
  else {
    if(hasAddress){
      return (
              <div>
                
                <div className="p-4 flex items-center justify-center bg-gray-100 min-h-screen">
  <form className="w-full max-w-screen-md mx-auto">
    <fieldset className="space-y-6">
      <div className="flex items-center justify-between py-4 border-b border-gray-300">
        <legend className="text-2xl text-gray-700 mr-4">Select Your Address</legend>
      </div>
      <AddressList selectedOption={selectedOption} handleChange={handleChange} address={data}></AddressList>
        

    </fieldset>
  </form>
</div>

              </div>
            )
    }
    else{
      return (
              <div className="text-center">
                Loading...
              </div>
            )
    }
  
  
  }
  
}

export default page