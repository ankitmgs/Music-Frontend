import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../artist/Header";
import SliderArtist from "./SliderArtist";

const index = () => {
  return (
    <div>
      <SliderArtist />
      <Header />
      <Outlet />
    </div>
  );
};

export default index;
