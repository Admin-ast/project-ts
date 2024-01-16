import React from "react";
import Sidebar from "../dashboard/Sidebar";
import CommonBtns from "../CommonBtns";
import ViewMore from "../ViewMore";
import RemediesCard from "@/components/admin/remedies/RemediesCard";
import Btns from "./Btns";
import Link from "next/link";

type Props = {};

const AllProducts = (props: Props) => {
  return (
    <div className="">
      <div
        className="h-[78px]
   w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="min-h-screen  lg:w-3/4">
          <div className="flex ">
            <div className="mt-16 flex items-center justify-center gap-4">
              <p className="text-[20px] font-bold">AstrosevaTalk Mall</p>
            </div>

            <div className="mt-4 gap-5 md:flex lg:flex">
              <Link
                href="/admin/astrosevatalkmall/allproducts"
                className=" mt-16 rounded-[10px] border-[1px] border-[#da6468] py-2 px-5 font-bold  hover:bg-[#da6468]"
              >
                All
              </Link>

              <div className="mt-[65px] grid grid-rows-2 gap-5 md:flex lg:flex">
                <Link href="/admin/astrosevatalkmall/addnew">
                  {" "}
                  <button
                    className={` rounded-[5px] border-[1px] border-[#da6468] py-2 font-bold hover:bg-[#da6468] lg:px-10 `}
                  >
                    Add New
                  </button>
                </Link>
                <button
                  className={` rounded-[5px] border-[1px] border-[#da6468] py-2 font-bold hover:bg-[#da6468] lg:px-10  `}
                >
                  Bulk Delete
                </button>
              </div>
              <Btns />
            </div>
          </div>

          <div className="mt-[30px] grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="">
            <ViewMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
