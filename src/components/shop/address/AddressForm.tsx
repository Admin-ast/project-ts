'use client';
import Section from "@/components/Section";
import { Button, Form, Input } from "@/components/forms";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CountryCodes from "./CountryCodes";
import { postFetcher } from "@/service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const AddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const {push} = useRouter();
  const onSubmit = (data: FormData) => {
    console.log(data);

    const savedata = async() => {
      const saveaddress = await postFetcher('/address/save', JSON.stringify(data));
      console.log(saveaddress);
      if(saveaddress?.status){
          toast.success('Successfully saved address');
          push('/shop/checkout');

      }
      else{
        toast.error('Failed to save address');
      }
    }

    savedata();


  };

  return (
    <div className="pb-[30px]">
      <Section>
        <div className="flex items-center justify-evenly rounded-[20px] bg-white  shadow-xl ">
          <div className="p-5 ">
            <p className="text-center font-[Georgia] text-[22px] font-bold">
              Add New Address
            </p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className=" gap-[30px]   md:flex lg:flex">
                <div className="md:w-1/3 lg:w-1/3">
                  <Input
                    placeholder="Enter name"
                    label="Name"
                    register={register}
                    type="text"
                    id="name"
                    name="name"
                    errors={errors}
                    required="Name is required"
                    className="!rounded-md"
                  />
                </div>
                <div className="flex gap-5 md:w-1/3 md:gap-1 lg:w-1/3">
                  <CountryCodes />
                  <Input
                    label="Mobile Number:"
                    register={register}
                    type="number"
                    id="mobileno"
                    name="mobileno"
                    errors={errors}
                    required="Mobile Number is required"
                    placeholder={"Enter mobile no."}
                    className="!rounded-md "
                  />
                </div>
                <div className="flex gap-5 md:w-1/3 md:gap-1 lg:w-1/3">
                  <CountryCodes />
                  <Input
                    label="Alternative Number: "
                    register={register}
                    type="number"
                    id="alternative"
                    name="alternative"
                    errors={errors}
                    required=""
                    placeholder={"Enter alternative mobile no."}
                    className="!rounded-md"
                  />
                </div>
              </div>
              <div className="gap-[31px] md:flex lg:flex">
                <div className="md:w-1/3 lg:w-1/3">
                  <Input
                    label="Email ID:"
                    register={register}
                    type="email"
                    id="email"
                    name="email"
                    errors={errors}
                    required="Email id is required"
                    placeholder={"Enter email id"}
                    className="!rounded-md"
                  />
                </div>
                <div className="md:w-1/3 lg:w-1/3">
                  <Input
                    label="Flat No:"
                    name={"flatno"}
                    register={register}
                    type="text"
                    id="flatno"
                    errors={errors}
                    required="Flat No. is required"
                    placeholder={"Flat No/Building No / House No"}
                    className="!rounded-md"
                  />
                </div>
                <div className="md:w-1/3 lg:w-1/3">
                  <Input
                    label="Locality:"
                    name={"locality"}
                    register={register}
                    type="text"
                    id="locality"
                    errors={errors}
                    required="Locality is required"
                    placeholder={"Locality"}
                    className="!rounded-md"
                  />
                </div>
              </div>

              <div className="gap-[31px] md:flex lg:flex">
                <div className="md:w-1/3 lg:w-1/3">
                  <Input
                    label="City:"
                    register={register}
                    type="text"
                    id="city"
                    name="city"
                    errors={errors}
                    required="City is required"
                    placeholder={"City"}
                    className="!rounded-md"
                  />
                </div>
                <div className="md:w-1/3 lg:w-1/3">
                  <Input
                    label="State/Province:"
                    name={"state"}
                    register={register}
                    type="text"
                    id="state"
                    errors={errors}
                    required="State is required"
                    placeholder={"State"}
                    className="!rounded-md"
                  />
                </div>
                <div className="md:w-1/3 lg:w-1/3">
                  <Input
                    label="Country:"
                    name={"country"}
                    register={register}
                    type="text"
                    id="country"
                    errors={errors}
                    required="Country is required"
                    placeholder={"Country"}
                    className="!rounded-md"
                  />
                </div>
              </div>

              <div className="gap-[31px] md:flex lg:flex">
                <div className="md:w-1/3 lg:w-1/3">
                  <Input
                    label="PinCode:"
                    register={register}
                    type="number"
                    id="pin"
                    name="pin"
                    errors={errors}
                    required="PinCode is required"
                    placeholder={"Postal Code/Pincode"}
                    className="!rounded-md"
                  />
                </div>
                <div className="md:w-1/3 lg:w-1/3">
                  <Input
                    label="Landmark:"
                    name={"landmark"}
                    register={register}
                    type="text"
                    id="landmark"
                    errors={errors}
                    placeholder={"Landmark (Optional)"}
                    className="!rounded-md"
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