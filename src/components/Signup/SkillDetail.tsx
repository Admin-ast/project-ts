import { postFetcher } from "@/service";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";
import { Button, Checkbox, Form, Input, Select } from "../forms";

type Props = {
  setActiveId: (id: number) => void;
  mobileNumber: any;
  setCandidateDetails: any;
  candidateDetails: any;
};

function SkillDetail({
  setActiveId,
  mobileNumber,
  setCandidateDetails,
  candidateDetails,
}: Props) {
  const [primarySkills, setPrimarySkills] = useState<any>([]);
  const [allSkills, setAllSkills] = useState<any>([]);
  const [languages, setLanguages] = useState<any>([]);
  const [error, setError] = useState<any>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: candidateDetails?.skillDetails ?? {} });

  useEffect(() => {
    const allDetails = candidateDetails?.skillDetails;
    if (allDetails) {
      setPrimarySkills(allDetails?.primarySkills ?? []);
      setAllSkills(allDetails?.allSkills ?? []);
      setLanguages(allDetails?.languages ?? []);
    }
  }, [candidateDetails]);
  const onSubmit = async (data: any) => {
    const body = JSON.stringify({
      mobileNumber,
      skillDetails: {
        ...data,
        languages,
        allSkills,
        primarySkills,
      },
    });
    const result = await postFetcher("/astrologer/register", body);
    console.log("result", result);
    if (result.msg === "added successfully") {
      setCandidateDetails(result?.candidate);
      setActiveId(3);
    } else {
      setError("Something went wrong! Please try after sometime");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-4 rounded-lg bg-[#FFF7E5] p-4 py-12 lg:max-w-4xl lg:p-16">
        <div className="col-span-2 mx-auto flex flex-col items-center justify-center pb-10">
          <div className="mt-1 flex items-center">
            <span className="inline-block h-20 w-20 overflow-hidden rounded-full  bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          </div>
          <label className="mt-3 block text-center text-sm font-medium text-gray-700">
            <p>
              {" "}
              Profile pic*{" "}
              <span className="text-gray-500">(jpg, png, jpeg only)</span>
            </p>
            <p className="text-xs">(Please upload image below 5mb)</p>
          </label>
        </div>
        <Select
          errors={errors}
          required={true}
          label="Gender*"
          id="gender"
          name="gender"
          register={register}
          options={[
            { name: "Male", value: "male" },
            { name: "Female", value: "female" },
            { name: "Other", value: "other" },
          ]}
        />
        <Input
          type="date"
          id="dob"
          placeholder=" "
          name="dob"
          label="Date of birth*"
          register={register}
        />
        <div className="space-y-2">
          <label htmlFor="primarySkills" className="text-base">
            Primary skills*
          </label>
          <MultiSelect
            options={[
              { label: "Vedic", value: "Vedic" },
              { label: "Nadi", value: "Nadi" },
              { label: "Vastu", value: "Vastu" },
              { label: "KP", value: "KP" },
            ]}
            value={primarySkills}
            onChange={setPrimarySkills}
            labelledBy="Primary skills*"
            className=""
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="primarySkills" className="text-base">
            All skills*
          </label>
          <MultiSelect
            options={[
              { label: "Palm Reading", value: "Palm Reading" },
              { label: "Nadi", value: "Nadi" },
              { label: "Vastu", value: "Vastu" },
              { label: "KP", value: "KP" },
            ]}
            value={allSkills}
            onChange={setAllSkills}
            labelledBy="All skills*"
            className=""
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="primarySkills" className="text-base">
            Language*
          </label>
          <MultiSelect
            options={[
              { label: "Hindi", value: "Hindi" },
              { label: "English", value: "English" },
              { label: "Bengali", value: "Bengali" },
            ]}
            value={languages}
            onChange={setLanguages}
            labelledBy="Languages"
            className=""
          />
        </div>
        <Input
          type="string"
          id="experience"
          placeholder=" "
          name="experience"
          label="Experience in years*"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="hours"
          placeholder=" "
          name="hours"
          label="Hours you can contribute daily?*"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="where"
          placeholder=" "
          name="where"
          label="Where did you hear about Astrotalk?"
          register={register}
          errors={errors}
        />
        <div className="col-span-2 flex flex-col gap-3">
          <p className="">Are you working on any other online platform?</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Checkbox
                type="radio"
                id="where"
                name="where"
                register={register}
                errors={errors}
              />
              <p>Yes</p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                type="radio"
                id="where"
                name="where"
                register={register}
                errors={errors}
              />
              <p>No</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 mx-auto">
          <button
            type="submit"
            className="mx-auto mt-3 rounded-xl border-2 border-gray-900 bg-gradient-to-b from-[#D3B160] to-[#FFE9A1] px-12 py-2 text-center font-semibold text-black lg:col-span-2 lg:px-[116px] lg:text-[22px]"
          >
            Next
          </button>
        </div>
      </div>
    </Form>
  );
}

export default SkillDetail;
