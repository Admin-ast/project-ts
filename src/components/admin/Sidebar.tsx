import Link from "next/link";
import React from "react";
import Section from "../Section";

type Props = {};

const Sidebar = (props: Props) => {
  const Dashboard = [
    {
      title: "Dashboard",
      url: "/",
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
      url: "/",
    },
    {
      title: "Offers",
      url: "/",
    },
    {
      title: "Remedies",
      url: "/",
    },
    {
      title: "Wait List",
      url: "/",
    },
    {
      title: "My Reviews",
      url: "/",
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
  return (
    <div className=" bg-black ">
      <Section>
        <div className="grid items-center justify-center py-[50px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/37e9/b62f/7b9a47c8e55bc344604c6fcaca0929f2?Expires=1687737600&Signature=okVmdFkWz1vKleCCiFbx7OVpNVJV94BnS7TdS9yw9JdGlbfWh7X0JmbDnOGGvufo2oWEH11dqDo82EaINMLucNl8nK3F0BN~ojEGn8bAtzkYQ4yhffUYa6GIIjn65KglyULm~3Wqepx3ZEnEcvyt4qkOoZZBfFykrC3k2jhSTFz9cPK404i8u6zg~siwaiJUVLeCU46vvClZJDBe-nW2Q5XzxS2zdRwfaoOECffTdj1VCQh2pUALwDfaZ5X7fqv5qiWKu0ZdkCbDaGAtsaL0lu32-KoUl62dquJ9EwGCRvzP3izPbR-LfTtp1Wdl8OTkoPsnguKLgCieeZUiNpIP6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="dashboard image"
            className="h-[110px]  w-[110px] rounded-[100%] border-[5px] border-[#FEE8A0]"
          />
          <p className="text-center text-[25px] text-white">Dulis</p>
          SS
        </div>
        <div className="mx-[16px] border-[1px] border-[#FFFFFFE5]"></div>
        {Dashboard.map((item, index) => (
          <Link key={index} href={item?.url}>
            <div className="py-[20px]">
              <p className="text-center text-2xl text-white">{item?.title}</p>
            </div>
            <div className="mx-[16px] border-[1px] border-[#FFFFFFE5]"></div>
          </Link>
        ))}
      </Section>
    </div>
  );
};

export default Sidebar;
