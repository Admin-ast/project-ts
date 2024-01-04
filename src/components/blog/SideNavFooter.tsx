// import Image from "next/image";
// import Link from "next/link";
// import React, { Key } from "react";

// import { Button } from "@/components/forms";
// import Section from "../Section";

// type Props = {
//   headText: string;

//   subText: string;
// };
// const cardDetails = [
//   {
//     name: "Taurus",
//     img: "/assets/kundli/taurus.png",
//     link: "",
//     person: "Your Sign",
//   },
//   {
//     name: "Virgo",
//     img: "/assets/kundli/virgo.png",
//     link: "",
//     person: "Your Partner's Sign",
//   },
// ];

// const SideNavFooter = ({ headText, subText }: Props) => {
//   return (
//     <Section>
//       <div className="mt-10 w-[216px] rounded-[10px] border-[2px] border-black py-4  ">
//         <p className="text-center text-[12px] ">{headText}</p>
//         <div className="mt-[5px] text-center text-[12px] ">{subText}</div>
//         <div className="mt-[10px] flex justify-center  gap-[9px] ">
//           {cardDetails.map((item: any, index: Key) => (
//             <div key={index} className="">
//               <p className="text-center text-[8px] ">{item.person}</p>
//               <Link
//                 href={item.link}
//                 className=" flex  flex-col justify-end rounded-[10px]   border-[2px] border-[#DC6563]  bg-white shadow-xl"
//               >
//                 <div className="flex h-[78px]  w-[85px] items-center justify-center ">
//                   <Image
//                     src={item.img}
//                     alt={item.name}
//                     width={55}
//                     height={55}
//                     loading={"lazy"}
//                   />
//                 </div>
//                 <div className="h-[15px] w-[85px]">
//                   <p className="rounded-[10px] bg-[#DC6563] text-center text-[10px]     font-bold text-white ">
//                     {item.name}
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//         <div className="  mt-[23px] flex items-center justify-center">
//           <button className="rounded-[5px] bg-gradient-to-b from-[#fb7038] to-[#df625b]  px-4 py-2 text-[10px] font-semibold text-white">
//             {" "}
//             Check Your Love Compatibility
//           </button>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default SideNavFooter;

// import Image from "next/image";
// import Link from "next/link";
// import React, { Key, useState } from "react";

// import { Button } from "@/components/forms";
// import Section from "../Section";

// type Props = {
//   headText: string;
//   subText: string;
// };

// const cardDetails = [
//   {
//     name: "Taurus",
//     img: "/assets/kundli/taurus.png",
//     link: "",
//     person: "Your Sign",
//   },
//   {
//     name: "Virgo",
//     img: "/assets/kundli/virgo.png",
//     link: "",
//     person: "Your Partner's Sign",
//   },
// ];

// const SideNavFooter = ({ headText, subText }: Props) => {
//   const [selectedSign, setSelectedSign] = useState<string | null>(null);

//   const handleSignChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedSign(event.target.value);
//   };

//   return (

//       <div className=" rounded-[10px] border-[2px] border-[#DC6563] py-4">
//          <p className="text-center text-[12px] ">{headText}</p>
//          <p className="mt-[5px] text-center text-[12px]">{subText}</p>

//       <div className="mt-10 flex justify-center gap-4 items-center">
//         {cardDetails.map((item: any, index: Key) => (
//           <div
//             key={index}
//             className="flex flex-col text-center  rounded-[10px] p-4"
//           >
//            <label className="text-[8px] mb-2">{item.person}</label>
//             <div className="border-2 border-[#DC6563] rounded-[10px]">
//             <Link
//               href={item.link}
//               className="flex  justify-center mb-2"
//             >
//               <Image
//                 src={item.img}
//                 alt={item.name}
//                 width={55}
//                 height={55}
//                 loading={"lazy"}
//               />
//             </Link>
//             <div className="flex  ">
//               <select
//                 value={selectedSign || ""}
//                 onChange={handleSignChange}
//                 className="rounded-[5px] border-[2px] bg-[#DC6563] px-4 py-2 text-[10px] font-semibold "
//               >
//                 <option value="" disabled >
//                   Taurus
//                 </option>
//                 <option value="Leo">Leo</option>
//                 <option value="Gemini">Gemini</option>
//                 <option value="Libra">Libra</option>
//               </select>
//               {selectedSign && (
//                 <div className="">
//                   {/* <p className="rounded-[10px] bg-[#DC6563] text-center text-[10px] font-bold text-white">
//                     {item.name}
//                   </p> */}
//                 </div>
//               )}
//             </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-[23px] flex items-center justify-center">
//         <button className="rounded-[5px] bg-gradient-to-b from-[#fb7038] to-[#df625b] px-4 py-2 text-[10px] font-semibold text-white">
//           Check Your Love Compatibility
//         </button>
//       </div>
//       </div>

//   );
// };

// export default SideNavFooter;

import Image from "next/image";
import Link from "next/link";
import React, { Key, useState } from "react";

import { Button } from "@/components/forms";
import Section from "../Section";

type Props = {
  headText: string;
  subText: string;
};

type State = {
  selectedSign1: string | null;
  selectedSign2: string | null;
};

const cardDetails = [
  {
    name: "Taurus",
    img: "/assets/kundli/taurus.png",
    link: "",
    person: "Your Sign",
  },
  {
    name: "Virgo",
    img: "/assets/kundli/virgo.png",
    link: "",
    person: "Your Partner's Sign",
  },
];

const SideNavFooter = ({ headText, subText }: Props) => {
  const [state, setState] = useState<State>({
    selectedSign1: null,
    selectedSign2: null,
  });

  const handleSignChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState((prevState) => ({
      ...prevState,
      selectedSign1: event.target.value,
    }));
  };

  const handleSignChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState((prevState) => ({
      ...prevState,
      selectedSign2: event.target.value,
    }));
  };

  return (
    <div className="lg:pr-[10%]">
      <div className="rounded-[10px] border-[2px] border-[#DC6563] py-4 ">
        <p className="text-center text-[24px] font-bold">{headText}</p>
        <p className="mt-[5px] text-center text-[14px]">{subText}</p>

        <div className=" flex items-center  justify-center">
          {cardDetails.map((item: any, index: Key) => (
            <div
              key={index}
              className="flex flex-col rounded-[10px] p-4 text-center"
            >
              <label className="mb-2 text-[13px] font-bold">
                {item.person}
              </label>
              <div className="rounded-[10px] border-2 border-[#DC6563]">
                <Link href={item.link} className="mb-2 flex justify-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={55}
                    height={55}
                    loading={"lazy"}
                  />
                </Link>
                <div className="flex">
                  <select
                    value={state.selectedSign1 || ""}
                    onChange={handleSignChange1}
                    className="rounded-[5px] border-[2px] bg-[#DC6563] px-4 py-2 text-[10px] font-semibold text-white"
                  >
                    <option value="" disabled>
                      Select a Sign
                    </option>
                    {cardDetails.map((sign) => (
                      <option key={sign.name} value={sign.name}>
                        {sign.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[23px] flex items-center justify-center">
          <button className="rounded-[5px] bg-gradient-to-b from-[#fb7038] to-[#ff0600] px-4 py-2 text-[10px] font-semibold text-white">
            Check Your Love Compatibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavFooter;
