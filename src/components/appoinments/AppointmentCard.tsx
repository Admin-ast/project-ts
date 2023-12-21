import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, Key, SetStateAction } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useCart } from "../shop/context/ShopContext";

type Props = {
  detail: {
    _id:string;
    name: string;
    callCharges:number;
    chatCharges:number;
    chatStatus:string;
    callStatus:string;
    chatWaitTime:number;
    callWaitTime:number;
    image:string;
    expertise: string;
    experience: number;    
    ratings: number;
    orders: number;
    isPremium: Boolean;
    skillDetails:{
      allSkills:any,
      languages:any,
      dob:string,
      experience:string,
      gender:string,
      hours:number
    };
  };
  userbalance:number;
  service: string;
  astrologername: Dispatch<SetStateAction<string>>;
  charges:Dispatch<SetStateAction<number>>;
  showmodal:Dispatch<SetStateAction<boolean>>;
 };

function AppointmentCard({ detail, userbalance, service, astrologername, charges, showmodal }: Props) {
  const { _id, name, callCharges, chatCharges, chatStatus, callStatus, chatWaitTime, callWaitTime,  image, expertise, experience,  orders, ratings, isPremium, skillDetails } =
    detail;

    const { isuserLogged } = useAuth();
    const { isOpen, setIsOpen } = useCart();
    return (
    <div className="relative flex justify-evenly space-x-4 overflow-hidden rounded-xl border-4 border-[#DC6563] bg-white p-4  shadow-xl">
      {isPremium && (
        <div className="absolute right-[41%] top-8 w-full -rotate-45 bg-[#DC6563] py-[2px] text-center">
        <p className="rotate-0 text-xs font-semibold text-white">
          Top Choice
        </p>
      </div>
      )}
      <div className="flex flex-col items-center justify-center space-y-2">
        {" "}
        <div className="rounded-full bg-[#DC6563] p-2">
        <Link href={"/astrologer/" + _id}>
          <div className=" ">
            <Image
              src={"/assets/profile" + image}
              alt="astrologer"
              width={92}
              height={92}
              loading={"lazy"}
            />
          </div>
          </Link>
        </div>
        <div className="flex">
        {[...Array(ratings).map((e:any,i:Key) => <StarIcon className="h-5 w-5 text-[#CDB06F]" key={i} /> )]}
           
          
        </div>
        <p className="text-xs font-medium">{orders < 1 || orders == undefined ? "New" : orders + " orders"}</p>
      </div>
      <div className="space-y-3">
      <Link href={"/astrologer/" + _id}>
        <p className="font-[georgia] text-[22px] font-semibold ">{name}</p>
        </Link>
        <div className="space-y-2">
          <p className="w-[150px]  truncate text-base ">{skillDetails?.allSkills.map((skill:any) => 
          skill?.value + ", "
          )}</p>
          <p className="text-xs ">{skillDetails?.languages.map((language:any) => 
          language?.value + ", "
          )}</p>
          <p className="text-xs ">Experience: {skillDetails?.experience}  {skillDetails?.experience.length === 1 ? "year" : "years"}</p>
        </div>
        <div className="flex items-center justify-between">
          {service === "Talk" ? 
          <p className="text-base font-semibold ">₹ {callCharges === 0 || callCharges === undefined ? "Free" : callCharges}</p>
          : <p className="text-base font-semibold ">₹ {chatCharges === 0 || chatCharges === undefined ? "Free" : chatCharges}</p> }
         {isuserLogged ?
          <div>
          {userbalance > callCharges ?
          <div>
            {service === "Chat" ?  
          <Link href={"/chat?id=" + _id + "&name=" + name} >
            <button className="rounded-lg bg-[#CA2127] py-1 px-4 text-base font-semibold text-white">
              {service}
            </button>
            {chatStatus === "Online" ? chatWaitTime > 0
            ?
            <p className="text-red pt-1">Wait ~ {chatWaitTime} m</p>
            :
            <p className="pt-1"></p>
            :
            <p className="pt-1"></p>
          }  
          
          
          </Link>
          : 
          <Link href={"/talk-to-astrologer/talk?id=" + _id + "&name=" + name} >
            <button className="rounded-lg bg-[#CA2127] py-1 px-4 text-base font-semibold text-white">
              {service}
            </button>
            {callStatus === "Online" ? callWaitTime > 0 
            ?
            <p className="text-red pt-1">Wait ~ {callWaitTime} m</p>  
            :
            <p className="pt-1"></p>
            :
            <p className="pt-1"></p>
          }
          </Link>
          }
          </div>
          :
           
            <button className="rounded-lg bg-[#CA2127] py-1 px-4 text-base font-semibold text-white" onClick={() => {astrologername(name), charges(callCharges), showmodal(true) } }>
              {service}
            </button>
          
          }
          </div>
          : 
          <div>
            
            <button className="rounded-lg bg-[#CA2127] py-1 px-4 text-base font-semibold text-white" onClick={() => setIsOpen(true)}>
              {service} 
            </button>
          
            </div>
          }
        </div>
      </div>
    </div>
    
    /* <div className="relative flex justify-evenly space-x-4 overflow-hidden rounded-xl border-4 border-[#F2CB6E] bg-black p-4">
      {isPremium && (
        <div className="absolute left-[42%] top-6 w-full rotate-45 bg-[#F3CC6E] py-[2px] text-center">
          <p className="text-xs font-semibold">Top Choice</p>
        </div>
      )}
      <div className="flex flex-col items-center justify-center space-y-2">
        {" "}
        <div className="rounded-full bg-[#D3B160] p-1">
          <div className="rounded-full bg-[#FEE8A0] p-1">
            <Image
              src="/assets/home/review.png"
              alt="astrologer"
              width={92}
              height={92}
              loading={"lazy"}
            />
          </div>
        </div>
        <div className="flex">
        {[...Array(ratings).map((e,i) => <StarIcon className="h-5 w-5 text-[#CDB06F]" /> )]}
             
          
        </div>
        <p className="text-xs font-medium text-white">{orders < 1 || orders == undefined ? "New" : orders + " orders"} </p>
      </div>
      <div className="space-y-3">
        <p className="font-[georgia] text-[22px] font-semibold text-[#C6A65A]">
          {name}
        </p>
        <div className="space-y-2">
          <p className="text-base text-[#FFF9EA]">{skillDetails?.allSkills.map((skill) => 
          skill?.value + ", "
          )}
          </p>
          <p className="text-xs text-[#FFF9EA]">
          {skillDetails?.languages.map((language) => 
          language?.value + ", "
          )}
          </p>
          <p className="text-xs text-[#FFF9EA]">
            Experience: {skillDetails?.experience} {skillDetails?.experience.length === 1 ? "year" : "years"}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-[#CDB06F]">{callCharges === 0 || callCharges === undefined ? "Free" : callCharges}</p>
          <button className="rounded-lg bg-gradient-to-b from-[#EED387] to-[#F9B800] py-1 px-4 text-base font-semibold text-black">
            {service}
          </button>
        </div>
      </div>
    </div>
  ); */
  );
}

export default AppointmentCard;
