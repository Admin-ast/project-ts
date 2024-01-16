// import Image from "next/image";
// import Link from "next/link";
// import React, { Key } from "react";
// import Section from "../../Section";
// import { IoIosArrowDown } from "react-icons/io";

// type Props = {
//   headText: string;
//   // cardDetails: any;
//   subText: string;
//   btn: string;
// };
// const cardDetails=[
//   {
//     name: "Taurus",
//     img: "/assets/kundli/taurus.png",
//     link: "",
//   },
//   {
//     name: "Virgo",
//     img: "/assets/kundli/virgo.png",
//     link: "",
//   },
// ]
// const ChooseSign = ({ headText, subText, btn }: Props) => {
//   return (
//     <Section>
//       <div className="space-y-6 py-8  lg:py-[50px]">
//         <div className="text-center text-[36px] font-bold">{headText}</div>
//         <div className="mb-[42px] flex flex-wrap justify-center gap-5">
//           {cardDetails.map((item: any, index: Key) => (
//             <Link
//               href={item.link}
//               key={index}
//               className=" flex w-full max-w-[400px] flex-col justify-end rounded-b-[20px]  rounded-t-3xl border-[3px] border-[#DC6563]  bg-white shadow-xl md:w-[278px]"
//             >
//               <div className="mx-auto h-[80%] py-5 ">
//                 <Image
//                   src={item.img}
//                   alt={item.name}
//                   width={150}
//                   height={275}
//                   loading={"lazy"}
//                 />
//               </div>
              
//               <div className="relative">
//               <p className="rounded-[10px]  bg-[#DC6563] py-[11px]  text-center font-bold text-white lg:text-[22px]">
//                 {item.name}
//               </p>
              
             
//               <IoIosArrowDown className="absolute top-5 right-8 text-white"/>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div>{subText}</div>
//       <div className="mx-auto mt-5 w-fit cursor-pointer rounded-2xl border  bg-gradient-to-b from-[#fb7038]  to-[#df625b] py-3 px-10 text-center text-[22px] font-bold text-white">
//         {btn}
//       </div>
//     </Section>
//   );
// };

// export default ChooseSign;

// import Section from "@/components/Section";
// import Image from "next/image";
// import Link from "next/link";
// import React, { Key, useState } from "react";

// import { IoIosArrowDown } from "react-icons/io";

// type Props = {
//   headText: string;
//   subText: string;
//   btn: string;
// };

// const cardDetails = [
//   {
//     link: "/horoscope/daily-horoscope/aries",
//     src: "/assets/kundli/aries.png",
//     icon: "/assets/single-horoscope/aries.svg",
//     id: "Aries",
//     name: "Aries",
//   },
//   {
//     link: "/horoscope/daily-horoscope/taurus",
//     src: "/assets/kundli/taurus.png",
//     icon: "/assets/single-horoscope/taurus.svg",
//     id: "Taurus",
//     name: "Taurus",
//   },
//   {
//     link: "/horoscope/daily-horoscope/gemini",
//     src: "/assets/kundli/gemini.png",
//     icon: "/assets/single-horoscope/gemini.svg",
//     id: "Gemini",
//     name: "Gemini",
//   },
//   {
//     link: "/horoscope/daily-horoscope/cancer",
//     src: "/assets/kundli/cancer.png",
//     icon: "/assets/single-horoscope/cancer.svg",
//     id: "Cancer",
//     name: "Cancer",
//   },
//   {
//     link: "/horoscope/daily-horoscope/leo",
//     src: "/assets/kundli/leo.png",
//     icon: "/assets/single-horoscope/leo.svg",
//     id: "Leo",
//     name: "Leo",
//   },
//   {
//     link: "/horoscope/daily-horoscope/virgo",
//     src: "/assets/kundli/virgo.png",
//     icon: "/assets/single-horoscope/virgo.svg",
//     id: "Virgo",
//     name: "Virgo",
//   },
//   {
//     link: "/horoscope/daily-horoscope/libra",
//     src: "/assets/kundli/libra.png",
//     icon: "/assets/single-horoscope/libra.svg",
//     id: "Libra",
//     name: "Libra",
//   },
//   {
//     link: "/horoscope/daily-horoscope/scorpio",
//     src: "/assets/kundli/scorpio.png",
//     icon: "/assets/single-horoscope/scorpio.svg",
//     id: "Scorpio",
//     name: "Scorpio",
//   },
//   {
//     link: "/horoscope/daily-horoscope/sagittarius",
//     src: "/assets/kundli/sagittarius.png",
//     icon: "/assets/single-horoscope/sagittarius.svg",
//     id: "Sagittarius",
//     name: "Sagittarius",
//   },
//   {
//     link: "/horoscope/daily-horoscope/capricorn",
//     src: "/assets/kundli/capricorn.png",
//     icon: "/assets/single-horoscope/capricorn.svg",
//     id: "Capricorn",
//     name: "Capricorn",
//   },
//   {
//     link: "/horoscope/daily-horoscope/aquarius",
//     src: "/assets/kundli/aquarius.png",
//     icon: "/assets/single-horoscope/aquarius.svg",
//     id: "Aquarius",
//     name: "Aquarius",
//   },
//   {
//     link: "/horoscope/daily-horoscope/pisces",
//     src: "/assets/kundli/pisces.png",
//     icon: "/assets/single-horoscope/pisces.svg",
//     id: "Pisces",
//     name: "Pieces",
//   },
// ];;

