// // components/Popup.tsx
// import { Fragment, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import FilterOptions from "./FilterOptions";
// import { Checkbox } from "../forms";
// import OptionsPanel from "./OptionPanel";

// interface PopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Popup = ({ isOpen, onClose }: PopupProps) => {
//   const [openOption, setOpenOption] = useState<string | null>(null);
//   const [selectedOption, setSelectedOption] = useState<number | null>(null);
//   const buttonOptions: { [key: string]: JSX.Element[] } = {
//     "Option 1": [
//       <div key="" className="">
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="1"
//             onClick={() => selectOption(1)}
//             className={`text-[24px] ${selectedOption === 1 ? " " : ""}`}
//           >
//             Face Reading
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="2"
//             onClick={() => selectOption(2)}
//             className={` text-[24px] ${selectedOption === 2 ? "" : ""}`}
//           >
//             KP
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="3"
//             onClick={() => selectOption(3)}
//             className={`text-[24px] ${selectedOption === 3 ? "" : ""}`}
//           >
//             Life Coach
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="4"
//             onClick={() => selectOption(4)}
//             className={` text-[24px] ${selectedOption === 4 ? "" : ""}`}
//           >
//             Nadi
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="5"
//             onClick={() => selectOption(5)}
//             className={` text-[24px] ${selectedOption === 5 ? "" : ""}`}
//           >
//             Numerology
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="6"
//             onClick={() => selectOption(6)}
//             className={` text-[24px] ${selectedOption === 6 ? "" : ""}`}
//           >
//             Palmistry
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="7"
//             onClick={() => selectOption(7)}
//             className={` text-[24px] ${selectedOption === 7 ? "" : ""}`}
//           >
//             Prashna
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="8"
//             onClick={() => selectOption(8)}
//             className={`text-[24px] ${selectedOption === 8 ? "" : ""}`}
//           >
//             Psychic
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="9"
//             onClick={() => selectOption(9)}
//             className={`text-[24px] ${selectedOption === 9 ? "" : ""}`}
//           >
//             Tarot
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="10"
//             onClick={() => selectOption(10)}
//             className={`text-[24px] ${selectedOption === 10 ? "" : ""}`}
//           >
//             Vastu
//           </button>
//         </div>
//       </div>,
//     ],
//     "Option 2": [
//       <div key="" className="">
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="1"
//             onClick={() => selectOption(1)}
//             className={`text-[24px] ${selectedOption === 1 ? " " : ""}`}
//           >
//             Face Reading
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="2"
//             onClick={() => selectOption(2)}
//             className={` text-[24px] ${selectedOption === 2 ? "" : ""}`}
//           >
//             KP
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="3"
//             onClick={() => selectOption(3)}
//             className={`text-[24px] ${selectedOption === 3 ? "" : ""}`}
//           >
//             Life Coach
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="4"
//             onClick={() => selectOption(4)}
//             className={` text-[24px] ${selectedOption === 4 ? "" : ""}`}
//           >
//             Nadi
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="5"
//             onClick={() => selectOption(5)}
//             className={` text-[24px] ${selectedOption === 5 ? "" : ""}`}
//           >
//             Numerology
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="6"
//             onClick={() => selectOption(6)}
//             className={` text-[24px] ${selectedOption === 6 ? "" : ""}`}
//           >
//             Palmistry
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="7"
//             onClick={() => selectOption(7)}
//             className={` text-[24px] ${selectedOption === 7 ? "" : ""}`}
//           >
//             Prashna
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="8"
//             onClick={() => selectOption(8)}
//             className={`text-[24px] ${selectedOption === 8 ? "" : ""}`}
//           >
//             Psychic
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="9"
//             onClick={() => selectOption(9)}
//             className={`text-[24px] ${selectedOption === 9 ? "" : ""}`}
//           >
//             Tarot
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="10"
//             onClick={() => selectOption(10)}
//             className={`text-[24px] ${selectedOption === 10 ? "" : ""}`}
//           >
//             Vastu
//           </button>
//         </div>
//       </div>,
//     ],
//     "Option 3": [
//       <div key="" className="">
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="1"
//             onClick={() => selectOption(1)}
//             className={`text-[24px] ${selectedOption === 1 ? " " : ""}`}
//           >
//             Face Reading
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="2"
//             onClick={() => selectOption(2)}
//             className={` text-[24px] ${selectedOption === 2 ? "" : ""}`}
//           >
//             KP
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="3"
//             onClick={() => selectOption(3)}
//             className={`text-[24px] ${selectedOption === 3 ? "" : ""}`}
//           >
//             Life Coach
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="4"
//             onClick={() => selectOption(4)}
//             className={` text-[24px] ${selectedOption === 4 ? "" : ""}`}
//           >
//             Nadi
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="5"
//             onClick={() => selectOption(5)}
//             className={` text-[24px] ${selectedOption === 5 ? "" : ""}`}
//           >
//             Numerology
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="6"
//             onClick={() => selectOption(6)}
//             className={` text-[24px] ${selectedOption === 6 ? "" : ""}`}
//           >
//             Palmistry
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="7"
//             onClick={() => selectOption(7)}
//             className={` text-[24px] ${selectedOption === 7 ? "" : ""}`}
//           >
//             Prashna
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="8"
//             onClick={() => selectOption(8)}
//             className={`text-[24px] ${selectedOption === 8 ? "" : ""}`}
//           >
//             Psychic
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="9"
//             onClick={() => selectOption(9)}
//             className={`text-[24px] ${selectedOption === 9 ? "" : ""}`}
//           >
//             Tarot
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="10"
//             onClick={() => selectOption(10)}
//             className={`text-[24px] ${selectedOption === 10 ? "" : ""}`}
//           >
//             Vastu
//           </button>
//         </div>
//       </div>,
//     ],
//     "Option 4": [
//       <div key="" className="">
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="1"
//             onClick={() => selectOption(1)}
//             className={`text-[24px] ${selectedOption === 1 ? " " : ""}`}
//           >
//             Face Reading
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="2"
//             onClick={() => selectOption(2)}
//             className={` text-[24px] ${selectedOption === 2 ? "" : ""}`}
//           >
//             KP
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="3"
//             onClick={() => selectOption(3)}
//             className={`text-[24px] ${selectedOption === 3 ? "" : ""}`}
//           >
//             Life Coach
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="4"
//             onClick={() => selectOption(4)}
//             className={` text-[24px] ${selectedOption === 4 ? "" : ""}`}
//           >
//             Nadi
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="5"
//             onClick={() => selectOption(5)}
//             className={` text-[24px] ${selectedOption === 5 ? "" : ""}`}
//           >
//             Numerology
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="6"
//             onClick={() => selectOption(6)}
//             className={` text-[24px] ${selectedOption === 6 ? "" : ""}`}
//           >
//             Palmistry
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="7"
//             onClick={() => selectOption(7)}
//             className={` text-[24px] ${selectedOption === 7 ? "" : ""}`}
//           >
//             Prashna
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="8"
//             onClick={() => selectOption(8)}
//             className={`text-[24px] ${selectedOption === 8 ? "" : ""}`}
//           >
//             Psychic
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="9"
//             onClick={() => selectOption(9)}
//             className={`text-[24px] ${selectedOption === 9 ? "" : ""}`}
//           >
//             Tarot
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="10"
//             onClick={() => selectOption(10)}
//             className={`text-[24px] ${selectedOption === 10 ? "" : ""}`}
//           >
//             Vastu
//           </button>
//         </div>
//       </div>,
//     ],
//     "Option 5": [
//       <div key="" className="">
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="1"
//             onClick={() => selectOption(1)}
//             className={`text-[24px] ${selectedOption === 1 ? " " : ""}`}
//           >
//             Face Reading
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="2"
//             onClick={() => selectOption(2)}
//             className={` text-[24px] ${selectedOption === 2 ? "" : ""}`}
//           >
//             KP
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="3"
//             onClick={() => selectOption(3)}
//             className={`text-[24px] ${selectedOption === 3 ? "" : ""}`}
//           >
//             Life Coach
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="4"
//             onClick={() => selectOption(4)}
//             className={` text-[24px] ${selectedOption === 4 ? "" : ""}`}
//           >
//             Nadi
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="5"
//             onClick={() => selectOption(5)}
//             className={` text-[24px] ${selectedOption === 5 ? "" : ""}`}
//           >
//             Numerology
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="6"
//             onClick={() => selectOption(6)}
//             className={` text-[24px] ${selectedOption === 6 ? "" : ""}`}
//           >
//             Palmistry
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="7"
//             onClick={() => selectOption(7)}
//             className={` text-[24px] ${selectedOption === 7 ? "" : ""}`}
//           >
//             Prashna
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="8"
//             onClick={() => selectOption(8)}
//             className={`text-[24px] ${selectedOption === 8 ? "" : ""}`}
//           >
//             Psychic
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="9"
//             onClick={() => selectOption(9)}
//             className={`text-[24px] ${selectedOption === 9 ? "" : ""}`}
//           >
//             Tarot
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="10"
//             onClick={() => selectOption(10)}
//             className={`text-[24px] ${selectedOption === 10 ? "" : ""}`}
//           >
//             Vastu
//           </button>
//         </div>
//       </div>,
//     ],
//     "Option 6": [
//       <div key="" className="">
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="1"
//             onClick={() => selectOption(1)}
//             className={`text-[24px] ${selectedOption === 1 ? " " : ""}`}
//           >
//             Face Reading
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="2"
//             onClick={() => selectOption(2)}
//             className={` text-[24px] ${selectedOption === 2 ? "" : ""}`}
//           >
//             KP
//           </button>
//         </div>

