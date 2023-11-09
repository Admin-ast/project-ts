import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
type Props = {};

const disclaimer = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            OUR DISCLAIMER
          </p>
        </div>
      </div>
      <div className="mx-auto mt-[25px] mb-[35px] px-4 lg:max-w-7xl">
        <p className=" mt-[25px] text-center text-[34px] font-bold">
          OUR DISCLAIMER
        </p>
        <p className=" mt-[25px] text-center text-[18px] ">
          The information and data contained on astrosevatalk website is to be
          treated purely for your entertainment purposes only. Any prediction or
          other message that you receive is not a substitute for advice,
          programs, or treatment that you would normally receive from a licensed
          professional such as a lawyer, doctor, psychiatrist, or financial
          advisor. Accordingly, astrosevatalk.com provides no guarantees,
          implied warranties, or assurances of any kind, and will not be
          responsible for any interpretation made or use by the recipient of the
          information and data mentioned above.
        </p>
      </div>
    </div>
  );
};

export default disclaimer;
