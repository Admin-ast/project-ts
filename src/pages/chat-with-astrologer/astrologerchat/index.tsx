import AstrologerDetails from "@/components/appoinments/AstrologerDetails";
import MoreAstrologer from "@/components/appoinments/MoreAstrologer";
import Chat from "@/components/chat/Chat";
import { useAuth } from "@/components/contexts/AuthProvider";
import { useCart } from "@/components/shop/context/ShopContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const chat = (props: Props) => {
  const { isuserLogged, pageloading } = useAuth();
  const { isOpen, setIsOpen } = useCart();
  const router = useRouter();
  const name = router.query.name;
  const id = router.query.id;
  const chatcallid = router.query.chatcallid;
  const image = router.query.image;
 
  
  return (
    <div className="lg:flex">
      
      <Chat  name={name} id={id} chatcallid={chatcallid} image={image}/>
      
    </div>
  );
  
 
};

export default chat;
