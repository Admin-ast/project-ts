// // import Image from 'next/image'
// // import React from 'react'

// // type Props = {}

// // const Missing = (props: Props) => {
// //   return (
// //    <div className="">
// //      <div className=" mt-[35px] text-white justify-between bg-gradient-to-b from-[#ef824c] to-[#d84f50]  lg:flex  ">
// //         <div className="mt-5">
// //           <div className="px-2">
// //             <p className="   text-3xl   font-bold ">
// //               Missing Spark In Marriage?
// //             </p>
// //             <p className=" mt-[10px] text-base">
// //               Get solutions from astrologers
// //             </p>
// //           </div>

// //           <div className=" mt-[25px] mb-[48px]  bg-white w-full ">

// // <svg xmlns="http://www.w3.org/2000/svg" width="1135" height="49" viewBox="0 0 1135 49" fill="none">
// //   <path d="M0 0L1135 1.75L1113.43 49H0V0Z" fill="white"/>
// //   <foreignObject x="10%" y="10%" width="80%" height="80%">
// //         <div  className="text-black ">
// //           <p className="text-[22px] font-semibold">Free Chat with Astrologer</p>
// //         </div>
// //       </foreignObject>
// // </svg>

// //           </div>
// //         </div>
// //         <div className="    ">
// //         <svg xmlns="http://www.w3.org/2000/svg" width="386" height="341" viewBox="0 0 386 341" fill="none">
// //   <path d="M1.52713 340L149.384 1H389V340H1.52713Z" fill="white" stroke="#DC6563" stroke-width="2"/>
// //   <foreignObject x="30%" y="0%" width="204" height="341">
// //           <img
// //             src="/assets/blog/bloggirl.png"
// //             alt="bloggirl"

// //             className="object-cover w-full h-full"
// //           />
// //         </foreignObject>
// // </svg>

// //         </div>
// //       </div>
// //    </div>
// //   )
// // }

// // export default Missing

// import Image from 'next/image';
// import React from 'react';

// type Props = {};

// const Missing = (props: Props) => {
//   return (
//     <div className=" ">
//       <div className=" text-white bg-gradient-to-b from-[#ef824c] to-[#d84f50] lg:flex">
//         <div className="">
//           <div className="p-4">
//             <p className="text-3xl font-bold lg:text-4xl">
//               Missing Spark In Marriage?
//             </p>
//             <p className="mt-2 text-base lg:text-lg">
//               Get solutions from astrologers
//             </p>
//           </div>

//           <div className=" bg-white ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="100%"
//               height="45"
//               viewBox="0 0 1150 45"
//               fill="none"
//             >
//               <path d="M0 0L1135 1.75L1113.43 49H0V0Z" fill="white" />
//               <foreignObject x="10%" y="10%" width="80%" height="80%">
//                 <div className="text-black">
//                   <p className="text-lg lg:text-xl font-semibold">
//                     Free Chat with Astrologer
//                   </p>
//                 </div>
//               </foreignObject>
//             </svg>
//           </div>
//         </div>
//         <div className="">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="100%"
//             height="300"
//             viewBox="0 0 495 300"
//             fill="none"
//           >
//             <path
//               d="M1.52713 340L149.384 1H389V340H1.52713Z"
//               fill="white"
//               stroke="#DC6563"
//               stroke-width="2"
//             />
//             <foreignObject x="5%" y="5%" width="90%" height="90%">
//               <Image
//                 src="/assets/blog/bloggirl.png"
//                 alt="bloggirl"
//                 layout="responsive"
//                 objectFit="cover"
//                 width={386}
//                 height={341}
//               />
//             </foreignObject>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Missing;

import Image from "next/image";
import React from "react";

type Props = {};

const Missing = (props: Props) => {
  return (
    <div id="NewRootRoot" className="flex w-full flex-row items-start">
      <div className="bg-50%_50% flex w-full flex-row items-start gap-0 bg-[linear-gradient(180deg,_rgba(255,_79,_0,_0.8)_0%,rgba(202,_33,_39,_0.72)_100%)] bg-cover bg-no-repeat bg-blend-normal">
        <div className="mt-16 flex w-4/5 flex-col items-start gap-10">
          <div className="ml-16 flex flex-col items-start  gap-4">
            <div className="text-center font-serif text-4xl font-bold text-white">
              Missing Spark In Marriage?
            </div>
            <div className="text-justify font-sans  text-xl leading-[30.1px] tracking-[0.22] text-white">
              Get solutions from astrologers
            </div>
          </div>
          <div
            style={{ marginTop: "112px" }}
            className=" bg-50%_50% absolute flex h-12 w-full flex-row items-start bg-[url(https://file.rendit.io/n/tUfQrhZdnan0NZ7Vy4Tt.svg)] bg-cover bg-no-repeat px-16 pt-2 text-justify font-sans text-xl font-semibold leading-[30.1px] tracking-[0.22] text-black/80 bg-blend-normal"
          >
            Free Chat with Astrologer
          </div>
        </div>

        <img
          src="/assets/home/girl.png"
          className="z-50"
          alt="Hmmletmethinkthoughtfulyoungwomanplanningsomethinglookingupperleftcornerponderingimagingthingsemptyspacewhitebackground"
        />
      </div>
    </div>
  );
};

export default Missing;
