import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowLeftIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button, Form, Input } from "./forms";
import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import { getFetcher } from "@/service";

type Props = {
  isOpen?: boolean;
  setIsOpen: any;
};

function LoginModal({ isOpen, setIsOpen }: Props) {
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState(9413717889);
  const [otpValue, setOtpValue] = useState();
  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit1 = async (data: any) => {
    setMobileNumber(Number(data.phoneNumber));
    const body = JSON.stringify({
      name: "sat",
      mobileNumber: Number(data.phoneNumber),
    });
    console.log("bodu", body);
    const result = getFetcher("/api/v1/auth/sign-in", body);

    console.log("response is", result);
    setStep(2);
  };
  const onSubmit2 = async (data: any) => {};

  const handleChange = (otp: any) => {
    setOtpValue(otp);
  };

  const handleSubmitOtp = async () => {
    const body = JSON.stringify({
      otp: otpValue,
      mobileNumber: mobileNumber,
    });
    const result = getFetcher("/api/v1/auth/verify-otp", body);

    console.log("response is 2-->", result);
    setStep(3);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white/40 blur-2xl" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {step === 1 ? (
                  <Dialog.Panel className="w-full max-w-sm transform space-y-6 overflow-hidden rounded-2xl bg-[#FFF7E5] text-left align-middle shadow-xl transition-all lg:max-w-lg">
                    <Dialog.Title
                      as="h3"
                      className="text-dark bg-primary relative bg-black/80 py-2 text-lg font-medium leading-6"
                    >
                      <p className="text-center text-white">
                        Continue with Phone
                      </p>
                      <div className="absolute right-4 top-2">
                        <XMarkIcon
                          onClick={closeModal}
                          className="w-6 cursor-pointer font-bold text-white hover:text-gray-100"
                        />
                      </div>
                    </Dialog.Title>
                    <div className="p-4 lg:px-12 lg:pb-12">
                      <p className="mx-auto text-center text-[18px]">
                        You will receive a 6 digit
                        <br />
                        code for verification
                      </p>
                      <Form onSubmit={handleSubmit(onSubmit1)}>
                        <div className="mt-5">
                          <Input
                            type="string"
                            id="phoneNumber"
                            placeholder="Enter Phone Number"
                            name="phoneNumber"
                            required={true}
                            maxLength={10}
                            minLength={10}
                            label="Enter your phone number"
                            register={register}
                          />
                        </div>
                        <div className="space-y-2">
                          {" "}
                          <Button
                            className="text-dark mx-auto w-full rounded-lg bg-[#E2CB85] py-2 text-lg font-bold"
                            btnText="GET OTP -->"
                          />
                          <p className="text-center text-[13px] text-gray-500">
                            By Signing up, you agree to our{" "}
                            <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                              Terms of Use
                            </span>{" "}
                            and{" "}
                            <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                              Privacy Policy
                            </span>
                          </p>
                        </div>
                      </Form>
                    </div>
                  </Dialog.Panel>
                ) : step === 2 ? (
                  <Dialog.Panel className="w-full max-w-sm transform space-y-6 overflow-hidden rounded-2xl bg-[#FFF7E5] text-left align-middle shadow-xl transition-all lg:max-w-lg">
                    <Dialog.Title
                      as="h3"
                      className="text-dark bg-primary relative bg-black/80 py-2 text-lg font-medium leading-6"
                    >
                      <p className="text-center text-white">Verify Phone</p>
                      <div className="absolute left-4 top-2">
                        <ArrowLeftIcon
                          onClick={() => setStep(1)}
                          className="w-6 cursor-pointer font-bold text-white hover:text-gray-100"
                        />
                      </div>
                    </Dialog.Title>
                    <div className="space-y-6 p-4 lg:px-12 lg:pb-12">
                      <p className="mx-auto text-center text-[18px]">
                        Enter OTP sent to +91-{mobileNumber}
                      </p>

                      <div className="flex w-full justify-center">
                        <OtpInput
                          value={otpValue}
                          onChange={handleChange}
                          renderInput={(props) => <input {...props} />}
                          inputStyle="mr-3 rounded-md border border-gray-500 bg-transparent text-gray-700 text-2xl p-1 w-full text-center"
                          // inputStyle="border-none outline-none"
                          numInputs={6}
                        />
                      </div>
                      <div className="space-y-2">
                        {" "}
                        <Button
                          onClick={handleSubmitOtp}
                          className="text-dark mx-auto w-full rounded-lg bg-[#E2CB85] py-2 text-lg font-bold"
                          btnText="Submit"
                        />
                        {/* <p className="text-center text-[13px] text-gray-500">
                            By Signing up, you agree to our{" "}
                            <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                              Terms of Use
                            </span>{" "}
                            and{" "}
                            <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                              Privacy Policy
                            </span>
                          </p> */}
                      </div>
                    </div>
                  </Dialog.Panel>
                ) : (
                  <Dialog.Panel className="w-full max-w-sm transform space-y-6 overflow-hidden rounded-2xl bg-[#FFF7E5] text-left align-middle shadow-xl transition-all lg:max-w-lg">
                    <Dialog.Title
                      as="h3"
                      className="text-dark bg-primary relative bg-black/80 py-2 text-lg font-medium leading-6"
                    >
                      <p className="text-center text-white">Enter Your Name</p>
                      <div className="absolute left-4 top-2">
                        <ArrowLeftIcon
                          onClick={() => setStep(2)}
                          className="w-6 cursor-pointer font-bold text-white hover:text-gray-100"
                        />
                      </div>
                    </Dialog.Title>
                    <div className="p-4 lg:px-12 lg:pb-12">
                      <Form onSubmit={handleSubmit(onSubmit2)}>
                        <div className="">
                          <Input
                            type="string"
                            id="firstName"
                            placeholder=""
                            name="firstName"
                            label="First Name"
                            register={register}
                          />
                        </div>
                        <div className="">
                          <Input
                            type="string"
                            id="lastName"
                            placeholder=""
                            name="lastName"
                            label="Last Name"
                            register={register}
                          />
                        </div>
                        <div className="space-y-2">
                          {" "}
                          <Button
                            type="button"
                            className="text-dark mx-auto w-full rounded-lg bg-[#E2CB85] py-2 text-lg font-bold"
                            btnText="GET OTP -->"
                          />
                          <p className="text-center text-[13px] text-gray-500">
                            By Signing up, you agree to our{" "}
                            <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                              Terms of Use
                            </span>{" "}
                            and{" "}
                            <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                              Privacy Policy
                            </span>
                          </p>
                        </div>
                      </Form>
                    </div>
                  </Dialog.Panel>
                )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default LoginModal;
