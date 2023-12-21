import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { getFetcher, postFetcher } from "@/service";

type Props = {
  name: any;
  id:any;
  chatcallid:any;
  image:any;
};
const callingCard = [
  {
    id: 1,
    src: "/assets/appointment/live-astro.png",
    name: "abha",
  }
  
];

const Calling = ({ name, id, chatcallid, image }: Props) => {
  const [receivedchatid, setreceivedChatid] = useState(id);
  const [chattimer, setChattimer] = useState(0);
  const [chatrequest, setChatrequest] = useState(false);
  const router = useRouter();
  console.log("call id : " + chatcallid);
  const endcall = async() => {
    const callid = JSON.stringify({callid:chatcallid});
   const call = await postFetcher('/call/endcall', callid);

   if(call?.status){
      toast.success(call?.message);
      router.push("/");
   }
   else{
    toast.error(call);
   }
}

const statusCall = async() => {
  const callaccepted = await getFetcher('/call/checkcall/'+chatcallid);
  setChattimer((chattimer) => chattimer + 1);
  if(callaccepted?.status){
    if(callaccepted?.res){
      setChatrequest(true);
      router.push(`/startcall?id=${chatcallid}`);
    }
    else{
      toast.error('Call request rejected by astrologer');
    }
  }
}

useEffect(() => {
  //make request in every 5 seconds to get status of chat request
    //if chat request accepted then start chat 
    // else show request not accepted
    if(chatrequest === false){
      const intervalCall = setInterval(() => {
        statusCall();
      }, 30000);
      
      return () => {
        // clean up
        clearInterval(intervalCall);
      };
    }
},[chatrequest]);
  return (
    <div className="border-[1px] border-[#D9D9D9] px-10 lg:w-[100%] lg:px-[51px]">
      <p className="mt-[34px] text-[22px] text-[#00AF1C] text-center">Calling...</p>
      <div className="items-center justify-center gap-[18px] md:flex lg:flex ">
        
          <div
             className="mt-[72px] flex h-[261px] w-[261px] items-center justify-center rounded-[20px] bg-[#DC6563]"
          >
            <div className="h-[91px] w-[91px] ">
              {/* {callingCard.map((item,index)=>( */}

              <Image
                src={image}
                alt={name}
                width={91}
                height={91}
                loading={"lazy"}
                className="rounded-full"
              />

              <p className="text-center font-semibold text-white">{name}</p>
            </div>
          </div>
        
      </div>
      <div className="mt-[10px] flex items-center justify-center lg:mt-[36px]">
        <button className="rounded-[14px] bg-gradient-to-b from-[#FF7646] to-[#FF0600] px-8 py-2 text-[22px] font-[500] text-white " onClick={endcall}>
          END CALL
        </button>
      </div>
    </div>
  );
};

export default Calling;
