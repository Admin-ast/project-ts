import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Key } from "react";
import Section from "../../Section";

type Check = {
  id: string;
  name: string;
  img: string;
};

const check: Check[] = [
  {
    id: "yesterday",
    name: "Yesterday's Horoscope",
    img: "/assets/horoscope/yesterday.png",
  },
  {
    id: "today",
    name: "Today's Horoscope",
    img: "/assets/horoscope/yearly.png",
  },
  {
    id: "tomorrow",
    name: "Tomorrow's Horoscope",
    img: "/assets/horoscope/tommorow.png",
  },
  // {
  //   id: "weekly-horoscope",
  //   name: "Weekly's Horoscope",
  //   img: "/assets/horoscope/weekly.png",
  // },
  {
    id: "monthly",
    name: "Monthly Horoscope",
    img: "/assets/horoscope/monthly.png",
  },
  {
    id: "yearly",
    name: "Yearly Horoscope",
    img: "/assets/horoscope/yearly.png",
  },
];

type Props = {};

const Check = (props: Props) => {
  const router = useRouter()?.query?.slug;
  const fin_checkList = check.filter((item) => !router?.includes(item.id));
  return (
    <div className="mt-4 bg-[url('/assets/cloud-bg.webp')] py-8">
      <Section>
        <div className="mx-auto max-w-5xl">
          <p className="text text-center text-4xl font-bold text-white">
            Also Check
          </p>
          <div className="grid grid-cols-2 items-center gap-4 py-6 sm:grid-cols-2 md:grid-cols-5">
            {fin_checkList.map((item: Check, index: Key) => (
              <Link
                href={`/horoscope/${item.id}`}
                key={index}
                className="flex w-[142px] flex-col  items-center gap-1 rounded-md bg-[#E2CB85] p-2"
              >
                <Image
                  src={item.img}
                  alt="logo"
                  width={80}
                  height={78}
                  loading={"lazy"}
                />
                <p className="px-2 text-center text-black">{item?.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Check;
