import React from "react";
import { FaUser } from "react-icons/fa";
import { Input } from "../forms";
import { useForm } from "react-hook-form";
import Image from "next/image";

type Props = {};

const BirthDetail = (props: Props) => {
  return (
    // <div className="mt-[34px] border-[1px] border-[#D9D9D9] rounded-[12px] px-[15px]">
    //     <div className="bg-[#D9D9D9] mt-[15px]">
    //     <div className="flex  gap-[6px] items-center h-[20px] px-4">
    //     <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[100%]  border-[1px] border-[#D9D9D9]">
    //     <FaUser className='text-[#A9A9A9] text-[15px]' />
    //       </div>
    //       <p className="text-[#A9A9A9]">Birth Details</p>
    //     </div>

    // </div>
    // {/* <div className="">
    // <Input
    //                   type={"string"}
    //                   name={"address1"}
    //                   id="address1"
    //                   register={register}
    //                   required={true}
    //                   label=""
    //                   placeholder={""}
    //                   className="h-[12px] "
    //                 />
    //                 <div className="flex w-full">
    //                 <Input
    //                   type={"string"}
    //                   name={"address2"}
    //                   id="address2"
    //                   register={register}
    //                   required={true}
    //                   label=""
    //                   placeholder={""}
    //                   className="h-[12px] w-[30%]"
    //                 />
    //                 <Input
    //                   type={"string"}
    //                   name={"address3"}
    //                   id="address3"
    //                   register={register}
    //                   required={true}
    //                   label=""
    //                   placeholder={""}
    //                   className="h-[12px] w-[30%] "
    //                 />
    //                 <Input
    //                   type={"string"}
    //                   name={"address4"}
    //                   id="address4"
    //                   register={register}
    //                   required={true}
    //                   label=""
    //                   placeholder={""}
    //                   className="h-[12px] w-[30%]"
    //                 />
    //                 </div>
    // </div> */}
    // <form className="max-w-md mx-auto mt-8 ">
    //   {/* 1st line - 1 input */}
    //   <div className="mb-4">
    //     {/* <label htmlFor="input1" className="block text-gray-700 text-sm font-bold mb-2">
    //       Input 1:
    //     </label> */}
    //     <input
    //       type="text"
    //       id="input1"
    //       name="input1"
    //       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //     />
    //   </div>

    //   {/* 2nd line - 3 inputs in flex direction */}
    //   <div className="flex mb-4">
    //     {[1, 2, 3].map((index) => (
    //       <div key={index} className="flex-1 mr-2">
    //         {/* <label htmlFor={`input2_${index}`} className="block text-gray-700 text-sm font-bold mb-2">
    //           Input 2-{index}:
    //         </label> */}
    //         <input
    //           type="text"
    //           id={`input2_${index}`}
    //           name={`input2_${index}`}
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         />
    //       </div>
    //     ))}
    //   </div>

    //   {/* 3rd line - 3 inputs in flex direction */}
    //   <div className="flex mb-4">
    //     {[1, 2, 3].map((index) => (
    //       <div key={index} className="flex-1 mr-2">
    //         {/* <label htmlFor={`input3_${index}`} className="block text-gray-700 text-sm font-bold mb-2">
    //           Input 3-{index}:
    //         </label> */}
    //         <input
    //           type="text"
    //           id={`input3_${index}`}
    //           name={`input3_${index}`}
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         />
    //       </div>
    //     ))}
    //   </div>

    //   {/* 4th line - 1 input */}
    //   <div className="mb-4">
    //     {/* <label htmlFor="input4" className="block text-gray-700 text-sm font-bold mb-2">
    //       Input 4:
    //     </label> */}
    //     <input
    //       type="text"
    //       id="input4"
    //       name="input4"
    //       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //     />
    //   </div>

    //   {/* Submit button */}
    //   {/* <div className="flex items-center justify-center">
    //     <button
    //       type="submit"
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //     >
    //       Submit
    //     </button>
    //   </div> */}
    // </form>
    // </div>

    <div className="flex"></div>
  );
};

export default BirthDetail;
