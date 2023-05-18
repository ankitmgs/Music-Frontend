import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../user/Header";
import SliderUser from "./SliderUser";

const User = () => {
  return (
    <div>
      <SliderUser />
      <Header />
      <Outlet />
    </div>
  );
};

export default User;
