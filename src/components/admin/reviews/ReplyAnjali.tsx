import { Textarea } from "@/components/forms";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";

type Props = {};
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
}
const ReplyAnjali = ({ isOpen, onClose, heading }: PopupProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: unknown) => console.log(data);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center transition-opacity ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative rounded-lg bg-white  p-4 shadow-md md:w-3/4 lg:w-1/2">
        <button
          className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={onClose}
        ></button>
        <div className="">
          <div className="relative flex items-center justify-center font-[Georgia] text-[30px] font-bold">
            <p className="text-[30px] font-bold">{heading}</p>
          </div>
          {/* <div className="absolute right-4 top-5">
            <ImCross
              onClick={onClose}
              className="w-6 cursor-pointer font-bold  "
            />
          </div> */}
          <div className="">
            <Textarea
              type={"string"}
              name={"Description"}
              id="Description"
              register={register}
              required={true}
              label="Description"
              placeholder={""}
              className="!rounded-md "
            />
          </div>
          <div className="flex justify-end gap-[30px] py-[30px]">
            <button
              className=" cursor-pointer rounded-[10px]  bg-[#D9D9D9] px-2 py-2  text-white"
              onClick={togglePopup}
            >
              Cancel
            </button>
            <button
              className=" cursor-pointer rounded-[10px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-2 py-2  text-white"
              onClick={togglePopup}
            >
              Submit
            </button>

            <div
              className={`fixed top-0 left-0 h-screen w-screen transition-opacity ${
                isPopupOpen ? "opacity-50" : "pointer-events-none opacity-0"
              } bg-[#808080]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyAnjali;
