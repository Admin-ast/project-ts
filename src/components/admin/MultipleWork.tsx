// pages/index.tsx
import React from "react";
import GridItem from "./GridItems";

const items = [
  {
    imageUrl: "/assets/admin/call.svg",
    text: "Call",
    linkUrl: "/",
  },
  {
    imageUrl: "/assets/admin/chat.svg",
    text: "Chat",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/report.svg",
    text: "Report",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/astroseva mall.svg",
    text: "Astroseva Mall",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/wallet.svg",
    text: "Wallet",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/waitlist.svg",
    text: "Waitlist",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/support.svg",
    text: "Support",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/offers.svg",
    text: "Offers",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/reviews.svg",
    text: "My Reviews",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/inmail.svg",
    text: "InMail",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/suggestion remedies.svg",
    text: "Suggestion Remedies",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/settings.svg",
    text: "Settings",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/live events.svg",
    text: "Live Events",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/profile.svg",
    text: "Profile",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/my followers.svg",
    text: "My Followers",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/mandatory warning.svg",
    text: "Mandatory Warning",
    linkUrl: "/",
  },
];

const MultipleWork = () => {
  return (
    <div className="grid grid-cols-1  gap-4 p-4 md:grid-cols-3 lg:grid-cols-5">
      {items.map((item, index) => (
        <GridItem
          key={index}
          imageUrl={item.imageUrl}
          text={item.text}
          linkUrl={item.linkUrl}
        />
      ))}
    </div>
  );
};

export default MultipleWork;
