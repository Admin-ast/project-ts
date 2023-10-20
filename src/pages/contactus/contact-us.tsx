import Section from "@/components/Section";
import React, { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { SlCallEnd } from "react-icons/sl";
import { useForm } from "react-hook-form";
import { FiMail } from "react-icons/fi";
import { Button, Form, Input, Textarea } from "@/components/forms";
import Hero from "@/components/appoinments/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  return (
    <div className="">
      <Hero text="Contact Us" icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Contact Us
          </p>
        </div>
      </Section>
      <Section>
        <div className="mb-[20px] grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className=" mt-[64px] rounded-[20px]  border-[3px]  border-[#DC6563] bg-white shadow-xl ">
            <div className="mt-[71px] ml-[64px] flex  gap-2 font-[500] lg:px-[50px] ">
              <CiLocationArrow1 className="text-[46px] text-[#DC6563]" />
              <p className="mt-[10px] text-[16px] leading-[19px] ">
                xyz, top floor, New Delhi
              </p>
            </div>
            <div className="mt-[30px] ml-[64px] flex gap-2 font-[500] lg:px-[50px] ">
              <SlCallEnd className="text-[46px] text-[#DC6563]" />
              <p className="mt-[10px] text-[16px]">123-456-7890</p>
            </div>
            <div className="mt-[30px] ml-[64px] flex gap-2 font-[500] lg:px-[50px]">
              <FiMail className="text-[46px] text-[#DC6563]" />
              <p className="mt-[10px] text-[16px]">AstroSevaTalk@gmail.com</p>
            </div>
            <div className="mt-[30px]  mb-[54px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004933982!2d77.04417327638082!3d28.527252738589127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1683192752850!5m2!1sen!2sin"
                width="280px"
                height="256px"
                loading="lazy"
                referrerPolicy={`no-referrer-when-downgrade`}
                className="mx-auto"
              ></iframe>
            </div>
          </div>

          {/* ----------------------------------------------------------Form----------------------------------------------------------- */}

          <div className="mt-[64px] lg:ml-[89px] ">
            <Form onSubmit={handleSubmit}>
              <Input
                className="h-[70px] w-full placeholder-gray-700"
                type="string"
                id="hours"
                placeholder="Name"
                name="hours"
                label=""
                register={register}
                errors={errors}
              />
              <Input
                className="h-[70px] w-full placeholder-gray-700"
                type="string"
                id="hours"
                placeholder="Email Address"
                name="hours"
                label=""
                register={register}
                errors={errors}
              />
              <Input
                className="h-[70px] w-full placeholder-gray-700 "
                type="string"
                id="hours"
                placeholder="Phone Number"
                name="hours"
                label=""
                register={register}
                errors={errors}
              />
              <Textarea
                className="placeholder-gray-700"
                placeholder="Message"
              />
              <Button
                className="h-[58px] w-[202px] bg-gradient-to-b from-[#fb7038] to-[#df625b] text-xl font-bold text-white"
                btnText="Send Message"
              />
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
