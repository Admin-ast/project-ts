import Horoscope from "@/components/horoscope";
import HoroscopeSign from "@/components/horoscope/horoscope-sign";
import HoroscopeType from "@/components/horoscope/horoscope-type";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  signData: any;
};

function HoroscopeDetail({ signData }: Props) {
  console.log("sisis", signData);
  const slug = useRouter()?.query?.slug ?? [];
  console.log("slug is", slug);
  if (slug?.length === 0) {
    return <Horoscope />;
  } else if (slug?.length === 1) {
    return <HoroscopeType />;
  } else if (slug?.length === 2) {
    return <HoroscopeSign data={signData} slug={slug[1]} />;
  } else {
  }
}

export default HoroscopeDetail;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const zodiacName = context.query.slug;
  const response = await fetch(
    `http://api.astrosevatalk.com/api/v1/horoscope/${zodiacName[1]}`
  );
  const jsonData = await response.json();
  return {
    props: { signData: jsonData },
  };
};