//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="3"
//             onClick={() => selectOption(3)}
//             className={`text-[24px] ${selectedOption === 3 ? "" : ""}`}
//           >
//             Life Coach
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="4"
//             onClick={() => selectOption(4)}
//             className={` text-[24px] ${selectedOption === 4 ? "" : ""}`}
//           >
//             Nadi
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="5"
//             onClick={() => selectOption(5)}
//             className={` text-[24px] ${selectedOption === 5 ? "" : ""}`}
//           >
//             Numerology
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="6"
//             onClick={() => selectOption(6)}
//             className={` text-[24px] ${selectedOption === 6 ? "" : ""}`}
//           >
//             Palmistry
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="7"
//             onClick={() => selectOption(7)}
//             className={` text-[24px] ${selectedOption === 7 ? "" : ""}`}
//           >
//             Prashna
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="8"
//             onClick={() => selectOption(8)}
//             className={`text-[24px] ${selectedOption === 8 ? "" : ""}`}
//           >
//             Psychic
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="9"
//             onClick={() => selectOption(9)}
//             className={`text-[24px] ${selectedOption === 9 ? "" : ""}`}
//           >
//             Tarot
//           </button>
//         </div>
//         <div className="flex items-center gap-[12px]">
//           <input type="checkbox" className="h-[22px] w-[22px] " />
//           <button
//             key="10"
//             onClick={() => selectOption(10)}
//             className={`text-[24px] ${selectedOption === 10 ? "" : ""}`}
//           >
//             Vastu
//           </button>
//         </div>
//       </div>,
//     ],
//   };

