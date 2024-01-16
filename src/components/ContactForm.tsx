import React from "react";

import { useForm } from "react-hook-form";
import { Button, Form, Input } from "./forms";

type FormData = {
  fname: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
};
type Props = {
  text: string;
  className: string;
};

const ContactForm = ({ text, className }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
  //  console.log(data);
  };

  return (
    <div
      className={`
     
      
       ${className} `}
    >
      <div className="">
        <p className="text-left text-[28px]  font-bold ">Contact us{text}</p>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[10px] gap-[20px] lg:flex">
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="fname"
              placeholder="Name"
              name="fname"
              label=" "
              register={register}
              errors={errors}
              required="Name is required"
            />
          </div>
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="email"
              placeholder="Email"
              name="email"
              label=""
              register={register}
              errors={errors}
              required="Email is required"
            />
          </div>
        </div>
        <div className="gap-[20px] lg:flex ">
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="mobile"
              placeholder="Enter mobile no"
              name="mobile"
              label=""
              register={register}
              errors={errors}
              required="Mobile no  is required"
            />
          </div>
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="subject"
              placeholder="Subject"
              name="subject"
              label=" "
              register={register}
              errors={errors}
              required="Subject is required"
            />
          </div>
        </div>
        <div className="gap-[20px]  lg:flex">
          <div className="w-full">
            <Input
              className=" h-[50px]  text-[16px] font-bold "
              type="text"
              id="message"
              placeholder="Message"
              name="message"
              label=" "
              register={register}
              errors={errors}
              required="Message is required"
            />
          </div>
        </div>
        <div className="mt-[30.48px] flex ">
          <Button
            type="submit"
            className="bg-gradient-to-b from-[#FF7646]  to-[#FF0600] text-[16px] font-[500] text-white"
            btnText="Submit "
          />
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
