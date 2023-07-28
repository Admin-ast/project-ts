import Link from "next/link";
import React, { useState } from "react";
import Section from "../Section";
import { AiFillCaretDown } from "react-icons/ai";

type Props = {};

const Sidebar = (props: Props) => {
  const Dashboard = [
    {
      title: "Dashboard",
      url: "/admin/admin",
    },
    {
      title: "Order History",
      url: "/",
    },
    {
      title: "Earnings",
      url: "/",
    },
    {
      title: "Wallet",
      url: "/admin/wallet",
    },
    {
      title: "Offers",
      url: "/admin/offer",
    },
    {
      title: "Remedies",
      url: "/admin/remedies",
    },
    {
      title: "Wait List",
      url: "/admin/waitlist",
    },
    {
      title: "My Reviews",
      url: "/admin/review",
    },
    {
      title: "InMail",
      url: "/",
    },
    {
      title: "Live Events",
      url: "/",
    },
    {
      title: "My Followers",
      url: "/",
    },
    {
      title: "Loyal Club Members",
      url: "/",
    },
    {
      title: "Support Chat",
      url: "/",
    },
    {
      title: "Settings",
      url: "/",
    },
  ];

  const [isOrderHistoryOpen, setIsOrderHistoryOpen] = useState(false);

  return (
    <div className="border-r-4 border-[#D9D9D9]">
      <Section>
        <div className="grid items-center justify-center py-[50px]  ">
          <img
            src="https://s3-alpha-sig.figma.com/img/37e9/b62f/7b9a47c8e55bc344604c6fcaca0929f2?Expires=1687737600&Signature=okVmdFkWz1vKleCCiFbx7OVpNVJV94BnS7TdS9yw9JdGlbfWh7X0JmbDnOGGvufo2oWEH11dqDo82EaINMLucNl8nK3F0BN~ojEGn8bAtzkYQ4yhffUYa6GIIjn65KglyULm~3Wqepx3ZEnEcvyt4qkOoZZBfFykrC3k2jhSTFz9cPK404i8u6zg~siwaiJUVLeCU46vvClZJDBe-nW2Q5XzxS2zdRwfaoOECffTdj1VCQh2pUALwDfaZ5X7fqv5qiWKu0ZdkCbDaGAtsaL0lu32-KoUl62dquJ9EwGCRvzP3izPbR-LfTtp1Wdl8OTkoPsnguKLgCieeZUiNpIP6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="dashboard image"
            className="h-[110px]  w-[110px] rounded-[100%] border-[5px] border-[#FEE8A0]"
          />
          <p className="text-center text-[25px] text-black">Dulis</p>
        </div>
        <div className="mx-[16px] border-[1px] border-[#D9D9D9] "></div>
        {Dashboard.map((item, index) => (
          <div key={index}>
            {item.title === "Order History" ? (
              <>
                <div
                  className="flex cursor-pointer justify-center gap-10 py-[20px]"
                  onClick={() => setIsOrderHistoryOpen(!isOrderHistoryOpen)}
                >
                  <p className="text-center text-2xl text-black">
                    {item.title}
                  </p>
                  <p className="mt-3 text-base text-black">
                    {" "}
                    <AiFillCaretDown />
                  </p>
                </div>
                {isOrderHistoryOpen && (
                  <>
                    <Link
                      href="/admin/callhistory"
                      className="mx-auto mt-2 block px-4 py-2 text-black  "
                    >
                      Call History
                    </Link>
                    <Link
                      href="/admin/chathistory"
                      className="mx-auto mt-2 block px-4 py-2 text-black  "
                    >
                      Chat History
                    </Link>
                    <Link
                      href="/admin/reporthistory"
                      className="mx-auto mt-2 block px-4 py-2 text-black  "
                    >
                      Report History
                    </Link>
                    <Link
                      href="/admin/astrosevatalkhistory"
                      className="mx-auto mt-2 block px-4 py-2 text-black  "
                    >
                      AstrosevaTalk History
                    </Link>
                  </>
                )}
              </>
            ) : (
              <Link href={item?.url}>
                <div className="py-[20px]">
                  <p className="text-center text-2xl text-black">
                    {item?.title}
                  </p>
                </div>
              </Link>
            )}
            <div className="border-[#D9D9D9]] mx-[16px] border-[1px]"></div>
          </div>
        ))}
      </Section>
    </div>
  );
};

export default Sidebar;