//   const openOptions = (option: string) => {
//     setOpenOption(option);
//     setSelectedOption(null); // Reset selected option when opening a new set of options
//   };

//   const closeOptions = () => {
//     setOpenOption(null);
//     setSelectedOption(null);
//   };

//   const selectOption = (index: number) => {
//     setSelectedOption(index);
//   };

//   function generateOptions(numOptions: number) {
//     const options = [];
//     for (let i = 1; i <= numOptions; i++) {
//       options.push(
//         <button
//           key={i}
//           onClick={() => selectOption(i)}
//           className={`m-2 p-2 ${
//             selectedOption === i ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Option {i}
//         </button>
//       );
//     }
//     return options;
//   }

//   const optionContent = (content: string) => (
//     <div className="p-4">
//       <p>{content}</p>
//       {buttonOptions[content]}
//     </div>
//   );

//   return (
//     <Transition show={isOpen} as={Fragment}>
//       <Dialog
//         as="div"
//         className="fixed inset-0 z-10 overflow-y-auto "
//         onClose={onClose}
//       >
//         <div className="  px-4 text-center ">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
//           </Transition.Child>
//           <span
//             className="inline-block h-screen align-middle"
//             aria-hidden="true"
//           >
//             &#8203;
//           </span>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <div className="z-100 my-8 inline-block h-screen  transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all lg:w-[689px]">
//               {/* Your content goes here */}
//               <div className="mb-4 border-b-[1px] border-[#D9D9D9] ">
//                 <p className="text-start text-[32px] font-bold">FILTERS </p>
//               </div>