// const ChooseSign = ({ headText, subText, btn }: Props) => {
//   const [selectedSign, setSelectedSign] = useState<string | null>(null);
//   const [showOptions, setShowOptions] = useState<boolean>(false);

//   const handleSignChange = (sign: string) => {
//     setSelectedSign(sign);
//     setShowOptions(false);
//   };

//   return (
//     <Section>
//       <div className="space-y-6 py-8 lg:py-[50px]">
//         <div className="text-center text-[36px] font-bold">{headText}</div>
//         <div className="mb-[42px] flex flex-wrap justify-center gap-5">
//           {cardDetails.map((item: any, index: Key) => (
//             <div
//               key={index}
//               className="relative flex flex-col w-full max-w-[400px] justify-end rounded-b-[20px]  rounded-t-3xl border-[3px] border-[#DC6563]  bg-white shadow-xl md:w-[278px]"
//             >
//               <div className="mx-auto h-[80%] py-5">
//                 <Image
//                   src={item.img}
//                   alt={item.name}
//                   width={150}
//                   height={275}
//                   loading={"lazy"}
//                 />
//               </div>
//               <div className="relative">
//                 <p
//                   className="rounded-[10px]  bg-[#DC6563] py-[11px]  text-center font-bold text-white lg:text-[22px]"
//                   onClick={() => setShowOptions(!showOptions)}
//                 >
//                   {item.name}
//                   <IoIosArrowDown className="absolute top-2 right-2 text-white" />
//                 </p>
//                 {showOptions && (
//                   <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg">
//                     <ul>
//                       {cardDetails.map((zodiacItem: any) => (
//                         <li
//                           key={zodiacItem.name}
//                           onClick={() => handleSignChange(zodiacItem.name)}
//                           className="cursor-pointer py-1 px-4 hover:bg-gray-200"
//                         >
//                           {zodiacItem.name}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>{subText}</div>
//       <div className="mx-auto mt-5 w-fit cursor-pointer rounded-2xl border  bg-gradient-to-b from-[#fb7038]  to-[#df625b] py-3 px-10 text-center text-[22px] font-bold text-white">
//         {btn}
//       </div>
//     </Section>
//   );
// };

// export default ChooseSign;

// const ChooseSign = ({ headText, subText, btn }: Props) => {
//   const [selectedSign, setSelectedSign] = useState<string | null>(null);
//   const [showOptions, setShowOptions] = useState<boolean>(false);

