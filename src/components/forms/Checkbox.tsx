import React, { ReactElement } from "react";

interface Props {
  register: any;
  required?: boolean;
  type: string;
  id: string;
  name: string;
  children?: any;
  errors: any;
}

function Checkbox({
  register,
  required,
  type,
  id,
  errors,
  name,
  children,
}: Props): ReactElement {
  return (
    <>
      <div className="flex items-start space-x-2">
        <input
          type={type}
          id={id}
          defaultChecked={true}
          name={name}
          className="mt-1 rounded border-gray-600 text-[#0B8188] focus:ring-[#0B8188]"
          {...register(name, { required })}
        />
        <label htmlFor={id} className="block text-sm text-gray-900">
          {children}
        </label>
      </div>
      {errors && errors[name] && (
        <p className="text-center text-sm font-semibold text-red-500">
          {errors[name].message}
        </p>
      )}
    </>
  );
}

export default Checkbox;
