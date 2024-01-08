"use client";
import MinBalance from "@/components/talk-to-astrologer/MinBalance";
import Money from "@/components/talk-to-astrologer/Money";
import React, { useEffect, useState } from "react";

type Props = {};

const price = (props: Props) => {
  const [walletbalance, setWalletbalance] = useState<any>(0);

 useEffect(() => {
    setWalletbalance(window?.localStorage?.getItem('walletbalance'));
    console.log(window.localStorage.getItem('walletbalance'));
 },[])
  
  return (
    <div className="">
      <Money amount={walletbalance} />
    </div>
  );
};

export default price;
