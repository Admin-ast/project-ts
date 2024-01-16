import React from "react";
import HistoryCard from "../HistoryCard";
import Sidebar from "../Sidebar";

type Props = {};

const ChatHistory = (props: Props) => {
  return (
    <div className="">
      <div
        className="h-[78px]
     w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="mt-[45px] text-center lg:w-3/4">
          {" "}
          <span className="mt-[45px] rounded-[43px] bg-[#CF2927] px-16 py-4 text-xl font-bold text-white">
            CHAT HISTORY
          </span>
          <div className="mt-[30px] grid gap-[45px] md:grid-cols-2 lg:grid-cols-3">
            <div className="shadow-2xl">
              <HistoryCard
                New="new"
                country="India"
                offer="Offer Applied"
                order={12345}
                name="Rashi"
                rs={21.6}
                gender="female"
                dob="30-08-1995"
                pob="panipat,haryana"
                copy="copy"
                orderDate="20 jul 2023"
                orderTime="11:33PM"
                duration="20 minutes"
                rate="7.2/minutes"
                status="completed"
                btn1="Suggest Remedy"
                btn2="Refund Amount"
                btn3="Open Kundli"
              />
            </div>
            <div className="shadow-2xl">
              <HistoryCard
                New="new"
                country="India"
                offer="Offer Applied"
                order={12345}
                name="Rashi"
                rs={21.6}
                gender="female"
                dob="30-08-1995"
                pob="panipat,haryana"
                copy="copy"
                orderDate="20 jul 2023"
                orderTime="11:33PM"
                duration="20 minutes"
                rate="7.2/minutes"
                status="completed"
                btn1="Suggest Remedy"
                btn2="Refund Amount"
                btn3="Open Kundli"
              />
            </div>
            <div className="shadow-2xl">
              <HistoryCard
                New="new"
                country="India"
                offer="Offer Applied"
                order={12345}
                name="Rashi"
                rs={21.6}
                gender="female"
                dob="30-08-1995"
                pob="panipat,haryana"
                copy="copy"
                orderDate="20 jul 2023"
                orderTime="11:33PM"
                duration="20 minutes"
                rate="7.2/minutes"
                status="completed"
                btn1="Suggest Remedy"
                btn2="Refund Amount"
                btn3="Open Kundli"
              />
            </div>
            <div className="shadow-2xl">
              <HistoryCard
                New="new"
                country="India"
                offer="Offer Applied"
                order={12345}
                name="Rashi"
                rs={21.6}
                gender="female"
                dob="30-08-1995"
                pob="panipat,haryana"
                copy="copy"
                orderDate="20 jul 2023"
                orderTime="11:33PM"
                duration="20 minutes"
                rate="7.2/minutes"
                status="completed"
                btn1="Suggest Remedy"
                btn2="Refund Amount"
                btn3="Open Kundli"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
