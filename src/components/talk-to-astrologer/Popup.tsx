import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Category {
  id: string;
  name: string;
  options: { id: string; name: string }[];
}

const FilterPanel: React.FunctionComponent<FilterPanelProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: "category1",
      name: "Skill",
      options: [
        { id: "1", name: "Face Reading" },
        { id: "2", name: "KP" },
        { id: "3", name: "Life Coach" },
        { id: "4", name: "Nadi" },
        { id: "5", name: "Numerology" },
        { id: "6", name: "Palmistry" },
        { id: "7", name: "Prashna" },
        { id: "8", name: "Psychic" },
        { id: "9", name: "Tarot" },
        { id: "10", name: "Vastu" },
      ],
    },
    {
      id: "category2",
      name: "Language",
      options: [
        { id: "1", name: "English" },
        { id: "2", name: "Hindi" },
        { id: "3", name: "Tamil" },
        { id: "4", name: "Punjabi" },
        { id: "5", name: "Bengali" },
      ],
    },
  ];

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0].id);
    }
  }, [isOpen]);

  const handleSelectAll = () => {
    const allOptionIds = categories.flatMap((category) =>
      category.options.map((option) => option.id)
    );
    setSelectedOptions(allOptionIds);
  };

  const handleClear = () => {
    setSelectedOptions([]);
  };

  const handleCategoryReset = () => {
    setSelectedCategory(null);
    setSelectedOptions([]);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex w-96 rounded-lg bg-white p-4">
        <div className="flex-1">
          <div className="mb-4 border-b-2 border-gray-300 pb-2">
            <p className="text-[30px] font-bold">Filters</p>
          </div>

          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`cursor-pointer ${
                  selectedCategory === category.id ? "font-bold" : ""
                }`}
              >
                {category.name}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <button
              className="rounded bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
              onClick={handleCategoryReset}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="ml-4 flex-1">
          <div className=" mt-7 flex justify-end border-b-2 border-gray-300">
            <p onClick={onClose} className="text-2xl font-bold">
              <FaTimes />
            </p>
          </div>

          <div className="mb-4 flex items-center">
            <button
              className="mr-2 whitespace-nowrap rounded px-4 py-2 text-[20px] font-bold text-[#DC6563] "
              onClick={handleSelectAll}
            >
              Select All
            </button>
            <button
              className="rounded px-4 py-2 text-[20px] font-bold text-[#DC6563] "
              onClick={handleClear}
            >
              Clear
            </button>
          </div>

          <div className="space-y-4">
            {/* {selectedCategory &&
              categories
                .find((category) => category.id === selectedCategory)
                ?.options.slice(0, 10)
                .map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.id}
                      className="mr-2"
                      checked={selectedOptions.includes(option.id)}
                      onChange={() => {
                        setSelectedOptions((prevSelected) =>
                          prevSelected.includes(option.id)
                            ? prevSelected.filter((id) => id !== option.id)
                            : [...prevSelected, option.id]
                        );
                      }}
                    />
                    <label htmlFor={option.id}>{option.name}</label>
                  </div>
                ))} */}
            {selectedCategory &&
              categories
                .find((category) => category.id === selectedCategory)
                ?.options.slice(0, 10)
                .map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.id}
                      className="mr-2 hidden"
                      checked={selectedOptions.includes(option.id)}
                      onChange={() => {
                        setSelectedOptions((prevSelected) =>
                          prevSelected.includes(option.id)
                            ? prevSelected.filter((id) => id !== option.id)
                            : [...prevSelected, option.id]
                        );
                      }}
                    />
                    <label
                      htmlFor={option.id}
                      className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border ${
                        selectedOptions.includes(option.id)
                          ? "border-[#DC6563] bg-[#DC6563]"
                          : "border-[#DC6563]"
                      }`}
                    >
                      <svg
                        className={`h-4 w-4 ${
                          selectedOptions.includes(option.id)
                            ? "text-white"
                            : "hidden"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </label>
                    <span className="ml-2">{option.name}</span>
                  </div>
                ))}
          </div>

          <div className="mt-4 flex justify-end">
            <button
              className="rounded bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-4 py-2 text-white "
              onClick={onClose}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
