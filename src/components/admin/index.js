import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./Header";
import SliderAdmin from "./SliderAdmin";

const Admin = () => {
  return (
    <div>
      <SliderAdmin />
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default Admin;
