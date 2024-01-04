import Image from "next/image";
import React from "react";

type Props = {};

const User = (props: Props) => {
  return (
    <div className="py-[20px]">
      <div className="flex items-center justify-center">
        <div className="flex h-[83px] w-[83px] items-center justify-center rounded-[100%] bg-white">
          <Image
            src="/assets/yearbook/Customer.svg"
            alt="customer"
            width={43}
            height={43}
            className=" "
          />
        </div>
      </div>
      <div className="text-center">
        <p className="font-bold">Customer Care</p>
        <p className="">+91-1234-123-123</p>
        <p className="">(9AM to 6PM IST)</p>
        <p className="font-bold">Email Id:</p>
        <p className="">support@astrosevatalk.com</p>
      </div>
    </div>
  );
};

export default User;
