import React, { useState } from "react";
import { BsThreeDotsVertical, BsWhatsapp } from "react-icons/bs";

type Props = {
  name: string;
  imageUrl: string;
  place: string;
  positionName: string;
  position: string;
  task: string;
};

const ManagerCard = ({
  name,
  imageUrl,
  place,
  positionName,
  position,
  task,
}: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleEdit = () => {
    // Implement edit functionality
  };

  const handleDelete = () => {
    // Implement delete functionality
  };
  return (
    <div className="relative  rounded-[15px] border-b-[7px]  border-[#DC6563] bg-white p-4 shadow-md">
      <div className="lg:flex">
        <div className="">
          <img
            src={imageUrl}
            alt="Person"
            className="mr-4 h-16 w-16 rounded-full"
          />
          <p className="mt-2 text-lg font-semibold">{name}</p>
          <p className="text-sm font-semibold text-[#D9D9D9]">{place}</p>
        </div>

        <div className="relative ml-auto flex space-x-2">
          <div onClick={toggleOptions} className="cursor-pointer  text-3xl">
            <BsThreeDotsVertical />
          </div>
          {showOptions && (
            <div className="absolute right-5 top-8  rounded border border-gray-300 bg-white shadow-lg">
              <ul className="py-2">
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={handleEdit}
                >
                  Edit
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={handleDelete}
                >
                  Delete
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-2 border-[1px] border-[#D9D9D9]"></div>

      <div className="">
        <p className="text-sm text-[#D9D9D9]">{position}</p>
        <p className="text-xl ">{positionName}</p>
      </div>
      <div className="">
        <p className="text-sm text-[#D9D9D9]">{task}</p>
      </div>

      <div className="mt-2 border-[4px] border-[#D9D9D9]"></div>
    </div>
  );
};

export default ManagerCard;