//   const handleSignChange = (sign: string) => {
//     setSelectedSign(sign);
//     setShowOptions(false);
//   };

//   return (
//     <Section>
//       <div className="space-y-6 py-8 lg:py-[50px]">
//         <div className="text-center text-[36px] font-bold">{headText}</div>
//         <div className="mb-[42px] flex flex-wrap justify-center gap-5">
//           {cardDetails.map((item: any, index: Key) => (
//             <div
//               key={index}
//               className="relative flex flex-col w-full max-w-[400px] justify-end rounded-b-[20px]  rounded-t-3xl border-[3px] border-[#DC6563]  bg-white shadow-xl md:w-[278px]"
//             >
//               <div className="mx-auto h-[80%] py-5">
//                 <Image
//                   src={item.src}  {/* Fix: Use item.src instead of item.img */}
//                   alt={item.name}
//                   width={150}
//                   height={275}
//                   loading={"lazy"}
//                 />
//               </div>
//               <div className="relative">
//                 <p
//                   className="rounded-[10px]  bg-[#DC6563] py-[11px]  text-center font-bold text-white lg:text-[22px]"
//                   onClick={() => setShowOptions(!showOptions)}
//                 >
//                   {item.name}
//                   <IoIosArrowDown className="absolute top-2 right-2 text-white" />
//                 </p>
//                 {showOptions && (
//                   <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg">
//                     <ul>
//                       {cardDetails.map((zodiacItem: any) => (
//                         <li
//                           key={zodiacItem.name}
//                           onClick={() => handleSignChange(zodiacItem.name)}
//                           className="cursor-pointer py-1 px-4 hover:bg-gray-200"
//                         >
//                           {zodiacItem.name}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>{subText}</div>
//       <div className="mx-auto mt-5 w-fit cursor-pointer rounded-2xl border  bg-gradient-to-b from-[#fb7038]  to-[#df625b] py-3 px-10 text-center text-[22px] font-bold text-white">
//         {btn}
//       </div>
//     </Section>
//   );
// };

// export default ChooseSign;

// import Section from "@/components/Section";
// import Image from "next/image";
// import Link from "next/link";
// import React, { Key, useState } from "react";

// import { IoIosArrowDown } from "react-icons/io";

// type Props = {
//   headText: string;
//   subText: string;
//   btn: string;
// };

// const cardDetails = [
//   {
//     link: "/horoscope/daily-horoscope/aries",
//     src: "/assets/kundli/aries.png",
//     icon: "/assets/single-horoscope/aries.svg",
//     id: "Aries",
//     name: "Aries",
//   },
//   {
//     link: "/horoscope/daily-horoscope/taurus",
//     src: "/assets/kundli/taurus.png",
//     icon: "/assets/single-horoscope/taurus.svg",
//     id: "Taurus",
//     name: "Taurus",
//   },
//   // ... other zodiac sign details
// ];

// const ChooseSign = ({ headText, subText, btn }: Props) => {
//   const [selectedSign, setSelectedSign] = useState<string | null>(null);
//   const [showOptions, setShowOptions] = useState<boolean>(false);

//   const handleSignChange = (sign: string) => {
//     setSelectedSign(sign);
//     setShowOptions(false);
//   };

