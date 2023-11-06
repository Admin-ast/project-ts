import Section from "@/components/Section";
import { Button, Form, Input, Select } from "@/components/forms";
import React from "react";
import { useForm } from "react-hook-form";
import { BiDownArrow } from "react-icons/bi";

const PlanForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <div className="mt-[70px] rounded-[20px] border-[1.5px] border-gray-600">
      <Section>
        <div className="">
          <p className="mt-[50px] text-center text-[32px] font-bold text-white">
            Choose Your Plan
          </p>

          <div className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="  ">
                <div className=" ">
                  <Select
                    label="Billing Period"
                    name="bperiod "
                    id="bperiod"
                    register={register}
                    required={true}
                    options={[
                      { label: "Option 1", value: "option1" },
                      { label: "Option 2", value: "option2" },
                      // Add your options here
                    ]}
                    errors={errors}
                  />
                </div>

                <div className="mt-[20px] grid-cols-2  gap-[40px] sm:flex md:grid lg:grid">
                  <div className="  ">
                    <label
                      htmlFor=""
                      className="font-[Georgia] text-white sm:text-base md:text-2xl lg:text-[22px] "
                    >
                      First Name
                    </label>
                    <Input
                      className=" h-[50px] bg-[#333233] text-[16px] font-bold text-white "
                      type="string"
                      id="fname"
                      placeholder=""
                      name="fName"
                      label=""
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor=""
                      className="font-[Georgia] text-white sm:text-base md:text-2xl lg:text-[22px]"
                    >
                      Last Name
                    </label>
                    <Input
                      className=" h-[50px] bg-[#333233] text-[16px] font-bold text-white"
                      type="string"
                      id="lname"
                      placeholder=""
                      name="lName"
                      label=""
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="">
                    <Select
                      label="Gender"
                      name="dev"
                      id="gender"
                      register={register}
                      required={true}
                      options={[
                        { label: "Male", value: "Male" },
                        { label: "Female", value: "Female" },
                        // Add your options here
                      ]}
                      errors={errors}
                    />
                  </div>
                  <div className=" ">
                    <Select
                      label="Birth Location"
                      name="bLocation"
                      id="blocation"
                      register={register}
                      required={true}
                      options={[
                        { label: "Option 1", value: "option1" },
                        { label: "Option 2", value: "option2" },
                        // Add your options here
                      ]}
                      errors={errors}
                    />
                  </div>
                  <div className="lg">
                    <label
                      htmlFor=""
                      className="font-[Georgia] text-white sm:text-base md:text-2xl lg:text-[22px]"
                    >
                      Date Of Birth{" "}
                    </label>
                    <Input
                      className=" h-[50px] bg-[#333233] text-[16px] font-bold text-white"
                      type="string"
                      id="dob"
                      placeholder=""
                      name="dob"
                      label=""
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="lg">
                    <label
                      htmlFor=""
                      className="font-[Georgia] text-white sm:text-base md:text-2xl lg:text-[22px]"
                    >
                      Time Of Birth
                    </label>
                    <Input
                      className=" h-[50px] bg-[#333233] text-[16px] font-bold text-white"
                      type="string"
                      id="tob"
                      placeholder=""
                      name="tob"
                      label=""
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
                <div className="mt-[40px]">
                  <label
                    htmlFor=""
                    className="font-[Georgia] text-white sm:text-base md:text-2xl lg:text-[22px]"
                  >
                    Enter Your Email Address
                  </label>
                  <Input
                    className="h-[50px] bg-[#333233] text-[16px] font-bold text-white "
                    type="string"
                    id="email"
                    placeholder=""
                    name="email"
                    label=""
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className=" mt-[100px] mb-[30px] flex h-[51px] items-center justify-center rounded-[10px]  bg-white font-[Georgia] font-bold leading-[25px]  ">
                  <Button className="text-xl   " btnText="Buy Now" />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PlanForm;
