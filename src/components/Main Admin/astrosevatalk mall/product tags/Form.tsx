import { Input, Textarea } from "@/components/forms";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="lg:w-1/3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5 font-bold">
          <Input
            placeholder=""
            label="Name"
            register={register}
            type="text"
            id="name"
            name="name"
            errors={errors}
            // required="Name for the attribute"
            className=""
          />
        </div>

        <div className="mt-5 font-bold">
          <Input
            placeholder=""
            label="Slug"
            register={register}
            type="text"
            id="name"
            name="name"
            errors={errors}
            // required="Name for the attribute"
            className=""
          />
        </div>
        <div className="mt-5">
          <label className="font-bold">Description</label>
          <Textarea />
        </div>
      </form>
    </div>
  );
};

export default Form;
