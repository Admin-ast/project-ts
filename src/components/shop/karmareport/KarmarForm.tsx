import Section from "@/components/Section";
import { Button, Form, Input } from "@/components/forms";
import React from "react";
import { useForm } from "react-hook-form";
type FormData = {
  name: string;
  dateOfBirth: string;
  gender: string;
  birthLocation: string;
  birthTime: string;
  email: string;
};

const KarmarForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="mt-[35px]">
      <Section>
        <div className="flex items-center justify-center rounded-[20px] border-[2px] border-[#A9A9A9]">
          <div className="p-5 ">
            <p className="text-center font-[Georgia] text-[22px] font-bold">
              Enter Your Information
            </p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className=" mt-[30px] gap-[31px]  md:flex lg:flex">
                <div className="md:w-1/2 lg:w-1/2">
                  <Input
                    placeholder=""
                    label="First Name"
                    register={register}
                    type="text"
                    id="name"
                    name="name"
                    errors={errors}
                    required="First Name is required"
                    className="!rounded-md "
                  />
                </div>
                <div className="md:w-1/2 lg:w-1/2">
                  <Input
                    label="Gender"
                    register={register}
                    type="text"
                    id="gender"
                    name="gender"
                    errors={errors}
                    required="Gender is required"
                    placeholder={""}
                    className="!rounded-md "
                  />
                </div>
              </div>
              <div className="gap-[31px] md:flex lg:flex">
                <div className="md:w-1/2 lg:w-1/2">
                  <Input
                    label="Date of Birth *"
                    register={register}
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    errors={errors}
                    required="Date of Birth is required"
                    placeholder={""}
                    className="!rounded-md "
                  />
                </div>
                <div className="md:w-1/2 lg:w-1/2">
                  <Input
                    label="Time Of Birth"
                    name={"timeOfBirth"}
                    register={register}
                    type="time"
                    id="birthTime"
                    errors={errors}
                    required="Birth Time is required"
                    placeholder={""}
                    className="!rounded-md "
                  />
                </div>
              </div>

              <div className="md:w-full lg:w-full">
                <Input
                  label="Birth Location"
                  register={register}
                  type="text"
                  id="birthLocation"
                  name="birthLocation"
                  errors={errors}
                  required="Birth Location is required"
                  placeholder={""}
                  className="!rounded-md "
                />
              </div>
              <div className="md:w-full lg:w-full">
                <Input
                  label="Email"
                  register={register}
                  type="email"
                  id="email"
                  name="email"
                  errors={errors}
                  required="Email is required"
                  placeholder={""}
                  className="!rounded-md "
                />
              </div>
              <div className="mb-[43px] mt-[20px] flex items-center justify-center gap-[21px] text-white lg:mt-[103px]">
                <Button
                  type="submit"
                  btnText="Add To Cart"
                  className="rounded-[10px] bg-[#D9D9D9] md:px-[100px] lg:px-[100px]"
                />
                <Button
                  type="submit"
                  btnText="Buy Now"
                  className="bg-gradient-to-b from-[#fb7038] to-[#FF0600] md:px-[100px] lg:px-[100px]"
                />
              </div>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default KarmarForm;
