import React from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input, Select, Textarea } from "../forms";

type Props = {};

function OtherDetail({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-6 rounded-lg bg-[#FFF7E5] p-8 py-12 lg:max-w-4xl">
        <div>
          <Input
            type="string"
            id="hours"
            placeholder=" "
            name="hours"
            label="Why do you think we should onboard you?*"
            register={register}
            errors={errors}
          />
        </div>

        <div>
          <Input
            type="string"
            id="hours"
            placeholder=" "
            name="hours"
            label="What is a suitable time for interview?*"
            register={register}
            errors={errors}
          />
        </div>

        <div>
          <Input
            type="string"
            id="hours"
            placeholder=" "
            name="hours"
            label="Which city do you currently live in?*"
            register={register}
            errors={errors}
          />
        </div>
        <div>
          <Select
            errors={errors}
            required={true}
            label=""
            id="language"
            name="Main source of business(other than astrology)?"
            register={register}
            options={[
              { name: "Own Bussiness", value: "Own Bussiness" },
              { name: "Job", value: "Job" },
              { name: "Other", value: "other" },
            ]}
          />
        </div>
        <div>
          <Select
            errors={errors}
            required={true}
            label=""
            id="language"
            name="Select your highest qualification"
            register={register}
            options={[
              { name: "Matric", value: "Matric" },
              { name: "12th", value: "12th" },
              { name: "Greduate", value: "Greduate" },
            ]}
          />
        </div>
        <div>
          <Select
            errors={errors}
            required={true}
            label=""
            id="language"
            name="Degree / Diploma"
            register={register}
            options={[
              { name: "Matric", value: "Matric" },
              { name: "12th", value: "12th" },
              { name: "Greduate", value: "Greduate" },
            ]}
          />
        </div>
        <Input
          type="string"
          id="College"
          placeholder=" "
          name="College"
          label="College/School/University*"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="learn"
          placeholder=" "
          name="learn"
          label="From where did you learn Astrology?*"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="Instagram "
          placeholder=" "
          name="Instagram"
          label="Instagram profile link?"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="Facebook "
          placeholder=" "
          name="Facebook"
          label="Facebook profile link?"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="Youtube "
          placeholder=" "
          name="Youtube"
          label="Youtube profile link?"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="Linkdin "
          placeholder=" "
          name="Linkdin"
          label="Linkdin profile link?"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="Website "
          placeholder=" "
          name="Website"
          label="Website profile link?"
          register={register}
          errors={errors}
        />
        <div className="">
          <p className="">Did anybody refer you to AstroSevaTalk?</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Checkbox
                type="radio"
                id="where"
                name="where"
                register={register}
                errors={errors}
              />
              <span>Yes</span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                type="radio"
                id="where"
                name="where"
                register={register}
                errors={errors}
              />
              <span>No</span>
            </div>
          </div>
        </div>

        <Input
          type="string"
          id="Earning "
          placeholder=" "
          name="Earning"
          label="Minimum Earning Expectation from AstroSevaTalk"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="Max-Earning "
          placeholder=" "
          name="Max-Earning"
          label="Maximum Earning Expectation from AstroSevaTalk"
          register={register}
          errors={errors}
        />

        <div className="col-span-2">
          <Textarea
            type="string"
            id="Long"
            placeholder=" "
            name="Long"
            label="Long Bio"
            register={register}
            errors={errors}
          />
        </div>

        <div className="col-span-2 flex justify-center space-x-20">
          <button
            type="submit"
            className="mt-3 rounded-xl border-2 border-gray-900 bg-gray-300 px-12 py-2 text-center font-semibold text-black lg:col-span-2 lg:px-[80px]"
          >
            Back
          </button>
          <button
            type="submit"
            className="mt-3 rounded-xl border-2 border-gray-900 bg-gradient-to-b from-[#D3B160] to-[#FFE9A1] px-12 py-2 text-center font-semibold text-black lg:col-span-2 lg:px-[80px]"
          >
            Next
          </button>
        </div>
      </div>
    </Form>
  );
}

export default OtherDetail;
