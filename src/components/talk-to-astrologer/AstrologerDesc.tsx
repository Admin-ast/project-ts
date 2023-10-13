import Image from "next/image";
import React from "react";
import Section from "../Section";
import ThreeDots from "./ThreeDots";
import Rating from "./Rating";

type Props = {
  waitTime: string;
};
const AstrologersList = [
  {
    id: 1,
    src: "/assets/admin/Dashboard_image.png",
    speciality: "Vedic, Face Reading",
    name: "Bani Sharma",
    language: "Hindi",
    experience: "10 years",
    price: 10,
    chatTime: "50k min",
    callTime: "50k min",
  },
];

const AstrologerDesc = ({ waitTime }: Props) => {
  return (
    <div className="mt-[30px] bg-[url('/assets/horoscope-bg.webp')] ">
      <Section>
        <div className="items-center justify-center  rounded-[15px] border-[1px] border-[#DC6563] bg-white py-8 md:flex">
          {AstrologersList.map((item, index) => (
            <div key={index} className="gap-[91px] px-8 lg:flex ">
              <div className=" mt-[53px]">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={294}
                  height={294}
                />
                <div className="mt-[34px] flex h-[58px]  justify-center ">
                  <button className="rounded-[10px] bg-gradient-to-b from-[#FF7646] to-[#FF0600] px-8 font-[Roboto] text-[28px] font-bold text-white lg:px-16">
                    Follow
                  </button>
                </div>
              </div>
              <div className=" mt-[53px]">
                <p className="font-[Georgia] text-[36px] font-bold">
                  {item.name}
                </p>
                <p className="font-[Roboto] text-[24px] ">{item.speciality}</p>
                <p className="font-[Roboto] text-[24px] ">{item.language}</p>
                <p className="font-[Roboto] text-[24px] ">
                  Exp:{item.experience}
                </p>
                <p className="font-[Roboto] text-[24px] ">Rs:{item.price}</p>
                <div className="gap-[34px] md:flex lg:flex">
                  <div className="flex items-center">
                    <Image
                      src="/assets/talk-to-astrologer/chat.png"
                      alt="chat"
                      width={60}
                      height={60}
                    />
                    <p className="font-[Roboto] text-[24px] font-bold">
                      {item.chatTime}
                    </p>
                  </div>
                  <div className="">
                    <div className="flex items-center">
                      <Image
                        src="/assets/talk-to-astrologer/call.png"
                        alt="chat"
                        width={60}
                        height={60}
                      />
                      <p className="font-[Roboto] text-[24px] font-bold">
                        {item.callTime}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-[76px] gap-[34px] md:flex lg:flex">
                  <div className="flex  items-center gap-[48px] rounded-[10px] border-[1px] border-[#DC6563] px-4">
                    <Image
                      src="/assets/talk-to-astrologer/chat.png"
                      alt="chat"
                      width={33}
                      height={33}
                    />
                    <div className="">
                      <p className="font-[Roboto] text-[24px] font-bold">
                        Start Chat
                      </p>
                      <p className="">wait time-{waitTime}</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex  items-center  gap-[48px] rounded-[10px] border-[1px] border-[#DC6563] px-4">
                      <Image
                        src="/assets/talk-to-astrologer/call.png"
                        alt="chat"
                        width={33}
                        height={33}
                      />
                      <div className="">
                        <p className="font-[Roboto] text-[24px] font-bold">
                          Start Call
                        </p>
                        <p className="">wait time-{waitTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <ThreeDots />
              </div>
            </div>
          ))}
          <div className="lg:flex"></div>
        </div>
      </Section>
    </div>
  );
};

export default AstrologerDesc;
