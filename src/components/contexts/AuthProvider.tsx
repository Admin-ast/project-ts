"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
// @ts-ignore
import Cookies from "js-cookie";
interface AuthContextValue {
  isuserLogged:boolean;
  setuserIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  pageloading:boolean;
  setpageloading: React.Dispatch<React.SetStateAction<boolean>>;
  walletbalance:number;
  setWalletbalance: React.Dispatch<React.SetStateAction<number>>;
}

const AuthContext = createContext<AuthContextValue>({

    isuserLogged: false,
    setuserIsLogged: () => {},
    pageloading:false,
    setpageloading: () => {},
    walletbalance:0,
    setWalletbalance: () => {}

});

export const useAuth = () => {
  return useContext(AuthContext);
};

interface Props {
  children: React.ReactNode;
  
}

export const AuthProvider = ({ children }: Props) => {
  const [isuserLogged, setuserIsLogged] = useState(false);
  const [pageloading,setpageloading] = useState(false);
  const [walletbalance, setWalletbalance] = useState(0);
  
  useEffect(() => {
    const getlogin = async() => {   
    const accessToken = await Cookies.get("accessToken");
    const refreshToken = await Cookies.get("refreshToken");
    


    if(accessToken && refreshToken){
      console.log("loggedin");
      setuserIsLogged(true);
      setpageloading(false);
      localStorage.setItem('auth','true');
      
    }
    else{
      setpageloading(true);
      localStorage.setItem('auth','false');
    }
  }
  getlogin();


  },[])

  return (
    <AuthContext.Provider
      value={{
        isuserLogged,
        setuserIsLogged,
        pageloading,
        setpageloading,
        walletbalance,
        setWalletbalance
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};