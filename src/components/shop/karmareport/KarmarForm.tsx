import Section from "@/components/Section";
import { Button, Form, Input } from "@/components/forms";
import React from "react";
import { useForm } from "react-hook-form";
type Props = {};

const KarmarForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  return (
    <div className="mt-[35px]">
      <Section>
        <div className="flex items-center justify-center rounded-[20px] border-[2px] border-[#A9A9A9]">
          <div className="p-5 ">
            <p className="text-center font-[Georgia] text-[22px] font-bold">
              Enter Your Information
            </p>
            <Form onSubmit={handleSubmit}>
              <div className=" mt-[35px] gap-[31px]  md:flex lg:flex">
                <div className="">
                  <Input
                    type={"string"}
                    name={"name"}
                    id="name"
                    register={register}
                    required={true}
                    label="First Name"
                    placeholder={""}
                    className="!rounded-md md:w-[247px] lg:w-[458px]"
                  />
                </div>
                <div className="">
                  <Input
                    type={"string"}
                    name={"gender"}
                    id="name"
                    register={register}
                    required={true}
                    label="Gender"
                    placeholder={""}
                    className="!rounded-md md:w-[247px] lg:w-[458px]"
                  />
                </div>
              </div>
              <div className="gap-[31px] md:flex lg:flex">
                <div className="">
                  <Input
                    type={"string"}
                    name={"name"}
                    id="name"
                    register={register}
                    required={true}
                    label="Date Of Birth*"
                    placeholder={""}
                    className="!rounded-md md:w-[247px] lg:w-[458px]"
                  />
                </div>
                <div className="">
                  <Input
                    type={"string"}
                    name={"gender"}
                    id="name"
                    register={register}
                    required={true}
                    label="Time Of Birth*"
                    placeholder={""}
                    className="!rounded-md md:w-[247px] lg:w-[458px]"
                  />
                </div>
              </div>

              <div className="">
                <Input
                  type={"string"}
                  name={"gender"}
                  id="name"
                  register={register}
                  required={true}
                  label="Birth Location"
                  placeholder={""}
                  className="!rounded-md lg:w-[950px]"
                />
              </div>
              <div className="">
                <Input
                  type={"string"}
                  name={"gender"}
                  id="name"
                  register={register}
                  required={true}
                  label="Email"
                  placeholder={""}
                  className="!rounded-md lg:w-[950px]"
                />
              </div>
              <div className="mb-[43px] mt-[20px] flex items-center justify-center gap-[21px] lg:mt-[103px]">
                <Button
                  btnText="Add To Cart"
                  className="rounded-[10px] bg-[#D9D9D9] md:px-[100px] lg:px-[100px]"
                />
                <Button
                  btnText="Buy Now"
                  className="bg-[#D3B160] md:px-[100px] lg:px-[100px]"
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
