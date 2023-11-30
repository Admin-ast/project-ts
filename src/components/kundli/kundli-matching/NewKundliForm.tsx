import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { numberOptions, monthOptions } from "../../../../utils";
import { Form, Input, Select } from "@/components/forms";
import Combo from "@/components/common/Combo";
import LoveForm from "@/components/shop/lovescore/LoveForm";
import LoveScore from "@/components/shop/lovescore/LoveScore";

type Props = {};

function NewKundliForm({}: Props) {
  const [malePlace, setMalePlace] = useState<any>({});
  const [malePlaceName, setMalePlaceName] = useState<any>("");

  const [femalePlace, setFemalePlace] = useState<any>("");
  const [femalePlaceName, setFemalePlaceName] = useState<any>("");
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("data is", JSON.stringify(data));
    localStorage.setItem("match-making", JSON.stringify(data));
    router.push("kundli-matching/match-making-details");
  };
  useEffect(() => {
    setValue("m_lat", malePlace?.lat);
    setValue("m_lon", malePlace?.lon);
    setValue("m_tzone", malePlace?.tzone);
    setValue("m_place", malePlaceName);
  }, [malePlace.lat]);

  useEffect(() => {
    setValue("f_lat", femalePlace?.lat);
    setValue("f_lon", femalePlace?.lon);
    setValue("f_tzone", femalePlace?.tzone);
    setValue("f_place", femalePlaceName);
  }, [femalePlace.lat]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:h-[550px] lg:justify-between">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-2xl lg:text-[32px]">{`Partner's Detail`}</p>
            {/* <p className="text-2xl lg:text-[32px]">{`Fill Up Partner's Detail`}</p> */}
            <div className="rounded-3xl border-2 border-[#A9A9A9] p-6">
              <div className=" bg mb-2 w-full rounded-xl border p-3 text-center">
                {`Boy's Details`}
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  type={"string"}
                  name={"m_name"}
                  id="m_name"
                  register={register}
                  required={true}
                  label="Name"
                  placeholder={""}
                  className="rounded"
                />

                <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 lg:grid-cols-3">
                  <Select
                    name={"m_day"}
                    id="m_day"
                    register={register}
                    required={true}
                    label="Birth Day*"
                    errors={errors}
                    options={numberOptions(1, 31)}
                  />
                  <Select
                    name={"m_month"}
                    id="m_month"
                    register={register}
                    required={true}
                    label="Birth Month*"
                    errors={errors}
                    options={monthOptions()}
                  />
                  <Select
                    name={"m_year"}
                    id="m_year"
                    register={register}
                    required={true}
                    label="Birth Year*"
                    errors={errors}
                    options={numberOptions(1928, 2023)}
                  />
                  <Select
                    name={"m_hour"}
                    id="m_hour"
                    register={register}
                    required={true}
                    label="Birth Hour*"
                    errors={errors}
                    options={numberOptions(1, 23)}
                  />
                  <Select
                    name={"m_min"}
                    id="m_min"
                    register={register}
                    required={true}
                    label="Birth Minute*"
                    errors={errors}
                    options={numberOptions(1, 59)}
                  />
                  <Select
                    name={"m_second"}
                    id="m_second"
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
                <Combo
                  setValue={setMalePlace}
                  setPlaceName={setMalePlaceName}
                  isMatching={true}
                  placeholder="Enter your birth place"
                  className="w-full rounded-lg border border-gray-500 py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none focus:ring-0"
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
                  name={"f_name"}
                  id="f_name"
                  register={register}
                  required={true}
                  label="Name"
                  placeholder={""}
                  className="rounded"
                />
                <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 lg:grid-cols-3">
                  <Select
                    name={"f_day"}
                    id="f_day"
                    register={register}
                    required={true}
                    label="Birth Day*"
                    errors={errors}
                    options={numberOptions(1, 31)}
                  />
                  <Select
                    name={"f_month"}
                    id="f_month"
                    register={register}
                    required={true}
                    label="Birth Month*"
                    errors={errors}
                    options={monthOptions()}
                  />
                  <Select
                    name={"f_year"}
                    id="f_year"
                    register={register}
                    required={true}
                    label="Birth Year*"
                    errors={errors}
                    options={numberOptions(1928, 2023)}
                  />
                  <Select
                    name={"f_hour"}
                    id="f_hour"
                    register={register}
                    required={true}
                    label="Birth Hour*"
                    errors={errors}
                    options={numberOptions(1, 23)}
                  />
                  <Select
                    name={"f_min"}
                    id="f_min"
                    register={register}
                    required={true}
                    label="Birth Minute*"
                    errors={errors}
                    options={numberOptions(1, 59)}
                  />
                  <Select
                    name={"f_second"}
                    id="f_second"
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
                <Combo
                  setValue={setFemalePlace}
                  setPlaceName={setFemalePlaceName}
                  isMatching={true}
                  placeholder="Enter your birth place"
                  className="w-full rounded-lg border border-gray-500 py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none focus:ring-0"
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
          className="mx-auto mt-3 w-full rounded-xl  bg-gradient-to-b from-[#ff6c40] to-[#ff0600] px-12 py-2 text-center font-semibold text-white lg:col-span-2 lg:text-[22px]"
        >
          Match Kundli
        </button>
      </div>
    </Form>
  );
}

export default NewKundliForm;
