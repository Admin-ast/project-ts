import Link from "next/link";
import React from "react";

type Props = {
  astroname: string;
  isOpen: boolean;
  onClose: () => void;
};

const MinBalance = ({ astroname, isOpen, onClose }: Props) => {
  return (
    <div className="rounded-[20px] border-[3px] border-[#DC6563] px-4 py-2 lg:w-1/3">
      <p className="text-[22px]">
        Minimum balance of 5 minutes (INR 25.0) is required <br />
        to start call with {astroname}
      </p>
      <div className="flex justify-end gap-[25px] px-8 py-2 ">
        <button className="rounded-[5px] border-[1px] border-black px-2 py-1 font-semibold">
          Cancel
        </button>
        <Link href="/talk-to-astrologer/price">
          <button className="rounded-[5px]  border-[1px] border-[#00AF1C] px-2 py-1 font-semibold text-[#00AF1C]">
            Recharge
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MinBalance;
