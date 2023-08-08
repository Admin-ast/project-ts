// import Link from "next/link";
// import React, { useState } from "react";
// import Section from "../Section";

// type Props = {};

// const Sidebar = (props: Props) => {
//   const [orderHistoryOpen, setOrderHistoryOpen] = useState(false);
//   const [supportChatOpen, setSupportChatOpen] = useState(false);

//   const toggleOrderHistory = () => {
//     setOrderHistoryOpen((prev) => !prev);
//   };

//   const toggleSupportChat = () => {
//     setSupportChatOpen((prev) => !prev);
//   };
//   return (
//     <div className="    border-r-4 border-[#D9D9D9] ">
//       <Section>
//         <div className="grid items-center justify-center py-[50px]  ">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/37e9/b62f/7b9a47c8e55bc344604c6fcaca0929f2?Expires=1687737600&Signature=okVmdFkWz1vKleCCiFbx7OVpNVJV94BnS7TdS9yw9JdGlbfWh7X0JmbDnOGGvufo2oWEH11dqDo82EaINMLucNl8nK3F0BN~ojEGn8bAtzkYQ4yhffUYa6GIIjn65KglyULm~3Wqepx3ZEnEcvyt4qkOoZZBfFykrC3k2jhSTFz9cPK404i8u6zg~siwaiJUVLeCU46vvClZJDBe-nW2Q5XzxS2zdRwfaoOECffTdj1VCQh2pUALwDfaZ5X7fqv5qiWKu0ZdkCbDaGAtsaL0lu32-KoUl62dquJ9EwGCRvzP3izPbR-LfTtp1Wdl8OTkoPsnguKLgCieeZUiNpIP6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
//             alt="dashboard image"
//             className="h-[110px]  w-[110px] rounded-[100%] border-[5px] border-[#FEE8A0]"
//           />
//           <p className="text-center text-[25px] text-black">Dulis</p>
//         </div>
//         <div className="border-[#D9D9D9]] mx-[16px] border-[1px]"></div>
//         <ul>
//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[15px] font-[Roboto] text-[24px]">
//             <Link href="/astrologeradmin/admin">Dashboard</Link>
//           </li>

//           <li className=" border-b-[1px] border-[#D9D9D9] py-[15px] font-[Roboto] text-[24px]">
//             <button
//               className="flex px-6 md:px-[220px] lg:px-10  "
//               onClick={toggleOrderHistory}
//             >
//               <span className="px-[50px]">Order History</span>
//               <span className={orderHistoryOpen ? "rotate-90 transform" : ""}>
//                 &#9662;
//               </span>
//             </button>
//             {orderHistoryOpen && (
//               <ul className="">
//                 <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//                   <Link href="/astrologeradmin/callhistory">Call History</Link>
//                 </li>
//                 <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//                   <Link href="/astrologeradmin/chathistory">Chat History</Link>
//                 </li>
//                 <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//                   <Link href="/astrologeradmin/reporthistory">Report History</Link>
//                 </li>
//                 <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//                   <Link href="/astrologeradmin/astrosevatalkhistory">
//                     AstrosevaTalk Mall History
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//             <Link href="/">Earnings</Link>
//           </li>
//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//             <Link href="/astrologeradmin/wallet">Wallet</Link>
//           </li>
//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//             <Link href="/astrologeradmin/offer">Offers</Link>
//           </li>
//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//             <Link href="/astrologeradmin/remedies">Remedies</Link>
//           </li>
//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//             <Link href="/astrologeradmin/waitlist">Wait List</Link>
//           </li>
//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//             <Link href="/astrologeradmin/review">My Reviews</Link>
//           </li>
//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//             <Link href="/astrologeradmin/inmail">InMail</Link>
//           </li>
//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//             <Link href="/astrologeradmin/liveevents">Live Events</Link>
//           </li>
//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//             <Link href="/astrologeradmin/myfollower">My Followers</Link>
//           </li>
//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//             <Link href="/astrologeradmin/loyalclubmembers">Loyal Club Members</Link>
//           </li>

