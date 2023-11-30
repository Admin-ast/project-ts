import Section from "@/components/Section";
import { Form, Input } from "@/components/forms";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const LoveForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: unknown) => console.log(data);
  return (
    <div className="mt-[30px] ">
      <Section>
        <div className="">
          <div className="grid  justify-center  gap-[36px]  rounded-t-[20px]  border-[2px]  border-[#A9A9A9] md:flex lg:flex ">
            <div className="p-5 lg:w-1/2">
              <p className="text-center font-[Georgia] text-[22px] font-bold">
                Enter Your Information
              </p>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className=" mt-[30px] gap-[31px]  md:flex lg:flex">
                  <div className="md:w-1/2 lg:w-1/2">
                    <Input
                      type={"string"}
                      name={"name"}
                      id="name"
                      register={register}
                      required={true}
                      label="First Name"
                      placeholder={""}
                      className="!rounded-md "
                    />
                  </div>
                  <div className="md:w-1/2 lg:w-1/2">
                    <Input
                      type={"string"}
                      name={"gender"}
                      id="gender"
                      register={register}
                      required={true}
                      label="Gender"
                      placeholder={""}
                      className="!rounded-md"
                    />
                  </div>
                </div>
                <div className="gap-[31px] md:flex lg:flex">
                  <div className="md:w-1/2 lg:w-1/2">
                    <Input
                      type={"date"}
                      name={"dateofbirth"}
                      id="dobirth"
                      register={register}
                      required={true}
                      label="Date Of Birth*"
                      placeholder={""}
                      className="!rounded-md "
                    />
                  </div>
                  <div className="md:w-1/2 lg:w-1/2">
                    <Input
                      type={"time"}
                      name={"timeofbirth"}
                      id="tobirth"
                      register={register}
                      required={true}
                      label="Time Of Birth*"
                      placeholder={""}
                      className="!rounded-md "
                    />
                  </div>
                </div>

                <div className="">
                  <Input
                    type={"string"}
                    name={"birthlocation"}
                    id="location"
                    register={register}
                    required={true}
                    label="Birth Location"
                    placeholder={""}
                    className="!rounded-md"
                  />
                </div>
                <div className="">
                  <Input
                    type={"email"}
                    name={"email"}
                    id="email"
                    register={register}
                    required={true}
                    label="Email"
                    placeholder={""}
                    className="!rounded-md "
                  />
                </div>
              </Form>
            </div>
            <div className="border-[1px]  border-[#A9A9A9] "></div>
            <div className=" p-5 lg:w-1/2">
              <p className="text-center font-[Georgia] text-[22px] font-bold">
                Enter Your {`Partner's`} Information
              </p>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-[35px] gap-[31px]  md:flex lg:flex ">
                  <div className="md:w-1/2 lg:w-1/2">
                    <Input
                      type={"string"}
                      name={"name"}
                      id="name"
                      register={register}
                      required={true}
                      label="First Name"
                      placeholder={""}
                      className="!rounded-md "
                    />
                  </div>
                  <div className="md:w-1/2 lg:w-1/2">
                    <Input
                      type={"string"}
                      name={"gender"}
                      id="gender"
                      register={register}
                      required={true}
                      label="Gender"
                      placeholder={""}
                      className="!rounded-md "
                    />
                  </div>
                </div>
                <div className="gap-[31px] md:flex lg:flex">
                  <div className="md:w-1/2 lg:w-1/2">
                    <Input
                      type={"date"}
                      name={"dateofbirth"}
                      id="dobirth"
                      register={register}
                      required={true}
                      label="Date Of Birth*"
                      placeholder={""}
                      className="!rounded-md "
                    />
                  </div>
                  <div className="md:w-1/2 lg:w-1/2">
                    <Input
                      type={"time"}
                      name={"timeofbirth"}
                      id="tobirth"
                      register={register}
                      required={true}
                      label="Time Of Birth*"
                      placeholder={""}
                      className="!rounded-md "
                    />
                  </div>
                </div>

                <div className="">
                  <Input
                    type={"string"}
                    name={"birthlocation"}
                    id="location"
                    register={register}
                    required={true}
                    label="Birth Location"
                    placeholder={""}
                    className="!rounded-md"
                  />
                </div>
                <div className="">
                  <Input
                    type={"email"}
                    name={"email"}
                    id="email"
                    register={register}
                    required={true}
                    label="Email"
                    placeholder={""}
                    className="!rounded-md"
                  />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LoveForm;
