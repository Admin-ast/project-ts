import Head from "next/head";
import React from "react";

type Props = {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
};

function Seo({ metaTitle, metaDescription, keywords }: Props) {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription}></meta>
      <meta name="keywords" content={keywords}></meta>
    </Head>
  );
}

export default Seo;
