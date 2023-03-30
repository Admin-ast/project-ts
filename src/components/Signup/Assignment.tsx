import React from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input, Select, Textarea } from "../forms";

type Props = {
  setActiveId: (arg: Number) => void;
  mobileNumber: string | Number;
  setCandidateDetails: any;
  candidateDetails: any;
};

function Assignment({
  setActiveId,
  mobileNumber,
  setCandidateDetails,
  candidateDetails,
}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-4 rounded-lg bg-[#FFF7E5] p-12 lg:max-w-4xl">
        <Select
          errors={errors}
          required={true}
          label="Number of foriegn countries you have travelled to?"
          id="working"
          name="Are you currently working a full time job?"
          register={register}
          options={[
            { name: "NO", value: "No" },
            { name: "Yes", value: "Yes" },
          ]}
        />
        <Select
          errors={errors}
          required={true}
          label="Are you currently working a full time job?"
          id="working"
          name="Are you currently working a full time job?"
          register={register}
          options={[
            { name: "NO", value: "No" },
            { name: "Yes", value: "Yes" },
          ]}
        />
        <div className="col-span-2">
          <Textarea
            type="string"
            id="perfect"
            placeholder=" "
            name="perfect"
            label="What are some good qualities of a perfect Astrologer?*"
            register={register}
            errors={errors}
          />
        </div>
        <div className="col-span-2">
          <Textarea
            type="string"
            id="challange"
            placeholder=" "
            name="challange"
            label="What was the biggest challange you faced and how did you overcome?*"
            register={register}
            errors={errors}
          />
        </div>
        <div className="col-span-2">
          <Textarea
            type="string"
            id="asking"
            placeholder=" "
            name="asking"
            label="A customer is asking you a question*"
            register={register}
            errors={errors}
          />
        </div>
        <div className="col-span-2 mx-auto">
          <button
            type="submit"
            className="mx-auto mt-3 rounded-xl border-2 border-gray-900 bg-gradient-to-b from-[#D3B160] to-[#FFE9A1] px-12 py-2 text-center font-semibold text-black lg:col-span-2 lg:px-[116px] lg:text-[22px]"
          >
            Submit
          </button>
        </div>
      </div>
    </Form>
  );
}

export default Assignment;
