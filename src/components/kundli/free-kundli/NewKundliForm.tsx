import { Form, Input } from "@/components/forms";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

function NewKundliForm({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("data is", data);
  };
  return (
    <div className="space-y-4">
      <p className="text-2xl lg:text-[32px]">New Kundli</p>
      <div className="rounded-3xl border-2 border-[#A9A9A9] p-6 lg:h-[464px]">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid-col-1 grid gap-y-2 lg:grid-cols-2 lg:gap-y-3 lg:gap-x-12">
            <Input
              type={"string"}
              name={"firstName"}
              id="firstName"
              register={register}
              required={true}
              label="First Name"
              placeholder={""}
              className="!rounded-xl"
            />
            <Input
              type={"string"}
              name={"lastName"}
              id="lastName"
              register={register}
              required={true}
              label="Last Name"
              placeholder={""}
              className="!rounded-xl"
            />
            <Input
              type={"string"}
              name={"gender"}
              id="gender"
              register={register}
              required={true}
              label="Gender"
              placeholder={""}
              className="!rounded-xl"
            />
            <Input
              type={"string"}
              name={"occupation"}
              id="occupation"
              register={register}
              required={true}
              label="occupation"
              placeholder={""}
              className="!rounded-xl"
            />
            <Input
              type={"date"}
              name={"dob"}
              id="dob"
              register={register}
              required={true}
              label="Date Of Birth"
              placeholder={""}
              className="!rounded-xl"
            />
            <Input
              type={"Time"}
              name={"tob"}
              id="tob"
              register={register}
              required={true}
              label="Time Of Birth"
              placeholder={""}
              className="!rounded-xl"
            />
            <Input
              type={"string"}
              name={"birthPlace"}
              id="birthPlace"
              register={register}
              required={true}
              label="Birth Place"
              placeholder={""}
              className="!rounded-xl"
            />
            <Input
              type={"string"}
              name={"maritalStatus"}
              id="maritalStatus"
              register={register}
              required={true}
              label="Marital Status"
              placeholder={""}
              className="!rounded-xl"
            />
            <button
              type="submit"
              className="mx-auto mt-3 w-fit rounded-xl border-2 border-gray-900 bg-gradient-to-b from-[#D3B160] to-[#FFE9A1] px-12 py-2 text-center font-semibold text-black lg:col-span-2 lg:text-[22px]"
            >
              Generate the Kundli
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default NewKundliForm;
