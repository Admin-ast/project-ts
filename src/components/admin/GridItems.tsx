// components/GridItem.tsx
import React from "react";
import Link from "next/link";

type ItemProps = {
  imageUrl: string;
  text: string;
  linkUrl: string;
};

const GridItem = ({ imageUrl, text, linkUrl }: ItemProps) => {
  return (
    <Link href={linkUrl}>
      <div className="flex cursor-pointer flex-col items-center justify-center rounded-[10px] p-4 shadow-xl">
        <img src={imageUrl} alt={text} className=" h-24 w-24 object-contain" />
        <p className="text-center text-[16px] font-bold">{text}</p>
      </div>
    </Link>
  );
};

export default GridItem;
