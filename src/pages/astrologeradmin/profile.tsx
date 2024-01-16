import Sidebar from "@/components/admin/Sidebar";
import AstroInfo from "@/components/admin/profile/AstroInfo";
import ProfileForm from "@/components/admin/profile/ProfileForm";
import Refral from "@/components/admin/profile/Refral";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="h-screen  overflow-hidden bg-[url('/assets/horoscope-bg.webp')]">
      <div className="h-full overflow-y-auto">
        <div
          className="from-0%
       to-68% h-[78px] w-full bg-gradient-to-b  from-[#ee6522cc] to-[#d12627cc]"
        ></div>
        <div className="lg:flex">
          <div className="lg:w-1/4">
            {" "}
            <Sidebar />
          </div>
          <div className="mt-[45px] lg:w-3/4">
            <div className="flex items-center justify-center ">
              <p className="flex items-center justify-center rounded-[43px] bg-[#dc6563] px-16  py-2 text-[24px] font-bold text-white">
                Profile Setting
              </p>
            </div>
            <AstroInfo
              name="Priya Singh"
              id="1139"
              email="impriyahere@gmail.com"
            />
            <Refral code="MTE2NTQ=" />
            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
