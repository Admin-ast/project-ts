import React from "react";
import GridItem from "./GridItems";
import Link from "next/link";
import PhoneNumber from "./phone number/PhoneNumber";
import ImportantContact from "./important contacts/ImportantContact";
import TrendingVideosCard from "./trending videos/TrendingVideosCard";
import TermsCard from "./terms & conditions/TermsCard";
import ChangeRequestCard from "./change request/ChangeRequestCard";
import GalleryCard from "./gallery/GalleryCard";
import DownloadFormCard from "./download form/DownloadFormCard";
import ReferCard from "./refer/ReferCard";

type Props = {};
const items = [
  {
    imageUrl: "/assets/admin/settings/mobile.svg",
    text: "Update Number",
    linkUrl: "/",
  },
  {
    imageUrl: "/assets/admin/settings/book.svg",
    text: "Important Contacts",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/settings/video.svg",
    text: "Trending Videos",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/settings/info.svg",
    text: "Terms & Conditions",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/settings/wallet money.svg",
    text: "Change Request",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/settings/doc.svg",
    text: "Download Form 16A",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/settings/gallery.svg",
    text: "Gallery",
    linkUrl: "/",
  },

  {
    imageUrl: "/assets/admin/settings/gift.svg",
    text: "Refer an Astrologer",
    linkUrl: "/",
  },
];

const SettingCard = (props: Props) => {
  return (
    <div className="mt-[20px] grid-cols-4 gap-5 px-5 lg:grid">
      <PhoneNumber />
      <ImportantContact />

      <TrendingVideosCard />
      <TermsCard />
      <ChangeRequestCard />
      <DownloadFormCard />

      <GalleryCard />
      <ReferCard />
    </div>
  );
};

export default SettingCard;
