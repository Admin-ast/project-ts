import { Textarea } from "@/components/forms";
import { postFetcher } from "@/service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

type Props = {};

const CeoMsgs = (props: Props) => {
  const[ceomessage,setCeomessage] = useState('');
  const handeClick = () => {
      if(ceomessage === ''){
        alert('Enter message');
      }
      else{
        
        
          sendmessage();
      }


  }

  const sendmessage = async() => {
    
    const getmessage = {message:ceomessage};
    const sendmessage = JSON.stringify(getmessage);
    const message = await postFetcher('/astrologer/ceomessage', sendmessage);

    if(message?.status){
        toast.success("Successfully sent message to ceo");
        setCeomessage('');
    }
    
}

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
  //  event.persist();
    
    setCeomessage(event.target.value);
};  return (
    <div className=" rounded-[5px] border-[1px] border-[#D9D9D9]">
      <div className="bg-[#D9D9D9]  px-5">
        <p className="text-[16px] font-bold">Feedback to CEO Office!</p>
        <p className="text-[12px]">
          Please share your honest review to help us improve
        </p>
      </div>
      <div className="border-l-[20px] border-r-[20px] border-[#D9D9D9]">
      <div className=" w-full">
      <div className="rounded-b-lg bg-transparent">
        <label className=" block text-base" >
          
        </label>
        <textarea
          name={"ceomessage"}
          id={"ceomessage"}
          rows={5}
          className={`focus:border-dark focus:ring-dark/30 block h-48 w-full rounded-md border border-gray-400 bg-transparent  p-4 text-sm text-gray-800 focus:outline-none focus:ring-1`}
          placeholder={"Type here"}
          onChange={onChange}
          value={ceomessage}
          // {...register(name)}
        ></textarea>
      </div>
    </div>
      </div>
      <div className="flex flex-row-reverse bg-[#D9D9D9] py-2 px-4">
        <button className="rounded-[19px] bg-[#ca2127] px-4 py-1 text-white" onClick={handeClick}>
          Send Feedback
        </button>
      </div>
    </div>
  );
};

export default CeoMsgs;
