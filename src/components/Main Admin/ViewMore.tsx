import React from "react";

type Props = {};

const ViewMore = (props: Props) => {
  return (
    <div className="mt-[45px] flex items-center justify-center">
      <button
        className="font-[ Roboto] rounded-[5px] bg-[#de5a51]
py-2 px-5 text-[16px] font-bold text-white "
      >
        View More
      </button>
    </div>
  );
};

export default ViewMore;
