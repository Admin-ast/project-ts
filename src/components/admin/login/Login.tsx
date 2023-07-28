import Section from "@/components/Section";
import { Button, Form, Input } from "@/components/forms";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex  min-h-screen items-center justify-center bg-gray-100 bg-[url('')] bg-cover bg-no-repeat py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md ">
        <div className="px-8 ">
          <img src="/assets/main-logo.webp" alt="" className="" />
        </div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login Form
          </h2>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <Input
                label="Username or Email"
                type={"string"}
                placeholder="Enter username or email here"
                name={"username"}
                required={true}
                id="username"
                register={register}
                className="relative block w-full appearance-none rounded-none px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <Input
                label="Password"
                type={"string"}
                placeholder="Enter password here"
                name={"password"}
                required={true}
                id="password"
                register={register}
                className="relative block w-full appearance-none rounded-none px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <Button
              btnText="LOGIN"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            />

            <div className="">
              <Link href="/">
                {" "}
                <p className="text-center text-blue-700">Forgotten password?</p>
              </Link>
            </div>
          </div>

          <Link href="/admin/signup">
            <Button
              btnText="Create new account"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            />
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
