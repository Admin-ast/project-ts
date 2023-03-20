import Head from "next/head";
import React from "react";
import Footer from "./global/Footer";
import Navbar from "./global/Navbar";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>AstroSevaTalk</title>
        <meta name="description" content="Astrology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/main-logo.webp" />
      </Head>
      <div className="flex min-h-screen flex-col font-[roboto]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
