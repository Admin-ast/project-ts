import Image from "next/image";
import React from "react";

type Props = {
  name: string;
};
const callingCard = [
  {
    id: 1,
    src: "/assets/appointment/live-astro.png",
    name: "abha",
  },
  {
    id: 2,
    src: "/assets/appointment/live-astro.png",
    name: "abha",
  },
];

const Calling = ({ name }: Props) => {
  return (
    <div className="border-[1px] border-[#D9D9D9] px-10 lg:w-[2/3] lg:px-[51px]">
      <p className="mt-[34px] text-[22px] text-[#00AF1C]">Calling...</p>
      <div className="items-center justify-center gap-[18px] md:flex lg:flex ">
        {callingCard.map((item, index) => (
          <div
            key={index}
            className="mt-[72px] flex h-[261px] w-[261px] items-center justify-center rounded-[20px] bg-[#DC6563]"
          >
            <div className="h-[91px] w-[91px] ">
              {/* {callingCard.map((item,index)=>( */}

              <Image
                src={item.src}
                alt={item.name}
                width={91}
                height={91}
                loading={"lazy"}
                className="rounded-full"
              />

              <p className="text-center font-semibold text-white">{name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[20px] flex items-center justify-center lg:mt-[236px]">
        <button className="rounded-[14px] bg-gradient-to-b from-[#FF7646] to-[#FF0600] px-8 py-2 text-[22px] font-[500] text-white ">
          END CALL
        </button>
      </div>
    </div>
  );
};

export default Calling;