//           <li className=" border-b-[1px] border-[#D9D9D9] py-[15px] font-[Roboto] text-[24px]">
//             <button
//               className="flex w-full gap-4 px-16 md:px-[240px] lg:px-20 "
//               onClick={toggleSupportChat}
//             >
//               <span className="">Support Chat</span>
//               <span className={supportChatOpen ? "rotate-90 transform" : ""}>
//                 &#9662;
//               </span>
//             </button>
//             {supportChatOpen && (
//               <ul className="">
//                 <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//                   <Link href="#">Customer Support</Link>
//                 </li>
//                 <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//                   <Link href="#">Chat with Own Assistant</Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[10px] font-[Roboto] text-[24px]">
//             <Link href="/">Settings</Link>
//           </li>
//         </ul>
//       </Section>
//     </div>
//   );
// };

// export default Sidebar;

import Section from "@/components/Section";
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
          <img
            src="https://s3-alpha-sig.figma.com/img/37e9/b62f/7b9a47c8e55bc344604c6fcaca0929f2?Expires=1687737600&Signature=okVmdFkWz1vKleCCiFbx7OVpNVJV94BnS7TdS9yw9JdGlbfWh7X0JmbDnOGGvufo2oWEH11dqDo82EaINMLucNl8nK3F0BN~ojEGn8bAtzkYQ4yhffUYa6GIIjn65KglyULm~3Wqepx3ZEnEcvyt4qkOoZZBfFykrC3k2jhSTFz9cPK404i8u6zg~siwaiJUVLeCU46vvClZJDBe-nW2Q5XzxS2zdRwfaoOECffTdj1VCQh2pUALwDfaZ5X7fqv5qiWKu0ZdkCbDaGAtsaL0lu32-KoUl62dquJ9EwGCRvzP3izPbR-LfTtp1Wdl8OTkoPsnguKLgCieeZUiNpIP6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="dashboard image"
            className="h-[110px]  w-[110px] rounded-[100%] border-[5px] border-[#FEE8A0]"
          />
          <p className="text-center text-[25px] text-black">Dulis</p>
        </div>
        <div className="border-[#D9D9D9]] mx-[16px] border-[1px]"></div>
        <ul>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/astrologeradmin/admin">Dashboard</Link>
          </li>

          <li className=" border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <button
              className="flex px-6 md:px-[220px] lg:px-10  "
              onClick={toggleOrderHistory}
            >
              <span className="px-[50px]">Order History</span>
              <span className={orderHistoryOpen ? "rotate-90 transform" : ""}>
                &#9662;
              </span>
            </button>
            {orderHistoryOpen && (
              <ul className="">
                <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                  <Link href="/astrologeradmin/callhistory">Call History</Link>
                </li>
                <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                  <Link href="/astrologeradmin/chathistory">Chat History</Link>
                </li>
                <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                  <Link href="/astrologeradmin/reporthistory">
                    Report History
                  </Link>
                </li>
                <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                  <Link href="/astrologeradmin/astrosevatalkhistory">
                    AstrosevaTalk Mall History
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/">Earnings</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/astrologeradmin/wallet">Wallet</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/astrologeradmin/offer">Offers</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/astrologeradmin/remedies">Remedies</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/astrologeradmin/waitlist">Wait List</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/astrologeradmin/review">My Reviews</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/astrologeradmin/inmail">InMail</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/astrologeradmin/liveevents">Live Events</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/astrologeradmin/myfollower">My Followers</Link>
          </li>
          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/astrologeradmin/loyalclubmembers">
              Loyal Club Members
            </Link>
          </li>

          <li className=" border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <button
              className="flex w-full gap-4 px-16 md:px-[240px] lg:px-20 "
              onClick={toggleSupportChat}
            >
              <span className="">Support Chat</span>
              <span className={supportChatOpen ? "rotate-90 transform" : ""}>
                &#9662;
              </span>
            </button>
            {supportChatOpen && (
              <ul className="">
                <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                  <Link href="#">Customer Support</Link>
                </li>
                <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px]">
                  <Link href="#">Chat with Own Assistant</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[24px]">
            <Link href="/astrologeradmin/setting">Settings</Link>
          </li>
        </ul>
      </Section>
    </div>
  );
};

export default Sidebar;
