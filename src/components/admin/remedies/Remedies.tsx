import React from "react";
import HistoryCard from "../HistoryCard";
import Sidebar from "../Sidebar";
import RemediesCard from "./RemediesCard";

type Props = {};

const Remedies = (props: Props) => {
  return (
    <div className="">
      <div
        className="h-[78px]
     w-full bg-gradient-to-b  from-[#ee6522cc] to-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="mt-[45px] text-center lg:w-3/4">
          {" "}
          <span className="mt-[45px]  rounded-[43px] bg-[#DC6563] px-16 py-4 text-xl font-bold text-white">
            SUGGESTED REMEDIES
          </span>
          <div className="mt-[30px] grid gap-[45px] px-5 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </div>
    </div>
  );
};

export default Remedies;
