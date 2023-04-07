import { Form, Input, Select } from "@/components/forms";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { numberOptions, monthOptions } from "../../../../utils";

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
    localStorage.setItem("kundliData", JSON.stringify(data));
    router.push("/free-kundli/basic-detail");
  };
  return (
    <div className="space-y-4">
      <p className="text-2xl lg:text-[32px]">New Kundli</p>
      <div className="rounded-3xl border-2 border-[#A9A9A9] p-6">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="gap-y-2 lg:grid lg:grid-cols-3 lg:gap-y-3 lg:gap-x-12">
            <div className="col-span-3">
              <Input
                type={"string"}
                name={"name"}
                id="name"
                register={register}
                required={true}
                label="Name*"
                placeholder={"Enter Name"}
                className="!rounded-md"
              />
            </div>
            <div className="col-span-3">
              <Select
                name={"gender"}
                id="gender"
                register={register}
                required={true}
                label="Gender*"
                errors={errors}
                options={[
                  { name: "Male", value: "male" },
                  { name: "Female", value: "female" },
                ]}
              />
            </div>
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
              name={"minute"}
              id="minute"
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
            <div className="col-span-3">
              <Input
                type={"string"}
                name={"birthPlace"}
                id="birthPlace"
                register={register}
                required={true}
                label="Birth Place*"
                placeholder={"Enter your birth place"}
                className="!rounded-md"
              />
            </div>
            <button
              type="submit"
              className="mx-auto mt-3 w-fit rounded-md border-2 border-gray-900 bg-gradient-to-b from-[#D3B160] to-[#FFE9A1] px-12 py-2 text-center font-semibold text-black lg:col-span-3 lg:text-[22px]"
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
