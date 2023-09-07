import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import AddressForm from "./AddressForm";

type Props = {};

const Address = (props: Props) => {
  return (
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Address
          </p>
        </div>
      </div>
      <div className="">
        <AddressForm />
      </div>
    </div>
  );
};

export default Address;
