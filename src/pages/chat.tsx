import ChatForm from "@/components/chat/ChatForm";
import React from "react";
import { useSearchParams } from "next/navigation";
type Props = {};

const chat = (props: Props) => {
  const searchParams = useSearchParams();
    const id = searchParams?.get('id') ? searchParams?.get('id') : "0";
    const name = searchParams?.get('name') ? searchParams?.get('name') : "0";
    
    
    if(id != "0"){
  return (
    <div className="">
      <ChatForm id={id} name={name} />
    </div>
  );
     }
     else{
         return(
             <div>
                 <p className="text-center p-3">Not Allowed</p>
             </div>
         )
     }
};

export default chat;
