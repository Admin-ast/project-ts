import Link from "next/link";
import React from "react";

type Props = {
  page: string;
};

const ManagementNav = ({ page }: Props) => {
  return (
    <div className="mt-[95px] justify-evenly  md:flex lg:flex">
      <p className="">{`${page}`}</p>
      <div className="rounded-[5px] border-[1px] border-[#DC6563] px-4 font-bold  hover:bg-[#DC6563] ">
        <Link href="/admin/management/chatsupport">Chat Support</Link>
      </div>
      <div className="rounded-[5px] border-[1px] border-[#DC6563] px-4 font-bold  hover:bg-[#DC6563]">
        <Link href="/admin/management/teammanager">Team Manager</Link>
      </div>
      <div className="rounded-[5px] border-[1px] border-[#DC6563] px-4 font-bold  hover:bg-[#DC6563]">
        <Link href="/admin/management/manager">Manager</Link>
      </div>
      <div className="rounded-[5px] border-[1px] border-[#DC6563] px-4 font-bold  hover:bg-[#DC6563]">
        <Link href="/admin/management/customerservice">Customer Service</Link>
      </div>
      <div className="rounded-[5px] border-[1px] border-[#DC6563] px-4 font-bold  hover:bg-[#DC6563]">
        <Link href="/">Super Admin</Link>
      </div>
    </div>
  );
};

export default ManagementNav;
