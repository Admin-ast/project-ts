import Astrsevatalk from "@/components/Astrosevatalk+/Astrosevatalk";
import Subscription from "@/components/Astrosevatalk+/Astrosevatalk";
import Head from 'next/head';
import React from "react";

type Props = {};

const astrosevatalk = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
         
        </title>
        <meta
          name="description"
          content=""
          key="desc"
        />
      </Head>
    <div className="">
      <Astrsevatalk />
    </div>
	</div>
  );
};

export default astrosevatalk;
