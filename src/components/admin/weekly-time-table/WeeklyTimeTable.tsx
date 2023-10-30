import Image from "next/image";
import React, { useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  day1: string;
  date1: string;
  day2: string;
  date2: string;
  day3: string;
  date3: string;
  day4: string;
  date4: string;
  day5: string;
  date5: string;
  day6: string;
  date6: string;
  day7: string;
  date7: string;
  time1: string;
  time2: string;
  time3: string;
  time4: string;
};

const WeeklyTimeTable = ({
  isOpen,
  onClose,
  time1,
  time2,
  time3,
  time4,
  day1,
  date1,
  day2,
  date2,
  day3,
  date3,
  day4,
  date4,
  day5,
  date5,
  day6,
  date6,
  day7,
  date7,
}: Props) => {
  const scrollableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollable = scrollableRef.current;

    if (scrollable) {
      let isScrolling = false;

      scrollable.addEventListener("mouseover", () => {
        isScrolling = true;
      });

      scrollable.addEventListener("mouseout", () => {
        isScrolling = false;
      });

      scrollable.addEventListener("mousemove", (e) => {
        if (isScrolling) {
          scrollable.scrollTop += e.movementY;
        }
      });
    }
  }, []);
  return (
    <div
      className={`fixed top-10 z-50 flex h-screen items-center justify-center transition-opacity md:w-screen lg:left-10 lg:w-screen ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative rounded-lg bg-white  p-4 shadow-md md:w-3/4 lg:w-1/2">
        <div
          className="h-full w-full overflow-y-auto border border-gray-400"
          ref={scrollableRef}
        >
          <div className="h-96 lg:p-4">
            {/* Your scrollable content */}
            {/* Add enough content here to enable scrolling */}
            <div className="">
              <p className="text-center font-[Georgia] text-[30px] font-bold">
                Time-Table
              </p>
            </div>
            <div className="bg-[#A9A9A9]">
              <div className=" flex items-center justify-center gap-[59px]">
                <div className="flex items-center justify-center  ">
                  <div className="">
                    <p className="font-bold">{day1}</p>
                    <p className="text-[12px] text-[#D9D9D9]">{date1}</p>
                  </div>
                  <div className="mt-[50px] ">
                    <Image
                      src="/assets/astrologer-admin/line.svg"
                      alt="line"
                      height={141}
                      width={18}
                    />
                  </div>
                </div>
                <div className="mt-[60px] grid grid-cols-1 gap-[10px]">
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time1}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time2}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time3}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time4}</div>
                </div>
              </div>
              <div className=" flex justify-center gap-[59px]">
                <div className="flex justify-center  ">
                  <div className="">
                    <p className="font-bold">{day2}</p>
                    <p className="text-[12px] text-[#D9D9D9]">{date2}</p>
                  </div>
                  <div className="">
                    <Image
                      src="/assets/astrologer-admin/line.svg"
                      alt="line"
                      height={141}
                      width={18}
                    />
                  </div>
                </div>
                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2 ">
                    {time1}
                  </div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time2}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time3}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time4}</div>
                </div>
              </div>
              <div className=" flex justify-center gap-[59px]">
                <div className="flex justify-center  ">
                  <div className="">
                    <p className="font-bold">{day2}</p>
                    <p className="text-[12px] text-[#D9D9D9]">{date2}</p>
                  </div>
                  <div className="">
                    <Image
                      src="/assets/astrologer-admin/line.svg"
                      alt="line"
                      height={141}
                      width={18}
                    />
                  </div>
                </div>
                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2 ">
                    {time1}
                  </div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time2}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time3}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time4}</div>
                </div>
              </div>
              <div className=" flex justify-center gap-[59px]">
                <div className="flex justify-center  ">
                  <div className="">
                    <p className="font-bold">{day2}</p>
                    <p className="text-[12px] text-[#D9D9D9]">{date2}</p>
                  </div>
                  <div className="">
                    <Image
                      src="/assets/astrologer-admin/line.svg"
                      alt="line"
                      height={141}
                      width={18}
                    />
                  </div>
                </div>
                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2 ">
                    {time1}
                  </div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time2}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time3}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time4}</div>
                </div>
              </div>
              <div className=" flex justify-center gap-[59px]">
                <div className="flex justify-center  ">
                  <div className="">
                    <p className="font-bold">{day2}</p>
                    <p className="text-[12px] text-[#D9D9D9]">{date2}</p>
                  </div>
                  <div className="">
                    <Image
                      src="/assets/astrologer-admin/line.svg"
                      alt="line"
                      height={141}
                      width={18}
                    />
                  </div>
                </div>
                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2 ">
                    {time1}
                  </div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time2}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time3}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time4}</div>
                </div>
              </div>
              <div className=" flex justify-center gap-[59px]">
                <div className="flex justify-center  ">
                  <div className="">
                    <p className="font-bold">{day2}</p>
                    <p className="text-[12px] text-[#D9D9D9]">{date2}</p>
                  </div>
                  <div className="">
                    <Image
                      src="/assets/astrologer-admin/line.svg"
                      alt="line"
                      height={141}
                      width={18}
                    />
                  </div>
                </div>
                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2 ">
                    {time1}
                  </div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time2}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time3}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time4}</div>
                </div>
              </div>
              <div className=" flex justify-center gap-[59px]">
                <div className="flex justify-center  ">
                  <div className="">
                    <p className="font-bold">{day2}</p>
                    <p className="text-[12px] text-[#D9D9D9]">{date2}</p>
                  </div>
                  <div className="">
                    <Image
                      src="/assets/astrologer-admin/line.svg"
                      alt="line"
                      height={141}
                      width={18}
                    />
                  </div>
                </div>
                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2 ">
                    {time1}
                  </div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time2}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time3}</div>
                  <div className="rounded-[8px] bg-[#FFFFFF] px-2">{time4}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              <button
                className="cursor-pointer rounded-[10px] bg-gradient-to-b from-[#fb7038] to-[#df625b] py-1 px-2 text-white "
                onClick={onClose}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTimeTable;
