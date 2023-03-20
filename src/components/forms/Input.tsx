import React, { ReactElement } from "react";

interface Props {
  label: string;
  register: any;
  required?: boolean;
  type: string;
  id: string;
  name: string;
  errors?: { [x: string]: any };
  maxLength?: number;
  placeholder: string;
  onChange?: any;
  disabled?: boolean;
  minLength?: number;
}

function Input({
  label,
  register,
  required,
  type,
  id,
  name,
  errors,
  maxLength,
  minLength,
  placeholder,
  onChange,

  disabled = false,
}: Props): ReactElement {
  return (
    <div className="relative">
      <div className="relative space-y-2">
        <label htmlFor={id} className="text-base">
          {label}
        </label>
        <input
          type={type}
          id={id}
          className="border-1 peer block w-full appearance-none rounded-md border border-gray-400 bg-transparent p-2.5 text-sm text-gray-900 focus:border-[#0B8188] focus:outline-none focus:ring-0"
          placeholder={placeholder}
          name={name}
          maxLength={maxLength}
          minLength={minLength}
          onChange={onChange}
          autoComplete={type}
          {...register(name, { required })}
        />
      </div>
      {errors && errors[name] && (
        <p className="absolute text-sm font-semibold text-red-500">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default Input;
