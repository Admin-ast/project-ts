// import React, { useState } from 'react'
// import { FaFilter } from 'react-icons/fa'

// type Props = {}

// const Filter = (props: Props) => {
//     const [isOpen,setIsOpen]=useState(false)

//     const toggleOptions=()=>{
//         setIsOpen((prev)=>!prev)
//     }
//   return (
//     <div className="">
//         <button onClick={toggleOptions}
//         className=''
//         >
//             {isOpen ? (
//                 <p className="">Filter
//                 <span className=""><FaFilter/></span>
//                 </p>

//             ):(
//                 <p className="">Filter
//                 <span className=""><FaFilter/></span>
//                 </p>
//             )
//         }
//         </button>

//         {isOpen && (
//             <div className="">
//                 <p className="text-[32px] font-bold font-[Roboto]">Filter</p>
//             </div>
//         )}
//     </div>
//   )
// }

// export default Filter

// components/FilterForm.tsx

import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const Filter = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      {!showForm ? (
        <div className="flex items-center gap-2 rounded-[5px] border-[1px] border-[#D9D9D9] px-2 ">
          <button onClick={toggleForm} className="  ">
            Filter
          </button>
          <FaFilter className="text-[#D9D9D9]" />
        </div>
      ) : (
        <div className="relative ">
          <div className="absolute  z-10 bg-[#FFFFFF]  ">
            {/* Add your form fields here */}
            <div className="mb-4 border-b-[1px] border-[#D9D9D9]">
              <p className="text-[32px] font-bold">Filter </p>
            </div>
            <div className="border-r-[1px] border-[#D9D9D9] md:flex lg:flex">
              <div className="font-[Roboto] text-[24px]">
                <div className="">
                  <button className="">Skill</button>
                </div>
                <div className="">
                  <button className="">Language</button>
                </div>
                <div className="">
                  <button className="">Country</button>
                </div>
                <div className="">
                  <button className="">Gender</button>
                </div>
                <div className="">
                  <button className="">Offer</button>
                </div>
                <div className="">
                  <button className="">Top Astrologers</button>
                </div>
              </div>

              <div className="">{/* is div me options aayenge */}</div>
            </div>
            <div className="justify-between text-[24px] font-bold lg:flex ">
              <div className="">
                <button className="">RESET</button>
              </div>
              <div className="">
                <button className="rounded-[10px] bg-gradient-to-b from-[#FF7646] to-[#FF0600]  px-2 text-white">
                  APPLY
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
