import AstrologerDetails from "@/components/appoinments/AstrologerDetails";
import Calling from "@/components/talk-to-astrologer/Calling";
import MoreAstro from "@/components/talk-to-astrologer/MoreAstro";
import React from "react";
import { useRouter } from "next/router";

type Props = {};

const astrologercall = (props: Props) => {
  const router = useRouter();
  const name = router.query.name;
  const id = router.query.id;
  const chatcallid = router.query.chatcallid;
  const image = router.query.image;
  return (
    <div className="lg:flex">
    
      <Calling name={name} id={id} chatcallid={chatcallid} image={image} />
    
    </div>
  );
};

export default astrologercall;
