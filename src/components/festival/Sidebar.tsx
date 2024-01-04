import React from "react";
import PremiumAstrologer from "./PremiumAstrologer";
import LatestBlogs from "./LatestBlogs";
import ShopCards from "./ShopCards";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="h-full border-l-[1px] border-[#D9D9D9] pl-[20px]">
      <PremiumAstrologer />
      <LatestBlogs />
      <ShopCards />
    </div>
  );
};

export default Sidebar;
