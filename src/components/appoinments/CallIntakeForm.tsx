import React from "react";
import { Button, Form, Input } from "../forms";
import { useForm } from "react-hook-form";

type Props = {};

const CallIntakeForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  return (
    <div className="border-[1px] border-[#D9D9D9] px-8 py-4 lg:w-2/3">
      <p className="text-center text-[22px] font-bold">Call Intake Form</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="gap-[89.56px] lg:flex ">
          <div className="w-full">
            <label
              htmlFor=""
              className="font-[Georgia]  sm:text-base md:text-2xl lg:text-[22px]"
            >
              First Name
            </label>
            <Input
              className=" h-[50px]  text-[16px] font-bold text-white"
              type="string"
              id="hours"
              placeholder=""
              name="hours"
              label=""
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="font-[Georgia]  sm:text-base md:text-2xl lg:text-[22px]"
            >
              Last Name
            </label>
            <Input
              className=" h-[50px]  text-[16px] font-bold text-white"
              type="string"
              id="hours"
              placeholder=""
              name="hours"
              label=""
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="gap-[89.56px] lg:flex ">
          <div className="w-full">
            <label
              htmlFor=""
              className="font-[Georgia]  sm:text-base md:text-2xl lg:text-[22px]"
            >
              Gender
            </label>
            <Input
              className=" h-[50px]  text-[16px] font-bold text-white"
              type="string"
              id="hours"
              placeholder=""
              name="hours"
              label=""
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="font-[Georgia]  sm:text-base md:text-2xl lg:text-[22px]"
            >
              Occupation
            </label>
            <Input
              className=" h-[50px]  text-[16px] font-bold text-white"
              type="string"
              id="hours"
              placeholder=""
              name="hours"
              label=""
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="gap-[89.56px]  lg:flex">
          <div className="w-full">
            <label
              htmlFor=""
              className="font-[Georgia]  sm:text-base md:text-2xl lg:text-[22px]"
            >
              Date Of Birth
            </label>
            <Input
              className=" h-[50px]  text-[16px] font-bold text-white"
              type="string"
              id="hours"
              placeholder=""
              name="hours"
              label=""
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="font-[Georgia]  sm:text-base md:text-2xl lg:text-[22px]"
            >
              Time Of Birth
            </label>
            <Input
              className=" h-[50px]  text-[16px] font-bold text-white"
              type="string"
              id="hours"
              placeholder=""
              name="hours"
              label=""
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="gap-[89.56px]  lg:flex">
          <div className="w-full">
            <label
              htmlFor=""
              className="font-[Georgia]  sm:text-base md:text-2xl lg:text-[22px]"
            >
              Birth Place
            </label>
            <Input
              className=" h-[50px]  text-[16px] font-bold text-white"
              type="string"
              id="hours"
              placeholder=""
              name="hours"
              label=""
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="font-[Georgia]  sm:text-base md:text-2xl lg:text-[22px]"
            >
              Marital Status
            </label>
            <Input
              className=" h-[50px]  text-[16px] font-bold text-white"
              type="string"
              id="hours"
              placeholder=""
              name="hours"
              label=""
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="  ">
          <div className="w-full">
            <label
              htmlFor=""
              className="font-[Georgia]  sm:text-base md:text-2xl lg:text-[22px]"
            >
              Topic Of Concern
            </label>
            <Input
              className=" h-[50px]  text-[16px] font-bold text-white"
              type="string"
              id="hours"
              placeholder=""
              name="hours"
              label=""
              register={register}
              errors={errors}
            />
          </div>

          <div className="mt-[30.48px] flex items-center justify-center">
            <Button
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
