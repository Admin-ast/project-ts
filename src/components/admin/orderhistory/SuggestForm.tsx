import { Form, Input, Textarea } from "@/components/forms";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const SuggestForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: unknown) => console.log(data);
  return (
    <div className=" overflow-y-auto lg:h-screen">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="  ">
          <div className="">
            <Input
              type={"string"}
              name={"category"}
              id="category"
              register={register}
              required={true}
              label="Select category"
              placeholder="Select category"
              className="!rounded-md "
            />
          </div>
          <div className="">
            <Input
              type={"string"}
              name={"pname"}
              id="gender"
              register={register}
              required={true}
              label="Product Name"
              placeholder="Product Name"
              className="!rounded-md"
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <Input
              type={"number"}
              name={"Price"}
              id="Price"
              register={register}
              required={true}
              label="Price*"
              placeholder={"Price"}
              className="!rounded-md "
            />
          </div>
          <div className="">
            <Input
              type={"string"}
              name={"Performed By"}
              id="pby"
              register={register}
              required={true}
              label="Performed By"
              placeholder={"Performed By"}
              className="!rounded-md "
            />
          </div>
        </div>

        <div className="">
          <Input
            type={"string"}
            name={"birthlocation"}
            id="location"
            register={register}
            required={true}
            label="Birth Location"
            placeholder={""}
            className="!rounded-md"
          />
        </div>
        <div className="md:w-1/4 lg:w-1/4">
          <Textarea
            type={"string"}
            name={"Attachment"}
            id="Attachment"
            register={register}
            required={true}
            label="Attachment"
            placeholder={""}
            className="!rounded-md "
          />
        </div>
        <div className="">
          <Textarea
            type={"string"}
            name={"Description"}
            id="Description"
            register={register}
            required={true}
            label="Description"
            placeholder={""}
            className="!rounded-md "
          />
        </div>
      </Form>
    </div>
  );
};

export default SuggestForm;
