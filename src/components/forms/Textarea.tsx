import React from "react";

function Textarea(props: any) {
  const { name, id, className, rows, placeholder, label, showTools, register } =
    props;
  return (
    <div className=" w-full">
      <div className="rounded-b-lg bg-transparent">
        <label className=" block text-base" htmlFor={id}>
          {label}
        </label>
        <textarea
          name={name}
          id={id}
          rows={rows}
          className={`${className} focus:border-dark focus:ring-dark/30 block h-48 w-full rounded-md border border-gray-400 bg-transparent  p-4 text-sm text-gray-800 focus:outline-none focus:ring-1`}
          placeholder={placeholder}
          // {...register(name)}
        ></textarea>
      </div>
    </div>
  );
}

export default Textarea;
