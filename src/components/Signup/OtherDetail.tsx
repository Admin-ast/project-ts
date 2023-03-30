import { postFetcher } from "@/service";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Checkbox, Form, Input, Select, Textarea } from "../forms";

type Props = {
  setActiveId: (arg: Number) => void;
  mobileNumber: string | number;
  setCandidateDetails: any;
  candidateDetails: any;
};

function OtherDetail({
  setActiveId,
  mobileNumber,
  setCandidateDetails,
  candidateDetails,
}: Props) {
  const [error, setError] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: candidateDetails?.otherDetails ?? {} });

  const onSubmit = async (data: any) => {
    const body = JSON.stringify({ mobileNumber, otherDetails: { ...data } });
    const result = await postFetcher("/astrologer/register", body);
    console.log("result", result);
    if (result.msg === "added successfully") {
      setCandidateDetails(result?.candidate);
      setActiveId(4);
    } else {
      setError("Something went wrong! Please try after sometime");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-6 rounded-lg bg-[#FFF7E5] p-8 py-12 lg:max-w-4xl">
        <Input
          type="string"
          id="whyToOnboard"
          placeholder=" "
          name="whyToOnboard"
          label="Why do you think we should onboard you?*"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="timeForInterview"
          placeholder=" "
          name="timeForInterview"
          label="What is a suitable time for interview?*"
          register={register}
          errors={errors}
        />

        <Input
          type="string"
          id="hours"
          placeholder=" "
          name="hours"
          label="Which city do you currently live in?*"
          register={register}
          errors={errors}
        />

        <Select
          errors={errors}
          required={true}
          label="Main source of business(other than astrology)?"
          id="mainSource"
          name="mainSource"
          register={register}
          options={[
            { name: "Own Bussiness", value: "Own Bussiness" },
            { name: "Job", value: "Job" },
            { name: "Other", value: "other" },
          ]}
        />

        <Select
          errors={errors}
          required={true}
          label="Select your highest qualification"
          id="qualification"
          name="qualification"
          register={register}
          options={[
            { name: "Metric", value: "Metric" },
            { name: "12th", value: "12th" },
            { name: "Graduate", value: "Graduate" },
          ]}
        />
        <Select
          errors={errors}
          required={true}
          label="Degree / Diploma"
          id="degree"
          name="degree"
          register={register}
          options={[
            { name: "Matric", value: "Matric" },
            { name: "12th", value: "12th" },
            { name: "Greduate", value: "Greduate" },
          ]}
        />
        <Input
          type="string"
          id="college"
          placeholder=" "
          name="college"
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
          id="instagram "
          placeholder=" "
          name="instagram"
          label="Instagram profile link?"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="facebook "
          placeholder=" "
          name="facebook"
          label="Facebook profile link?"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="youtube "
          placeholder=" "
          name="youtube"
          label="Youtube profile link?"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="linkedin "
          placeholder=" "
          name="linkedin"
          label="Linkedin profile link?"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="website "
          placeholder=" "
          name="website"
          label="Website profile link?"
          register={register}
          errors={errors}
        />
        <div className="space-y-2">
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
          id="earning "
          placeholder=" "
          name="earning"
          label="Minimum Earning Expectation from AstroSevaTalk"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="maxEarning "
          placeholder=" "
          name="maxEarning"
          label="Maximum Earning Expectation from AstroSevaTalk"
          register={register}
          errors={errors}
        />

        <div className="col-span-2">
          <Textarea
            type="string"
            id="bio"
            placeholder=" "
            name="bio"
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
