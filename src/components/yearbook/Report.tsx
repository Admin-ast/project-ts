import Image from "next/image";
import React from "react";

type Props = {};

const Report = (props: Props) => {
  return (
    <div className="pt-[30px]">
      <p className="text-center text-[36px] font-bold">
        About Your Personalised Report
      </p>
      <div className="gap-[50px] md:flex lg:flex">
        <div className="mt-[30px]">
          <div className="flex ">
            <div className="flex ">
              <div className="flex h-[37px] w-[37px] items-center justify-center rounded-[100%] border-[1px] border-[#D9D9D9] bg-[#DC6563]">
                <Image
                  src="/assets/yearbook/report.svg"
                  alt="report"
                  width={22}
                  height={22}
                  className="  "
                />
              </div>
            </div>
            <div className="">
              <p className="text-[20px] font-bold">
                Horoscope based Predictions for 12 months
              </p>
              <p className="text-justify">
                Home, car, job, business, marriage and family - how you can
                achieve these? How to fulfil your life’s objectives? These are
                some questions that roams the periphery of your mind every once
                in a while, but you don’t have fixed answers for them. To
                overcome these dilemmas of your life, we have brought AstroSage
                Year Book. This report is prepared with the aim to prepare you
                for a bright and promising future. The report is not based on a
                particular year, but provides predictions for the next
                subsequent 12 months from the day you order it.
              </p>
            </div>
          </div>
          <div className="mt-[10px] flex">
            <div className="flex">
              <div className="flex h-[37px] w-[37px] items-center  justify-center rounded-[100%] border-[1px] border-[#D9D9D9] bg-[#DC6563]">
                <Image
                  src="/assets/yearbook/Timer.svg"
                  alt="report"
                  width={22}
                  height={22}
                  className="  "
                />
              </div>
            </div>
            <div className="">
              <p className="text-[20px] font-bold">
                Horoscope based Predictions for 12 months
              </p>
              <p className="text-justify">
                Home, car, job, business, marriage and family - how you can
                achieve these? How to fulfil your life’s objectives? These are
                some questions that roams the periphery of your mind every once
                in a while, but you don’t have fixed answers for them. To
                overcome these dilemmas of your life, we have brought AstroSage
                Year Book. This report is prepared with the aim to prepare you
                for a bright and promising future. The report is not based on a
                particular year, but provides predictions for the next
                subsequent 12 months from the day you order it.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[30px]">
          <div className="flex ">
            <div className="">
              <div className="flex h-[37px] w-[37px] items-center  justify-center rounded-[100%] border-[1px] border-[#D9D9D9] bg-[#DC6563]">
                <Image
                  src="/assets/yearbook/star.svg"
                  alt="report"
                  width={22}
                  height={22}
                  className="  "
                />
              </div>
            </div>
            <div className="">
              <p className="text-[20px] font-bold">
                Horoscope based Predictions for 12 months
              </p>
              <p className="text-justify">
                Home, car, job, business, marriage and family - how you can
                achieve these? How to fulfil your life’s objectives? These are
                some questions that roams the periphery of your mind every once
                in a while, but you don’t have fixed answers for them. To
                overcome these dilemmas of your life, we have brought AstroSage
                Year Book. This report is prepared with the aim to prepare you
                for a bright and promising future. The report is not based on a
                particular year, but provides predictions for the next
                subsequent 12 months from the day you order it.
              </p>
            </div>
          </div>
          <div className="mt-[10px] flex">
            <div className="">
              <div className="flex h-[37px] w-[37px] items-center  justify-center rounded-[100%] border-[1px] border-[#D9D9D9] bg-[#DC6563]">
                <Image
                  src="/assets/yearbook/Timer.svg"
                  alt="report"
                  width={22}
                  height={22}
                  className="  "
                />
              </div>
            </div>
            <div className="">
              <p className="text-[20px] font-bold">
                Horoscope based Predictions for 12 months
              </p>
              <p className="text-justify">
                Home, car, job, business, marriage and family - how you can
                achieve these? How to fulfil your life’s objectives? These are
                some questions that roams the periphery of your mind every once
                in a while, but you don’t have fixed answers for them. To
                overcome these dilemmas of your life, we have brought AstroSage
                Year Book. This report is prepared with the aim to prepare you
                for a bright and promising future. The report is not based on a
                particular year, but provides predictions for the next
                subsequent 12 months from the day you order it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
