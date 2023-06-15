import Horoscope from "@/components/horoscope";
import HoroscopeSign from "@/components/horoscope/horoscope-sign";
import HoroscopeType from "@/components/horoscope/horoscope-type";
import { GetServerSideProps } from "next";
import { Router, useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {
  signData: any;
};

function HoroscopeDetail({ signData }: Props) {
  const router = useRouter();
  useEffect(() => {
    const fetcher = async () => {
      // const zodiacName = router.query.slug;
      const response = await fetch(`http://localhost:8000/api/v1/horoscope`, {
        method: "get",
      });
      const jsonData = await response.json();
      return {
        props: { signData: jsonData },
      };
    };
    fetcher();
  }, []);
  const slug = useRouter()?.query?.slug ?? [];
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

// export const getServerSideProps: GetServerSideProps = async (context: any) => {
//   const zodiacName = context.query.slug;
// const response = await fetch(
//     `https://astrobackendtesting.onrender.com/api/v1/api/v1/horoscope/${zodiacName[1]}`
//   );
//   const jsonData = await response.json();
//   return {
//     props: { signData: jsonData },
//   };
// };