//   return (
//     <Section>
//       <div className="space-y-6 py-8 lg:py-[50px]">
//         <div className="text-center text-[36px] font-bold">{headText}</div>
//         <div className="mb-[42px] flex flex-wrap justify-center gap-5">
//           {cardDetails.map((item: any, index: Key) => (
//             <div
//               key={index}
//               className="relative flex flex-col w-full max-w-[400px] justify-end rounded-b-[20px]  rounded-t-3xl border-[3px] border-[#DC6563]  bg-white shadow-xl md:w-[278px]"
//             >
//               <div className="mx-auto h-[80%] py-5">
//                 <Image
//                   src={item.src}  {/* Fix: Use item.src instead of item.img */}
//                   alt={item.name}
//                   width={150}
//                   height={275}
//                   loading={"lazy"}
//                 />
//               </div>
//               <div className="relative">
//                 <p
//                   className="rounded-[10px]  bg-[#DC6563] py-[11px]  text-center font-bold text-white lg:text-[22px]"
//                   onClick={() => setShowOptions(!showOptions)}
//                 >
//                   {item.name}
//                   <IoIosArrowDown className="absolute top-2 right-2 text-white" />
//                 </p>
//                 {showOptions && (
//                   <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg">
//                     <ul>
//                       {cardDetails.map((zodiacItem: any) => (
//                         <li
//                           key={zodiacItem.name}
//                           onClick={() => handleSignChange(zodiacItem.name)}
//                           className="cursor-pointer py-1 px-4 hover:bg-gray-200"
//                         >
//                           {zodiacItem.name}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>{subText}</div>
//       <div className="mx-auto mt-5 w-fit cursor-pointer rounded-2xl border  bg-gradient-to-b from-[#fb7038]  to-[#df625b] py-3 px-10 text-center text-[22px] font-bold text-white">
//         {btn}
//       </div>
//     </Section>
//   );
// };

// export default ChooseSign;

// Import necessary libraries
import Image from "next/image";
import Link from "next/link";
import React, { Key, useState } from "react";
import Section from "../../Section";
import { IoIosArrowDown } from "react-icons/io";

// Define the Props type
type Props = {
  headText: string;
  subText: string;
  btn: string;
};

// Define the cardDetails array
const cardDetails = [
  {
    link: "/horoscope/daily-horoscope/aries",
    src: "/assets/kundli/aries.png",
    icon: "/assets/single-horoscope/aries.svg",
    id: "Aries",
    name: "Aries",
  },
  {
    link: "/horoscope/daily-horoscope/taurus",
    src: "/assets/kundli/taurus.png",
    icon: "/assets/single-horoscope/taurus.svg",
    id: "Taurus",
    name: "Taurus",
  },
  
  // ... other zodiac sign details
];

// Define the ChooseSign component
const ChooseSign = ({ headText, subText, btn }: Props) => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleSignChange = (sign: string) => {
    setSelectedSign(sign);
    setShowOptions(false);
  };

  return (
    <Section>
      <div className="space-y-6 py-8 lg:py-[50px]">
        <div className="text-center text-[36px] font-bold">{headText}</div>
        <div className="mb-[42px] flex flex-wrap justify-center gap-5">
          {cardDetails.map((item: any, index: Key) => (
            <div
              key={index}
              className="relative flex flex-col w-full max-w-[400px] justify-end rounded-b-[20px]  rounded-t-3xl border-[3px] border-[#DC6563]  bg-white shadow-xl md:w-[278px]"
            >
              <div className="mx-auto h-[80%] py-5">
                <Image
                  src={item.src} // Use item.src instead of item.img
                  alt={item.name}
                  width={150}
                  height={275}
                  loading={"lazy"}
                />
              </div>
              <div className="relative">
                <p
                  className="rounded-[10px]  bg-[#DC6563] py-[11px]  text-center font-bold text-white lg:text-[22px]"
                  onClick={() => setShowOptions(!showOptions)}
                >
                  {item.name}
                  <IoIosArrowDown className="absolute top-2 right-2 text-white" />
                </p>
                {showOptions && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg">
                    <ul>
                      {cardDetails.map((zodiacItem: any) => (
                        <li
                          key={zodiacItem.name}
                          onClick={() => handleSignChange(zodiacItem.name)}
                          className="cursor-pointer py-1 px-4 hover:bg-gray-200"
                        >
                          {zodiacItem.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>{subText}</div>
      <div className="mx-auto mt-5 w-fit cursor-pointer rounded-2xl border  bg-gradient-to-b from-[#fb7038]  to-[#df625b] py-3 px-10 text-center text-[22px] font-bold text-white">
        {btn}
      </div>
    </Section>
  );
};

export default ChooseSign;
