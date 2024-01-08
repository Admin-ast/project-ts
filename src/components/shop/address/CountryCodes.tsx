"use client";
// components/CountryCodeSelect.tsx

import React from "react";

const countryCodes = [
  { label: "+91", value: "India" },
  // Add more country codes as needed
];

const CountryCodes = () => {
  return (
    <div className="mt-[30px] flex items-center justify-center">
      <select
        id="countryCode"
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
      >
        {countryCodes.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryCodes;