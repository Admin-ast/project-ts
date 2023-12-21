import Head from "next/head";
import React from "react";
import Footer from "./global/Footer";
import Navbar from "./global/Navbar";
import Link from "next/link";
import Image from "next/image";
import { ChatBubbleLeftIcon, PhoneIcon } from "@heroicons/react/24/solid";

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
        <div className="fixed right-10 bottom-6 z-50 flex items-center  gap-2 md:bottom-12 md:right-20 md:flex-col md:items-stretch">
          <Link
            href="https://wa.me/9040023006"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex space-x-2 rounded-full bg-[#C83000]/90 p-2 px-2 font-semibold text-white shadow-2xl shadow-gray-900 md:p-3 md:px-5">
              <ChatBubbleLeftIcon className="h-4 w-4 text-white md:h-6 md:w-6" />
              <p className="text-[12px] md:text-[16px]">Chat with an Expert</p>
            </div>
          </Link>
          <Link
            // href="https://wa.me/9040023006"
            href="tel:9040023006"
            rel="noopener noreferrer"
          >
            <div className="flex space-x-2 rounded-full bg-[#C83000]/90 p-2 px-2 font-semibold text-white shadow-2xl shadow-gray-900 md:p-3 md:px-5">
              <PhoneIcon className="h-4 w-4 text-white md:h-6 md:w-6" />
              <p className="text-[12px] md:text-[16px]">Talk to an Expert</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Layout;
