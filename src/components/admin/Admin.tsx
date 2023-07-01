import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Table from "./Table";
import TimeTable from "./TimeTable";

const Admin = () => {
  return (
    <div className=" lg:flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <Card />
        <Table />
        <TimeTable />
      </div>
    </div>
  );
};

export default Admin;
