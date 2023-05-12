import Head from "next/head";
import React from "react";
import Footer from "./global/Footer";
import Navbar from "./global/Navbar";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/solid";

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
        <link rel="icon" href="/assets/main-logo.svg" />
      </Head>
      <div className="relative flex min-h-screen flex-col font-[roboto]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <div
          className="fixed right-8 bottom-8 md:bottom-12 md:right-20"
          title="Talk to Astro expert"
        >
          <Link
            href="https://wa.me/9040023006"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex space-x-2 rounded-full bg-[#C83000]/90 p-3 px-5 font-semibold text-white shadow-2xl shadow-gray-900">
              <PhoneIcon className="h-6 w-6 text-white" />
              <p>Talk to an Expert</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Layout;
