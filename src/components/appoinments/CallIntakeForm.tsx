import React from "react";

import { useForm } from "react-hook-form";
import { Button, Form, Input } from "../forms";

type FormData = {
  fname: string;
  lname: string;
  gender: string;
  dob: string;
  tob: string;
  toc: string;
  bplace: string;
  mstatus: string;
  occupation: string;
};
type Props = {
  text: string;
  className: string;
};

const CallIntakeForm = ({ text, className }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div
      className={`border-[1px] border-[#D9D9D9] px-8  py-4 lg:w-2/3
     
      
       ${className} `}
    >
      <div className="">
        <p className="text-center text-[36px] font-bold ">{text}</p>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[76px] gap-[89.56px] lg:flex">
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="fname"
              placeholder=""
              name="fname"
              label=" First Name"
              register={register}
              errors={errors}
              required="FirstName is required"
            />
          </div>
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="lname"
              placeholder=""
              name="lname"
              label=" Last Name"
              register={register}
              errors={errors}
              required="LastName is required"
            />
          </div>
        </div>
        <div className="gap-[89.56px] lg:flex ">
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="gender"
              placeholder=""
              name="gender"
              label="Gender"
              register={register}
              errors={errors}
              required="Gender is required"
            />
          </div>
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="occupation"
              placeholder=""
              name="occupation"
              label=" Occupation"
              register={register}
              errors={errors}
              required="Occupation is required"
            />
          </div>
        </div>
        <div className="gap-[89.56px]  lg:flex">
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="dob"
              placeholder=""
              name="dob"
              label=" Date Of Birth"
              register={register}
              errors={errors}
              required="Date of birth is required"
            />
          </div>
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="tob"
              placeholder=""
              name="tob"
              label=" Time Of Birth"
              register={register}
              errors={errors}
              required="Time Of Birth is required"
            />
          </div>
        </div>
        <div className="gap-[89.56px]  lg:flex">
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="bplace"
              placeholder=""
              name="bplace"
              label="Birth Place"
              register={register}
              errors={errors}
              required="Birth Place is required"
            />
          </div>
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="mstatus"
              placeholder=""
              name="mstatus"
              label=" Marital Status"
              register={register}
              errors={errors}
              required=" Marital Status is required"
            />
          </div>
        </div>
        <div className="  ">
          <div className="w-full">
            <Input
              className=" h-[150px]  text-[16px] font-bold "
              type="text"
              id="toc"
              placeholder=""
              name="toc"
              label=" Topic Of Concern"
              register={register}
              errors={errors}
              required=" Topic Of Concern is required"
            />
          </div>

          <div className="mt-[30.48px] flex items-center justify-center">
            <Button
              type="submit"
              className="bg-gradient-to-b from-[#FF7646]  to-[#FF0600] text-[16px] font-[500] text-white"
              btnText="Start Call With Anupam "
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CallIntakeForm;
