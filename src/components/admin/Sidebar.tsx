import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const [orderHistoryOpen, setOrderHistoryOpen] = useState(false);
  const [supportChatOpen, setSupportChatOpen] = useState(false);

  const toggleOrderHistory = () => {
    setOrderHistoryOpen((prev) => !prev);
  };

  const toggleSupportChat = () => {
    setSupportChatOpen((prev) => !prev);
  };
  return (
    <div className="    border-r-4 border-[#D9D9D9] ">
      <Section>
        <div className="grid items-center justify-center py-[50px]  ">
          <Image
            src="/assets/admin/Dashboard_image.png"
            alt="dashboard image"
            width={110}
            height={110}
            className="   rounded-[100%] border-[5px] border-[#FEE8A0]"
          />
          <p className="text-center text-[25px] text-black">Dulis</p>
        </div>
        <div className="mx-[16px] border-[1px] border-[#D9D9D9]"></div>
        <ul>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/astrologeradmin/admin">Dashboard</Link>
          </li>

          <li className=" border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <button
              className="flex  md:px-[210px] lg:px-10  "
              onClick={toggleOrderHistory}
            >
              <span className="px-[48px] ">Order History</span>
              <span className={orderHistoryOpen ? " transform" : ""}>
                &#9662;
              </span>
            </button>
            {orderHistoryOpen && (
              <ul className="bg-[#D9D9D9] font-[Georgia] text-[20px] ">
                <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9]   hover:bg-[#DC6563]">
                  <Link href="/astrologeradmin/callhistory">Call History</Link>
                </li>
                <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9]  hover:bg-[#DC6563]">
                  <Link href="/astrologeradmin/chathistory">Chat History</Link>
                </li>
                <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9]  hover:bg-[#DC6563]">
                  <Link href="/astrologeradmin/reporthistory">
                    Report History
                  </Link>
                </li>
                <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9]  hover:bg-[#DC6563]">
                  <Link href="/astrologeradmin/astrosevatalkhistory">
                    AstrosevaTalk History
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/">Earnings</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/astrologeradmin/wallet">Wallet</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/astrologeradmin/offer">Offers</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/astrologeradmin/remedies">Remedies</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/astrologeradmin/waitlist">Wait List</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/astrologeradmin/review">My Reviews</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/astrologeradmin/inmail">InMail</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/astrologeradmin/liveevents">Live Events</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/astrologeradmin/myfollower">My Followers</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/astrologeradmin/loyalclubmembers">
              Loyal Club Members
            </Link>
          </li>

          <li className=" border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <button
              className="flex w-full gap-4 px-16 md:px-[240px] lg:px-20 "
              onClick={toggleSupportChat}
            >
              <span className=" ">Support Chat</span>
              <span className={supportChatOpen ? " transform " : ""}>
                &#9662;
              </span>
            </button>
            {supportChatOpen && (
              <ul className="bg-[#A9A9A9] font-[Georgia] text-[20px]">
                <li className="flex items-center justify-around border-[#D9D9D9] border-b-[1x]    hover:bg-[#DC6563]">
                  <Link href="#">Customer Support</Link>
                </li>
                <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9]    hover:bg-[#DC6563]">
                  <Link href="/astrologeradmin/chatwithownassistant">
                    Chat with Own Assistant
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px] hover:bg-[#DC6563]">
            <Link href="/astrologeradmin/setting">Settings</Link>
          </li>
        </ul>
      </Section>
    </div>
  );
};

export default Sidebar;
