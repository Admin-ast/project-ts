import { Button, Form, Input } from "@/components/forms";
import React from "react";
import { useForm } from "react-hook-form";
import { number } from "yup";
type Props = {};

const PaymentForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: unknown) => console.log(data);
  return (
    <div className="mt-[91px] mb-[48px] rounded-[20px]   border-[1px] border-[#D9D9D9] px-8 py-4">
      <p className="text-center">Debit/Credit Card</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <Input
            type={"number"}
            name={"Card Number"}
            id="name"
            register={register}
            required={true}
            label="Card Number"
            placeholder={""}
            className="w-full !rounded-md bg-[#e8e8e8] text-[12px]"
          />
          <div className="gap-[15px] lg:flex">
            <Input
              type={"number"}
              name={"Expiration Date"}
              id="name"
              register={register}
              required={true}
              label="Expiration Date"
              placeholder={""}
              className="!rounded-md bg-[#e8e8e8] text-[12px]"
            />
            <Input
              type={"number"}
              name={"Cvv"}
              id="name"
              register={register}
              required={true}
              label="Cvv"
              placeholder={""}
              className="!rounded-md bg-[#e8e8e8] text-[12px]"
            />
          </div>
          <Input
            type={"string"}
            name={"Card Holder Name"}
            id="name"
            register={register}
            required={true}
            label="Card Holder Name"
            placeholder={""}
            className="w-full  !rounded-md bg-[#e8e8e8] text-[12px]"
          />
          <div className="lg:w-[366px]">
            <p className="text-justify font-[Roboto] text-[12px]">
              As part of this service, you will also receive occasional special
              offers from Astrology.com. You can modify or cancel your
              subscription at any time. I acknowledge that I have read the Terms
              of Service and Privacy Policy and that I agree to be bound by the
              Terms of Service and the rules and policies referenced therein. *
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button
              btnText="Make Payment"
              className="rounded-[10px] bg-gradient-to-b from-[#fb7038] to-[#df625b]  px-4 py-2 text-white"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PaymentForm;
