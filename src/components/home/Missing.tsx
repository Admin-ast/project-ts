import Image from "next/image";
import React from "react";

type Props = {};

const Missing = (props: Props) => {
  return (
    <div className="">
      <div className="max-w-6.5xl mx-auto flex flex-row  items-start">
        <div
          style={{ height: "340px" }}
          className="bg-50%_50% flex w-full flex-row items-start gap-12 bg-[url(/assets/home/missingw.png)] bg-cover bg-no-repeat bg-blend-normal"
        >
          <div className="mt-10 flex flex-col items-start gap-10 px-[30px]">
            <div className="px-14 ">
              <div className=" font-serif text-4xl font-bold text-white  ">
                Missing Spark In Marriage?
              </div>
              <div className="mt-4 text-justify font-sans text-xl leading-[30.1px] tracking-[0.22] text-white">
                Get solutions from astrologers
              </div>
            </div>
            <div className="mt-8 items-start px-14 pt-2 text-justify font-sans text-xl font-semibold  leading-[84.1px] tracking-[0.22] text-black/80">
              Free Chat with Astrologer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missing;
