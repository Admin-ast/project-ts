import MinBalance from "@/components/talk-to-astrologer/MinBalance";
import Money from "@/components/talk-to-astrologer/Money";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/components/contexts/AuthProvider";

type Props = {};

const price = (props: Props) => {
  const { isuserLogged } = useAuth();
  const [walletbalance, setWalletbalance] = useState<any>('0');

  useEffect(() => {
    
      if(isuserLogged){
        setWalletbalance(localStorage.getItem('walletbalance') ? localStorage.getItem('walletbalance') : '0');
      }
      else{
        setWalletbalance('0');
      //  console.log(isuserLogged);
      }
  },[]);
  
  return (
    <div className="">
      <Money amount={walletbalance} />
    </div>
  );
};

export default price;
