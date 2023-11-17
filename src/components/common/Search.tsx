import React from "react";

const Search = () => {
  return (
    <div className="relative w-64">
      <input
        type="text"
        className="w-full rounded-md border border-gray-300 py-2 px-3"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <svg
          className="h-full w-full cursor-pointer rounded-r-[10px] bg-[#DC6563] text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-5.2-5.2"
          />
          <circle cx="10" cy="10" r="8" />
        </svg>
      </div>
    </div>
  );
};

export default Search;