//               <div className="float-left grid grid-cols-1 text-[24px]">
//                 {/* <button onClick={() => openOptions('Option 1')} className="  p-2">
//       Skill
//       </button> */}
//                 <button
//                   onClick={() => openOptions("Option 1")}
//                   className=" p-2 "
//                 >
//                   Skill
//                 </button>
//                 <button
//                   onClick={() => openOptions("Option 2")}
//                   className=" p-2"
//                 >
//                   Language
//                 </button>
//                 <button
//                   onClick={() => openOptions("Option 3")}
//                   className=" p-2"
//                 >
//                   Country
//                 </button>
//                 <button
//                   onClick={() => openOptions("Option 4")}
//                   className=" p-2"
//                 >
//                   Gender
//                 </button>
//                 <button
//                   onClick={() => openOptions("Option 5")}
//                   className=" p-2"
//                 >
//                   Offer
//                 </button>
//                 <button
//                   onClick={() => openOptions("Option 6")}
//                   className=" p-2"
//                 >
//                   Top Astrologers
//                 </button>
//                 <div className="justify-between py-4 text-[24px] font-bold md:flex lg:flex ">
//                   <div className="">
//                     <button className="">RESET</button>
//                   </div>
//                   <div className="">
//                     <button className="rounded-[10px] bg-gradient-to-b from-[#FF7646] to-[#FF0600]  px-2 text-white">
//                       APPLY
//                     </button>
//                   </div>
//                 </div>
//                 <OptionsPanel
//                   isOpen={openOption !== null}
//                   options={optionContent(openOption || "")}
//                   closePanel={closeOptions}
//                 />
//               </div>
//             </div>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// export default Popup;

// <div className=" ">
//   <div className="  z-10 bg-[#FFFFFF]  ">
//     {/* Add your form fields here */}
//     <div className="mb-4 border-b-[1px] border-[#D9D9D9]">
//       <p className="text-[32px] font-bold">FILTERS </p>
//     </div>
//     <div className=" md:flex lg:flex ">
//       <div className="border-b-[1px] border-[#D9D9D9] px-4 font-[Roboto] text-[24px] md:border-r-[1px]  lg:border-r-[1px]">
//         <div className="">
//           <button className="">Skill</button>
//         </div>
//         <div className="">
//           <button className="">Language</button>
//         </div>
//         <div className="">
//           <button className="">Country</button>
//         </div>
//         <div className="">
//           <button className="">Gender</button>
//         </div>
//         <div className="">
//           <button className="">Offer</button>
//         </div>
//         <div className="">
//           <button className="">Top Astrologers</button>
//         </div>
//       </div>
//       <div className="px-8 ">
//         <FilterOptions />
//       </div>
//     </div>
//     <div className="border-[#D9D9D9] lg:border-b-[1px]"></div>
//     <div className="justify-between py-4 text-[24px] font-bold md:flex lg:flex ">
//       <div className="">
//         <button className="">RESET</button>
//       </div>
//       <div className="">
//         <button className="rounded-[10px] bg-gradient-to-b from-[#FF7646] to-[#FF0600]  px-2 text-white">
//           APPLY
//         </button>
//       </div>
//     </div>
//   </div>
// </div>;
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
        // Add more options as needed
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

        // Add more options as needed
      ],
    },
    // Add more categories as needed
  ];

  useEffect(() => {
    // Set the first category as selected initially
    if (categories.length > 0) {
      setSelectedCategory(categories[0].id);
    }
  }, [isOpen]);
  const toggleFilter = () => {
    set;
  };
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
        {/* Categories on the left side */}
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

        {/* Options with checkboxes on the right side */}
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
            {selectedCategory &&
              categories
                .find((category) => category.id === selectedCategory)
                ?.options.slice(0, 10) // Display only the first 10 options
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
