import React from "react";

type Props = {};

const LogoutFromAllDevicesBtn = (props: Props) => {
  return (
    <div className="mt-10 text-center text-white">
      <div className="">
        <button className="rounded-[5px] bg-[#ff2c19] px-5 py-1">
          Clear Data & Logout
        </button>
      </div>
      <div className="">
        <button className="mt-4 rounded-[5px] bg-[#ff2c19] px-5 py-1">
          Clear Data & Logout from all Devices
        </button>
      </div>
    </div>
  );
};

export default LogoutFromAllDevicesBtn;
