// import Link from "next/link";
// import React from "react";
// import UsersCard from "./UsersCard";
// import Card from "./Card";
// type Props={}
// const CallingHistory = ({}: Props) => {
// const Tabss = () => {
  // const [openTab, setOpenTab] = React.useState(1);
  // return (
  //   <>
  //     <div className="">
  //       <div className="mx-auto px-4 pt-4 lg:max-w-7xl">
  //         <div className="w-full">
  //           <ul
  //             className="mb-0 flex list-none flex-row flex-wrap pt-3 pb-4"
  //             role="tablist"
  //           >
  //             <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
  //               <a 
  //                 className={
  //                   "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
  //                   (openTab === 1
  //                     ? "bg-red-600 text-white"
  //                     : "text-blueGray-600 bg-white")
  //                 }
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   setOpenTab(1);
  //                 }}
  //                 data-toggle="tab"
  //                 href="#link1"
  //                 role="tablist"
  //               >
  //                 Call
  //               </a>
  //             </li>
  //             <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
  //               <a
  //                 className={
  //                   "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
  //                   (openTab === 2
  //                     ? "bg-red-600 text-white"
  //                     : "text-blueGray-600 bg-white")
  //                 }
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   setOpenTab(2);
  //                 }}
  //                 data-toggle="tab"
  //                 href="#link2"
  //                 role="tablist"
  //               >
  //                 Chat
  //               </a>
  //             </li>
  //             <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
  //               <a
  //                 className={
  //                   "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
  //                   (openTab === 3
  //                     ? "bg-red-600 text-white"
  //                     : "text-blueGray-600 bg-white")
  //                 }
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   setOpenTab(3);
  //                 }}
  //                 data-toggle="tab"
  //                 href="#link3"
  //                 role="tablist"
  //               >
  //                 Report
  //               </a>
  //             </li>
  //             <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
  //               <a
  //                 className={
  //                   "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
  //                   (openTab === 4
  //                     ? "bg-red-600 text-white"
  //                     : "text-blueGray-600 bg-white")
  //                 }
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   setOpenTab(4);
  //                 }}
  //                 data-toggle="tab"
  //                 href="#link4"
  //                 role="tablist"
  //               >
  //                 AstrosevaTalk Mall
  //               </a>
  //             </li>
  //           </ul>
  //           {/* 2nd tab start */}
  //           <ul
  //             className="mb-0 flex list-none flex-row flex-wrap pt-3 pb-4"
  //             role="tablist"
  //           >
  //             <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
  //               <a
  //                 className={
  //                   "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
  //                   (openTab === 10
  //                     ? "bg-red-600 text-white"
  //                     : "text-blueGray-600 bg-white")
  //                 }
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   setOpenTab(10);
  //                 }}
  //                 data-toggle="tab"
  //                 href="#link10"
  //                 role="tablist"
  //               >
  //                 All
  //               </a>
  //             </li>
  //             <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
  //               <a
  //                 className={
  //                   "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
  //                   (openTab === 11
  //                     ? "bg-red-600 text-white"
  //                     : "text-blueGray-600 bg-white")
  //                 }
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   setOpenTab(11);
  //                 }}
  //                 data-toggle="tab"
  //                 href="#link11"
  //                 role="tablist"
  //               >
  //                 Suggested
  //               </a>
  //             </li>
  //             <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
  //               <a
  //                 className={
  //                   "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
  //                   (openTab === 12
  //                     ? "bg-red-600 text-white"
  //                     : "text-blueGray-600 bg-white")
  //                 }
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   setOpenTab(12);
  //                 }}
  //                 data-toggle="tab"
  //                 href="#link12"
  //                 role="tablist"
  //               >
  //                 Purchased
  //               </a>
  //             </li>
  //           </ul>
  //           <div className="relative mb-6 flex w-full min-w-0 flex-col break-words bg-white ">
  //             <div className="flex-auto">
  //               <div className="tab-content tab-space">
  //                 <div
  //                   className={openTab === 1 ? "block" : "hidden"}
  //                   id="link1"
  //                 >
  //                   <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
  //                     <Card
                     
                     
  //                     name="Priya"
                     
                     
                     
                      
  //                     copy="chat"
  //                     orderDate="26 April 2023,"
  //                     orderTime="02:50 PM"
  //                     calltype="Rs 5/min session"
  //                     duration="11 miniutes"
  //                     rate="Rs 18/min"
  //                     status="Completed"
  //                     deduction={198}
  //                     review="Thank you for giving...."
  //                     btn1="Suggest Remedy"
                     
  //                     />
  //                     {/* <UsersCard
  //                       id={123456789}
  //                       name="A"
  //                       Name="Apoorva Mishra"
  //                       service="CALL"
  //                       date="Jul 25,2023"
  //                     />
  //                     <UsersCard
  //                       id={123456789}
  //                       name="A"
  //                       Name="Apoorva Mishra"
  //                       service="CALL"
  //                       date="Jul 25,2023"
  //                     />
  //                     <UsersCard
  //                       id={123456789}
  //                       name="A"
  //                       Name="Apoorva Mishra"
  //                       service="CALL"
  //                       date="Jul 25,2023"
  //                     /> */}
  //                   </div>
  //                 </div>
  //                 <div
  //                   className={openTab === 2 ? "block" : "hidden"}
  //                   id="link2"
  //                 >
  //                   <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
  //                     <UsersCard
  //                       id={123456789}
  //                       name="A"
  //                       Name="Apoorva Mishra"
  //                       service="CALL"
  //                       date="Jul 25,2023"
  //                     />
  //                     <UsersCard
  //                       id={123456789}
  //                       name="A"
  //                       Name="Apoorva Mishra"
  //                       service="CALL"
  //                       date="Jul 25,2023"
  //                     />
  //                     <UsersCard
  //                       id={123456789}
  //                       name="A"
  //                       Name="Apoorva Mishra"
  //                       service="CALL"
  //                       date="Jul 25,2023"
  //                     />
  //                   </div>
  //                 </div>
  //                 <div
  //                   className={openTab === 3 ? "block" : "hidden"}
  //                   id="link3"
  //                 >
  //                   <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
  //                     <UsersCard
  //                       id={123456789}
  //                       name="A"
  //                       Name="Apoorva Mishra"
  //                       service="CALL"
  //                       date="Jul 25,2023"
  //                     />
  //                     <UsersCard
  //                       id={123456789}
  //                       name="A"
  //                       Name="Apoorva Mishra"
  //                       service="CALL"
  //                       date="Jul 25,2023"
  //                     />
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           {/* 2nd tab content start */}
  //           <div className="relative mb-6 flex w-full min-w-0 flex-col break-words bg-white ">
  //             <div className="flex-auto">
  //               <div className="tab-content tab-space">
  //                 <div
  //                   className={openTab === 10 ? "block" : "hidden"}
  //                   id="link1"
  //                 >
  //                   <p>
  //                     Completely synergize resource taxing relationships via
  //                     premier niche markets. Professionally cultivate one-to-one
  //                     customer service with robust ideas.
  //                     <br />
  //                     <br />
  //                     Dynamically innovate resource-leveling customer service
  //                     for state of the art customer service.
  //                   </p>
  //                 </div>
  //                 <div
  //                   className={openTab === 11 ? "block" : "hidden"}
  //                   id="link2"
  //                 >
  //                   <p>
  //                     Completely synergize resource taxing relationships via
  //                     premier niche markets. Professionally cultivate one-to-one
  //                     customer service with robust ideas.
  //                     <br />
  //                     <br />
  //                     Dynamically innovate resource-leveling customer service
  //                     for state of the art customer service.
  //                   </p>
  //                 </div>
  //                 <div
  //                   className={openTab === 12 ? "block" : "hidden"}
  //                   id="link3"
  //                 >
  //                   <p>
  //                     Efficiently unleash cross-media information without
  //                     cross-media value. Quickly maximize timely deliverables
  //                     for real-time schemas.
  //                     <br />
  //                     <br /> Dramatically maintain clicks-and-mortar solutions
  //                     without functional solutions.
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
//   );
// };


