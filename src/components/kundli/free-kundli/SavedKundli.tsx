import Image from "next/image";
import React, { useState } from "react";

type Props = {};

function SavedKundli({}: Props) {
  const [isLogin, setIsLogin] = useState(false);
  if (!isLogin) {
    return (
      <div className="flex w-full flex-col space-y-4">
        <p className="text-2xl lg:text-[32px]">Saved Kundli</p>
        <div className="flex-1 flex-col items-center justify-center space-y-6 rounded-3xl border-2 border-[#A9A9A9] p-6">
          <div className="">
            <Image
              src={"/assets/kundli/free-kundli.png"}
              alt={"free-kundli"}
              width={475}
              height={337}
              loading={"lazy"}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center text-[22px]">
              Please Log in to see your saved Kundli
            </p>
            <button className="rounded-lg border-2 border-gray-900 bg-gradient-to-b from-[#EED387] to-[#F9B800C2] px-3 py-1 font-bold">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>login to proceed</p>;
  }
}

export default SavedKundli;
