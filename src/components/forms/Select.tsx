import React, { ReactElement } from "react";

interface Props {
  label: string;
  register: any;
  required: boolean;
  id: string;
  name: string;
  errors: { [x: string]: any };
  options: any;
}

function Select({
  label,
  register,
  required,
  id,
  name,
  errors,
  options,
}: Props): ReactElement {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
        {label}
      </label>
      <div className="pt-1">
        <select
          name={name}
          id={id}
          className="w-full rounded-lg border border-gray-400 bg-transparent px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-600"
          {...register(name, { required })}
        >
          {/* <option value="">Please select {name}</option> */}

          {options?.map((opt: any, index: number) => (
            <option key={index} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {errors && errors[name] && (
          <p className="text-red-500">{errors[name].message}</p>
        )}
      </div>
    </div>
  );
}

export default Select;
