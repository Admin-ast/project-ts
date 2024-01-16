import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import NotificationCard from "@/components/notification/NotificationCard";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Head from 'next/head';

type Props = {};

const Notification = (props: Props) => {
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
    <div className='bg-[url("/assets/horoscope-bg.webp")]'>
      <Hero text="Notification" icon="" />
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[rgb(217,217,217)] p-1" />
            <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
              Notification
            </p>
          </div>
        </Section>
        <NotificationCard />
      </div>
    </div>
	</div>
  );
};

export default Notification;
