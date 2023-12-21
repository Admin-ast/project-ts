"use client";
import Head from "next/head";
import React, { Component } from "react";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css";
import { ChatBubbleLeftIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "@/components/shop/context/ShopContext";
import { AuthProvider } from "@/components/contexts/AuthProvider";


type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  
    return ( 
     <html lang="en">
      <title>AstroSevaTalk</title>
      <meta name="description" content="Astrology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/main-logo.svg" />

      <Head>
        <title>AstroSevaTalk</title>
        <meta name="description" content="Astrology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/main-logo.svg" />
      </Head>
      <body>
        <AuthProvider>    
      <CartProvider>
      <div className="relative flex min-h-screen flex-col font-[roboto]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ToastContainer />
        <Footer />
        <div className="fixed right-10 bottom-6 z-50 flex items-center  gap-2 md:bottom-12 md:right-20 md:flex-col md:items-stretch">
          <Link
            href="/chat-with-astrologer"
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
            href="/talk-to-astrologer"
            rel="noopener noreferrer"
          >
            <div className="flex space-x-2 rounded-full bg-[#C83000]/90 p-2 px-2 font-semibold text-white shadow-2xl shadow-gray-900 md:p-3 md:px-5">
              <PhoneIcon className="h-4 w-4 text-white md:h-6 md:w-6" />
              <p className="text-[12px] md:text-[16px]">Talk to an Expert</p>
            </div>
          </Link>
        </div>
      </div>
      </CartProvider>      
        </AuthProvider>
 

      </body>
      
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5WH6NSHYF5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5WH6NSHYF5');
        `}
      </Script>
     
      
         
      </html>
    
  );
}

export default Layout;
