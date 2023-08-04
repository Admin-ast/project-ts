import React from "react";
import Sidebar from "../../dashboard/Sidebar";
import Form from "./Form";
import Table from "./Table";

type Props = {};

const Attributes = (props: Props) => {
  return (
    <div>
      <div
        className="h-[78px]
   w-full bg-[#d12627cc]"
      ></div>

      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>

        <div className="min-h-screen px-10 lg:w-3/4">
          <div className="font-[Roboto]">
            <div className="mt-20">
              <p className="text-[20px] font-bold ">Attributes</p>
            </div>
            <div className="gap-5  lg:flex">
              <Form />
              <Table
                name="Select Consultation
Session"
                order="Custom ordering"
                slug="Consultation_session"
                terms="Custom ordering"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
