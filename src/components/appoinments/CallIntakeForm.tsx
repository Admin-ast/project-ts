"use client";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { Button, Form, Input } from "../forms";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthProvider";
import { useCart } from "../shop/context/ShopContext";
import { postFetcher } from "@/service";
import { useRouter } from "next/router";

type FormData = {
  firstname: string;
  lastname: string;
  gender: string;
  dateofbirth: string;
  timeofbirth: string;
  topicofconcern: string;
  birthplace: string;
  maritalstatus: string;
  occupation: string;
  astrologerid:string;
};
type Props = {
  id:string;
  text: string;
  className: string;
  type:string;
  name:string;
};

const CallIntakeForm = ({ id, text, className, type, name }: Props) => {
    const {  setIsOpen } = useCart();
    const { push } = useRouter();
    const [loading, setLoading] = useState(false);
    const [btnloading, setbtnloading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  let {  isuserLogged } = useAuth();
  const onSubmit = (data: FormData) => {
    data.astrologerid = id;
    if(isuserLogged){
      send(data);
  //  console.log(data);
    
  }
  else{
  //  console.log(isuserLogged);
      if(!isuserLogged){
      setIsOpen(true);
      }
  }
  };
  
  const send = async(detail:any) => {
      
      const sending = JSON.stringify(detail);
      setbtnloading(true);
      let senddetail:any;
      let route:any;
      if(type === "Chat"){
         senddetail = await postFetcher("/chat/requestchat", sending);
         route = "/chat-with-astrologer/astrologerchat";
      }
      else{
       senddetail = await postFetcher("/call/requestcall", sending);
        route = "/talk-to-astrologer/astrologercall";
      }
    //  console.log(senddetail);
      if(senddetail?.status){
    //    console.log("send");
    //    console.log(senddetail);
        toast.success(senddetail?.message);
        reset();
        setbtnloading(false);
        push({
          pathname:route,
          query:{name:senddetail?.astrologer?.name,id:senddetail?.astrologer?._id, chatcallid:senddetail?.chatcall?._id, image:senddetail?.astrologer?.image}
        });
        
      }
      else{
        
        toast.error(senddetail?.message);
      }
  }
  if(loading) {
    return (<div>
          <p> Loading ...</p>
    </div>)
  }
  return (
    <div
      className={`border-[1px] border-[#D9D9D9] px-8  py-4 
     
      
       ${className} `}
    >
      <div className="">
        <p className="text-center text-[36px] font-bold ">{text}</p>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[76px] gap-[89.56px] lg:flex">
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="firstname"
              placeholder=""
              name="firstname"
              label=" First Name"
              register={register}
              errors={errors}
              required="FirstName is required"
            />
          </div>
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="lastname"
              placeholder=""
              name="lastname"
              label=" Last Name"
              register={register}
              errors={errors}
              required="LastName is required"
            />
          </div>
        </div>
        <div className="gap-[89.56px] lg:flex ">
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="gender"
              placeholder=""
              name="gender"
              label="Gender"
              register={register}
              errors={errors}
              required="Gender is required"
            />
          </div>
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="occupation"
              placeholder=""
              name="occupation"
              label=" Occupation"
              register={register}
              errors={errors}
              required="Occupation is required"
            />
          </div>
        </div>
        <div className="gap-[89.56px]  lg:flex">
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="dateofbirth"
              placeholder=""
              name="dateofbirth"
              label=" Date Of Birth"
              register={register}
              errors={errors}
              required="Date of birth is required"
            />
          </div>
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="timeofbirth"
              placeholder=""
              name="timeofbirth"
              label=" Time Of Birth"
              register={register}
              errors={errors}
              required="Time Of Birth is required"
            />
          </div>
        </div>
        <div className="gap-[89.56px]  lg:flex">
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="birthplace"
              placeholder=""
              name="birthplace"
              label="Birth Place"
              register={register}
              errors={errors}
              required="Birth Place is required"
            />
          </div>
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="maritalstatus"
              placeholder=""
              name="maritalstatus"
              label=" Marital Status"
              register={register}
              errors={errors}
              required=" Marital Status is required"
            />
          </div>
        </div>
        <div className="  ">
          <div className="w-full">
            <Input
              className=" h-[150px]  text-[16px] font-bold "
              type="text"
              id="topicofconcern"
              placeholder=""
              name="topicofconcern"
              label=" Topic Of Concern"
              register={register}
              errors={errors}
              required=" Topic Of Concern is required"
            />
          </div>

          <div className="mt-[30.48px] flex items-center justify-center">
            <Button
              type="submit"
              className="bg-gradient-to-b from-[#FF7646]  to-[#FF0600] text-[16px] font-[500] text-white"
              btnText= {" Start " + type + " With " + name}
              isLoading={btnloading ? true : false}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CallIntakeForm;
