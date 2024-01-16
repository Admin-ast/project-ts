"use client";
import React, { useState } from "react";
import PhoneNumberForm from "./PhoneNumberForm";

type Props = {};

const PhoneNumber = (props: Props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };
  return (
    <div className="rounded-[15px] border-b-[7px] border-b-[#DC6563] ">
      <div className="  cursor-pointer p-10 shadow-xl" onClick={toggleForm}>
        <div className="m-auto h-[82px] w-[82px] rounded-[100%] bg-[#fed04980] py-4">
          <img
            src="/assets/admin/settings/mobile.svg"
            alt="Card Image"
            className="  mx-auto mb-8 "
          />

          <p className=" whitespace-nowrap text-center font-bold ">
            Update Number
          </p>
        </div>
      </div>

      {showForm && <PhoneNumberForm onClose={toggleForm} />}
    </div>
  );
};

export default PhoneNumber;
