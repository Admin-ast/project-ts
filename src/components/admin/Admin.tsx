import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Table from "./Table";

const Admin = () => {
  return (
    <div className=" lg:flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <Card />
        <Table />
      </div>
    </div>
  );
};

export default Admin;
