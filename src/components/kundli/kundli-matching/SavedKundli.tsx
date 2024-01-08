"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

function SavedKundli({}: Props) {
  const [isLogin, setIsLogin] = useState(false);
  if (!isLogin) {
    return (
      <div className="w-full space-y-4">
        <p className="text-2xl lg:text-[32px]">Saved Kundli</p>
        <div className="lg:[550px] flex flex-col items-center space-y-4 rounded-3xl border-2 border-[#A9A9A9] p-6">
          <div className="">
            <Image
              src={"/assets/kundli/kundli-match.png"}
              alt={"free-kundli"}
              width={475}
              height={337}
              loading={"lazy"}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center text-lg">
              Please Log in to see your saved Kundli
            </p>
            <button className="rounded-lg  bg-gradient-to-b from-[#ff6c40] to-[#ff0600] px-3 py-1 font-bold text-white">
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
