"use client";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const [orderHistoryOpen, setOrderHistoryOpen] = useState(false);
  const [supportChatOpen, setSupportChatOpen] = useState(false);
  const [astrosevaTalkMallOpen, setAstrosevaTalkMallOpen] = useState(false);

  const toggleOrderHistory = () => {
    setOrderHistoryOpen((prev) => !prev);
  };

  const toggleSupportChat = () => {
    setSupportChatOpen((prev) => !prev);
  };
  const toggleAstrosevaTalkMall = () => {
    setAstrosevaTalkMallOpen((prev) => !prev);
  };
  return (
    <div className="    border-r-4 border-[#D9D9D9] ">
      <Section>
        <div className="grid items-center justify-center py-[50px]  ">
          <img
            src="https://media.istockphoto.com/id/1388644810/photo/happy-caucasian-young-man-using-smart-phone-cellphone-for-calls-social-media-mobile.webp?b=1&s=170667a&w=0&k=20&c=e_YS2VT3isx_yAiqFVcbiZFpkEOGxMzsQ0q-vd0C2TQ="
            alt="dashboard image"
            className="h-[110px]  w-[110px] rounded-[100%] border-[5px] border-[#FEE8A0] "
          />
          <p className="text-center font-[Georgia] text-[25px] font-bold">
            Ganesh
          </p>
        </div>
        <div className="mx-[16px] border-[1px] border-[#D9D9D9]"></div>
        <div className="">
          <ul>
            <li className="flex border-b-[1px] border-[#D9D9D9]  py-[5px] font-[Roboto] text-[24px] hover:bg-[#d12627cc]">
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>

            <li className=" border-b-[1px] border-[#D9D9D9]  py-[5px] font-[Roboto] text-[24px] hover:bg-[#d12627cc]">
              <button className="flex    " onClick={toggleOrderHistory}>
                <span className="">Order History</span>
                <span className={orderHistoryOpen ? "rotate-90 transform" : ""}>
                  &#9662;
                </span>
              </button>
              {orderHistoryOpen && (
                <ul className="">
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="/astrologeradmin/callhistory">
                      Call History
                    </Link>
                  </li>
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="/astrologeradmin/chathistory">
                      Chat History
                    </Link>
                  </li>
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="/astrologeradmin/reporthistory">
                      Report History
                    </Link>
                  </li>
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="/astrologeradmin/astrosevatalkhistory">
                      AstrosevaTalk Mall History
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="flex border-b-[1px] border-[#D9D9D9]  py-[5px] font-[Roboto] text-[24px] hover:bg-[#d12627cc]">
              <Link href="/">Earnings</Link>
            </li>
            <li className="flex border-b-[1px] border-[#D9D9D9]  py-[5px] font-[Roboto] text-[24px] hover:bg-[#d12627cc]">
              <Link href="/astrologeradmin/wallet">Wallet</Link>
            </li>
            <li className="flex border-b-[1px] border-[#D9D9D9]  py-[5px] font-[Roboto] text-[24px] hover:bg-[#d12627cc]">
              <Link href="/admin/user">Users</Link>
            </li>
            <li className="flex border-b-[1px] border-[#D9D9D9]  py-[5px] font-[Roboto] text-[24px] hover:bg-[#d12627cc]">
              <Link href="/admin/astrologers">Astrologers</Link>
            </li>

            <li className=" border-b-[1px] border-[#D9D9D9]  py-[5px] font-[Roboto] text-[24px] hover:bg-[#d12627cc]">
              <div className="flex">
                <button className="    " onClick={toggleAstrosevaTalkMall}>
                  <span className="">AstrosevaTalk Mall</span>
                  <span
                    className={
                      astrosevaTalkMallOpen ? "rotate-90 transform" : ""
                    }
                  >
                    &#9662;
                  </span>
                </button>
              </div>
              {astrosevaTalkMallOpen && (
                <ul className="">
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="/admin/astrosevatalkmall/allproducts">
                      All Products
                    </Link>
                  </li>
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="/admin/astrosevatalkmall/addnew">Add New</Link>
                  </li>
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="/admin/astrosevatalkmall/categories">
                      Categories
                    </Link>
                  </li>
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="/admin/astrosevatalkmall/producttags">
                      Tags
                    </Link>
                  </li>
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="/admin/astrosevatalkmall/attributes">
                      Atrributes
                    </Link>
                  </li>
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="/admin/astrosevatalkmall/reviews">Reviews</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="flex border-b-[1px] border-[#D9D9D9]  py-[5px] font-[Roboto] text-[24px] hover:bg-[#d12627cc]">
              <Link href="/admin/management/management">Management</Link>
            </li>

            <li className=" border-b-[1px] border-[#D9D9D9]  py-[5px] font-[Roboto] text-[24px] hover:bg-[#d12627cc]">
              <div className="flex">
                <button className="  " onClick={toggleSupportChat}>
                  <span className="">Support Chat</span>
                  <span
                    className={supportChatOpen ? "rotate-90 transform" : ""}
                  >
                    &#9662;
                  </span>
                </button>
              </div>
              {supportChatOpen && (
                <ul className="">
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="#">Customer Support</Link>
                  </li>
                  <li className="flex  border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                    <Link href="#">Chat with Own Assistant</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="flex border-b-[1px] border-[#D9D9D9]  py-[5px] font-[Roboto] text-[24px] hover:bg-[#d12627cc]">
              <Link href="/astrologeradmin/setting">Settings</Link>
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default Sidebar;
