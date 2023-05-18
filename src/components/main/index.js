import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MusicPlayer from "./MusicPlayer";
import SliderMain from "./SliderMain";

const Main = ({ selMusic, setSelMusic }) => {
  return (
    <div>
      <SliderMain />
      <Header />
      <Outlet />
      <MusicPlayer selMusic={selMusic} />
    </div>
  );
};

export default Main;
