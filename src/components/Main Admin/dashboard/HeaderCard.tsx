import Link from "next/link";
import React from "react";

type Props = {};

const HeaderCard = (props: Props) => {
  return (
    <div className="grid gap-1  px-1 py-[30px] md:grid-cols-2 lg:grid-cols-4">
      <div className="flex h-[116px]  items-center justify-center rounded-[15px] bg-[#ecdcb6]">
        <Link href="/admin/user">
          <p className="font-[Georgia] text-[25px] font-bold ">Users</p>
        </Link>
      </div>
      <div className="flex h-[116px]  items-center justify-center rounded-[15px] bg-[#ffdfb6]">
        <Link href="/admin/astrologers">
          <p className="font-[Georgia] text-[25px] font-bold ">Astrologers</p>
        </Link>
      </div>
      <div className="flex h-[116px]  items-center justify-center rounded-[15px] bg-[#ef976f]">
        <Link href="/admin/astrosevatalkmall/allproducts">
          <p className="text-center font-[Georgia] text-[25px] font-bold">
            AstrosevaTalk Mall
          </p>
        </Link>
      </div>
      <div className="flex h-[116px] items-center justify-center rounded-[15px] bg-[#fcc87a]">
        <Link href="/admin/management/management">
          <p className="font-[Georgia] text-[25px] font-bold ">Management</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderCard;
