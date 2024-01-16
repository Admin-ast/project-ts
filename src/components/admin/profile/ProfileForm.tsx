import React from "react";
import Section from "../../Section";
import { Form, Input } from "../../forms";
import { useForm } from "react-hook-form";

type Props = {};

const ProfileForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: unknown) => console.log(data);
  return (
    <div className="">
      <Section>
        <div className="py-[30px]">
          <div className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <p className="text-[24px] font-bold">Basic Details:</p>
                <div className=" mt-[30px] gap-[31px]  md:flex lg:flex">
                  <div className="md:w-1/4 lg:w-1/4">
                    <Input
                      type={"string"}
                      name="realName"
                      id="realName"
                      register={register}
                      required={true}
                      label="Real Name"
                      placeholder=""
                      className="!rounded-md "
                    />
                  </div>
                  <div className="md:w-1/4 lg:w-1/4">
                    <Input
                      type={"string"}
                      name={"dName"}
                      id="dName"
                      register={register}
                      required={true}
                      label="Display Name"
                      placeholder={""}
                      className="!rounded-md"
                    />
                  </div>
                  <div className="md:w-1/4 lg:w-1/4">
                    <Input
                      type={"string"}
                      name={"dob"}
                      id="dob"
                      register={register}
                      required={true}
                      label="Date of birth"
                      placeholder={""}
                      className="!rounded-md"
                    />
                  </div>
                  <div className="md:w-1/4 lg:w-1/4">
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
                <div className="gap-[31px] md:flex lg:flex">
                  <div className="md:w-1/4 lg:w-1/4">
                    <Input
                      type={"string"}
                      name={"birthlocation"}
                      id="location"
                      register={register}
                      required={true}
                      label="Place Of Birth"
                      placeholder={""}
                      className="!rounded-md"
                    />
                  </div>
                  <div className="md:w-1/4 lg:w-1/4">
                    <Input
                      type={"string"}
                      name={"faith"}
                      id="faith"
                      register={register}
                      required={true}
                      label="Faith"
                      placeholder={""}
                      className="!rounded-md "
                    />
                  </div>

                  <div className="md:w-1/4 lg:w-1/4">
                    <Input
                      type={"string"}
                      name={"caddress"}
                      id="caddress"
                      register={register}
                      required={true}
                      label="Current Address"
                      placeholder={""}
                      className="!rounded-md "
                    />
                  </div>
                  <div className="md:w-1/4 lg:w-1/4">
                    <Input
                      type={"string"}
                      name={"city"}
                      id="city"
                      register={register}
                      required={true}
                      label="City"
                      placeholder={""}
                      className="!rounded-md "
                    />
                  </div>
                </div>

                <div className="md:w-1/4 lg:w-1/4">
                  <Input
                    type={"number"}
                    name={"pin"}
                    id="email"
                    register={register}
                    required={true}
                    label="Pin-Code"
                    placeholder={""}
                    className="!rounded-md "
                  />
                </div>
              </div>
              <div className="">
                <p className="text-[24px] font-bold">Educational Details:</p>
                <div className=" mt-[30px] gap-[31px]  md:flex lg:flex">
                  <div className="md:w-1/3 lg:w-1/3">
                    <Input
                      type={"string"}
                      name="hqual"
                      id="hqual"
                      register={register}
                      required={true}
                      label="Highest Qualification"
                      placeholder="Post Graduate"
                      className="!rounded-md "
                    />
                  </div>
                  <div className="md:w-1/3 lg:w-1/3">
                    <Input
                      type={"string"}
                      name={"degree"}
                      id="degree"
                      register={register}
                      required={true}
                      label="Degree/Diploma"
                      placeholder={"Degree/Diploma"}
                      className="!rounded-md"
                    />
                  </div>
                  <div className="md:w-1/3 lg:w-1/3">
                    <Input
                      type={"string"}
                      name={"college"}
                      id="college"
                      register={register}
                      required={true}
                      label="College/School/University"
                      placeholder={"College/School/University"}
                      className="!rounded-md"
                    />
                  </div>
                </div>
                <div className="whitespace-nowrap md:w-1/3 lg:w-1/3">
                  <Input
                    type={"time"}
                    name={"learn"}
                    id="learn"
                    register={register}
                    required={true}
                    label="From where did you learn Astrology?"
                    placeholder={""}
                    className="!rounded-md "
                  />
                </div>
              </div>
              <div className="">
                <p className="text-[24px] font-bold">Social Media:</p>
                <div className=" mt-[30px] gap-[31px]  md:flex lg:flex">
                  <div className="md:w-1/3 lg:w-1/3">
                    <Input
                      type={"string"}
                      name="hqual"
                      id="hqual"
                      register={register}
                      required={true}
                      label="Highest Qualification"
                      placeholder="Post Graduate"
                      className="!rounded-md "
                    />
                  </div>
                  <div className="md:w-1/3 lg:w-1/3">
                    <Input
                      type={"string"}
                      name={"degree"}
                      id="degree"
                      register={register}
                      required={true}
                      label="Degree/Diploma"
                      placeholder={"Degree/Diploma"}
                      className="!rounded-md"
                    />
                  </div>
                  <div className="md:w-1/3 lg:w-1/3">
                    <Input
                      type={"string"}
                      name={"college"}
                      id="college"
                      register={register}
                      required={true}
                      label="College/School/University"
                      placeholder={"College/School/University"}
                      className="!rounded-md"
                    />
                  </div>
                </div>

                <div className=" md:w-1/4 lg:w-1/4">
                  <Input
                    type={"time"}
                    name={"learn"}
                    id="learn"
                    register={register}
                    required={true}
                    label="From where did you learn Astrology?"
                    placeholder={""}
                    className="!rounded-md "
                  />
                </div>

                <div className="mt-[30px] flex items-center justify-center">
                  <button className="w-1/4 rounded-[10px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] py-2 text-white md:w-1/5 lg:w-1/6">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProfileForm;
