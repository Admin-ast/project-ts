import React from "react";
import { Input } from "../forms";
import { useForm } from "react-hook-form";
import { AiFillCalendar } from "react-icons/ai";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  day1: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string;
  day6: string;
  day7: string;
  time1: string;
  time2: string;
  time3: string;
  time4: string;
  time5: string;
  time6: string;
  time7: string;
  time8: string;
  time9: string;
  time10: string;
  time11: string;
  time12: string;
  time13: string;
  time14: string;
};

const Popup = ({
  isOpen,
  onClose,
  day1,
  day2,
  day3,
  day4,
  day5,
  day6,
  day7,
  time1,
  time2,
  time10,
  time3,
  time4,
  time5,
  time6,
  time7,
  time8,
  time9,
  time11,
  time12,
  time13,
  time14,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const onSubmit = (data: any) => console.log(data);
  //   console.log(errors);
  return (
    <div
      className={`fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center transition-opacity ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative rounded-lg bg-white  p-4 shadow-md md:w-3/4 lg:w-1/2">
        <div className="">
          <div className="flex items-center justify-center font-[Georgia] text-[30px] font-bold">
            <p className="">Select Next Online Date And Time</p>
          </div>
          <div className="rounded-[8px] bg-[#D9D9D9] py-2">
            <p className=" text-center">
              Please fill your next online time for chat/call before you go
              offline
            </p>
          </div>

          <div className="gap-[52px] lg:flex">
            <div className="lg:w-1/2">
              <Input
                className="  "
                type="date"
                id="date"
                placeholder="Please select next online time"
                name="date"
                label=""
                register={register}
                errors={errors}
              />
            </div>
            <div className="lg:w-1/2">
              <Input
                className="  "
                type="date"
                id="date"
                placeholder="Please select next online time"
                name="date"
                label=""
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="mt-[20px] gap-[51px] lg:flex">
            <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#DC6563] lg:w-1/2">
              <p className="font-bold   text-white">{day1}</p>
            </div>
            <div className="gap-[26px] lg:flex lg:w-1/2">
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] font-bold text-white  lg:w-1/2 ">
                <p className="">{time1}</p>
              </div>
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] text-white lg:w-1/2  ">
                <p className="">{time2}</p>
              </div>
            </div>
          </div>
          <div className="mt-[20px] gap-[51px] lg:flex">
            <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#D9D9D9] lg:w-1/2">
              <p className="font-bold   text-white">{day1}</p>
            </div>
            <div className="gap-[26px] lg:flex lg:w-1/2">
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] font-bold text-white  lg:w-1/2 ">
                <p className="">{time1}</p>
              </div>
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] text-white lg:w-1/2  ">
                <p className="">{time2}</p>
              </div>
            </div>
          </div>
          <div className="mt-[20px] gap-[51px] lg:flex">
            <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#D9D9D9] lg:w-1/2">
              <p className="font-bold   text-white">{day1}</p>
            </div>
            <div className="gap-[26px] lg:flex lg:w-1/2">
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] font-bold text-white  lg:w-1/2 ">
                <p className="">{time1}</p>
              </div>
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] text-white lg:w-1/2  ">
                <p className="">{time2}</p>
              </div>
            </div>
          </div>
          <div className="mt-[20px] gap-[51px] lg:flex">
            <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#D9D9D9] lg:w-1/2">
              <p className="font-bold   text-white">{day1}</p>
            </div>
            <div className="gap-[26px] lg:flex lg:w-1/2">
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] font-bold text-white  lg:w-1/2 ">
                <p className="">{time1}</p>
              </div>
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] text-white lg:w-1/2  ">
                <p className="">{time2}</p>
              </div>
            </div>
          </div>
          <div className="mt-[20px] gap-[51px] lg:flex">
            <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#D9D9D9] lg:w-1/2">
              <p className="font-bold   text-white">{day1}</p>
            </div>
            <div className="gap-[26px] lg:flex lg:w-1/2">
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] font-bold text-white  lg:w-1/2 ">
                <p className="">{time1}</p>
              </div>
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] text-white lg:w-1/2  ">
                <p className="">{time2}</p>
              </div>
            </div>
          </div>
          <div className="mt-[20px] gap-[51px] lg:flex">
            <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#D9D9D9] lg:w-1/2">
              <p className="font-bold   text-white">{day1}</p>
            </div>
            <div className="gap-[26px] lg:flex lg:w-1/2">
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] font-bold text-white  lg:w-1/2 ">
                <p className="">{time1}</p>
              </div>
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] text-white lg:w-1/2  ">
                <p className="">{time2}</p>
              </div>
            </div>
          </div>
          <div className="mt-[20px] gap-[51px] lg:flex">
            <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#D9D9D9] lg:w-1/2">
              <p className="font-bold   text-white">{day1}</p>
            </div>
            <div className="gap-[26px] lg:flex lg:w-1/2">
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] font-bold text-white  lg:w-1/2 ">
                <p className="">{time1}</p>
              </div>
              <div className="flex items-center justify-center rounded-[8px] bg-[#D9D9D9] text-white lg:w-1/2  ">
                <p className="">{time2}</p>
              </div>
            </div>
          </div>
          <div className="mt-[27px] flex justify-end gap-[20px]">
            <button
              className=" cursor-pointer rounded-[8px] bg-[#FF0600] py-2 px-2  text-white"
              onClick={onClose}
            >
              Submit
            </button>
            <button
              className=" cursor-pointer rounded-[8px] bg-[#A9A9A9] py-2 px-2  text-white"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
