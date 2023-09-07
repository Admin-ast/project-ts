import Section from "@/components/Section";
import { Button, Form, Input } from "@/components/forms";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CountryCodes from "./CountryCodes";
const AddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="mt-[35px] bg-white">
      <Section>
        <div className="flex items-center justify-center  rounded-[20px] border-[2px] border-[#A9A9A9]">
          <div className="p-5 ">
            <p className="text-center font-[Georgia] text-[22px] font-bold">
              Add New Address
            </p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className=" mt-[35px] gap-[30px]   md:flex lg:flex">
                <div className="">
                  <Input
                    placeholder="Enter name"
                    label="Name"
                    register={register}
                    type="text"
                    id="name"
                    name="name"
                    errors={errors}
                    required="Name is required"
                    className="md:[180px] !rounded-md lg:w-[280px]"
                  />
                </div>
                <div className="flex gap-5 md:gap-1">
                  <CountryCodes />
                  <Input
                    label="Mobile Number:"
                    register={register}
                    type="number"
                    id="mobNumber"
                    name="mobNumber"
                    errors={errors}
                    required="Mobile Number is required"
                    placeholder={"Enter mobile no."}
                    className="md:[180px] !rounded-md lg:w-[280px]"
                  />
                </div>
                <div className="flex gap-5 md:gap-1">
                  <CountryCodes />
                  <Input
                    label="Alternative Number: "
                    register={register}
                    type="number"
                    id="altNumber"
                    name="altNumber"
                    errors={errors}
                    required=""
                    placeholder={"Enter alternative mobile no."}
                    className="md:[180px] !rounded-md lg:w-[280px]"
                  />
                </div>
              </div>
              <div className="gap-[31px] md:flex lg:flex">
                <div className="">
                  <Input
                    label="Email ID:"
                    register={register}
                    type="email"
                    id="email"
                    name="email"
                    errors={errors}
                    required="Email id is required"
                    placeholder={"Enter email id"}
                    className="md:[180px] !rounded-md lg:w-[280px]"
                  />
                </div>
                <div className="">
                  <Input
                    label="Flat No:"
                    name={"flat"}
                    register={register}
                    type="text"
                    id="flat"
                    errors={errors}
                    required="Flat No. is required"
                    placeholder={"Flat No/Building No / House No"}
                    className="md:[180px] !rounded-md lg:w-[280px]"
                  />
                </div>
                <div className="">
                  <Input
                    label="Locality:"
                    name={"locality"}
                    register={register}
                    type="text"
                    id="locality"
                    errors={errors}
                    required="Locality is required"
                    placeholder={"Locality"}
                    className="md:[180px] !rounded-md lg:w-[280px]"
                  />
                </div>
              </div>

              <div className="gap-[31px] md:flex lg:flex">
                <div className="">
                  <Input
                    label="City:"
                    register={register}
                    type="text"
                    id="city"
                    name="city"
                    errors={errors}
                    required="City is required"
                    placeholder={"City"}
                    className="md:[180px] !rounded-md lg:w-[280px]"
                  />
                </div>
                <div className="">
                  <Input
                    label="State/Province:"
                    name={"state"}
                    register={register}
                    type="text"
                    id="state"
                    errors={errors}
                    required="State is required"
                    placeholder={"State"}
                    className="md:[180px] !rounded-md lg:w-[280px]"
                  />
                </div>
                <div className="">
                  <Input
                    label="Country:"
                    name={"country"}
                    register={register}
                    type="text"
                    id="country"
                    errors={errors}
                    required="Country is required"
                    placeholder={"Country"}
                    className="md:[180px] !rounded-md lg:w-[280px]"
                  />
                </div>
              </div>

              <div className="gap-[31px] md:flex lg:flex">
                <div className="">
                  <Input
                    label="PinCode:"
                    register={register}
                    type="number"
                    id="pin"
                    name="pin"
                    errors={errors}
                    required="PinCode is required"
                    placeholder={"Postal Code/Pincode"}
                    className="md:[180px] !rounded-md lg:w-[280px]"
                  />
                </div>
                <div className="">
                  <Input
                    label="Landmark:"
                    name={"landmark"}
                    register={register}
                    type="text"
                    id="landmark"
                    errors={errors}
                    placeholder={"Landmark (Optional)"}
                    className="md:[180px] !rounded-md lg:w-[280px]"
                  />
                </div>
              </div>
              <div className="mb-[43px] mt-[20px] flex items-center justify-center gap-[21px] lg:mt-[103px]">
                <Button
                  type="submit"
                  btnText="Save Address"
                  className="bg-[#D3B160] font-bold md:px-[100px] lg:px-[100px]"
                />
              </div>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AddressForm;
