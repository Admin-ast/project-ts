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
        <div className="min-h-screen px-10 lg:w-3/4">
          <div className="flex gap-10">
            <div className="mt-16 flex items-center justify-center gap-4">
              <p className="text-[20px] font-bold">AstrosevaTalk Mall</p>
            </div>

            <div className="flex gap-5">
              <Link
                href="/admin/astrosevatalkmall/allproducts"
                className=" mt-16 rounded-[10px] py-2 font-bold lg:px-10"
              >
                All
              </Link>
              <CommonBtns className="rounded-[10px] border-[1px] border-[#DA6468] py-2 lg:px-10" />
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
