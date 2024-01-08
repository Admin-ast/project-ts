"use client";
import Admin from "@/components/admin/Admin";
import React from "react";
import { useAuth } from "@/components/contexts/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/navigation";
type Props = {};

export default (props: Props) => {
  const {isuserLogged,setuserIsLogged, pageloading} = useAuth();
  const router = useRouter();

  return (
    <div>
      <Admin />
    </div>
  );
 

};


