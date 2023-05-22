import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { numberOptions, monthOptions } from "../../../../utils";
import { Form, Input, Select } from "@/components/forms";

type Props = {};

function NewKundliForm({}: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("data is", data);
    // router.push("kundli-matching/match-making-details");
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:h-[550px] lg:justify-between">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-2xl lg:text-[32px]">{`Partner's Detail`}</p>
            <div className="rounded-3xl border-2 border-[#A9A9A9] p-6">
              <div className=" bg mb-2 w-full rounded-xl border p-3 text-center">
                {`Boy's Details`}
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  type={"string"}
                  name={"pFirstName"}
                  id="pFirstName"
                  register={register}
                  required={true}
                  label="Name"
                  placeholder={""}
                  className="rounded"
                />

                <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 lg:grid-cols-3">
                  <Select
                    name={"day"}
                    id="day"
                    register={register}
                    required={true}
                    label="Birth Day*"
                    errors={errors}
                    options={numberOptions(1, 31)}
                  />
                  <Select
                    name={"month"}
                    id="month"
                    register={register}
                    required={true}
                    label="Birth Month*"
                    errors={errors}
                    options={monthOptions()}
                  />
                  <Select
                    name={"year"}
                    id="year"
                    register={register}
                    required={true}
                    label="Birth Year*"
                    errors={errors}
                    options={numberOptions(1928, 2023)}
                  />
                  <Select
                    name={"hour"}
                    id="hour"
                    register={register}
                    required={true}
                    label="Birth Hour*"
                    errors={errors}
                    options={numberOptions(1, 23)}
                  />
                  <Select
                    name={"min"}
                    id="min"
                    register={register}
                    required={true}
                    label="Birth Minute*"
                    errors={errors}
                    options={numberOptions(1, 59)}
                  />
                  <Select
                    name={"second"}
                    id="second"
                    register={register}
                    required={true}
                    label="Birth Second*"
                    errors={errors}
                    options={numberOptions(1, 59)}
                  />
                </div>
                {/* <Input
                  type={"string"}
                  name={"pGender"}
                  id="pGender"
                  register={register}
                  required={true}
                  label="Gender"
                  placeholder={""}
                  className="rounded"
                />
                <Input
                  type={"string"}
                  name={"pOccupation"}
                  id="pOccupation"
                  register={register}
                  required={true}
                  label="occupation"
                  placeholder={""}
                  className="rounded"
                />
                <Input
                  type={"date"}
                  name={"pDob"}
                  id="pDob"
                  register={register}
                  required={true}
                  label="Date Of Birth"
                  placeholder={""}
                  className="rounded"
                />
                <Input
                  type={"Time"}
                  name={"pTob"}
                  id="pTob"
                  register={register}
                  required={true}
                  label="Time Of Birth"
                  placeholder={""}
                  className="rounded"
                /> */}
                <Input
                  type={"string"}
                  name={"pBirthPlace"}
                  id="pBirthPlace"
                  register={register}
                  required={true}
                  label="Birth Place"
                  placeholder={""}
                  className="rounded"
                />
                {/* <Input
                  type={"string"}
                  name={"pMaritalStatus"}
                  id="pMaritalStatus"
                  register={register}
                  required={true}
                  label="Marital Status"
                  placeholder={""}
                  className="rounded"
                /> */}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-2xl lg:text-[32px]">{`Your Detail`}</p>
            <div className="rounded-3xl border-2 border-[#A9A9A9] p-6">
              <div className=" bg mb-2 w-full rounded-xl border p-3 text-center">
                {`Girl's Details`}
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  type={"string"}
                  name={"pFirstName"}
                  id="pFirstName"
                  register={register}
                  required={true}
                  label="Name"
                  placeholder={""}
                  className="rounded"
                />
                <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 lg:grid-cols-3">
                  <Select
                    name={"day"}
                    id="day"
                    register={register}
                    required={true}
                    label="Birth Day*"
                    errors={errors}
                    options={numberOptions(1, 31)}
                  />
                  <Select
                    name={"month"}
                    id="month"
                    register={register}
                    required={true}
                    label="Birth Month*"
                    errors={errors}
                    options={monthOptions()}
                  />
                  <Select
                    name={"year"}
                    id="year"
                    register={register}
                    required={true}
                    label="Birth Year*"
                    errors={errors}
                    options={numberOptions(1928, 2023)}
                  />
                  <Select
                    name={"hour"}
                    id="hour"
                    register={register}
                    required={true}
                    label="Birth Hour*"
                    errors={errors}
                    options={numberOptions(1, 23)}
                  />
                  <Select
                    name={"min"}
                    id="min"
                    register={register}
                    required={true}
                    label="Birth Minute*"
                    errors={errors}
                    options={numberOptions(1, 59)}
                  />
                  <Select
                    name={"second"}
                    id="second"
                    register={register}
                    required={true}
                    label="Birth Second*"
                    errors={errors}
                    options={numberOptions(1, 59)}
                  />
                </div>
                {/* <Input
                  type={"string"}
                  name={"pGender"}
                  id="pGender"
                  register={register}
                  required={true}
                  label="Gender"
                  placeholder={""}
                  className="rounded"
                />
                <Input
                  type={"string"}
                  name={"pOccupation"}
                  id="pOccupation"
                  register={register}
                  required={true}
                  label="occupation"
                  placeholder={""}
                  className="rounded"
                />
                <Input
                  type={"date"}
                  name={"pDob"}
                  id="pDob"
                  register={register}
                  required={true}
                  label="Date Of Birth"
                  placeholder={""}
                  className="rounded"
                />
                <Input
                  type={"Time"}
                  name={"pTob"}
                  id="pTob"
                  register={register}
                  required={true}
                  label="Time Of Birth"
                  placeholder={""}
                  className="rounded"
                /> */}
                <Input
                  type={"string"}
                  name={"pBirthPlace"}
                  id="pBirthPlace"
                  register={register}
                  required={true}
                  label="Birth Place"
                  placeholder={""}
                  className="rounded"
                />
                {/* <Input
                  type={"string"}
                  name={"pMaritalStatus"}
                  id="pMaritalStatus"
                  register={register}
                  required={true}
                  label="Marital Status"
                  placeholder={""}
                  className="rounded"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mx-auto mt-3 w-full rounded-xl border-2 border-gray-900 bg-gradient-to-b from-[#D3B160] to-[#FFE9A1] px-12 py-2 text-center font-semibold text-black lg:col-span-2 lg:text-[22px]"
        >
          Match Kundli
        </button>
      </div>
    </Form>
  );
}

export default NewKundliForm;