// export default Tabss;

import React from 'react'
import Link from "next/link";

import UsersCard from "./UsersCard";
import Card from "./Card";
import AstrosevaTalkHistorycard from '@/components/admin/astrosevatalk histrory/AstrosevaTalkHistorycard';
import RemediesCard from '@/components/admin/remedies/RemediesCard';
type Props = {}

const Tabss = (props: Props) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="">
        <div className="mx-auto px-4 pt-4 lg:max-w-7xl">
          <div className="w-full">
            <ul
              className="mb-0 flex list-none flex-row flex-wrap pt-3 pb-4"
              role="tablist"
            >
              <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                <a 
                  className={
                    "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
                    (openTab === 1
                      ? "bg-red-600 text-white"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Call
                </a>
              </li>
              <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                <a
                  className={
                    "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
                    (openTab === 2
                      ? "bg-red-600 text-white"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Chat
                </a>
              </li>
              <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                <a
                  className={
                    "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
                    (openTab === 3
                      ? "bg-red-600 text-white"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Report
                </a>
              </li>
              <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                <a
                  className={
                    "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
                    (openTab === 4
                      ? "bg-red-600 text-white"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  AstrosevaTalk Mall
                </a>
              </li>
            </ul>
            {/* 2nd tab start */}
            <ul
              className="mb-0 flex list-none flex-row flex-wrap pt-3 pb-4"
              role="tablist"
            >
              <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                <a
                  className={
                    "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
                    (openTab === 10
                      ? "bg-red-600 text-white"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(10);
                  }}
                  data-toggle="tab"
                  href="#link10"
                  role="tablist"
                >
                  All
                </a>
              </li>
              <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                <a
                  className={
                    "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
                    (openTab === 11
                      ? "bg-red-600 text-white"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(11);
                  }}
                  data-toggle="tab"
                  href="#link11"
                  role="tablist"
                >
                  Suggested
                </a>
              </li>
              <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                <a
                  className={
                    "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
                    (openTab === 12
                      ? "bg-red-600 text-white"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(12);
                  }}
                  data-toggle="tab"
                  href="#link12"
                  role="tablist"
                >
                  Purchased
                </a>
              </li>
            </ul>
            <div className="relative mb-6 flex w-full min-w-0 flex-col break-words bg-white ">
              <div className="flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                      <Card
    name="Priya"
        copy="chat"
                      orderDate="26 April 2023,"
                      orderTime="02:50 PM"
                      calltype="Rs 5/min session"
                      duration="11 miniutes"
                      rate="Rs 18/min"
                      status="Completed"
                      deduction={198}
                      review="Thank you for giving...."
                      btn1="Share with your friends"
                     
                      />
                     
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                    <Card
    name="Priya"
        copy="chat"
                      orderDate="26 April 2023,"
                      orderTime="02:50 PM"
                      calltype="Rs 5/min session"
                      duration="11 miniutes"
                      rate="Rs 18/min"
                      status="Completed"
                      deduction={198}
                      review="Thank you for giving...."
                      btn1="Share with your friends"
                     
                      />
                    </div>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                    <Card
    name="Priya"
        copy="chat"
                      orderDate="26 April 2023,"
                      orderTime="02:50 PM"
                      calltype="Rs 5/min session"
                      duration="11 miniutes"
                      rate="Rs 18/min"
                      status="Completed"
                      deduction={198}
                      review="Thank you for giving...."
                      btn1="Share with your friends"
                     
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd tab content start */}
            <div className="relative mb-6 flex w-full min-w-0 flex-col break-words bg-white ">
              <div className="">
                <div className=" grid grid-cols-3">
                  <div
                    className={openTab === 10 ? "block" : "hidden"}
                    id="link1"
                  >
                     <AstrosevaTalkHistorycard
              name="Nikita"
              num={1015573}
              product="Crystal with Tulsi Bracelet"
              id={245674}
              date="23 Jul 2023"
              time="7:33PM"
              details="Details"
              status="Closed"
              category="Trending Wears"
              quantity={1}
            />
                  </div>
                  <div
                    className={openTab === 11 ? "block" : "hidden"}
                    id="link2"
                  >
                   <RemediesCard
              categoryName="Trending Wears"
              productName="5 Mukhi Rudraksha Tulsi Bracelet"
              name="Shaurya "
              performedBy="AstrosevaTalk"
              date="21 Jul 23"
              time="7:33 PM"
              price="Rs 1000"
              type="Paid Remedy"
              status=" Not Booked"
              description=" Wear this ..also .. try to drink kesar milk or water either everyday or on Thursday.. Try to donate pencil lead black stuff Give coins to needy not to kids .. read hanuman chalisha"
              productNum={1292}
              btn1="Suggest Next Remedy"
            />
                  </div>
                  <div
                    className={openTab === 12 ? "block" : "hidden"}
                    id="link3"
                  >
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                      <br />
                      <br /> Dramatically maintain clicks-and-mortar solutions
                      without functional solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabss
