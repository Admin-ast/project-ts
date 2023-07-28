import React from "react";
import AstrosevaTalkHistorycard from "./AstrosevaTalkHistorycard";
import Sidebar from "../Sidebar";

type Props = {};

const AstrosevaTalkHistory = (props: Props) => {
  return (
    <div className="lg:flex ">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
      <div className="min-h-screen lg:w-3/4">
        <div className="flex items-center justify-center">
          {" "}
          <span className="mt-[45px] rounded-[43px] bg-[#CF2927] px-16 py-4 text-xl font-bold text-white lg:px-[300px]">
            AstrosevaTalk History
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
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
      </div>
    </div>
  );
};

export default AstrosevaTalkHistory;
