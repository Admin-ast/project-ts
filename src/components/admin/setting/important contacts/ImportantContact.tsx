import React, { useState } from "react";
import ImportantContactCard from "./ImportantContactCard";

type Props = {};

const ImportantContact = (props: Props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };
  return (
    <div className="rounded-[15px] border-b-[7px] border-b-[#DC6563] ">
      <div className="  cursor-pointer p-10 shadow-xl" onClick={toggleForm}>
        <div className="m-auto h-[82px] w-[82px] rounded-[100%] bg-[#e2cb85] py-4">
          <img
            src="/assets/admin/settings/book.svg"
            alt="Card Image"
            className="  mx-auto mb-8 "
          />

          <p className=" flex items-center justify-center whitespace-nowrap font-bold ">
            Important Contacts
          </p>
        </div>
      </div>

      {showForm && <ImportantContactCard onClose={toggleForm} />}
    </div>
  );
};

export default ImportantContact;
