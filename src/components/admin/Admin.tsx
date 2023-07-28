import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Table from "./Table";
import TimeTable from "./TimeTable";

import MultipleWork from "./MultipleWork";

const Admin = () => {
  return (
    <div className="lg:flex ">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
      <div className="lg:w-3/4">
        <Card />
        <Table />
        <TimeTable />
        <MultipleWork />
      </div>
    </div>
  );
};

export default Admin;
